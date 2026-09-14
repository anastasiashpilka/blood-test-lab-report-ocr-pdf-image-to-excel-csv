"""
One-time setup script: generates public/template.xlsx, the starter workbook
for the "Export to Pro Health Dashboard" feature.

WHY THIS IS A PYTHON SCRIPT IN A NODE PROJECT:
No free, actively-maintained JavaScript library can reliably write *native*
(live, editable) Excel chart objects — this was verified directly this
session: exceljs crashes just trying to *load* a file containing a chart,
and no other free JS library fills the gap. openpyxl (Python) genuinely
supports this. So: this script runs ONCE, offline, to produce the template
file. The actual app (lib/exportProDashboard.js) only ever *injects data*
into this pre-built template at runtime, via xlsx-populate, which was
verified to preserve existing charts correctly on save. Nothing in the
running app depends on Python — this script isn't part of the build.

USAGE (run once, or whenever you want to redesign the template):
    python3 -m venv venv && source venv/bin/activate
    pip install openpyxl
    python3 scripts/generate_dashboard_template.py

This must stay in sync with TEMPLATE_BIOMARKER_COLUMNS in
lib/proDashboardTemplate.js — same columns, same order, same start row.
If you add a biomarker column here, add it there too (and vice versa).
"""

import re
import shutil
import zipfile

from openpyxl import Workbook
from openpyxl.chart import LineChart, Reference
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter

# --- Must match TEMPLATE_BIOMARKER_COLUMNS in lib/proDashboardTemplate.js ---
BIOMARKER_COLUMNS = [
    ("B", "Glucose (mg/dL)"),
    ("C", "Total Cholesterol (mg/dL)"),
    ("D", "LDL Cholesterol (mg/dL)"),
    ("E", "HDL Cholesterol (mg/dL)"),
    ("F", "Triglycerides (mg/dL)"),
    ("G", "Hemoglobin A1c (%)"),
    ("H", "TSH (uIU/mL)"),
    ("I", "Creatinine (mg/dL)"),
    ("J", "Hemoglobin (g/dL)"),
    ("K", "WBC (x10^3/uL)"),
]
DATA_START_ROW = 2      # row 1 is headers
DATA_MAX_ROW = 52       # generous — 50 visits' worth of history before the chart range needs resizing
CHARTED_BIOMARKERS = ["Glucose (mg/dL)", "Total Cholesterol (mg/dL)", "TSH (uIU/mL)", "Hemoglobin (g/dL)"]

BRAND_INDIGO = "4F46E5"

wb = Workbook()

# --- "Data" sheet: what the app injects into ---
data = wb.active
data.title = "Data"
header_font = Font(bold=True, color="FFFFFF")
header_fill = PatternFill("solid", fgColor=BRAND_INDIGO)

data["A1"] = "Date"
data["A1"].font = header_font
data["A1"].fill = header_fill
data.column_dimensions["A"].width = 14

for col, label in BIOMARKER_COLUMNS:
    cell = data[f"{col}1"]
    cell.value = label
    cell.font = header_font
    cell.fill = header_fill
    data.column_dimensions[col].width = 20

data.freeze_panes = "B2"

# --- "Dashboard" sheet: pre-built charts, bound to the Data sheet's ranges ---
dash = wb.create_sheet("Dashboard")
dash["A1"] = "Health Dashboard"
dash["A1"].font = Font(bold=True, size=18, color=BRAND_INDIGO)

chart_col = 1  # 'A'
chart_row = 3
for label in CHARTED_BIOMARKERS:
    col = next(c for c, l in BIOMARKER_COLUMNS if l == label)
    col_idx = ord(col) - ord("A") + 1

    chart = LineChart()
    chart.title = label
    chart.height = 8
    chart.width = 16
    chart.style = 2
    # A single-series chart doesn't need a legend repeating the title.
    chart.legend = None
    chart.y_axis.title = "Value"
    chart.x_axis.title = "Date"

    cats = Reference(data, min_col=1, min_row=DATA_START_ROW, max_row=DATA_MAX_ROW)
    vals = Reference(data, min_col=col_idx, min_row=1, max_row=DATA_MAX_ROW)  # row 1 = series title
    chart.add_data(vals, titles_from_data=True)
    chart.set_categories(cats)

    series = chart.series[0]
    series.smooth = False  # discrete lab results — a smoothed curve implies values between visits that don't exist
    series.graphicalProperties.line.solidFill = BRAND_INDIGO
    series.graphicalProperties.line.width = 20000  # EMUs; a bit bolder than the 1pt default
    series.marker.symbol = "circle"
    series.marker.size = 6
    series.marker.graphicalProperties.solidFill = BRAND_INDIGO
    series.marker.graphicalProperties.line.solidFill = BRAND_INDIGO

    anchor = f"{get_column_letter(chart_col)}{chart_row}"
    dash.add_chart(chart, anchor)
    chart_row += 17  # stack charts vertically with spacing

wb.save("public/template.xlsx")


def fix_app_xml_chart_bug(path):
    """
    Known openpyxl bug (present through at least 3.1.5, unfixed upstream as
    of this writing): it writes docProps/app.xml with
    Application = "Microsoft Excel Compatible / Openpyxl X.Y.Z" — that exact
    string makes Excel refuse to render any embedded chart at all, and
    Google Sheets' importer has the same failure (confirmed directly:
    the charts showed Google's "Add a series to start visualizing data"
    empty-chart placeholder instead of the actual data). Real Excel-authored
    files just say "Microsoft Excel" here, so we rewrite it to match after
    every generation, rather than depend on whichever openpyxl version
    happens to be installed having fixed this upstream.
    """
    tmp_path = path + ".tmp"
    with zipfile.ZipFile(path, "r") as zin, zipfile.ZipFile(tmp_path, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename == "docProps/app.xml":
                data = re.sub(
                    rb"<Application>.*?</Application>",
                    b"<Application>Microsoft Excel</Application>",
                    data,
                )
            zout.writestr(item, data)
    shutil.move(tmp_path, path)


fix_app_xml_chart_bug("public/template.xlsx")
print("Wrote public/template.xlsx (patched app.xml chart-rendering bug)")
