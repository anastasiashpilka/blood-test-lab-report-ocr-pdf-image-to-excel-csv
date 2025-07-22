export const conversionFactors = {
    "Glucose": {
        "mmol/L": {
            "mg/dL": 18.0182, // 1 mmol/L = 18.0182 mg/dL
            "g/L": 0.180182,
        },
        "mg/dL": {
            "mmol/L": 1 / 18.0182,
            "g/L": 0.01,
        },
        "g/L": {
            "mmol/L": 1 / 0.180182,
            "mg/dL": 100,
        }
    },
    "Creatinine": {
        "µmol/L": {
            "mg/dL": 1 / 88.4, // 1 µmol/L = 0.01131 mg/dL
            "mg/L": 0.1131,
        },
        "mg/dL": {
            "µmol/L": 88.4,
            "mg/L": 10,
        },
        "mg/L": {
            "µmol/L": 1 / 0.1131,
            "mg/dL": 0.1,
        }
    },
    "Urea": {
        "mmol/L": {
            "mg/dL": 6.006, // 1 mmol/L Urea = 6.006 mg/dL Urea
            "mg/dL BUN": 2.8, // 1 mmol/L Urea = 2.8 mg/dL BUN
            "g/L": 0.06006,
        },
        "mg/dL": {
            "mmol/L": 1 / 6.006,
            "mg/dL BUN": 2.8 / 6.006, // 1 mg/dL Urea = 0.4662 mg/dL BUN
            "g/L": 0.01,
        },
        "mg/dL BUN": {
            "mmol/L": 1 / 2.8,
            "mg/dL": 6.006 / 2.8, // 1 mg/dL BUN = 2.145 mg/dL Urea
            "g/L": 0.01 / 2.145,
        },
        "g/L": {
            "mmol/L": 1 / 0.06006,
            "mg/dL": 100,
            "mg/dL BUN": 100 * (2.8 / 6.006),
        }
    },
    "Bilirubin (Total)": {
        "µmol/L": {
            "mg/dL": 1 / 17.1, // 1 µmol/L = 0.05848 mg/dL
            "mg/L": 0.5848,
        },
        "mg/dL": {
            "µmol/L": 17.1,
            "mg/L": 10,
        },
        "mg/L": {
            "µmol/L": 1 / 0.5848,
            "mg/dL": 0.1,
        }
    },
    "Bilirubin (Direct)": {
        "µmol/L": {
            "mg/dL": 1 / 17.1,
            "mg/L": 0.5848,
        },
        "mg/dL": {
            "µmol/L": 17.1,
            "mg/L": 10,
        },
        "mg/L": {
            "µmol/L": 1 / 0.5848,
            "mg/dL": 0.1,
        }
    },
    "Bilirubin (Indirect)": {
        "µmol/L": {
            "mg/dL": 1 / 17.1,
            "mg/L": 0.5848,
        },
        "mg/dL": {
            "µmol/L": 17.1,
            "mg/L": 10,
        },
        "mg/L": {
            "µmol/L": 1 / 0.5848,
            "mg/dL": 0.1,
        }
    },
    "Total Cholesterol": {
        "mmol/L": {
            "mg/dL": 38.665,
            "g/L": 0.38665,
        },
        "mg/dL": {
            "mmol/L": 1 / 38.665,
            "g/L": 0.01,
        },
        "g/L": {
            "mmol/L": 1 / 0.38665,
            "mg/dL": 100,
        }
    },
    "HDL Cholesterol": {
        "mmol/L": {
            "mg/dL": 38.665,
            "g/L": 0.38665,
        },
        "mg/dL": {
            "mmol/L": 1 / 38.665,
            "g/L": 0.01,
        },
        "g/L": {
            "mmol/L": 1 / 0.38665,
            "mg/dL": 100,
        }
    },
    "LDL Cholesterol": {
        "mmol/L": {
            "mg/dL": 38.665,
            "g/L": 0.38665,
        },
        "mg/dL": {
            "mmol/L": 1 / 38.665,
            "g/L": 0.01,
        },
        "g/L": {
            "mmol/L": 1 / 0.38665,
            "mg/dL": 100,
        }
    },
    "Triglycerides": {
        "mmol/L": {
            "mg/dL": 88.54,
            "g/L": 0.8854,
        },
        "mg/dL": {
            "mmol/L": 1 / 88.54,
            "g/L": 0.01,
        },
        "g/L": {
            "mmol/L": 1 / 0.8854,
            "mg/dL": 100,
        }
    },
    "Uric Acid": {
        "µmol/L": {
            "mg/dL": 1 / 59.48, // 1 µmol/L = 0.01681 mg/dL
            "mg/L": 0.1681,
        },
        "mg/dL": {
            "µmol/L": 59.48,
            "mg/L": 10,
        },
        "mg/L": {
            "µmol/L": 1 / 0.1681,
            "mg/dL": 0.1,
        }
    },
    "Calcium (Total)": {
        "mmol/L": {
            "mg/dL": 4.008,
            "mg/L": 40.08,
        },
        "mg/dL": {
            "mmol/L": 1 / 4.008,
            "mg/L": 10,
        },
        "mg/L": {
            "mmol/L": 1 / 40.08,
            "mg/dL": 0.1,
        }
    },
    "Calcium (Ionized)": {
        "mmol/L": {
            "mg/dL": 4.008,
            "mg/L": 40.08,
        },
        "mg/dL": {
            "mmol/L": 1 / 4.008,
            "mg/L": 10,
        },
        "mg/L": {
            "mmol/L": 1 / 40.08,
            "mg/dL": 0.1,
        }
    },
    "Phosphorus (Phosphate)": {
        "mmol/L": {
            "mg/dL": 3.097,
            "mg/L": 30.97,
        },
        "mg/dL": {
            "mmol/L": 1 / 3.097,
            "mg/L": 10,
        },
        "mg/L": {
            "mmol/L": 1 / 30.97,
            "mg/dL": 0.1,
        }
    },
    "Magnesium": {
        "mmol/L": {
            "mg/dL": 2.431,
            "mg/L": 24.31,
        },
        "mg/dL": {
            "mmol/L": 1 / 2.431,
            "mg/L": 10,
        },
        "mg/L": {
            "mmol/L": 1 / 24.31,
            "mg/dL": 0.1,
        }
    },
    "Sodium": {
        "mmol/L": {
            "mEq/L": 1,
        },
        "mEq/L": {
            "mmol/L": 1,
        }
    },
    "Potassium": {
        "mmol/L": {
            "mEq/L": 1,
        },
        "mEq/L": {
            "mmol/L": 1,
        }
    },
    "Chloride": {
        "mmol/L": {
            "mEq/L": 1,
        },
        "mEq/L": {
            "mmol/L": 1,
        }
    },
    "D-dimer": {
        "ng/mL FEU": {
            "µg/mL FEU": 0.001,
            "mg/L FEU": 0.001,
            "mg/L DDU": 0.0005, // 1 mg/L FEU = 2 mg/L DDU
        },
        "µg/mL FEU": {
            "ng/mL FEU": 1000,
            "mg/L FEU": 1,
            "mg/L DDU": 0.5,
        },
        "mg/L FEU": {
            "ng/mL FEU": 1000,
            "µg/mL FEU": 1,
            "mg/L DDU": 0.5,
        },
        "mg/L DDU": {
            "ng/mL FEU": 2000,
            "µg/mL FEU": 2,
            "mg/L FEU": 2,
        }
    },
    "Procalcitonin (PCT)": {
        "ng/mL": {
            "µg/L": 1,
        },
        "µg/L": {
            "ng/mL": 1,
        }
    },
    "B-type Natriuretic Peptide (BNP)": {
        "pg/mL": {
            "ng/L": 1,
            "pmol/L": 0.2886, // MW = 3466 g/mol
        },
        "ng/L": {
            "pg/mL": 1,
            "pmol/L": 0.2886,
        },
        "pmol/L": {
            "pg/mL": 1 / 0.2886,
            "ng/L": 1 / 0.2886,
        }
    },
    "N-terminal pro-brain natriuretic peptide (NT-proBNP)": {
        "pg/mL": {
            "ng/L": 1,
            "pmol/L": 0.1182, // MW = 8458 g/mol
        },
        "ng/L": {
            "pg/mL": 1,
            "pmol/L": 0.1182,
        },
        "pmol/L": {
            "pg/mL": 1 / 0.1182,
            "ng/L": 1 / 0.1182,
        }
    },
    "Homocysteine": {
        "µmol/L": {
            "mg/L": 0.13518,
            "mg/dL": 0.013518,
        },
        "mg/L": {
            "µmol/L": 1 / 0.13518,
            "mg/dL": 0.1,
        },
        "mg/dL": {
            "µmol/L": 1 / 0.013518,
            "mg/L": 10,
        }
    },
    "Ferritin": {
        "ng/mL": {
            "µg/L": 1,
            "pmol/L": 2.2727, // MW = 440000 g/mol
        },
        "µg/L": {
            "ng/mL": 1,
            "pmol/L": 2.2727,
        },
        "pmol/L": {
            "ng/mL": 1 / 2.2727,
            "µg/L": 1 / 2.2727,
        }
    },
    "Vitamin B12 (Cobalamin)": {
        "pg/mL": {
            "pmol/L": 0.7377, // MW = 1355.37 g/mol
            "ng/L": 1,
        },
        "pmol/L": {
            "pg/mL": 1 / 0.7377,
            "ng/L": 1 / 0.7377,
        },
        "ng/L": {
            "pg/mL": 1,
            "pmol/L": 0.7377,
        }
    },
    "Folic Acid (Folate)": {
        "ng/mL": {
            "nmol/L": 2.2654, // MW = 441.4 g/mol
            "µg/L": 1,
        },
        "nmol/L": {
            "ng/mL": 1 / 2.2654,
            "µg/L": 1 / 2.2654,
        },
        "µg/L": {
            "ng/mL": 1,
            "nmol/L": 2.2654,
        }
    },
    "25-OH Vitamin D (Calcidiol)": {
        "ng/mL": {
            "nmol/L": 2.4963, // MW = 400.64 g/mol
            "µg/L": 1,
        },
        "nmol/L": {
            "ng/mL": 1 / 2.4963,
            "µg/L": 1 / 2.4963,
        },
        "µg/L": {
            "ng/mL": 1,
            "nmol/L": 2.4963,
        }
    },
    "TSH": {
        "µIU/mL": {
            "mIU/L": 1,
            "mU/L": 1,
            "mIU/mL": 1,
            "µU/mL": 1,
        },
        "mIU/L": {
            "µIU/mL": 1,
            "mU/L": 1,
            "mIU/mL": 1,
            "µU/mL": 1,
        },
        "mU/L": {
            "µIU/mL": 1,
            "mIU/L": 1,
            "mIU/mL": 1,
            "µU/mL": 1,
        },
        "mIU/mL": {
            "µIU/mL": 1,
            "mIU/L": 1,
            "mU/L": 1,
            "µU/mL": 1,
        },
        "µU/mL": {
            "µIU/mL": 1,
            "mIU/L": 1,
            "mU/L": 1,
            "mIU/mL": 1,
        }
    },
    "Free T3": {
        "pmol/L": {
            "pg/mL": 0.651,
            "ng/dL": 0.0651,
        },
        "pg/mL": {
            "pmol/L": 1 / 0.651,
            "ng/dL": 0.1,
        },
        "ng/dL": {
            "pmol/L": 1 / 0.0651,
            "pg/mL": 10,
        }
    },
    "Total T3": {
        "nmol/L": {
            "ng/dL": 65.1,
            "µg/dL": 0.651,
        },
        "ng/dL": {
            "nmol/L": 1 / 65.1,
            "µg/dL": 0.01,
        },
        "µg/dL": {
            "nmol/L": 1 / 0.651,
            "ng/dL": 100,
        }
    },
    "Free T4": {
        "pmol/L": {
            "ng/dL": 0.0777,
            "pg/mL": 0.777,
        },
        "ng/dL": {
            "pmol/L": 1 / 0.0777,
            "pg/mL": 10,
        },
        "pg/mL": {
            "pmol/L": 1 / 0.777,
            "ng/dL": 0.1,
        }
    },
    "Total T4": {
        "nmol/L": {
            "µg/dL": 7.77,
            "ng/mL": 0.777,
        },
        "µg/dL": {
            "nmol/L": 1 / 7.77,
            "ng/mL": 0.1,
        },
        "ng/mL": {
            "nmol/L": 1 / 0.777,
            "µg/dL": 10,
        }
    },
    "Cortisol": {
        "nmol/L": {
            "µg/dL": 0.03625, // MW = 362.46 g/mol
            "µg/L": 0.3625,
            "pg/mL": 362.5,
        },
        "µg/dL": {
            "nmol/L": 1 / 0.03625,
            "µg/L": 10,
            "pg/mL": 10000,
        },
        "µg/L": {
            "nmol/L": 1 / 0.3625,
            "µg/dL": 0.1,
            "pg/mL": 1000,
        },
        "pg/mL": {
            "nmol/L": 1 / 362.5,
            "µg/dL": 0.0001,
            "µg/L": 0.001,
        }
    },
    "Adrenocorticotropic hormone (ACTH)": {
        "pg/mL": {
            "ng/L": 1,
            "pmol/L": 0.222,
        },
        "ng/L": {
            "pg/mL": 1,
            "pmol/L": 0.222,
        },
        "pmol/L": {
            "pg/mL": 1 / 0.222,
            "ng/L": 1 / 0.222,
        }
    },
    "Testosterone (Total)": {
        "nmol/L": {
            "ng/dL": 28.85,
            "ng/mL": 0.2885,
            "pg/mL": 288.5,
        },
        "ng/dL": {
            "nmol/L": 1 / 28.85,
            "ng/mL": 0.01,
            "pg/mL": 10,
        },
        "ng/mL": {
            "nmol/L": 1 / 0.2885,
            "ng/dL": 100,
            "pg/mL": 1000,
        },
        "pg/mL": {
            "nmol/L": 1 / 288.5,
            "ng/dL": 0.1,
            "ng/mL": 0.001,
        }
    },
    "Estradiol": {
        "pmol/L": {
            "pg/mL": 0.2724,
            "ng/L": 0.2724,
        },
        "pg/mL": {
            "pmol/L": 1 / 0.2724,
            "ng/L": 1,
        },
        "ng/L": {
            "pmol/L": 1 / 0.2724,
            "pg/mL": 1,
        }
    },
    "Progesterone": {
        "nmol/L": {
            "ng/mL": 0.3145,
            "µg/L": 0.3145,
            "pg/mL": 314.5,
        },
        "ng/mL": {
            "nmol/L": 1 / 0.3145,
            "µg/L": 1,
            "pg/mL": 1000,
        },
        "µg/L": {
            "nmol/L": 1 / 0.3145,
            "ng/mL": 1,
            "pg/mL": 1000,
        },
        "pg/mL": {
            "nmol/L": 1 / 314.5,
            "ng/mL": 0.001,
            "µg/L": 0.001,
        }
    },
    "Prolactin": {
        "mIU/L": {
            "ng/mL": 0.0472, // 1 ng/mL ≈ 21.2 mIU/L
            "µg/L": 0.0472,
            "pg/mL": 47.2,
        },
        "ng/mL": {
            "mIU/L": 21.2,
            "µg/L": 1,
            "pg/mL": 1000,
        },
        "µg/L": {
            "mIU/L": 21.2,
            "ng/mL": 1,
            "pg/mL": 1000,
        },
        "pg/mL": {
            "mIU/L": 0.0212,
            "ng/mL": 0.001,
            "µg/L": 0.001,
        }
    },
    "Insulin": {
        "µIU/mL": {
            "pmol/L": 6.945, // 1 µIU/mL ≈ 6.945 pmol/L
            "ng/mL": 0.0417, // 1 µIU/mL ≈ 0.0417 ng/mL
            "µg/L": 0.0417,
            "mIU/L": 0.001,
        },
        "pmol/L": {
            "µIU/mL": 1 / 6.945,
            "ng/mL": 0.006,
            "µg/L": 0.006,
            "mIU/L": 1 / 6945,
        },
        "ng/mL": {
            "µIU/mL": 1 / 0.0417,
            "pmol/L": 166.67,
            "µg/L": 1,
            "mIU/L": 1 / 41.7,
        },
        "µg/L": {
            "µIU/mL": 1 / 0.0417,
            "pmol/L": 166.67,
            "ng/mL": 1,
            "mIU/L": 1 / 41.7,
        },
        "mIU/L": {
            "µIU/mL": 1000,
            "pmol/L": 6945,
            "ng/mL": 41.7,
            "µg/L": 41.7,
        }
    },
    "C-peptide": {
        "nmol/L": {
            "ng/mL": 3.02,
            "µg/L": 3.02,
        },
        "ng/mL": {
            "nmol/L": 1 / 3.02,
            "µg/L": 1,
        },
        "µg/L": {
            "nmol/L": 1 / 3.02,
            "ng/mL": 1,
        }
    },
    "Parathyroid hormone (PTH)": {
        "pmol/L": {
            "pg/mL": 9.424,
            "ng/L": 9.424,
        },
        "pg/mL": {
            "pmol/L": 1 / 9.424,
            "ng/L": 1,
        },
        "ng/L": {
            "pmol/L": 1 / 9.424,
            "pg/mL": 1,
        }
    },
    "PSA (Total)": {
        "ng/mL": {
            "µg/L": 1,
        },
        "µg/L": {
            "ng/mL": 1,
        }
    },
    "PSA (Free)": {
        "ng/mL": {
            "µg/L": 1,
        },
        "µg/L": {
            "ng/mL": 1,
        }
    },
    "C-reactive protein (CRP)": {
        "mg/L": {
            "mg/dL": 0.1,
            "µg/mL": 1,
        },
        "mg/dL": {
            "mg/L": 10,
            "µg/mL": 10,
        },
        "µg/mL": {
            "mg/L": 1,
            "mg/dL": 0.1,
        }
    },
    "Rheumatoid Factor (RF)": {
        "IU/mL": {
            "U/mL": 1,
        },
        "U/mL": {
            "IU/mL": 1,
        }
    },
    "Immunoglobulin A (IgA)": {
        "g/L": {
            "mg/dL": 100,
            "mg/L": 1000,
        },
        "mg/dL": {
            "g/L": 1 / 100,
            "mg/L": 10,
        },
        "mg/L": {
            "g/L": 1 / 1000,
            "mg/dL": 0.1,
        }
    },
    "Immunoglobulin G (IgG)": {
        "g/L": {
            "mg/dL": 100,
            "mg/L": 1000,
        },
        "mg/dL": {
            "g/L": 1 / 100,
            "mg/L": 10,
        },
        "mg/L": {
            "g/L": 1 / 1000,
            "mg/dL": 0.1,
        }
    },
    "Immunoglobulin M (IgM)": {
        "g/L": {
            "mg/dL": 100,
            "mg/L": 1000,
        },
        "mg/dL": {
            "g/L": 1 / 100,
            "mg/L": 10,
        },
        "mg/L": {
            "g/L": 1 / 1000,
            "mg/dL": 0.1,
        }
    },
    "Troponin T": {
        "ng/mL": {
            "µg/L": 1,
            "pg/mL": 1000,
            "pmol/L": 0.03356, // MW = 29800 g/mol
        },
        "µg/L": {
            "ng/mL": 1,
            "pg/mL": 1000,
            "pmol/L": 0.03356,
        },
        "pg/mL": {
            "ng/mL": 1 / 1000,
            "µg/L": 1 / 1000,
            "pmol/L": 0.03356 / 1000,
        },
        "pmol/L": {
            "ng/mL": 1 / 0.03356,
            "µg/L": 1 / 0.03356,
            "pg/mL": 1000 / 0.03356,
        }
    },
    "Troponin I": {
        "ng/mL": {
            "µg/L": 1,
            "pg/mL": 1000,
            "pmol/L": 0.04187, // MW = 23876 g/mol
        },
        "µg/L": {
            "ng/mL": 1,
            "pg/mL": 1000,
            "pmol/L": 0.04187,
        },
        "pg/mL": {
            "ng/mL": 1 / 1000,
            "µg/L": 1 / 1000,
            "pmol/L": 0.04187 / 1000,
        },
        "pmol/L": {
            "ng/mL": 1 / 0.04187,
            "µg/L": 1 / 0.04187,
            "pg/mL": 1000 / 0.04187,
        }
    },
    "Lipoprotein (a) - Lp(a)": {
        "mg/dL": {
            "nmol/L": 2.5, // Approximate, MW varies
            "g/L": 0.01,
        },
        "nmol/L": {
            "mg/dL": 1 / 2.5,
            "g/L": 0.01 / 2.5,
        },
        "g/L": {
            "mg/dL": 100,
            "nmol/L": 2.5 * 100,
        }
    },
    "CA-125": {
        "U/mL": {
            "kU/L": 1,
            "µg/L": 1, // Approximate, assay-specific
        },
        "kU/L": {
            "U/mL": 1,
            "µg/L": 1,
        },
        "µg/L": {
            "U/mL": 1,
            "kU/L": 1,
        }
    },
    "CEA": {
        "ng/mL": {
            "µg/L": 1,
        },
        "µg/L": {
            "ng/mL": 1,
        }
    },
    "AFP": {
        "ng/mL": {
            "µg/L": 1,
            "IU/mL": 0.83, // Approximate, assay-specific
        },
        "µg/L": {
            "ng/mL": 1,
            "IU/mL": 0.83,
        },
        "IU/mL": {
            "ng/mL": 1 / 0.83,
            "µg/L": 1 / 0.83,
        }
    },
    "CA-19-9": {
        "U/mL": {
            "kU/L": 1,
            "µg/L": 1, // Approximate, assay-specific
        },
        "kU/L": {
            "U/mL": 1,
            "µg/L": 1,
        },
        "µg/L": {
            "U/mL": 1,
            "kU/L": 1,
        }
    },
    "CA-15-3": {
        "U/mL": {
            "kU/L": 1,
            "µg/L": 1, // Approximate, assay-specific
        },
        "kU/L": {
            "U/mL": 1,
            "µg/L": 1,
        },
        "µg/L": {
            "U/mL": 1,
            "kU/L": 1,
        }
    },
    "HCG": {
        "mIU/mL": {
            "IU/L": 1,
            "ng/mL": 0.2, // Approximate, assay-specific
        },
        "IU/L": {
            "mIU/mL": 1,
            "ng/mL": 0.2,
        },
        "ng/mL": {
            "mIU/mL": 1 / 0.2,
            "IU/L": 1 / 0.2,
        }
    },
    "Fibrinogen": {
        "g/L": {
            "mg/dL": 100,
            "mg/L": 1000,
        },
        "mg/dL": {
            "g/L": 1 / 100,
            "mg/L": 10,
        },
        "mg/L": {
            "g/L": 1 / 1000,
            "mg/dL": 0.1,
        }
    },
    "Serum Iron": {
        "µmol/L": {
            "µg/dL": 5.585,
            "µg/L": 55.85,
        },
        "µg/dL": {
            "µmol/L": 1 / 5.585,
            "µg/L": 10,
        },
        "µg/L": {
            "µmol/L": 1 / 55.85,
            "µg/dL": 0.1,
        }
    },
    "Total Iron-Binding Capacity (TIBC)": {
        "µmol/L": {
            "µg/dL": 5.585,
            "µg/L": 55.85,
        },
        "µg/dL": {
            "µmol/L": 1 / 5.585,
            "µg/L": 10,
        },
        "µg/L": {
            "µmol/L": 1 / 55.85,
            "µg/dL": 0.1,
        }
    },
    "Alanine Aminotransferase (ALT)": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Aspartate Aminotransferase (AST)": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Gamma-glutamyl transferase (GGT)": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Alkaline Phosphatase (ALP)": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Amylase": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Lipase": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Creatine Kinase (CK)": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Creatine Kinase-MB (CK-MB)": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        },
        "ng/mL": {
            "µg/L": 1,
        },
        "µg/L": {
            "ng/mL": 1,
        }
    },
    "Lactate Dehydrogenase (LDH)": {
        "U/L": {
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
            "IU/L": 1,
        },
        "µkat/L": {
            "U/L": 1 / 0.0167,
            "nkat/L": 1000,
            "IU/L": 1 / 0.0167,
        },
        "nkat/L": {
            "U/L": 1 / 16.7,
            "µkat/L": 0.001,
            "IU/L": 1 / 16.7,
        },
        "IU/L": {
            "U/L": 1,
            "µkat/L": 0.0167,
            "nkat/L": 16.7,
        }
    },
    "Follicle-stimulating hormone (FSH)": {
        "mIU/mL": {
            "IU/L": 1,
            "ng/mL": 0.2, // Approximate, assay-specific
            "µg/L": 0.2,
            "pg/mL": 200,
        },
        "IU/L": {
            "mIU/mL": 1,
            "ng/mL": 0.2,
            "µg/L": 0.2,
            "pg/mL": 200,
        },
        "ng/mL": {
            "mIU/mL": 1 / 0.2,
            "IU/L": 1 / 0.2,
            "µg/L": 1,
            "pg/mL": 1000,
        },
        "µg/L": {
            "mIU/mL": 1 / 0.2,
            "IU/L": 1 / 0.2,
            "ng/mL": 1,
            "pg/mL": 1000,
        },
        "pg/mL": {
            "mIU/mL": 1 / 200,
            "IU/L": 1 / 200,
            "ng/mL": 0.001,
            "µg/L": 0.001,
        }
    },
    "Luteinizing hormone (LH)": {
        "mIU/mL": {
            "IU/L": 1,
            "ng/mL": 0.18, // Approximate, assay-specific
            "µg/L": 0.18,
            "pg/mL": 180,
        },
        "IU/L": {
            "mIU/mL": 1,
            "ng/mL": 0.18,
            "µg/L": 0.18,
            "pg/mL": 180,
        },
        "ng/mL": {
            "mIU/mL": 1 / 0.18,
            "IU/L": 1 / 0.18,
            "µg/L": 1,
            "pg/mL": 1000,
        },
        "µg/L": {
            "mIU/mL": 1 / 0.18,
            "IU/L": 1 / 0.18,
            "ng/mL": 1,
            "pg/mL": 1000,
        },
        "pg/mL": {
            "mIU/mL": 1 / 180,
            "IU/L": 1 / 180,
            "ng/mL": 0.001,
            "µg/L": 0.001,
        }
    }
};

