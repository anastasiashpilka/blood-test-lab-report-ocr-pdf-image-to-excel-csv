// Programmatic SEO landing pages targeting specific labs / test panels.
// Mirrors the shape of lib/biomarkers-data.js so these can be wired into a
// dynamic route (e.g. pages/convert/[slug].js) with getStaticPaths/Props,
// the same pattern already used for pages/biomarkers/[id].js.
//
// `widgetPlacement: 'after-h1'` marks where <FileUploaderWidget /> should be
// rendered — immediately below the H1, above the body copy.
//
// The body is split into three parts so the "how to convert" steps can
// render through components/HowItWorksSteps.js — the same step-card
// component the homepage uses — instead of a plain <ol> buried in prose.
// This is what keeps the /convert pages visually consistent with the
// homepage, not just similarly-styled by coincidence:
//   bodyIntroHtml -> stepsTitle + steps[] (via HowItWorksSteps) -> bodyOutroHtml
//
// `legalDisclaimer` must render on every page. It exists specifically to
// keep these pages on the "utility tool" side of Google's YMYL line: no page
// here interprets a result, flags it as high/low, or gives health guidance.

const seoLandingPagesData = [
  // ---------------------------------------------------------------------
  // US MARKET (locale: en)
  // ---------------------------------------------------------------------
  {
    slug: 'labcorp-pdf-to-excel',
    market: 'US',
    locale: 'en',
    targetEntity: 'Labcorp',
    entityType: 'lab',
    seoTitle: 'Convert Labcorp PDF Results to Excel or CSV (Free) | Online Blood Test Converter',
    metaDescription:
      "Turn your Labcorp lab report PDF into a clean Excel or CSV table in seconds. No copy-paste, no broken columns — just upload and download.",
    h1: 'Convert Your Labcorp PDF Results to Excel in Seconds',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>If you've ever tried to copy a result table straight out of a Labcorp PDF, you already know what happens: every row lands in a single cell, headers separate from their values, and reference ranges end up glued to the wrong number. Labcorp reports are built for printing, not for spreadsheets — the text is positioned visually on the page rather than stored as rows and columns, so a PDF reader (or a copy-paste into Excel) has no real way to know which number belongs to which test.</p>
      <h2>Why copy-pasting breaks the table</h2>
      <p>PDF files store text as individual positioned characters, not as structured data. When you select and copy a results table, your browser or PDF viewer just grabs the visible text in reading order — left to right, top to bottom — and loses the column structure entirely. That's why pasting into Excel gives you one long column of jumbled text instead of a usable table.</p>
    `,
    stepsTitle: 'How to convert a Labcorp PDF in 3 steps',
    steps: [
      { title: 'Upload your file', description: 'Drag and drop your Labcorp PDF (or a scanned photo of it) into the widget above.' },
      { title: 'Let the converter read it', description: 'The tool detects the test names, results, units, and reference ranges, and rebuilds them as a proper table — this usually takes a few seconds.' },
      { title: 'Review and export', description: 'Check the extracted table against your original PDF, make any manual corrections if needed, then copy it or download it as an Excel/CSV file.' },
    ],
    bodyOutroHtml: `
      <p>This is useful for keeping a personal spreadsheet of your results over time, sharing a clean file with a family member or a healthcare provider outside the Labcorp portal, or simply having your data in a format you can sort, filter, or chart yourself.</p>
    `,
    keyMetricsTitle: 'Common Labcorp panel results this tool structures into a table',
    keyMetrics: [
      { name: 'Glucose', unit: 'mg/dL' },
      { name: 'Total Cholesterol', unit: 'mg/dL' },
      { name: 'Hemoglobin A1c', unit: '%' },
      { name: 'TSH', unit: 'µIU/mL' },
      { name: 'Creatinine', unit: 'mg/dL' },
      { name: 'White Blood Cell Count (WBC)', unit: 'x10³/µL' },
    ],
    legalDisclaimer:
      "This tool only reformats your lab report into a table for your own records — it does not interpret, flag, or explain what any result means. Labcorp is mentioned only to describe the report layout this tool supports and is not affiliated with or endorsed by Labcorp. Always review your results with a licensed healthcare provider.",
  },

  {
    slug: 'quest-diagnostics-pdf-to-excel',
    market: 'US',
    locale: 'en',
    targetEntity: 'Quest Diagnostics',
    entityType: 'lab',
    seoTitle: 'Convert Quest Diagnostics PDF to Excel or CSV Free | Online Blood Test Converter',
    metaDescription:
      'Export your Quest Diagnostics lab results from PDF to a clean Excel spreadsheet in seconds. Free online tool, no installation required.',
    h1: 'Convert Quest Diagnostics Lab Results to Excel',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>Quest Diagnostics reports are dense: multiple panels stacked on one page, footnote markers next to flagged values, and a layout that's easy to read but hard to reuse. Selecting a table in a PDF viewer and pasting it into Excel usually produces one messy column where test names, results, units, and reference ranges are all mashed together — you end up retyping the whole thing by hand.</p>
      <h2>Why standard copy-paste doesn't work</h2>
      <p>A PDF has no concept of "columns" the way a spreadsheet does. It only knows where each character sits on the printed page. When multiple panels are printed close together, as they often are on Quest reports, copy-paste can also interleave rows from different panels, making the problem worse rather than better.</p>
    `,
    stepsTitle: 'How to convert your Quest Diagnostics PDF',
    steps: [
      { title: 'Upload the PDF', description: 'Drop your Quest Diagnostics report (PDF, or a clear photo/scan) into the uploader above.' },
      { title: 'Automatic table extraction', description: 'The converter identifies each test, its result, unit, and reference range, and lines them up into proper rows and columns — typically in a few seconds.' },
      { title: 'Check and download', description: 'Compare the output to your original report, edit any cell directly in the browser if something needs a tweak, then export to Excel or CSV.' },
    ],
    bodyOutroHtml: `
      <p>The result is a spreadsheet you can actually use: sort by test name, track values across multiple visits, or hand a clean file to a family member, coach, or provider outside the Quest patient portal — without retyping a single number.</p>
    `,
    keyMetricsTitle: 'Common Quest Diagnostics panel results this tool structures into a table',
    keyMetrics: [
      { name: 'Hemoglobin', unit: 'g/dL' },
      { name: 'LDL Cholesterol', unit: 'mg/dL' },
      { name: 'HDL Cholesterol', unit: 'mg/dL' },
      { name: 'Triglycerides', unit: 'mg/dL' },
      { name: 'Vitamin D, 25-Hydroxy', unit: 'ng/mL' },
      { name: 'Platelet Count', unit: 'x10³/µL' },
    ],
    legalDisclaimer:
      "This tool only reformats your lab report into a table for your own records — it does not interpret, flag, or explain what any result means. Quest Diagnostics is mentioned only to describe the report layout this tool supports and is not affiliated with or endorsed by Quest Diagnostics. Always review your results with a licensed healthcare provider.",
  },

  {
    slug: 'mayo-clinic-lab-results-to-excel',
    market: 'US',
    locale: 'en',
    targetEntity: 'Mayo Clinic Laboratories',
    entityType: 'lab',
    seoTitle: 'Convert Mayo Clinic Lab Results PDF to Excel | Online Blood Test Converter',
    metaDescription:
      'Turn a Mayo Clinic Laboratories PDF report into an editable Excel or CSV table in seconds — free, no software to install.',
    h1: 'Convert Mayo Clinic Lab Results to an Excel Table',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>Mayo Clinic Laboratories reports are thorough — which is great for completeness, but it means longer tables spanning multiple pages, with narrative comments interspersed between results. Copying that directly into Excel usually merges results, comments, and reference ranges into one unreadable block of text, and page breaks can duplicate or drop rows entirely.</p>
      <h2>Why the formatting breaks when you copy-paste</h2>
      <p>PDFs store a page as positioned text and graphics, not as a data table. Your PDF viewer copies whatever text falls inside your selection box in the order it was drawn on the page — it has no idea that "Result" and "Reference Range" are supposed to stay in separate columns. Multi-page reports make this worse, since each page resets the layout.</p>
    `,
    stepsTitle: 'How to convert your Mayo Clinic PDF in 3 steps',
    steps: [
      { title: 'Upload your report', description: 'Add your Mayo Clinic Laboratories PDF, or a photo/scan of a printed copy, to the widget above.' },
      { title: 'Automatic extraction', description: 'The tool reads each test name, value, unit, and reference range across every page of the report and reconstructs them as one clean table.' },
      { title: 'Review, edit, export', description: 'Double-check the table against your original document, adjust any cell inline if needed, and download it as Excel or CSV.' },
    ],
    bodyOutroHtml: `
      <p>This gives you a portable, spreadsheet-native copy of your results — useful for personal tracking over time, combining results from different visits into one file, or sharing a clean table with someone outside the Mayo Clinic patient portal.</p>
    `,
    keyMetricsTitle: 'Common Mayo Clinic Laboratories results this tool structures into a table',
    keyMetrics: [
      { name: 'Comprehensive Metabolic Panel — Sodium', unit: 'mmol/L' },
      { name: 'Comprehensive Metabolic Panel — Potassium', unit: 'mmol/L' },
      { name: 'ALT', unit: 'U/L' },
      { name: 'AST', unit: 'U/L' },
      { name: 'TSH', unit: 'µIU/mL' },
      { name: 'Ferritin', unit: 'ng/mL' },
    ],
    legalDisclaimer:
      "This tool only reformats your lab report into a table for your own records — it does not interpret, flag, or explain what any result means. Mayo Clinic is mentioned only to describe the report layout this tool supports and is not affiliated with or endorsed by Mayo Clinic. Always review your results with a licensed healthcare provider.",
  },

  {
    slug: 'cbc-blood-test-results-to-excel',
    market: 'US',
    locale: 'en',
    targetEntity: 'Complete Blood Count (CBC)',
    entityType: 'panel',
    seoTitle: 'Convert a CBC (Complete Blood Count) PDF to Excel | Free Online Tool',
    metaDescription:
      'Export your Complete Blood Count (CBC) results from any lab PDF into a structured Excel or CSV table in seconds — no manual retyping.',
    h1: 'Convert Your CBC (Complete Blood Count) Results to Excel',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>A Complete Blood Count is one of the most commonly ordered tests, and nearly every lab formats it slightly differently — but the copy-paste problem is the same everywhere. CBC reports pack ten or more values (red cells, white cells, platelets, and their sub-measurements) into a tight table, and pasting that into a spreadsheet almost always scrambles the column alignment.</p>
      <h2>Why your CBC table falls apart when pasted into Excel</h2>
      <p>PDF and image-based reports encode text by position on the page, not by row and column relationships. A CBC panel's tight spacing — short test names next to short numeric values — makes it especially easy for a plain copy-paste to merge two columns into one or split a single row across two lines.</p>
    `,
    stepsTitle: 'How to convert a CBC PDF or photo in 3 steps',
    steps: [
      { title: 'Upload your CBC report', description: 'Works with a PDF from any lab, or a clear photo/scan of a printed page — drop it into the widget above.' },
      { title: 'Automatic table reconstruction', description: 'The tool identifies each CBC component, its value, unit, and reference range, and lays them out as proper rows and columns.' },
      { title: 'Review and export', description: 'Confirm the table matches your original report, correct any cell by hand if needed, then copy it or download it as Excel or CSV.' },
    ],
    bodyOutroHtml: `
      <p>Because CBCs are typically repeated over time — annual physicals, follow-ups, monitoring — having each one in a consistent spreadsheet format makes it far easier to keep a personal history file, whichever lab performed the test.</p>
    `,
    keyMetricsTitle: 'CBC components this tool structures into a table',
    keyMetrics: [
      { name: 'Red Blood Cell Count (RBC)', unit: 'x10⁶/µL' },
      { name: 'White Blood Cell Count (WBC)', unit: 'x10³/µL' },
      { name: 'Hemoglobin', unit: 'g/dL' },
      { name: 'Hematocrit', unit: '%' },
      { name: 'Platelet Count', unit: 'x10³/µL' },
      { name: 'Mean Corpuscular Volume (MCV)', unit: 'fL' },
    ],
    legalDisclaimer:
      "This tool only reformats your lab report into a table for your own records — it does not interpret, flag, or explain what any result means. It works with CBC reports from any laboratory. Always review your results with a licensed healthcare provider.",
  },

  {
    slug: 'lipid-panel-results-to-excel',
    market: 'US',
    locale: 'en',
    targetEntity: 'Lipid Panel',
    entityType: 'panel',
    seoTitle: 'Convert Lipid Panel (Cholesterol) Results PDF to Excel | Free Tool',
    metaDescription:
      'Turn your lipid panel or cholesterol test PDF into a clean Excel or CSV table in seconds. Works with reports from any lab.',
    h1: 'Convert Your Lipid Panel Results to Excel',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>A lipid panel — total cholesterol, LDL, HDL, and triglycerides — is short, but that doesn't make it easy to copy out of a PDF cleanly. Many lab templates add a calculated ratio or a footnote right next to one of the values, and a plain copy-paste will often merge that extra text into the number itself, or drop the unit column entirely.</p>
      <h2>Why copy-paste distorts even a short table</h2>
      <p>PDFs don't store "table" as a structural element — they store positioned text and lines. A copy-paste operation reads that text in the order it appears on the page, so if a footnote symbol or a units label sits close to a value, it often gets pulled into the same cell, breaking the row when you try to work with it in a spreadsheet.</p>
    `,
    stepsTitle: 'How to convert your lipid panel PDF in 3 steps',
    steps: [
      { title: 'Upload your report', description: 'Add the PDF (or a photo/scan) of your lipid panel or full metabolic report to the widget above.' },
      { title: 'Automatic extraction', description: 'The tool isolates the cholesterol-related results, their values, units, and reference ranges, and arranges them into a clean table.' },
      { title: 'Review and export', description: 'Verify the table against your original report, adjust any cell if needed, then copy it or download it as Excel or CSV.' },
    ],
    bodyOutroHtml: `
      <p>Because cholesterol is usually tracked across repeat visits, having each lipid panel in the same spreadsheet format — regardless of which lab performed it — makes it much easier to keep a consistent personal record over time.</p>
    `,
    keyMetricsTitle: 'Lipid panel results this tool structures into a table',
    keyMetrics: [
      { name: 'Total Cholesterol', unit: 'mg/dL' },
      { name: 'LDL Cholesterol', unit: 'mg/dL' },
      { name: 'HDL Cholesterol', unit: 'mg/dL' },
      { name: 'Triglycerides', unit: 'mg/dL' },
      { name: 'Non-HDL Cholesterol', unit: 'mg/dL' },
    ],
    legalDisclaimer:
      "This tool only reformats your lab report into a table for your own records — it does not interpret, flag, or explain what any result means. It works with lipid panel reports from any laboratory. Always review your results with a licensed healthcare provider.",
  },

  // ---------------------------------------------------------------------
  // UKRAINIAN MARKET (locale: uk)
  // ---------------------------------------------------------------------
  {
    slug: 'sinevo-analizy-v-excel',
    market: 'UA',
    locale: 'uk',
    targetEntity: 'Сінево (Synevo)',
    entityType: 'lab',
    seoTitle: 'Перенести результати аналізів Сінево в Excel онлайн безкоштовно',
    metaDescription:
      'Перетворіть PDF з результатами аналізів Сінево на охайну таблицю Excel або CSV за кілька секунд. Без ручного перенабору даних.',
    h1: 'Як перенести результати аналізів Сінево в Excel-таблицю',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>Якщо ви колись пробували скопіювати таблицю результатів прямо з PDF-файлу Сінево, то знаєте, що виходить: усі рядки злипаються в один стовпець, назви показників відриваються від значень, а референтні межі "прилипають" не до того числа. PDF-звіти створені для друку, а не для таблиць — текст розташований на сторінці візуально, а не збережений як рядки й колонки, тому програма для копіювання просто не знає, яке число до якого показника належить.</p>
      <h2>Чому звичайне копіювання ламає таблицю</h2>
      <p>PDF-файл зберігає текст як окремі символи з координатами на сторінці, а не як структуровані дані. Коли ви виділяєте й копіюєте таблицю результатів, браузер або PDF-переглядач бере лише видимий текст у порядку читання — зліва направо, зверху вниз — і повністю втрачає структуру колонок. Тому вставка в Excel дає один довгий стовпець плутанини замість зручної таблиці.</p>
    `,
    stepsTitle: 'Як перенести PDF Сінево в Excel за 3 кроки',
    steps: [
      { title: 'Завантажте файл', description: 'Перетягніть свій PDF від Сінево (або чітке фото/скан бланка) у віджет вище.' },
      { title: 'Автоматичне розпізнавання', description: 'Сервіс визначає назви показників, результати, одиниці виміру та референтні межі й вибудовує їх у справжню таблицю — зазвичай за кілька секунд.' },
      { title: 'Перевірте та завантажте', description: 'Порівняйте отриману таблицю з оригіналом бланка, за потреби виправте будь-яку клітинку вручну, а тоді скопіюйте таблицю або завантажте як файл Excel чи CSV.' },
    ],
    bodyOutroHtml: `
      <p>Це зручно для ведення власної таблиці результатів у часі, для передачі охайного файлу родині чи лікарю поза особистим кабінетом Сінево, або просто щоб мати дані у форматі, який можна сортувати й фільтрувати самостійно.</p>
    `,
    keyMetricsTitle: 'Поширені показники Сінево, які сервіс перетворює на таблицю',
    keyMetrics: [
      { name: 'Гемоглобін', unit: 'г/л' },
      { name: 'Глюкоза', unit: 'ммоль/л' },
      { name: 'Загальний холестерин', unit: 'ммоль/л' },
      { name: 'Креатинін', unit: 'мкмоль/л' },
      { name: 'ТТГ (тиреотропний гормон)', unit: 'мкМО/мл' },
      { name: 'Лейкоцити (WBC)', unit: '10⁹/л' },
    ],
    legalDisclaimer:
      'Цей сервіс лише переформатовує ваш бланк результатів у таблицю для особистого використання — він не інтерпретує показники, не позначає відхилення та не дає медичних порад. Назва "Сінево" згадується виключно для опису формату бланка, який підтримує сервіс, і не означає партнерства з лабораторією "Сінево". Обговорюйте свої результати з лікарем.',
  },

  {
    slug: 'dila-analizy-v-tablytsyu',
    market: 'UA',
    locale: 'uk',
    targetEntity: 'Діла (Dila)',
    entityType: 'lab',
    seoTitle: 'Перенести результати аналізів Діла в Excel-таблицю безкоштовно',
    metaDescription:
      'Конвертуйте PDF-звіт з лабораторії Діла у структуровану таблицю Excel або CSV за кілька секунд. Онлайн, без встановлення програм.',
    h1: 'Перенесення результатів аналізів Діла в Excel',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>Бланки лабораторії Діла зазвичай містять кілька панелей аналізів на одній сторінці з позначками відхилень поруч зі значеннями — зручно для читання, але незручно для копіювання. Виділення таблиці в PDF і вставка в Excel зазвичай перетворює назви показників, результати й одиниці виміру на один суцільний нечитабельний блок тексту.</p>
      <h2>Чому форматування ламається при копіюванні</h2>
      <p>PDF не має поняття "колонка" в тому сенсі, у якому його має електронна таблиця — файл лише знає, де саме на сторінці розташований кожен символ. Коли кілька панелей аналізів надруковані близько одна до одної, як часто буває на бланках Діли, копіювання може ще й переплутати рядки різних панелей між собою.</p>
    `,
    stepsTitle: 'Як перенести PDF Діли в таблицю за 3 кроки',
    steps: [
      { title: 'Завантажте бланк', description: "Додайте свій PDF-файл з Діли (або фото/скан) у віджет вище." },
      { title: 'Автоматичне розпізнавання таблиці', description: 'Сервіс визначає кожен показник, його результат, одиницю виміру та референтну межу і вибудовує їх у правильні рядки й колонки.' },
      { title: 'Перевірте та збережіть', description: "Звірте результат з оригінальним бланком, за потреби відредагуйте будь-яку клітинку прямо в браузері, після чого експортуйте у формат Excel або CSV." },
    ],
    bodyOutroHtml: `
      <p>У результаті ви отримуєте таблицю, якою справді зручно користуватися: сортувати за назвою показника, відстежувати зміни між кількома візитами або передати охайний файл рідним чи лікарю поза особистим кабінетом Діли — без переписування жодної цифри вручну.</p>
    `,
    keyMetricsTitle: 'Поширені показники Діли, які сервіс перетворює на таблицю',
    keyMetrics: [
      { name: 'Еритроцити (RBC)', unit: '10¹²/л' },
      { name: 'Загальний білок', unit: 'г/л' },
      { name: 'АЛТ', unit: 'Од/л' },
      { name: 'АСТ', unit: 'Од/л' },
      { name: 'Вітамін D (25-OH)', unit: 'нг/мл' },
      { name: 'Тромбоцити', unit: '10⁹/л' },
    ],
    legalDisclaimer:
      'Цей сервіс лише переформатовує ваш бланк результатів у таблицю для особистого використання — він не інтерпретує показники, не позначає відхилення та не дає медичних порад. Назва "Діла" згадується виключно для опису формату бланка, який підтримує сервіс, і не означає партнерства з лабораторією "Діла". Обговорюйте свої результати з лікарем.',
  },

  {
    slug: 'eskulab-rezultaty-v-excel',
    market: 'UA',
    locale: 'uk',
    targetEntity: 'Ескулаб (Eskulab)',
    entityType: 'lab',
    seoTitle: 'Перенести результати аналізів Ескулаб в Excel онлайн',
    metaDescription:
      'Перетворіть PDF-звіт лабораторії Ескулаб на охайну таблицю Excel або CSV за кілька секунд, без ручного перенабору.',
    h1: 'Як перенести результати аналізів Ескулаб в Excel-таблицю',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>Бланки Ескулаб, як і в більшості лабораторій, друкуються у форматі, зручному для ока, але не для електронної таблиці: назви показників, значення, одиниці виміру та референтні межі розташовані рядками, що добре виглядають на папері, проте розсипаються при спробі скопіювати їх у Excel.</p>
      <h2>Чому копіювання з PDF псує таблицю</h2>
      <p>PDF-документ зберігає текст як окремі символи з координатами на сторінці, а не як пов'язані рядки й колонки. Коли ви копіюєте таку таблицю, програма бере текст у порядку його розташування на сторінці — і два сусідні стовпці (наприклад, "Результат" і "Норма") легко зливаються в один при вставці.</p>
    `,
    stepsTitle: 'Як перенести PDF Ескулаб у таблицю за 3 кроки',
    steps: [
      { title: 'Завантажте PDF', description: 'Перетягніть файл результатів Ескулаб (або фото чи скан бланка) у віджет вище.' },
      { title: 'Автоматична обробка', description: 'Сервіс розпізнає кожен показник разом із результатом, одиницею виміру та референтною межею і вибудовує охайну таблицю — зазвичай за кілька секунд.' },
      { title: 'Перевірте й експортуйте', description: 'Порівняйте таблицю з оригіналом, виправте вручну будь-яку клітинку за потреби та завантажте файл у форматі Excel або CSV.' },
    ],
    bodyOutroHtml: `
      <p>Такий підхід зручний, коли потрібно вести особисту таблицю результатів у динаміці, об'єднати аналізи з кількох візитів в один файл або передати охайні дані родині чи лікарю поза особистим кабінетом лабораторії.</p>
    `,
    keyMetricsTitle: 'Поширені показники Ескулаб, які сервіс перетворює на таблицю',
    keyMetrics: [
      { name: 'Глюкоза', unit: 'ммоль/л' },
      { name: 'Сечовина', unit: 'ммоль/л' },
      { name: 'Загальний білірубін', unit: 'мкмоль/л' },
      { name: 'Холестерин ЛПНЩ (LDL)', unit: 'ммоль/л' },
      { name: 'Феритин', unit: 'нг/мл' },
      { name: 'Гематокрит', unit: '%' },
    ],
    legalDisclaimer:
      'Цей сервіс лише переформатовує ваш бланк результатів у таблицю для особистого використання — він не інтерпретує показники, не позначає відхилення та не дає медичних порад. Назва "Ескулаб" згадується виключно для опису формату бланка, який підтримує сервіс, і не означає партнерства з лабораторією "Ескулаб". Обговорюйте свої результати з лікарем.',
  },

  {
    slug: 'zagalnyi-analiz-krovi-v-excel',
    market: 'UA',
    locale: 'uk',
    targetEntity: 'Загальний аналіз крові (CBC)',
    entityType: 'panel',
    seoTitle: 'Перенести загальний аналіз крові з PDF в Excel безкоштовно',
    metaDescription:
      'Конвертуйте результати загального аналізу крові з будь-якої лабораторії у структуровану таблицю Excel або CSV за кілька секунд.',
    h1: 'Перенесення загального аналізу крові в Excel-таблицю',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>Загальний аналіз крові — один з найчастіше призначуваних аналізів, і майже кожна лабораторія оформлює бланк трохи по-своєму, але проблема з копіюванням однакова всюди. У такому бланку зазвичай десять і більше показників (еритроцити, лейкоцити, тромбоцити та їхні похідні) розташовані у щільній таблиці, і вставка в електронну таблицю майже завжди зміщує колонки.</p>
      <h2>Чому таблиця розсипається при вставці в Excel</h2>
      <p>PDF-файли та відскановані зображення зберігають текст за розташуванням на сторінці, а не за зв'язком рядок-колонка. Щільне розташування коротких назв показників поруч із короткими числовими значеннями — типове для загального аналізу крові — робить особливо ймовірним, що просте копіювання об'єднає дві колонки в одну або розірве один рядок на два.</p>
    `,
    stepsTitle: 'Як перенести бланк аналізу крові за 3 кроки',
    steps: [
      { title: 'Завантажте бланк', description: 'Підходить PDF з будь-якої лабораторії або чітке фото/скан друкованого бланка — додайте його у віджет вище.' },
      { title: 'Автоматична побудова таблиці', description: 'Сервіс визначає кожен показник загального аналізу крові, його значення, одиницю виміру та референтну межу і вибудовує їх у правильні рядки й колонки.' },
      { title: 'Перевірте та завантажте', description: 'Переконайтеся, що таблиця збігається з оригіналом бланка, за потреби виправте клітинку вручну, а тоді скопіюйте таблицю або завантажте як Excel чи CSV.' },
    ],
    bodyOutroHtml: `
      <p>Оскільки загальний аналіз крові зазвичай повторюють з часом — при профоглядах, контрольних візитах, спостереженні — маючи кожен результат в однаковому табличному форматі, значно легше вести особисту історію показників незалежно від того, яка лабораторія робила аналіз.</p>
    `,
    keyMetricsTitle: 'Показники загального аналізу крові, які сервіс перетворює на таблицю',
    keyMetrics: [
      { name: 'Еритроцити (RBC)', unit: '10¹²/л' },
      { name: 'Лейкоцити (WBC)', unit: '10⁹/л' },
      { name: 'Гемоглобін', unit: 'г/л' },
      { name: 'Гематокрит', unit: '%' },
      { name: 'Тромбоцити', unit: '10⁹/л' },
      { name: 'Швидкість осідання еритроцитів (ШОЕ)', unit: 'мм/год' },
    ],
    legalDisclaimer:
      'Цей сервіс лише переформатовує ваш бланк результатів у таблицю для особистого використання — він не інтерпретує показники, не позначає відхилення та не дає медичних порад. Сервіс працює з бланками загального аналізу крові з будь-якої лабораторії. Обговорюйте свої результати з лікарем.',
  },

  {
    slug: 'biohimichnyi-analiz-krovi-v-excel',
    market: 'UA',
    locale: 'uk',
    targetEntity: 'Біохімічний аналіз крові',
    entityType: 'panel',
    seoTitle: 'Перенести біохімічний аналіз крові з PDF в Excel безкоштовно',
    metaDescription:
      'Перетворіть результати біохімічного аналізу крові з будь-якого бланка на охайну таблицю Excel або CSV за кілька секунд.',
    h1: 'Перенесення біохімічного аналізу крові в Excel-таблицю',
    widgetPlacement: 'after-h1',
    bodyIntroHtml: `
      <p>Біохімічний аналіз крові — один з найбільших за обсягом бланків: десятки показників, кожен зі своєю одиницею виміру та референтною межею, часто розтягнуті на кілька сторінок. Спроба скопіювати таку таблицю в Excel зазвичай перемішує назви показників, результати та норми в один суцільний блок тексту, а розриви сторінок можуть дублювати або губити окремі рядки.</p>
      <h2>Чому форматування ламається при копіюванні</h2>
      <p>PDF зберігає сторінку як розташований у просторі текст і графіку, а не як таблицю даних. PDF-переглядач копіює той текст, що потрапив у виділену область, у порядку його розташування на сторінці — він не "знає", що колонки "Результат" і "Норма" мають залишатися окремими. У багатосторінкових бланках ця проблема лише посилюється, бо кожна сторінка починає розмітку заново.</p>
    `,
    stepsTitle: 'Як перенести бланк біохімії крові за 3 кроки',
    steps: [
      { title: 'Завантажте бланк', description: 'Додайте PDF-файл біохімічного аналізу (або фото/скан друкованого бланка) у віджет вище.' },
      { title: 'Автоматичне розпізнавання', description: 'Сервіс зчитує кожен показник, його значення, одиницю виміру та референтну межу з усіх сторінок бланка і збирає їх у єдину охайну таблицю.' },
      { title: 'Перевірте, відредагуйте, збережіть', description: 'Звірте таблицю з оригіналом документа, за потреби виправте будь-яку клітинку прямо в браузері, а тоді завантажте як Excel або CSV.' },
    ],
    bodyOutroHtml: `
      <p>Це дає портативну копію результатів у форматі електронної таблиці — зручно для особистого відстеження показників у часі, об'єднання аналізів з різних візитів в один файл, або передачі охайної таблиці родині чи лікарю поза кабінетом лабораторії.</p>
    `,
    keyMetricsTitle: 'Поширені показники біохімічного аналізу, які сервіс перетворює на таблицю',
    keyMetrics: [
      { name: 'Глюкоза', unit: 'ммоль/л' },
      { name: 'Загальний білірубін', unit: 'мкмоль/л' },
      { name: 'АЛТ', unit: 'Од/л' },
      { name: 'АСТ', unit: 'Од/л' },
      { name: 'Сечовина', unit: 'ммоль/л' },
      { name: 'Креатинін', unit: 'мкмоль/л' },
    ],
    legalDisclaimer:
      'Цей сервіс лише переформатовує ваш бланк результатів у таблицю для особистого використання — він не інтерпретує показники, не позначає відхилення та не дає медичних порад. Сервіс працює з бланками біохімічного аналізу крові з будь-якої лабораторії. Обговорюйте свої результати з лікарем.',
  },
];

export default seoLandingPagesData;