export const molecularWeights = {
    "Glucose": 180.156,
    "Creatinine": 113.12,
    "Urea": 60.06,
    "Bilirubin (Total)": 584.66,
    "Bilirubin (Direct)": 584.66,
    "Bilirubin (Indirect)": 584.66,
    "Cholesterol": 386.66,
    "Triglycerides": 885.4,
    "Uric Acid": 168.11,
    "Calcium": 40.078,
    "Phosphorus": 30.97,
    "Magnesium": 24.305,
    "Homocysteine": 135.18,
    "Vitamin B12 (Cobalamin)": 1355.37,
    "Folic Acid (Folate)": 441.4,
    "25-OH Vitamin D (Calcidiol)": 400.64,
    "Free T3": 650.98,
    "Total T3": 650.98,
    "Free T4": 776.87,
    "Total T4": 776.87,
    "Cortisol": 362.46,
    "Adrenocorticotropic hormone (ACTH)": 4500,
    "Testosterone (Total)": 288.42,
    "Estradiol": 272.38,
    "Progesterone": 314.46,
    "Prolactin": 23000,
    "Insulin": 5808,
    "C-peptide": 3020,
    "Parathyroid hormone (PTH)": 9424,
    "Serum Iron": 55.845,
    "Total Iron-Binding Capacity (TIBC)": 55.845,
    "B-type Natriuretic Peptide (BNP)": 3466,
    "N-terminal pro-brain natriuretic peptide (NT-proBNP)": 8458,
    "Ferritin": 440000,
    "Troponin T": 29800,
    "Troponin I": 23876,
    "HCG": 36700
};

export const biomarkerUnitCategories = {
    // New Biomarkers
    "Glycated Hemoglobin (HbA1c)": ["%", "mmol/mol"],
    "D-dimer": ["ng/mL FEU", "µg/mL FEU", "mg/L FEU", "mg/L DDU"],
    "Procalcitonin (PCT)": ["ng/mL", "µg/L"],
    "B-type Natriuretic Peptide (BNP)": ["pg/mL", "ng/L", "pmol/L"],
    "N-terminal pro-brain natriuretic peptide (NT-proBNP)": ["pg/mL", "ng/L", "pmol/L"],
    "Homocysteine": ["µmol/L", "mg/L", "mg/dL"],
    "Ferritin": ["ng/mL", "µg/L", "pmol/L"],
    "Vitamin B12 (Cobalamin)": ["pg/mL", "pmol/L", "ng/L"],
    "Folic Acid (Folate)": ["ng/mL", "nmol/L", "µg/L"],
    "25-OH Vitamin D (Calcidiol)": ["ng/mL", "nmol/L", "µg/L"],

    // General Blood Test
    "Red Blood Cell Count (RBC)": ["x10^12/L", "x10^6/µL", "Mln/µL"],
    "Hemoglobin (HGB)": ["g/L", "g/dL", "mmol/L"],
    "Hematocrit (HCT)": ["L/L", "%", "mL/mL"],
    "Mean Corpuscular Volume (MCV)": ["fL"],
    "Mean Corpuscular Hemoglobin (MCH)": ["pg", "fmol"],
    "Mean Corpuscular Hemoglobin Concentration (MCHC)": ["g/L", "g/dL", "mmol/L"],
    "Red Cell Distribution Width (RDW)": ["%"],
    "White Blood Cell Count (WBC)": ["x10^9/L", "x10^3/µL", "Thous./µL"],
    // Note: Conversion from % to x10^9/L requires total WBC count, not supported
    "White Blood Cell Differential (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)": ["%", "x10^9/L"],
    "Platelet Count (PLT)": ["x10^9/L", "x10^3/µL", "Thous./µL"],
    "Mean Platelet Volume (MPV)": ["fL"],
    "Erythrocyte Sedimentation Rate (ESR)": ["mm/hr"],

    // Biochemical Blood Test
    // Note: Total Protein and Albumin do not support molar conversions due to heterogeneous molecular composition
    "Total Protein": ["g/L", "g/dL", "mg/dL", "mg/L"],
    "Albumin": ["g/L", "g/dL", "mg/dL", "mg/L"],
    "Creatinine": ["µmol/L", "mg/dL", "mg/L"],
    "Urea": ["mmol/L", "mg/dL", "mg/dL BUN", "g/L"],
    "Bilirubin (Total)": ["µmol/L", "mg/dL", "mg/L"],
    "Bilirubin (Direct)": ["µmol/L", "mg/dL", "mg/L"],
    "Bilirubin (Indirect)": ["µmol/L", "mg/dL", "mg/L"],
    "Cholesterol (Total)": ["mmol/L", "mg/dL", "g/L"],
    "HDL Cholesterol": ["mmol/L", "mg/dL", "g/L"],
    "LDL Cholesterol": ["mmol/L", "mg/dL", "g/L"],
    "Triglycerides": ["mmol/L", "mg/dL", "g/L"],
    "Alanine Aminotransferase (ALT)": ["U/L", "IU/L", "µkat/L", "nkat/L"],
    "Aspartate Aminotransferase (AST)": ["U/L", "IU/L", "µkat/L", "nkat/L"],
    "Gamma-glutamyl transferase (GGT)": ["U/L", "IU/L", "µkat/L", "nkat/L"],
    "Alkaline Phosphatase (ALP)": ["U/L", "IU/L", "µkat/L", "nkat/L"],
    "Amylase": ["U/L", "IU/L", "µkat/L", "nkat/L"],
    "Lipase": ["U/L", "IU/L", "µkat/L", "nkat/L"],
    "Sodium": ["mmol/L", "mEq/L"],
    "Potassium": ["mmol/L", "mEq/L"],
    "Chloride": ["mmol/L", "mEq/L"],
    "Calcium (Total)": ["mmol/L", "mg/dL", "mg/L"],
    "Calcium (Ionized)": ["mmol/L", "mg/dL", "mg/L"],
    "Phosphorus (Phosphate)": ["mmol/L", "mg/dL", "mg/L"],
    "Magnesium": ["mmol/L", "mg/dL", "mg/L"],
    "Uric Acid": ["µmol/L", "mg/dL", "mg/L"],
    "Creatine Kinase (CK)": ["U/L", "IU/L", "µkat/L", "nkat/L"],
    // Note: CK-MB mass-to-activity conversions are assay-specific and not supported
    "Creatine Kinase-MB (CK-MB)": ["ng/mL", "µg/L", "U/L", "IU/L", "µkat/L", "nkat/L"],
    "Lactate Dehydrogenase (LDH)": ["U/L", "IU/L", "µkat/L", "nkat/L"],

    // Hormones
    "Thyroid-stimulating hormone (TSH)": ["µIU/mL", "mIU/L", "mU/L", "mIU/mL", "µU/mL"],
    "Free T3": ["pmol/L", "pg/mL", "ng/dL"],
    "Total T3": ["nmol/L", "ng/dL", "µg/dL"],
    "Free T4": ["pmol/L", "ng/dL", "pg/mL"],
    "Total T4": ["nmol/L", "µg/dL", "ng/mL"],
    "Cortisol": ["nmol/L", "µg/dL", "µg/L", "pg/mL"],
    "Adrenocorticotropic hormone (ACTH)": ["pg/mL", "ng/L", "pmol/L"],
    "Testosterone (Total)": ["nmol/L", "ng/dL", "ng/mL", "pg/mL"],
    "Estradiol": ["pmol/L", "pg/mL", "ng/L"],
    "Progesterone": ["nmol/L", "ng/mL", "µg/L", "pg/mL"],
    "Follicle-stimulating hormone (FSH)": ["mIU/mL", "IU/L", "ng/mL", "µg/L", "pg/mL"],
    "Luteinizing hormone (LH)": ["mIU/mL", "IU/L", "ng/mL", "µg/L", "pg/mL"],
    "Prolactin": ["mIU/L", "ng/mL", "µg/L", "pg/mL"],
    "Insulin": ["µIU/mL", "pmol/L", "mIU/L", "ng/mL", "µg/L"],
    "C-peptide": ["nmol/L", "ng/mL", "µg/L"],
    "Parathyroid hormone (PTH)": ["pg/mL", "pmol/L", "ng/L"],

    // Inflammation and Immunity Markers
    "C-reactive protein (CRP)": ["mg/L", "mg/dL", "µg/mL"],
    "Rheumatoid Factor (RF)": ["IU/mL", "U/mL"],
    "Immunoglobulin A (IgA)": ["g/L", "mg/dL", "mg/L"],
    "Immunoglobulin G (IgG)": ["g/L", "mg/dL", "mg/L"],
    "Immunoglobulin M (IgM)": ["g/L", "mg/dL", "mg/L"],

    // Cardiovascular Markers
    "Troponin T": ["ng/mL", "µg/L", "pg/mL", "pmol/L"],
    "Troponin I": ["ng/mL", "µg/L", "pg/mL", "pmol/L"],
    "Lipoprotein (a) - Lp(a)": ["mg/dL", "nmol/L", "g/L"],

    // Oncomarkers
    // Note: AFP and HCG conversions to IU/mL are approximate and assay-specific
    "PSA (Total)": ["ng/mL", "µg/L"],
    "PSA (Free)": ["ng/mL", "µg/L"],
    "CA-125": ["U/mL", "kU/L", "µg/L"],
    "CEA": ["ng/mL", "µg/L"],
    "AFP": ["ng/mL", "µg/L", "IU/mL"],
    "CA-19-9": ["U/mL", "kU/L", "µg/L"],
    "CA-15-3": ["U/mL", "kU/L", "µg/L"],
    "HCG": ["mIU/mL", "IU/L", "ng/mL"],

    // Coagulation Markers (Coagulogram)
    "Prothrombin Time (PT)": ["s", "%", "dimensionless unit"],
    "INR (International Normalized Ratio)": ["dimensionless unit"],
    "Activated Partial Thromboplastin Time (aPTT)": ["s"],
    "Fibrinogen": ["g/L", "mg/dL", "mg/L"],
    "D-dimer (Coagulation)": ["ng/mL FEU", "µg/mL FEU", "mg/L FEU", "mg/L DDU"],

    // Vitamin and Trace Element Deficiency Markers
    "Serum Iron": ["µmol/L", "µg/dL", "µg/L"],
    "Total Iron-Binding Capacity (TIBC)": ["µmol/L", "µg/dL", "µg/L"],
};

export const unitCategories = {
    "mass_concentration": ["mg/dL", "µg/mL", "ng/mL", "g/L", "mg/L", "µg/L", "pg/mL"],
    "molar_concentration": ["mmol/L", "µmol/L", "nmol/L", "pmol/L", "fmol/L"],
    "percentage": ["%", "fraction"],
    "ratio": ["ratio"],
    "volume_fraction": ["%", "L/L", "mL/mL"],
    "count": ["x10^12/L", "Mln/µL", "x10^6/µL", "x10^9/L", "G/L", "Thous./µL"],
    "pressure": ["mmHg", "kPa"],
    "arbitrary_unit": ["U/L", "kU/L"],
    "international_units": ["IU/L", "mIU/mL", "kIU/L", "mU/L", "µIU/mL", "µU/mL"],
    "time": ["min", "hr", "day", "week", "month", "year"],
    "enzyme_activity": ["U/L", "kU/L", "µkat/L", "nkat/L", "IU/L"],
    "mass_fraction": ["g/dL", "g/L", "mg/dL", "mg/L"],
    "substance_amount": ["mmol", "µmol", "nmol", "pmol", "fmol"],
    "volume": ["L", "mL", "dL"],
    "equivalent_concentration": ["mEq/L", "Eq/L"],
    "fibrinogen_equivalent_units": ["ng/mL FEU", "µg/mL FEU", "mg/L FEU"],
    "d_dimer_units": ["mg/L DDU"],
    "dimensionless": ["dimensionless unit"]
};

// Helper function to get units for a specific biomarker
export const getUnitsForBiomarker = (biomarkerName) => {
    return biomarkerUnitCategories[biomarkerName] || [];
};

// Main conversion logic
export const convertUnit = (biomarker, value, sourceUnit, targetUnit) => {
    if (sourceUnit === targetUnit) {
        return value;
    }

    // Special case for HbA1c (non-linear conversion per NGSP/IFCC)
    if (biomarker === "Glycated Hemoglobin (HbA1c)") {
        if (sourceUnit === "%" && targetUnit === "mmol/mol") {
            return (value - 2.15) * 10.929;
        }
        if (sourceUnit === "mmol/mol" && targetUnit === "%") {
            return (value / 10.929) + 2.15;
        }
    }

    // Special cases
    if (biomarker === "Hematocrit (HCT)") {
        if (sourceUnit === "L/L" && targetUnit === "%") return value * 100;
        if (sourceUnit === "%" && targetUnit === "L/L") return value / 100;
        if (sourceUnit === "L/L" && targetUnit === "mL/mL") return value;
        if (sourceUnit === "mL/mL" && targetUnit === "L/L") return value;
        if (sourceUnit === "%" && targetUnit === "mL/mL") return value / 100;
        if (sourceUnit === "mL/mL" && targetUnit === "%") return value * 100;
    }
    if (biomarker === "Red Cell Distribution Width (RDW)") {
        if (sourceUnit === "%" && targetUnit === "%") return value;
    }
    if (biomarker === "White Blood Cell Differential (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)") {
        if (sourceUnit === "%" && targetUnit === "%") return value;
        // Conversion to x10^9/L requires total WBC count, not supported
        if (sourceUnit === "%" && targetUnit === "x10^9/L") return null;
        if (sourceUnit === "x10^9/L" && targetUnit === "%") return null;
    }
    if (biomarker === "Prothrombin Time (PT)") {
        if (sourceUnit === "%" && targetUnit === "%") return value;
        if (sourceUnit === "s" && targetUnit === "s") return value;
        if (sourceUnit === "dimensionless unit" && targetUnit === "dimensionless unit") return value;
    }
    if (biomarker === "INR (International Normalized Ratio)") {
        if (sourceUnit === "dimensionless unit" && targetUnit === "dimensionless unit") return value;
    }
    if (biomarker === "Activated Partial Thromboplastin Time (aPTT)") {
        if (sourceUnit === "s" && targetUnit === "s") return value;
    }
    if (biomarker === "Red Blood Cell Count (RBC)") {
        if (sourceUnit === "Mln/µL" && targetUnit === "x10^12/L") return value;
        if (sourceUnit === "x10^12/L" && targetUnit === "Mln/µL") return value;
        if (sourceUnit === "x10^6/µL" && targetUnit === "x10^12/L") return value;
        if (sourceUnit === "x10^12/L" && targetUnit === "x10^6/µL") return value;
        if (sourceUnit === "Mln/µL" && targetUnit === "x10^6/µL") return value;
        if (sourceUnit === "x10^6/µL" && targetUnit === "Mln/µL") return value;
    }
    if (biomarker === "White Blood Cell Count (WBC)") {
        if (sourceUnit === "Thous./µL" && targetUnit === "x10^9/L") return value;
        if (sourceUnit === "x10^9/L" && targetUnit === "Thous./µL") return value;
        if (sourceUnit === "x10^3/µL" && targetUnit === "x10^9/L") return value;
        if (sourceUnit === "x10^9/L" && targetUnit === "x10^3/µL") return value;
        if (sourceUnit === "Thous./µL" && targetUnit === "x10^3/µL") return value;
        if (sourceUnit === "x10^3/µL" && targetUnit === "Thous./µL") return value;
    }
    if (biomarker === "Platelet Count (PLT)") {
        if (sourceUnit === "Thous./µL" && targetUnit === "x10^9/L") return value;
        if (sourceUnit === "x10^9/L" && targetUnit === "Thous./µL") return value;
        if (sourceUnit === "x10^3/µL" && targetUnit === "x10^9/L") return value;
        if (sourceUnit === "x10^9/L" && targetUnit === "x10^3/µL") return value;
        if (sourceUnit === "Thous./µL" && targetUnit === "x10^3/µL") return value;
        if (sourceUnit === "x10^3/µL" && targetUnit === "Thous./µL") return value;
    }
    if (biomarker === "Mean Corpuscular Volume (MCV)" || biomarker === "Mean Platelet Volume (MPV)") {
        if (sourceUnit === "fL" && targetUnit === "fL") return value;
    }
    if (biomarker === "Erythrocyte Sedimentation Rate (ESR)") {
        if (sourceUnit === "mm/hr" && targetUnit === "mm/hr") return value;
    }
    if (biomarker === "Hemoglobin (HGB)") {
        if (sourceUnit === "g/dL" && targetUnit === "g/L") return value * 10;
        if (sourceUnit === "g/L" && targetUnit === "g/dL") return value / 10;
        if (sourceUnit === "g/L" && targetUnit === "mmol/L") return (value / 64450) * 1000;
        if (sourceUnit === "mmol/L" && targetUnit === "g/L") return (value * 64450) / 1000;
        if (sourceUnit === "g/dL" && targetUnit === "mmol/L") return (value * 10 / 64450) * 1000;
        if (sourceUnit === "mmol/L" && targetUnit === "g/dL") return (value * 64450 / 1000) / 10;
    }
    if (biomarker === "Mean Corpuscular Hemoglobin (MCH)") {
        if (sourceUnit === "pg" && targetUnit === "fmol") return value / 0.06445;
        if (sourceUnit === "fmol" && targetUnit === "pg") return value * 0.06445;
    }
    if (biomarker === "Mean Corpuscular Hemoglobin Concentration (MCHC)") {
        if (sourceUnit === "g/dL" && targetUnit === "g/L") return value * 10;
        if (sourceUnit === "g/L" && targetUnit === "g/dL") return value / 10;
        if (sourceUnit === "g/L" && targetUnit === "mmol/L") return (value / 64450) * 1000;
        if (sourceUnit === "mmol/L" && targetUnit === "g/L") return (value * 64450) / 1000;
        if (sourceUnit === "g/dL" && targetUnit === "mmol/L") return (value * 10 / 64450) * 1000;
        if (sourceUnit === "mmol/L" && targetUnit === "g/dL") return (value * 64450 / 1000) / 10;
    }
    // Note: Total Protein and Albumin do not support molar conversions
    if (biomarker === "Total Protein" || biomarker === "Albumin") {
        if (sourceUnit === "g/L" && targetUnit === "g/dL") return value / 10;
        if (sourceUnit === "g/dL" && targetUnit === "g/L") return value * 10;
        if (sourceUnit === "g/L" && targetUnit === "mg/dL") return value * 100;
        if (sourceUnit === "mg/dL" && targetUnit === "g/L") return value / 100;
        if (sourceUnit === "g/L" && targetUnit === "mg/L") return value * 1000;
        if (sourceUnit === "mg/L" && targetUnit === "g/L") return value / 1000;
        if (sourceUnit === "mg/dL" && targetUnit === "mg/L") return value * 10;
        if (sourceUnit === "mg/L" && targetUnit === "mg/dL") return value / 10;
    }
    // Note: CK-MB mass-to-activity conversions are not supported
    if (biomarker === "Creatine Kinase-MB (CK-MB)") {
        if (sourceUnit === "ng/mL" && targetUnit === "U/L") return null;
        if (sourceUnit === "U/L" && targetUnit === "ng/mL") return null;
        if (sourceUnit === "ng/mL" && targetUnit === "µg/L") return value;
        if (sourceUnit === "µg/L" && targetUnit === "ng/mL") return value;
    }

    // Use conversionFactors for standard conversions
    if (conversionFactors[biomarker] && conversionFactors[biomarker][sourceUnit] && conversionFactors[biomarker][sourceUnit][targetUnit]) {
        const factor = conversionFactors[biomarker][sourceUnit][targetUnit];
        return Number((value * factor).toFixed(4));
    }

    // If no direct conversion exists, check if units are in the same category and handle implicitly
    const sourceCategory = Object.keys(unitCategories).find(category => unitCategories[category].includes(sourceUnit));
    const targetCategory = Object.keys(unitCategories).find(category => unitCategories[category].includes(targetUnit));

    if (sourceCategory && targetCategory && sourceCategory === targetCategory) {
        // Handle same-unit conversions
        if (sourceUnit === targetUnit) return value;

        // Handle mass_concentration conversions
        if (sourceCategory === "mass_concentration") {
            const conversions = {
                "mg/dL": { "µg/mL": 10, "ng/mL": 10000, "g/L": 0.1, "mg/L": 10, "µg/L": 10000, "pg/mL": 10000000 },
                "µg/mL": { "mg/dL": 0.1, "ng/mL": 1000, "g/L": 0.01, "mg/L": 1, "µg/L": 1000, "pg/mL": 1000000 },
                "ng/mL": { "mg/dL": 0.0001, "µg/mL": 0.001, "g/L": 0.00001, "mg/L": 0.001, "µg/L": 1, "pg/mL": 1000 },
                "g/L": { "mg/dL": 10, "µg/mL": 100, "ng/mL": 100000, "mg/L": 1000, "µg/L": 1000000, "pg/mL": 1000000000 },
                "mg/L": { "mg/dL": 0.1, "µg/mL": 1, "ng/mL": 1000, "g/L": 0.001, "µg/L": 1000, "pg/mL": 1000000 },
                "µg/L": { "mg/dL": 0.0001, "µg/mL": 0.001, "ng/mL": 1, "g/L": 0.000001, "mg/L": 0.001, "pg/mL": 1000 },
                "pg/mL": { "mg/dL": 0.0000001, "µg/mL": 0.000001, "ng/mL": 0.001, "g/L": 0.000000001, "mg/L": 0.000001, "µg/L": 0.001 }
            };
            if (conversions[sourceUnit] && conversions[sourceUnit][targetUnit]) {
                return Number((value * conversions[sourceUnit][targetUnit]).toFixed(4));
            }
        }

        // Handle molar_concentration conversions
        if (sourceCategory === "molar_concentration") {
            const conversions = {
                "mmol/L": { "µmol/L": 1000, "nmol/L": 1000000, "pmol/L": 1000000000, "fmol/L": 1000000000000 },
                "µmol/L": { "mmol/L": 0.001, "nmol/L": 1000, "pmol/L": 1000000, "fmol/L": 1000000000 },
                "nmol/L": { "mmol/L": 0.000001, "µmol/L": 0.001, "pmol/L": 1000, "fmol/L": 1000000 },
                "pmol/L": { "mmol/L": 0.000000001, "µmol/L": 0.000001, "nmol/L": 0.001, "fmol/L": 1000 },
                "fmol/L": { "mmol/L": 0.000000000001, "µmol/L": 0.000000001, "nmol/L": 0.000001, "pmol/L": 0.001 }
            };
            if (conversions[sourceUnit] && conversions[sourceUnit][targetUnit]) {
                return Number((value * conversions[sourceUnit][targetUnit]).toFixed(4));
            }
        }

        // Handle enzyme_activity conversions
        if (sourceCategory === "enzyme_activity") {
            const conversions = {
                "U/L": { "µkat/L": 0.0167, "nkat/L": 16.7, "IU/L": 1 },
                "µkat/L": { "U/L": 1 / 0.0167, "nkat/L": 1000, "IU/L": 1 / 0.0167 },
                "nkat/L": { "U/L": 1 / 16.7, "µkat/L": 0.001, "IU/L": 1 / 16.7 },
                "IU/L": { "U/L": 1, "µkat/L": 0.0167, "nkat/L": 16.7 }
            };
            if (conversions[sourceUnit] && conversions[sourceUnit][targetUnit]) {
                return Number((value * conversions[sourceUnit][targetUnit]).toFixed(4));
            }
        }

        // Handle international_units conversions
        if (sourceCategory === "international_units") {
            const conversions = {
                "IU/L": { "mIU/mL": 1, "kIU/L": 0.001, "mU/L": 1, "µIU/mL": 1000, "µU/mL": 1000 },
                "mIU/mL": { "IU/L": 1, "kIU/L": 0.001, "mU/L": 1, "µIU/mL": 1000, "µU/mL": 1000 },
                "kIU/L": { "IU/L": 1000, "mIU/mL": 1000, "mU/L": 1000, "µIU/mL": 1000000, "µU/mL": 1000000 },
                "mU/L": { "IU/L": 1, "mIU/mL": 1, "kIU/L": 0.001, "µIU/mL": 1000, "µU/mL": 1000 },
                "µIU/mL": { "IU/L": 0.001, "mIU/mL": 0.001, "kIU/L": 0.000001, "mU/L": 0.001, "µU/mL": 1 },
                "µU/mL": { "IU/L": 0.001, "mIU/mL": 0.001, "kIU/L": 0.000001, "mU/L": 0.001, "µIU/mL": 1 }
            };
            if (conversions[sourceUnit] && conversions[sourceUnit][targetUnit]) {
                return Number((value * conversions[sourceUnit][targetUnit]).toFixed(4));
            }
        }

        // Handle count conversions
        if (sourceCategory === "count") {
            const conversions = {
                "x10^12/L": { "Mln/µL": 1, "x10^6/µL": 1 },
                "Mln/µL": { "x10^12/L": 1, "x10^6/µL": 1 },
                "x10^6/µL": { "x10^12/L": 1, "Mln/µL": 1 },
                "x10^9/L": { "Thous./µL": 1, "x10^3/µL": 1 },
                "Thous./µL": { "x10^9/L": 1, "x10^3/µL": 1 },
                "x10^3/µL": { "x10^9/L": 1, "Thous./µL": 1 }
            };
            if (conversions[sourceUnit] && conversions[sourceUnit][targetUnit]) {
                return Number((value * conversions[sourceUnit][targetUnit]).toFixed(4));
            }
        }

        // Handle fibrinogen_equivalent_units and d_dimer_units
        if (sourceCategory === "fibrinogen_equivalent_units" || sourceCategory === "d_dimer_units") {
            if (conversionFactors[biomarker] && conversionFactors[biomarker][sourceUnit] && conversionFactors[biomarker][sourceUnit][targetUnit]) {
                const factor = conversionFactors[biomarker][sourceUnit][targetUnit];
                return Number((value * factor).toFixed(4));
            }
        }
    }
    return null;
};