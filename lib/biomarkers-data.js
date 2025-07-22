const biomarkersData = [
    // --- 1. General (Clinical) Blood Test (CBC) ---
    {
    id: 'rbc',
    name: 'Red Blood Cells (RBC)',
    description: 'Measures the number of red blood cells, which carry oxygen throughout the body.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Oxygen transport from lungs to tissues and carbon dioxide transport from tissues to lungs.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Red Blood Cells (RBC) are a component of the Complete Blood Count (CBC), a common blood test that provides information about the different cells in the blood. RBCs are specialized cells responsible for oxygen transport in the body.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>SI/Recommended:</strong> 10<sup>12</sup>/L (tera per liter)</li>
            <li><strong>Conventional:</strong> 10<sup>6</sup>/µL (millions per microliter), 10<sup>6</sup>/mm<sup>3</sup> (millions per cubic millimeter)</li>
            <li><em>Note: 10<sup>12</sup>/L is equivalent to 10<sup>6</sup>/µL or 10<sup>6</sup>/mm<sup>3</sup>.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges can vary slightly depending on the laboratory, altitude, and individual factors. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 4.0 - 6.0 x 10<sup>12</sup>/L (4.0 - 6.0 x 10<sup>6</sup>/µL)</li>
                    <li><strong>Infants (2 weeks - 2 months):</strong> 3.5 - 5.5 x 10<sup>12</sup>/L (3.5 - 5.5 x 10<sup>6</sup>/µL)</li>
                    <li><strong>Children (2 months - 6 years):</strong> 3.8 - 5.0 x 10<sup>12</sup>/L (3.8 - 5.0 x 10<sup>6</sup>/µL)</li>
                    <li><strong>Children (6 - 12 years):</strong> 4.0 - 5.3 x 10<sup>12</sup>/L (4.0 - 5.3 x 10<sup>6</sup>/µL)</li>
                    <li><strong>Adolescents (12 - 18 years):</strong>
                        <ul>
                            <li>Males: 4.5 - 5.5 x 10<sup>12</sup>/L (4.5 - 5.5 x 10<sup>6</sup>/µL)</li>
                            <li>Females: 4.0 - 5.0 x 10<sup>12</sup>/L (4.0 - 5.0 x 10<sup>6</sup>/µL)</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Adult Male:</strong> 4.5 - 5.9 x 10<sup>12</sup>/L (4.5 - 5.9 x 10<sup>6</sup>/µL)</li>
                    <li><strong>Adult Female (non-pregnant):</strong> 4.0 - 5.2 x 10<sup>12</sup>/L (4.0 - 5.2 x 10<sup>6</sup>/µL)</li>
                    <li><strong>Adult Female (pregnant):</strong> Reference ranges may be slightly lower due to hemodilution. Consult with a healthcare provider for specific ranges during pregnancy.</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> While often similar to adult values, a slight decrease in RBC count can be observed with advanced age. Generally, ranges remain close to adult values unless underlying conditions are present.</li>
            <li><em>Values can vary by age, altitude, and laboratory.</em></li>
        </ul>

        <h3>High RBC Count (Polycythemia):</h3>
        <p>An elevated RBC count, also known as polycythemia or erythrocytosis, indicates that the body is producing too many red blood cells. This can be a physiological response or indicate an underlying medical condition.</p>
        <ul>
            <li><strong>Dehydration:</strong> The most common cause of a transiently high RBC count. When the plasma volume decreases, the concentration of red blood cells appears higher.</li>
            <li><strong>Chronic Lung Disease (e.g., COPD, emphysema):</strong> The body compensates for reduced oxygen intake by producing more red blood cells to carry oxygen more efficiently.</li>
            <li><strong>Kidney Disease:</strong> Certain kidney conditions can lead to increased production of erythropoietin (EPO), a hormone that stimulates red blood cell production.</li>
            <li><strong>Polycythemia Vera:</strong> A rare chronic myeloproliferative disorder where the bone marrow produces too many red blood cells, as well as sometimes white blood cells and platelets, independently of erythropoietin levels.</li>
            <li><strong>Living at High Altitudes:</strong> The reduced oxygen pressure at higher altitudes triggers the body to produce more red blood cells to maintain adequate oxygen delivery.</li>
            <li><strong>Smoking:</strong> Chronic smoking can lead to higher carboxyhemoglobin levels, reducing oxygen delivery and stimulating RBC production.</li>
            <li><strong>Sleep Apnea:</strong> Intermittent hypoxia can stimulate erythropoiesis.</li>
            <li><strong>Certain Tumors:</strong> Rarely, some tumors can produce erythropoietin.</li>
        </ul>

        <h3>Low RBC Count (Anemia):</h3>
        <p>A lowered RBC count indicates anemia, a condition where the blood has a lower than normal number of red blood cells, or the red blood cells have less hemoglobin than normal. This impairs the blood's ability to carry oxygen.</p>
        <ul>
            <li><strong>Blood Loss:</strong> Acute (e.g., trauma, surgery) or chronic (e.g., gastrointestinal bleeding, heavy menstrual periods) blood loss is a common cause of anemia.</li>
            <li><strong>Nutritional Deficiencies:</strong>
                <ul>
                    <li><strong>Iron Deficiency Anemia:</strong> Insufficient iron, a crucial component of hemoglobin, leads to the production of small, pale red blood cells.</li>
                    <li><strong>Vitamin B12 Deficiency (Megaloblastic Anemia):</strong> Lack of vitamin B12 impairs DNA synthesis, leading to large, immature red blood cells.</li>
                    <li><strong>Folate Deficiency (Megaloblastic Anemia):</strong> Similar to B12 deficiency, folate deficiency also affects DNA synthesis.</li>
                </ul>
            </li>
            <li><strong>Bone Marrow Failure or Suppression:</strong> Conditions that affect the bone marrow's ability to produce blood cells, such as aplastic anemia, certain cancers (leukemia, lymphoma), chemotherapy, or radiation therapy.</li>
            <li><strong>Chronic Diseases:</strong> Anemia of chronic disease (ACD) can occur in individuals with long-term inflammatory conditions (e.g., rheumatoid arthritis, kidney disease, cancer, chronic infections). The body retains iron, making it unavailable for red blood cell production.</li>
            <li><strong>Hemolysis (Red Blood Cell Destruction):</strong> Conditions where red blood cells are destroyed prematurely, such as autoimmune hemolytic anemia, inherited disorders like sickle cell anemia or thalassemia, or certain drug reactions.</li>
            <li><strong>Kidney Failure:</strong> Damaged kidneys may not produce enough erythropoietin, leading to reduced red blood cell production.</li>
            <li><strong>Hypothyroidism:</strong> An underactive thyroid can sometimes lead to mild anemia.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>The RBC count is often interpreted in conjunction with other parameters of the Complete Blood Count (CBC), such as Hemoglobin (Hgb), Hematocrit (Hct), Mean Corpuscular Volume (MCV), and Red Cell Distribution Width (RDW). These additional markers help in differentiating the specific type and cause of anemia or polycythemia, guiding further diagnostic steps and treatment. For instance:</p>
        <ul>
            <li><strong>Hemoglobin (Hgb):</strong> Measures the amount of oxygen-carrying protein in the blood.</li>
            <li><strong>Hematocrit (Hct):</strong> Measures the percentage of blood volume occupied by red blood cells.</li>
            <li><strong>Mean Corpuscular Volume (MCV):</strong> Indicates the average size of red blood cells. It helps classify anemia as microcytic (small cells), normocytic (normal cells), or macrocytic (large cells).</li>
            <li><strong>Red Cell Distribution Width (RDW):</strong> Measures the variation in the size of red blood cells. An elevated RDW can indicate a mix of small and large red blood cells, often seen in nutritional deficiencies.</li>
        </ul>
        <p>Consulting a healthcare professional for interpretation of results is crucial, as individual factors and clinical context are essential for accurate diagnosis and management.</p>
    `,
    relatedBiomarkers: ['hgb', 'hct', 'mcv', 'rdw']
    },
    {
    id: 'hgb',
    name: 'Hemoglobin (HGB)',
    description: 'Measures the amount of oxygen-carrying protein in red blood cells.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Binding and transporting oxygen in the blood.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Hemoglobin (HGB) is a crucial protein found in red blood cells. It is a key component of the Complete Blood Count (CBC), providing vital information about the blood's oxygen-carrying capacity.</p>

        <h3>Role and Function:</h3>
        <p>Hemoglobin is responsible for binding to oxygen in the lungs and efficiently transporting it to all tissues and organs throughout the body. It also plays a role in carrying carbon dioxide from the tissues back to the lungs for exhalation. The iron within hemoglobin gives blood its red color.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (grams per liter)</li>
            <li><strong>Conventional Units:</strong> g/dL (grams per deciliter)</li>
            <li><em>Note: 1 g/L is equivalent to 0.1 g/dL. For example, 130 g/L is 13.0 g/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for hemoglobin can vary slightly depending on the laboratory, altitude, and individual factors such as age, sex, and pregnancy status. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 135 - 200 g/L (13.5 - 20.0 g/dL)</li>
                    <li><strong>Infants (2 months - 6 months):</strong> 95 - 135 g/L (9.5 - 13.5 g/dL)</li>
                    <li><strong>Children (6 months - 6 years):</strong> 110 - 140 g/L (11.0 - 14.0 g/dL)</li>
                    <li><strong>Children (6 - 12 years):</strong> 115 - 145 g/L (11.5 - 14.5 g/dL)</li>
                    <li><strong>Adolescents (12 - 18 years):</strong>
                        <ul>
                            <li>Males: 130 - 160 g/L (13.0 - 16.0 g/dL)</li>
                            <li>Females: 120 - 150 g/L (12.0 - 15.0 g/dL)</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Adult Male:</strong> 130 - 170 g/L (13.0 - 17.0 g/dL)</li>
                    <li><strong>Adult Female (non-pregnant):</strong> 115 - 150 g/L (11.5 - 15.0 g/dL)</li>
                    <li><strong>Adult Female (pregnant):</strong> Reference ranges are typically lower due to increased plasma volume (hemodilution). Often 110 g/L (11.0 g/dL) or higher in the first and third trimesters, and 105 g/L (10.5 g/dL) or higher in the second trimester are considered normal, but consult with a healthcare provider for specific ranges during pregnancy.</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> While often similar to adult values, a slight decrease in hemoglobin can be observed with advanced age. Generally, ranges remain close to adult values unless underlying conditions are present.</li>
            <li><em>Values can vary by age, pregnancy status, and laboratory.</em></li>
        </ul>

        <h3>High Hemoglobin (Polycythemia/Erythrocytosis):</h3>
        <p>An elevated hemoglobin level often parallels a high Red Blood Cell (RBC) count and can indicate several conditions where the body has an increased oxygen-carrying capacity or is trying to compensate for reduced oxygen supply.</p>
        <ul>
            <li><strong>Dehydration:</strong> A common cause of falsely elevated hemoglobin, as the fluid component of blood is reduced, making the concentration of hemoglobin appear higher.</li>
            <li><strong>Chronic Lung Disease (e.g., COPD, emphysema, pulmonary fibrosis):</strong> The body produces more red blood cells and hemoglobin to compensate for impaired oxygen uptake in the lungs.</li>
            <li><strong>Polycythemia Vera:</strong> A bone marrow disorder characterized by the overproduction of red blood cells, leading to increased hemoglobin levels.</li>
            <li><strong>Living at High Altitudes:</strong> Reduced atmospheric oxygen pressure stimulates increased production of erythropoietin, leading to higher hemoglobin to optimize oxygen transport.</li>
            <li><strong>Smoking:</strong> Chronic exposure to carbon monoxide from smoking reduces the oxygen-carrying capacity of hemoglobin, prompting the body to produce more hemoglobin to compensate.</li>
            <li><strong>Kidney Tumors:</strong> Rarely, certain kidney tumors can produce erythropoietin, stimulating red blood cell and hemoglobin production.</li>
            <li><strong>Sleep Apnea:</strong> Intermittent hypoxia during sleep can stimulate erythropoiesis.</li>
            <li><strong>Performance-Enhancing Drugs:</strong> The use of erythropoiesis-stimulating agents (e.g., EPO) can artificially increase hemoglobin levels.</li>
        </ul>

        <h3>Low Hemoglobin (Anemia):</h3>
        <p>A low hemoglobin level is the primary indicator of anemia, a condition where the blood's oxygen-carrying capacity is reduced, leading to symptoms like fatigue, weakness, shortness of breath, and pallor.</p>
        <ul>
            <li><strong>Blood Loss:</strong>
                <ul>
                    <li><strong>Acute Blood Loss:</strong> From trauma, surgery, or severe bleeding (e.g., gastrointestinal hemorrhage).</li>
                    <li><strong>Chronic Blood Loss:</strong> Often subtle and prolonged, such as from peptic ulcers, colon polyps/cancer, heavy menstrual bleeding, or frequent blood donations.</li>
                </ul>
            </li>
            <li><strong>Nutritional Deficiencies:</strong>
                <ul>
                    <li><strong>Iron Deficiency Anemia:</strong> The most common cause of anemia, resulting from insufficient iron to produce hemoglobin.</li>
                    <li><strong>Vitamin B12 Deficiency (Megaloblastic Anemia):</strong> Essential for red blood cell maturation, a deficiency leads to large, immature red blood cells with reduced hemoglobin.</li>
                    <li><strong>Folate Deficiency (Megaloblastic Anemia):</strong> Similar to B12, folate is crucial for DNA synthesis in red blood cells.</li>
                </ul>
            </li>
            <li><strong>Bone Marrow Disorders or Suppression:</strong> Conditions that impair the bone marrow's ability to produce healthy blood cells, including:
                <ul>
                    <li><strong>Aplastic Anemia:</strong> Bone marrow stops producing enough new blood cells.</li>
                    <li><strong>Leukemia, Lymphoma, Myeloma:</strong> Cancers affecting blood cell production in the bone marrow.</li>
                    <li><strong>Chemotherapy and Radiation Therapy:</strong> Can suppress bone marrow activity.</li>
                </ul>
            </li>
            <li><strong>Chronic Diseases:</strong>
                <ul>
                    <li><strong>Anemia of Chronic Disease (ACD):</strong> Common in inflammatory conditions (e.g., rheumatoid arthritis, Crohn's disease), kidney disease, cancer, and chronic infections. Inflammation interferes with iron utilization.</li>
                    <li><strong>Chronic Kidney Disease:</strong> Impaired kidney function leads to reduced production of erythropoietin, a hormone essential for red blood cell production.</li>
                </ul>
            </li>
            <li><strong>Hemolysis (Red Blood Cell Destruction):</strong> Conditions where red blood cells are prematurely destroyed:
                <ul>
                    <li><strong>Genetic Disorders:</strong> Such as Sickle Cell Anemia, Thalassemia, G6PD deficiency.</li>
                    <li><strong>Autoimmune Hemolytic Anemia:</strong> The immune system mistakenly attacks and destroys red blood cells.</li>
                    <li><strong>Drug-Induced Hemolysis:</strong> Certain medications can cause red blood cell destruction.</li>
                </ul>
            </li>
            <li><strong>Hypothyroidism:</strong> An underactive thyroid gland can sometimes be associated with mild anemia.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Hemoglobin levels are critically important for assessing a person's oxygen-carrying capacity. Abnormal levels almost always warrant further investigation to determine the underlying cause. When interpreting hemoglobin results, it is essential to consider them in conjunction with other CBC parameters, especially Red Blood Cells (RBC), Hematocrit (Hct), Mean Corpuscular Hemoglobin (MCH), and Mean Corpuscular Hemoglobin Concentration (MCHC). These related biomarkers provide a more comprehensive picture of red blood cell health:</p>
        <ul>
            <li><strong>Red Blood Cells (RBC):</strong> The total number of red blood cells.</li>
            <li><strong>Hematocrit (Hct):</strong> The percentage of red blood cells in the total blood volume.</li>
            <li><strong>Mean Corpuscular Hemoglobin (MCH):</strong> The average amount of hemoglobin in a single red blood cell.</li>
            <li><strong>Mean Corpuscular Hemoglobin Concentration (MCHC):</strong> The average concentration of hemoglobin in a given volume of red blood cells.</li>
        </ul>
        <p>Together, these values help clinicians classify the type of anemia (e.g., microcytic, normocytic, macrocytic) and narrow down potential causes, leading to appropriate diagnosis and treatment.</p>
    `,
    relatedBiomarkers: ['rbc', 'hct', 'mch', 'mchc']
},
    {
    id: 'hct',
    name: 'Hematocrit (HCT)',
    description: 'Measures the percentage of blood volume occupied by red blood cells.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Reflects the proportion of red blood cells in the total blood volume, indicating blood viscosity and oxygen-carrying capacity.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Hematocrit (HCT) is a vital measurement included in a Complete Blood Count (CBC). It represents the **volume percentage of red blood cells (RBCs) in a sample of whole blood**.</p>

        <h3>Role and Function:</h3>
        <p>Hematocrit directly reflects the proportion of your blood that is made up of oxygen-carrying red blood cells. It's an indirect measure of the blood's **oxygen-carrying capacity** and its **viscosity** (thickness). A higher hematocrit means a greater proportion of red blood cells, which generally translates to more oxygen being delivered to tissues, but also thicker blood.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> L/L (liter per liter) or a dimensionless fraction (e.g., 0.40)</li>
            <li><strong>Conventional Units:</strong> % (percentage)</li>
            <li><em>Note: L/L is often expressed as a percentage by multiplying by 100. For example, 0.40 L/L is equivalent to 40%.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for hematocrit can vary slightly depending on the laboratory, altitude, and individual factors such as age, sex, and pregnancy status. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 0.42 - 0.65 L/L (42% - 65%)</li>
                    <li><strong>Infants (2 months - 6 months):</strong> 0.28 - 0.42 L/L (28% - 42%)</li>
                    <li><strong>Children (6 months - 6 years):</strong> 0.33 - 0.43 L/L (33% - 43%)</li>
                    <li><strong>Children (6 - 12 years):</strong> 0.35 - 0.45 L/L (35% - 45%)</li>
                    <li><strong>Adolescents (12 - 18 years):</strong>
                        <ul>
                            <li>Males: 0.39 - 0.50 L/L (39% - 50%)</li>
                            <li>Females: 0.36 - 0.46 L/L (36% - 46%)</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Adult Male:</strong> 0.40 - 0.52 L/L (40% - 52%)</li>
                    <li><strong>Adult Female (non-pregnant):</strong> 0.36 - 0.48 L/L (36% - 48%)</li>
                    <li><strong>Adult Female (pregnant):</strong> Reference ranges are typically lower due to hemodilution (increased plasma volume). Normal ranges can be around 0.30 - 0.39 L/L (30% - 39%), but specific values depend on the trimester and individual circumstances. Consult with a healthcare provider for specific ranges during pregnancy.</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values, though a slight decrease may be observed with advanced age. Significant deviations should still be investigated.</li>
            <li><em>Values can vary by age, pregnancy status, and laboratory.</em></li>
        </ul>

        <h3>High Hematocrit (Polycythemia/Erythrocytosis):</h3>
        <p>A high hematocrit indicates an abnormally high proportion of red blood cells in the blood. This can lead to increased blood viscosity, potentially causing circulation problems.</p>
        <ul>
            <li><strong>Dehydration:</strong> The most common reason for a temporarily high hematocrit. When the body loses fluid, the plasma volume decreases, making the red blood cells more concentrated.</li>
            <li><strong>Polycythemia Vera:</strong> A bone marrow disorder where the body produces an excessive number of red blood cells, leading to a genuinely high hematocrit.</li>
            <li><strong>Chronic Lung Diseases (e.g., COPD, emphysema):</strong> The body attempts to compensate for chronic low oxygen levels by producing more red blood cells to improve oxygen delivery.</li>
            <li><strong>Living at High Altitudes:</strong> Adapting to lower oxygen levels at high altitudes stimulates the production of more red blood cells to enhance oxygen transport.</li>
            <li><strong>Sleep Apnea:</strong> Intermittent drops in blood oxygen during sleep can stimulate red blood cell production.</li>
            <li><strong>Kidney Conditions:</strong> Certain kidney diseases or tumors can abnormally increase erythropoietin production, stimulating red blood cell growth.</li>
            <li><strong>Smoking:</strong> Chronic smoking can lead to higher carboxyhemoglobin levels, reducing oxygen delivery and prompting an increase in red blood cell production to compensate.</li>
        </ul>

        <h3>Low Hematocrit (Anemia):</h3>
        <p>A low hematocrit indicates that a smaller than normal percentage of your blood is made up of red blood cells, which is a key indicator of anemia. This reduces the blood's capacity to carry oxygen, leading to symptoms like fatigue, weakness, and shortness of breath.</p>
        <ul>
            <li><strong>Blood Loss:</strong> Both acute (sudden, severe bleeding from injury or surgery) and chronic (long-term, slow bleeding from the gastrointestinal tract, heavy menstrual periods) blood loss are common causes of low hematocrit.</li>
            <li><strong>Nutritional Deficiencies:</strong>
                <ul>
                    <li><strong>Iron Deficiency:</strong> Essential for hemoglobin production, a lack of iron leads to smaller, fewer red blood cells.</li>
                    <li><strong>Vitamin B12 or Folate Deficiency:</strong> These vitamins are crucial for red blood cell maturation. Deficiencies lead to larger, but fewer, red blood cells.</li>
                </ul>
            </li>
            <li><strong>Bone Marrow Disorders or Suppression:</strong> Conditions that impair the bone marrow's ability to produce red blood cells, such as:
                <ul>
                    <li><strong>Aplastic Anemia:</strong> Bone marrow fails to produce enough blood cells.</li>
                    <li><strong>Leukemia or Lymphoma:</strong> Cancers affecting the bone marrow that interfere with normal blood cell production.</li>
                    <li><strong>Chemotherapy or Radiation:</strong> Medical treatments that can suppress bone marrow activity.</li>
                </ul>
            </li>
            <li><strong>Chronic Diseases:</strong>
                <ul>
                    <li><strong>Anemia of Chronic Disease (ACD):</strong> Associated with long-term inflammatory conditions (e.g., rheumatoid arthritis, Crohn's disease), infections, or cancers, where inflammation interferes with iron utilization.</li>
                    <li><strong>Chronic Kidney Disease:</strong> Damaged kidneys may not produce enough erythropoietin, the hormone that stimulates red blood cell production.</li>
                </ul>
            </li>
            <li><strong>Hemolysis (Red Blood Cell Destruction):</strong> Conditions where red blood cells are destroyed prematurely in the bloodstream:
                <ul>
                    <li><strong>Inherited Conditions:</strong> Like sickle cell anemia or thalassemia.</li>
                    <li><strong>Autoimmune Disorders:</strong> Where the body's immune system attacks its own red blood cells.</li>
                    <li><strong>Certain Medications or Toxins.</strong></li>
                </ul>
            </li>
            <li><strong>Fluid Overload (Hemodilution):</strong> Excessive fluid in the bloodstream, such as from aggressive intravenous fluid administration or certain kidney conditions, can dilute the blood and make the hematocrit appear lower, even if the actual number of red blood cells is normal.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Hematocrit is closely related to Red Blood Cells (RBC) count and Hemoglobin (HGB) concentration, as all three provide insights into the body's oxygen-carrying capacity. While a high hematocrit indicates more red blood cells, it also increases blood viscosity, which can raise the risk of blood clots. Conversely, a low hematocrit signifies reduced oxygen delivery, leading to fatigue and other anemia symptoms.</p>
        <p>Interpreting hematocrit levels requires considering the patient's overall clinical picture, including other CBC parameters and their medical history. For instance, a low hematocrit might be due to a true decrease in red blood cell mass or simply an increase in plasma volume. Healthcare professionals use this comprehensive approach to diagnose and manage conditions affecting red blood cells.</p>
    `,
    relatedBiomarkers: ['rbc', 'hgb']
    },
    {
    id: 'mcv',
    name: 'Mean Corpuscular Volume (MCV)',
    description: 'Measures the average size of red blood cells.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Classifying anemia based on red blood cell size (microcytic, normocytic, macrocytic).',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Mean Corpuscular Volume (MCV) is one of the "red blood cell indices" included in a Complete Blood Count (CBC). It provides a quantitative measure of the **average volume or size of individual red blood cells (RBCs)**.</p>

        <h3>Role and Function:</h3>
        <p>The primary role of MCV is in the **morphological classification of anemia**. By determining the average size of red blood cells, MCV helps narrow down the potential causes of anemia, categorizing it as microcytic (small cells), normocytic (normal cells), or macrocytic (large cells). This classification is critical for guiding further diagnostic tests and treatment strategies.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> fL (femtoliter)</li>
            <li><strong>Conventional Units:</strong> µm<sup>3</sup> (cubic micrometer)</li>
            <li><em>Note: 1 fL is equivalent to 1 µm<sup>3</sup>.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for MCV can vary slightly depending on the laboratory and age. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 95 - 120 fL</li>
                    <li><strong>Infants (2 months - 2 years):</strong> 70 - 85 fL</li>
                    <li><strong>Children (2 - 12 years):</strong> 75 - 90 fL</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> 80 - 96 fL</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 80 - 100 fL</li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values, though a slight increase in MCV can sometimes be observed in the elderly without specific pathology.</li>
            <li><em>Values can vary by age and laboratory.</em></li>
        </ul>

        <h3>High MCV (Macrocytic Anemia):</h3>
        <p>A high MCV indicates that the red blood cells are larger than normal. This condition is known as macrocytosis, and if accompanied by a low red blood cell count, it suggests macrocytic anemia. The underlying causes usually involve impaired DNA synthesis or other issues affecting cell division during red blood cell production.</p>
        <ul>
            <li><strong>Vitamin B12 Deficiency:</strong> A common cause, as B12 is crucial for DNA synthesis and proper red blood cell maturation. This can be due to inadequate dietary intake, malabsorption (e.g., pernicious anemia, Crohn's disease), or certain medications.</li>
            <li><strong>Folate Deficiency:</strong> Similar to B12 deficiency, a lack of folate (folic acid) impairs DNA synthesis, leading to the production of large, immature red blood cells. Causes include poor diet, malabsorption, or increased demand (e.g., pregnancy).</li>
            <li><strong>Liver Disease:</strong> Chronic liver disease can lead to changes in red blood cell membranes and lipid metabolism, resulting in macrocytosis.</li>
            <li><strong>Alcoholism:</strong> Chronic heavy alcohol consumption can directly suppress bone marrow activity, interfere with folate metabolism, and cause macrocytosis even without overt liver disease or nutritional deficiencies.</li>
            <li><strong>Hypothyroidism:</strong> An underactive thyroid can sometimes lead to mild macrocytosis.</li>
            <li><strong>Myelodysplastic Syndromes (MDS):</strong> A group of bone marrow disorders where the bone marrow produces abnormal or immature blood cells, including large red blood cells that don't mature properly.</li>
            <li><strong>Certain Medications:</strong> Some drugs, like hydroxyurea, methotrexate, azathioprine, or antiretroviral drugs, can cause macrocytosis as a side effect.</li>
            <li><strong>Reticulocytosis:</strong> An increase in the number of reticulocytes (immature red blood cells), which are larger than mature red blood cells, can cause a slight increase in MCV. This is a physiological response to rapid red blood cell production (e.g., after acute blood loss or treatment for anemia).</li>
        </ul>

        <h3>Low MCV (Microcytic Anemia):</h3>
        <p>A low MCV indicates that the red blood cells are smaller than normal. This condition is known as microcytosis, and if associated with a low red blood cell count and hemoglobin, it suggests microcytic anemia. The primary causes involve defects in hemoglobin synthesis, which lead to smaller cells.</p>
        <ul>
            <li><strong>Iron Deficiency Anemia:</strong> The most common cause of microcytic anemia. Insufficient iron impairs hemoglobin production, leading to smaller, hypochromic (pale) red blood cells. Causes include chronic blood loss, inadequate dietary iron intake, or malabsorption.</li>
            <li><strong>Thalassemia:</strong> A group of inherited blood disorders characterized by abnormal hemoglobin production, resulting in microcytic, hypochromic red blood cells. The severity varies widely.</li>
            <li><strong>Anemia of Chronic Disease (ACD):</strong> While often normocytic, ACD can sometimes present as microcytic, especially in severe or prolonged cases. Inflammation can impair iron utilization.</li>
            <li><strong>Sideroblastic Anemia:</strong> A rare group of disorders where the body has sufficient iron but is unable to incorporate it into hemoglobin, leading to ineffective red blood cell production and often microcytic or dimorphic (mixed) cells. Can be inherited or acquired.</li>
            <li><strong>Lead Poisoning:</strong> Lead interferes with heme synthesis, leading to microcytic anemia.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>MCV is a critical parameter for the initial workup of anemia. Once anemia is identified (low Hgb and/or RBC count), the MCV helps to classify it:</p>
        <ul>
            <li><strong>Microcytic Anemia (Low MCV):</strong> Often points towards iron deficiency or thalassemia.</li>
            <li><strong>Normocytic Anemia (Normal MCV):</strong> Can indicate acute blood loss, anemia of chronic disease (early stages), kidney disease, or aplastic anemia.</li>
            <li><strong>Macrocytic Anemia (High MCV):</strong> Commonly suggests vitamin B12 or folate deficiency, liver disease, alcoholism, or myelodysplastic syndromes.</li>
        </ul>
        <p>By using MCV in conjunction with other red blood cell indices like Mean Corpuscular Hemoglobin (MCH), Mean Corpuscular Hemoglobin Concentration (MCHC), and Red Cell Distribution Width (RDW), clinicians can gain a much clearer picture of the underlying pathology of anemia, enabling targeted diagnostic testing and effective treatment.</p>
    `,
    relatedBiomarkers: ['rbc', 'mch', 'mchc']
    },
    {
    id: 'mch',
    name: 'Mean Corpuscular Hemoglobin (MCH)',
    description: 'Measures the average amount of hemoglobin in a single red blood cell.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Indicates the average hemoglobin content per red blood cell.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Mean Corpuscular Hemoglobin (MCH) is one of the red blood cell indices included in a Complete Blood Count (CBC). It quantifies the **average weight or absolute amount of hemoglobin contained in a single red blood cell (RBC)**.</p>

        <h3>Role and Function:</h3>
        <p>MCH helps in the **classification of anemia** by indicating how much hemoglobin, the oxygen-carrying protein, is present in an average red blood cell. It is particularly useful when interpreted alongside MCV (Mean Corpuscular Volume) and MCHC (Mean Corpuscular Hemoglobin Concentration) to characterize the morphology of red blood cells and diagnose specific types of anemia.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pg (picogram)</li>
            <li><em>Note: 1 picogram (pg) is one trillionth of a gram ($10^{-12}$ grams).</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for MCH can vary slightly depending on the laboratory and age. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 32 - 40 pg</li>
                    <li><strong>Infants (2 months - 2 years):</strong> 24 - 30 pg</li>
                    <li><strong>Children (2 - 12 years):</strong> 25 - 33 pg</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> 27 - 32 pg</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 27 - 34 pg</li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High MCH (Increased Hemoglobin per Cell):</h3>
        <p>A high MCH indicates that the average red blood cell contains more hemoglobin than normal. This is less common than low MCH and is typically seen when red blood cells themselves are larger (macrocytic).</p>
        <ul>
            <li><strong>Macrocytic Anemias:</strong> Most commonly associated with conditions that cause larger-than-normal red blood cells (high MCV), such as:
                <ul>
                    <li><strong>Vitamin B12 Deficiency:</strong> Impaired DNA synthesis leads to fewer, but larger, red blood cells that may contain more hemoglobin on average.</li>
                    <li><strong>Folate Deficiency:</strong> Similar to B12 deficiency, leading to macrocytic red blood cells.</li>
                </ul>
            </li>
            <li><strong>Liver Disease:</strong> Can cause macrocytosis and sometimes increased MCH.</li>
            <li><strong>Alcoholism:</strong> Chronic alcohol use can lead to macrocytosis and may result in increased MCH.</li>
            <li><strong>Spherocytosis:</strong> In hereditary spherocytosis, red blood cells are smaller but more concentrated with hemoglobin, which can sometimes lead to an increased MCH (though MCHC is typically more strikingly elevated).</li>
            <li><strong>Cold Agglutinin Disease:</strong> Certain conditions where red blood cells clump together in cold temperatures, which can artificially increase MCH readings.</li>
        </ul>

        <h3>Low MCH (Hypochromic):</h3>
        <p>A low MCH indicates that the average red blood cell contains less hemoglobin than normal. This is often associated with smaller (microcytic) and paler red blood cells, a condition known as hypochromia.</p>
        <ul>
            <li><strong>Iron Deficiency Anemia:</strong> The most frequent cause of low MCH. Insufficient iron leads to impaired hemoglobin synthesis, resulting in red blood cells that are smaller and contain less hemoglobin.</li>
            <li><strong>Thalassemia:</strong> A group of inherited blood disorders characterized by reduced or absent synthesis of globin chains, leading to microcytic, hypochromic red blood cells with low MCH.</li>
            <li><strong>Anemia of Chronic Disease (ACD):</strong> In some cases, particularly in more severe or prolonged forms, ACD can lead to a low MCH, as inflammation interferes with iron utilization.</li>
            <li><strong>Sideroblastic Anemia:</strong> A group of disorders where the body has iron but cannot incorporate it into hemoglobin, leading to hypochromic cells.</li>
            <li><strong>Lead Poisoning:</strong> Lead interferes with heme synthesis, resulting in low MCH.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>While MCH gives the average hemoglobin content per cell, it's often more informative to interpret it in conjunction with MCV and MCHC. For example:</p>
        <ul>
            <li><strong>Low MCV and Low MCH:</strong> Strongly suggestive of microcytic, hypochromic anemia, most commonly iron deficiency or thalassemia.</li>
            <li><strong>High MCV and High MCH:</strong> Suggestive of macrocytic anemia, often due to Vitamin B12 or folate deficiency.</li>
            <li><strong>MCH vs. MCHC:</strong> MCH measures the *amount* of hemoglobin per cell, while MCHC (Mean Corpuscular Hemoglobin Concentration) measures the *concentration* of hemoglobin within a given volume of red blood cells. MCHC is often considered a more reliable indicator of hypochromia, as it accounts for the cell's volume. However, both provide valuable information about hemoglobin content.</li>
        </ul>
        <p>Together, these red blood cell indices (MCV, MCH, MCHC) are powerful tools for narrowing down the differential diagnosis of anemia, guiding further investigation and appropriate management.</p>
    `,
    relatedBiomarkers: ['rbc', 'hgb', 'mcv', 'mchc']
    },
    {
    id: 'mchc',
    name: 'Mean Corpuscular Hemoglobin Concentration (MCHC)',
    description: 'Measures the average concentration of hemoglobin in red blood cells.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Indicates the average concentration of hemoglobin within a given volume of red blood cells.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Mean Corpuscular Hemoglobin Concentration (MCHC) is another important red blood cell index provided as part of a Complete Blood Count (CBC). It measures the **average concentration of hemoglobin within a given volume of packed red blood cells**.</p>

        <h3>Role and Function:</h3>
        <p>MCHC is a crucial indicator of the **color intensity or "fullness" of red blood cells** with hemoglobin. It helps classify anemias based on this characteristic: cells with low MCHC are termed "hypochromic" (pale), while those with normal MCHC are "normochromic." True "hyperchromia" (high MCHC) is rare and often points to specific red blood cell abnormalities rather than an excess of hemoglobin in normal cells.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (grams per liter)</li>
            <li><strong>Conventional Units:</strong> g/dL (grams per deciliter) or % (percentage)</li>
            <li><em>Note: 1 g/L is equivalent to 0.1 g/dL. Therefore, 320 g/L is 32.0 g/dL. MCHC can also be expressed as a percentage, where 32 g/dL is 32%.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for MCHC can vary slightly depending on the laboratory. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 300 - 360 g/L (30 - 36 g/dL)</li>
                    <li><strong>Infants (2 months - 2 years):</strong> 300 - 350 g/L (30 - 35 g/dL)</li>
                    <li><strong>Children (2 - 12 years):</strong> 320 - 360 g/L (32 - 36 g/dL)</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> 320 - 360 g/L (32 - 36 g/dL)</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 320 - 360 g/L (32 - 36 g/dL)</li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High MCHC (Hyperchromic):</h3>
        <p>A high MCHC indicates an increased concentration of hemoglobin within the red blood cells, making them appear "hyperchromic." True hyperchromia is biologically limited because red blood cells have a finite capacity for hemoglobin. Therefore, a high MCHC usually suggests specific issues affecting red blood cell shape or detection rather than an overproduction of hemoglobin.</p>
        <ul>
            <li><strong>Hereditary Spherocytosis:</strong> An inherited disorder where red blood cells are abnormally small and spherical, leading to a denser packing of hemoglobin and an elevated MCHC. This is one of the few conditions where true "hyperchromia" is observed.</li>
            <li><strong>Severe Dehydration:</strong> While it primarily affects HCT and RBC count, severe dehydration can sometimes lead to an apparent increase in MCHC due to fluid shifts.</li>
            <li><strong>Autoimmune Hemolytic Anemia:</strong> Can sometimes be associated with a high MCHC due to red blood cell agglutination (clumping) or spherocytosis.</li>
            <li><strong>Lab Errors/Interferences:</strong>
                <ul>
                    <li><strong>Cold Agglutinins:</strong> Antibodies that cause red blood cells to clump together at colder temperatures, which can lead to falsely elevated MCHC readings on automated analyzers.</li>
                    <li><strong>Lipemia (high fats in blood) or Hyperbilirubinemia (high bilirubin):</strong> Severe cases can interfere with spectrophotometric hemoglobin measurement, leading to falsely high MCHC.</li>
                </ul>
            </li>
            <li><strong>Sickle Cell Disease:</strong> In some cases, severely dehydrated sickle cells can have an increased MCHC.</li>
        </ul>

        <h3>Low MCHC (Hypochromic):</h3>
        <p>A low MCHC indicates that the red blood cells have a decreased concentration of hemoglobin, making them appear "hypochromic" or paler than normal. This signifies that the cells are not adequately filled with hemoglobin.</p>
        <ul>
            <li><strong>Iron Deficiency Anemia:</strong> The most common cause of low MCHC. Without sufficient iron, the body cannot produce enough hemoglobin, leading to red blood cells that are both smaller (low MCV) and paler (low MCHC).</li>
            <li><strong>Thalassemia:</strong> A group of inherited disorders characterized by reduced or absent production of globin chains, which are components of hemoglobin. This results in red blood cells that are typically small (low MCV) and pale (low MCHC).</li>
            <li><strong>Anemia of Chronic Disease (ACD):</strong> While often normocytic and normochromic, in more severe or prolonged cases, ACD can lead to hypochromia (low MCHC) due to impaired iron utilization.</li>
            <li><strong>Sideroblastic Anemia:</strong> A rare group of disorders where the body has iron but cannot effectively incorporate it into hemoglobin, leading to hypochromic red blood cells.</li>
            <li><strong>Lead Poisoning:</strong> Can interfere with heme synthesis, resulting in hypochromic red blood cells.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>MCHC is considered the most reliable indicator of whether red blood cells are hypochromic (pale) or normochromic (normal color). Unlike MCH, which measures the absolute amount of hemoglobin, MCHC provides the concentration, taking into account the cell's volume. This makes it a more direct measure of the cellular hemoglobin density.</p>
        <p>Together with MCV (Mean Corpuscular Volume) and MCH (Mean Corpuscular Hemoglobin), MCHC forms the core of red blood cell indices. These indices are invaluable for the initial differentiation and classification of anemias:</p>
        <ul>
            <li><strong>Microcytic Hypochromic Anemia (Low MCV, Low MCH, Low MCHC):</strong> Highly suggestive of iron deficiency anemia or thalassemia.</li>
            <li><strong>Normocytic Normochromic Anemia (Normal MCV, Normal MCH, Normal MCHC):</strong> Often seen in acute blood loss, anemia of chronic disease, kidney disease, or aplastic anemia.</li>
            <li><strong>Macrocytic Normochromic Anemia (High MCV, Normal MCH, Normal MCHC):</strong> Typically seen in Vitamin B12 or folate deficiency, where cells are large but contain a normal concentration of hemoglobin for their size.</li>
        </ul>
        <p>MCHC, in particular, is crucial in identifying conditions like hereditary spherocytosis (where it is characteristically elevated) and in confirming iron deficiency or thalassemia (where it is decreased). Interpreting MCHC in the context of the full CBC and clinical presentation is essential for accurate diagnosis.</p>
    `,
    relatedBiomarkers: ['rbc', 'hgb', 'mcv', 'mch']
    },
    {
    id: 'rdw',
    name: 'Red Cell Distribution Width (RDW)',
    description: 'Measures the variation in size of red blood cells.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Assessing the uniformity of red blood cell size (anisocytosis).',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Red Cell Distribution Width (RDW) is a parameter included in a Complete Blood Count (CBC). It quantifies the **variation in the size of red blood cells (RBCs) within a blood sample**.</p>

        <h3>Role and Function:</h3>
        <p>RDW is a valuable tool for assessing **anisocytosis**, which refers to the presence of red blood cells of unequal size. While Mean Corpuscular Volume (MCV) provides the average size of RBCs, RDW indicates the heterogeneity or variability in their sizes. A higher RDW suggests a greater range of red blood cell sizes, which can be an early indicator of certain types of anemia or other underlying conditions, even before MCV falls outside the normal range.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> % (percentage)</li>
            <li><strong>Conventional Units:</strong> % (percentage)</li>
            <li><em>Note: RDW is usually expressed as a percentage, representing the coefficient of variation of the red blood cell volume.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for RDW can vary slightly depending on the laboratory. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 14.9% - 18.7% (higher due to physiological anisocytosis)</li>
                    <li><strong>Infants (up to 6 months):</strong> Varies, generally higher than adults, then gradually normalizes.</li>
                    <li><strong>Children (6 months - 18 years):</strong> Typically similar to adult ranges, around 11.5% - 14.5%.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 11.5% - 14.5%</li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values, though a slight increase might be observed without specific pathology.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High RDW (Anisocytosis):</h3>
        <p>A high RDW indicates significant variation in red blood cell size (anisocytosis). This means there's a mix of smaller and larger red blood cells than normal, often reflecting ineffective red blood cell production or increased red blood cell destruction. A high RDW is frequently an early sign of developing anemia or can help differentiate between types of anemia.</p>
        <ul>
            <li><strong>Iron Deficiency Anemia:</strong> One of the most common causes of an elevated RDW. As iron deficiency progresses, the bone marrow produces new, smaller red blood cells while older, larger cells are still circulating, leading to a wide variation in size. This can be elevated even before MCV drops below normal.</li>
            <li><strong>Vitamin B12 Deficiency (Megaloblastic Anemia):</strong> Another frequent cause. Impaired DNA synthesis leads to the production of large, often abnormally shaped, red blood cells, which coexist with normal-sized or smaller cells, increasing RDW.</li>
            <li><strong>Folate Deficiency (Megaloblastic Anemia):</strong> Similar to B12 deficiency, leading to increased RDW.</li>
            <li><strong>Early Anemia or Dual Deficiency:</strong> RDW can be elevated early in the course of iron deficiency or B12/folate deficiency, sometimes even before MCV changes. It can also be high in cases of a dual deficiency (e.g., both iron and B12 deficiency).</li>
            <li><strong>Thalassemia Traits/Minor:</strong> In some forms of thalassemia, especially heterozygotes, RDW can be normal or mildly elevated despite a low MCV, which helps differentiate it from iron deficiency. However, in more severe forms, RDW can be elevated.</li>
            <li><strong>Sickle Cell Anemia and other Hemoglobinopathies:</strong> These conditions involve abnormal red blood cell shapes and sizes, leading to increased RDW.</li>
            <li><strong>Myelodysplastic Syndromes (MDS):</strong> Disorders affecting bone marrow cell production can lead to a diverse population of red blood cells.</li>
            <li><strong>Liver Disease:</strong> Can cause various red blood cell abnormalities, including anisocytosis.</li>
            <li><strong>Chronic Kidney Disease:</strong> Impaired erythropoiesis can sometimes result in an elevated RDW.</li>
            <li><strong>Post-Transfusion:</strong> After a blood transfusion, the patient's existing red blood cells mix with transfused cells, which can lead to a temporary increase in RDW.</li>
        </ul>

        <h3>Low RDW:</h3>
        <p>A low RDW means that the red blood cells are very uniform in size, with little variation. A low RDW is generally **not considered clinically significant** and indicates a healthy and homogeneous red blood cell population. It is usually a normal finding.</p>
        <ul>
            <li>It suggests that the red blood cells are all roughly the same size, which is a sign of healthy and consistent red blood cell production.</li>
            <li>In the context of anemia, a normal or low RDW with a low MCV might suggest conditions like thalassemia trait (minor), where the cells are uniformly small but not widely varied in size, in contrast to iron deficiency where RDW is typically high.</li>
            <li>It does not typically indicate a pathological condition on its own.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>RDW is particularly useful in the **differential diagnosis of anemias**, especially when considered alongside MCV:</p>
        <ul>
            <li>**Normal MCV with High RDW:** This pattern can indicate early iron deficiency anemia, early B12/folate deficiency, or dimorphic anemia (a mixture of microcytic and macrocytic cells, e.g., iron deficiency with megaloblastic anemia). It can also be seen in chronic liver disease or myelodysplastic syndromes.</li>
            <li>**Low MCV with High RDW:** Strongly suggestive of iron deficiency anemia.</li>
            <li>**Low MCV with Normal RDW:** Often points towards thalassemia trait or chronic disease anemia (though ACD can also have a normal RDW).</li>
            <li>**High MCV with High RDW:** Characteristic of Vitamin B12 or folate deficiency (megaloblastic anemias).</li>
            <li>**High MCV with Normal RDW:** Less common, but can be seen in aplastic anemia or pre-leukemia.</li>
        </ul>
        <p>RDW acts as an early warning sign for many anemias and helps clinicians differentiate between similar-looking anemias based solely on MCV. It provides valuable insight into the underlying bone marrow activity and the presence of heterogeneous red blood cell populations.</p>
    `,
    relatedBiomarkers: ['rbc', 'mcv']
    },
    {
    id: 'wbc',
    name: 'White Blood Cells (WBC)',
    description: 'Measures the total number of white blood cells, which fight infection.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Immune defense against infections, inflammation, and other foreign substances.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>White Blood Cells (WBCs), also known as leukocytes, are a critical component of the Complete Blood Count (CBC). They are a diverse group of cells that are central to the body's immune system.</p>

        <h3>Role and Function:</h3>
        <p>WBCs are the body's primary defense mechanism against infection, inflammation, allergic reactions, and foreign invaders (such as bacteria, viruses, fungi, and parasites). They identify, destroy, and remove harmful substances and cellular debris. Different types of WBCs (neutrophils, lymphocytes, monocytes, eosinophils, and basophils) have specialized roles in this immune response.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> 10<sup>9</sup>/L (giga per liter)</li>
            <li><strong>Conventional Units:</strong> 10<sup>3</sup>/µL (thousands per microliter) or 10<sup>3</sup>/mm<sup>3</sup> (thousands per cubic millimeter)</li>
            <li><em>Note: 10<sup>9</sup>/L is equivalent to 10<sup>3</sup>/µL or 10<sup>3</sup>/mm<sup>3</sup>.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for WBC count can vary slightly depending on the laboratory, age, time of day, stress levels, and other physiological factors. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 9.0 - 30.0 x 10<sup>9</sup>/L (9.0 - 30.0 x 10<sup>3</sup>/µL) - typically higher at birth and gradually decreases.</li>
                    <li><strong>Infants (2 months - 1 year):</strong> 6.0 - 17.5 x 10<sup>9</sup>/L (6.0 - 17.5 x 10<sup>3</sup>/µL)</li>
                    <li><strong>Children (1 - 6 years):</strong> 5.0 - 15.0 x 10<sup>9</sup>/L (5.0 - 15.0 x 10<sup>3</sup>/µL)</li>
                    <li><strong>Children (6 - 12 years):</strong> 4.5 - 13.0 x 10<sup>9</sup>/L (4.5 - 13.0 x 10<sup>3</sup>/µL)</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> 4.5 - 11.0 x 10<sup>9</sup>/L (4.5 - 11.0 x 10<sup>3</sup>/µL)</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 4.0 - 11.0 x 10<sup>9</sup>/L (4.0 - 11.0 x 10<sup>3</sup>/µL)</li>
            <li><strong>Elderly (over 65 years):</strong> Reference ranges are generally similar to adult values, though some studies suggest a slight decrease in the upper limit in very elderly individuals. The immune response might also be less robust.</li>
            <li><em>Values can vary by age, time of day, stress, and laboratory.</em></li>
        </ul>

        <h3>High WBC Count (Leukocytosis):</h3>
        <p>An elevated WBC count indicates an increase in the total number of white blood cells. This is a common finding and usually signifies that the body is mounting an immune response or experiencing inflammation.</p>
        <ul>
            <li><strong>Infection:</strong> The most common cause.
                <ul>
                    <li><strong>Bacterial Infections:</strong> Often lead to a significant increase in neutrophils.</li>
                    <li><strong>Viral Infections:</strong> Can cause an increase in lymphocytes.</li>
                    <li><strong>Fungal or Parasitic Infections:</strong> May also cause leukocytosis.</li>
                </ul>
            </li>
            <li><strong>Inflammation:</strong> Acute or chronic inflammatory conditions (e.g., arthritis, inflammatory bowel disease, tissue injury, burns) trigger the release of WBCs.</li>
            <li><strong>Stress (Physical or Emotional):</strong> Severe physical exertion, surgery, trauma, intense emotional stress, or even extreme cold can cause a temporary increase in WBCs, particularly neutrophils.</li>
            <li><strong>Allergic Reactions:</strong> Can lead to an increase in eosinophils and sometimes other WBC types.</li>
            <li><strong>Leukemia:</strong> Cancers of the blood-forming tissues (bone marrow) can result in a massive overproduction of abnormal white blood cells (e.g., myeloid leukemia, lymphocytic leukemia).</li>
            <li><strong>Corticosteroid Use:</strong> Medications like prednisone can cause an increase in WBCs by preventing them from leaving the bloodstream.</li>
            <li><strong>Smoking:</strong> Chronic smokers often have slightly higher WBC counts.</li>
            <li><strong>Myeloproliferative Disorders:</strong> A group of bone marrow diseases that cause overproduction of one or more types of blood cells.</li>
            <li><strong>Tissue Damage/Necrosis:</strong> Such as from a heart attack or stroke.</li>
        </ul>

        <h3>Low WBC Count (Leukopenia):</h3>
        <p>A low WBC count indicates a decreased total number of white blood cells, meaning the body's ability to fight off infection may be compromised. The specific implications depend on which type of WBC is primarily affected.</p>
        <ul>
            <li><strong>Viral Infections:</strong> Many viral infections (e.g., influenza, measles, HIV, infectious mononucleosis) can temporarily suppress bone marrow activity or cause WBCs to move out of the bloodstream.</li>
            <li><strong>Bone Marrow Problems:</strong> Conditions that impair the bone marrow's ability to produce blood cells:
                <ul>
                    <li><strong>Aplastic Anemia:</strong> Bone marrow fails to produce enough new blood cells.</li>
                    <li><strong>Chemotherapy or Radiation Therapy:</strong> Common side effects of cancer treatments that damage bone marrow.</li>
                    <li><strong>Certain Medications:</strong> (e.g., some antibiotics, diuretics, antithyroid drugs, psychiatric medications, immunosuppressants) can suppress WBC production.</li>
                    <li><strong>Myelodysplastic Syndromes (MDS):</strong> Bone marrow disorders that result in ineffective blood cell production.</li>
                    <li><strong>Bone Marrow Infiltrating Diseases:</strong> Such as certain cancers (e.g., lymphoma, multiple myeloma) that spread to the bone marrow.</li>
                </ul>
            </li>
            <li><strong>Autoimmune Diseases:</strong> Conditions where the immune system attacks the body's own healthy cells, including white blood cells (e.g., Lupus, Rheumatoid Arthritis).</li>
            <li><strong>Severe Infections (Sepsis):</strong> In overwhelming infections, WBCs may be consumed faster than they can be produced, or they may move into tissues, leading to a drop in circulating WBCs.</li>
            <li><strong>Nutritional Deficiencies:</strong> Severe deficiencies in vitamins like B12 or folate can impact WBC production.</li>
            <li><strong>Enlarged Spleen (Hypersplenism):</strong> An overactive or enlarged spleen can trap and destroy white blood cells, leading to lower counts.</li>
            <li><strong>Alcohol Abuse:</strong> Chronic heavy alcohol use can suppress bone marrow.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>The total WBC count provides a general overview of the immune system's status. However, for a more detailed understanding, it is crucial to analyze the **WBC Differential Count**, which breaks down the total WBCs into their five main types:</p>
        <ul>
            <li><strong>Neutrophils:</strong> Primarily fight bacterial and fungal infections.</li>
            <li><strong>Lymphocytes:</strong> Crucial for fighting viral infections and in immune surveillance (T cells and B cells).</li>
            <li><strong>Monocytes:</strong> Phagocytic cells that engulf and digest foreign material; precursors to macrophages.</li>
            <li><strong>Eosinophils:</strong> Involved in allergic reactions and defense against parasites.</li>
            <li><strong>Basophils:</strong> Release histamine and other mediators in allergic reactions and inflammatory responses.</li>
        </ul>
        <p>Changes in the total WBC count, combined with alterations in the proportions of these individual cell types, provide vital clues for diagnosing a wide range of conditions, from common infections to serious bone marrow disorders and autoimmune diseases. Interpretation should always be done by a healthcare professional in the context of a patient's symptoms and medical history.</p>
    `,
    relatedBiomarkers: ['neutrophils', 'lymphocytes', 'monocytes', 'eosinophils', 'basophils']
    },
    {
    id: 'neutrophils',
    name: 'Neutrophils',
    description: 'A type of white blood cell that fights bacterial and fungal infections.',
    type: 'White Blood Cell Differential',
    responsibleFor: 'Primary responders to bacterial and fungal infections; phagocytosis.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Neutrophils are the most abundant type of white blood cell (WBC) and are a key component of the **White Blood Cell Differential**, which breaks down the total WBC count into its specific cell types. They are granular leukocytes, meaning they contain granules in their cytoplasm.</p>

        <h3>Role and Function:</h3>
        <p>Neutrophils are the **first responders** to infection and inflammation, particularly against **bacterial and fungal pathogens**. Their primary function is **phagocytosis**, a process where they engulf and digest harmful microorganisms, foreign particles, and cellular debris. They are rapidly mobilized from the bone marrow to sites of infection, forming a crucial part of the innate immune response.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>Percentage:</strong> % (percentage) of total white blood cells. This indicates their relative proportion among all WBCs.</li>
            <li><strong>Absolute Count (SI/Recommended):</strong> 10<sup>9</sup>/L (giga per liter). This is often more clinically significant as it indicates the actual number of neutrophils present, regardless of changes in other WBC types. For example, 2.0 - 7.5 x 10<sup>9</sup>/L.</li>
            <li><strong>Conventional Units:</strong> 10<sup>3</sup>/µL (thousands per microliter) or 10<sup>3</sup>/mm<sup>3</sup> (thousands per cubic millimeter).</li>
            <li><em>Note: 10<sup>9</sup>/L is equivalent to 10<sup>3</sup>/µL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for neutrophils can vary slightly depending on the laboratory, age, and physiological factors. The absolute neutrophil count (ANC) is often more important for clinical interpretation than the percentage.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> Absolute: 6.0 - 26.0 x 10<sup>9</sup>/L. Percentage: Variable, high initially.</li>
                    <li><strong>Infants (2 months - 1 year):</strong> Absolute: 1.0 - 8.5 x 10<sup>9</sup>/L. Percentage: Often less than lymphocytes in early infancy.</li>
                    <li><strong>Children (1 - 6 years):</strong> Absolute: 1.5 - 8.0 x 10<sup>9</sup>/L. Percentage: Gradually increases to adult proportions.</li>
                    <li><strong>Children (6 - 12 years):</strong> Absolute: 1.8 - 8.0 x 10<sup>9</sup>/L. Percentage: Similar to adults.</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> Absolute: 2.0 - 7.5 x 10<sup>9</sup>/L. Percentage: 40% - 75%.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Percentage of total WBC:</strong> 40% - 75%</li>
                    <li><strong>Absolute Neutrophil Count (ANC):</strong> 2.0 - 7.5 x 10<sup>9</sup>/L (2,000 - 7,500/µL)</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values, though some studies suggest a tendency towards slightly lower absolute counts in very elderly individuals, or a blunted response to infection.</li>
            <li><em>Values can vary by age, time of day, stress, and laboratory.</em></li>
        </ul>

        <h3>High Neutrophils (Neutrophilia):</h3>
        <p>An elevated neutrophil count (neutrophilia) is the most common type of leukocytosis and usually indicates that the body is actively fighting off an infection or responding to inflammation.</p>
        <ul>
            <li><strong>Bacterial Infections:</strong> The most frequent cause. Severe bacterial infections often lead to a significant increase in neutrophils, including immature forms (left shift).</li>
            <li><strong>Inflammation:</strong> Acute and chronic inflammatory conditions (e.g., appendicitis, rheumatoid arthritis, gout, inflammatory bowel disease, pancreatitis) trigger neutrophil release.</li>
            <li><strong>Stress (Physiological/Emotional):</strong> Physical trauma, surgery, burns, strenuous exercise, emotional stress, or even pain can cause a "stress leukocytosis" characterized by neutrophilia due to the release of adrenaline and cortisol.</li>
            <li><strong>Corticosteroid Use:</strong> Medications like prednisone cause neutrophils to be released from the bone marrow and prevent them from leaving the bloodstream, leading to an increased circulating count.</li>
            <li><strong>Tissue Damage/Necrosis:</strong> Conditions involving tissue injury (e.g., heart attack, stroke, burns, major surgery) stimulate an inflammatory response and neutrophilia.</li>
            <li><strong>Myeloproliferative Disorders:</strong> Certain bone marrow cancers, such as Chronic Myeloid Leukemia (CML), can lead to extremely high neutrophil counts.</li>
            <li><strong>Smoking:</strong> Chronic smokers often have mildly elevated neutrophil counts.</li>
            <li><strong>Certain Metabolic Disorders:</strong> E.g., diabetic ketoacidosis.</li>
        </ul>

        <h3>Low Neutrophils (Neutropenia):</h3>
        <p>A low neutrophil count (neutropenia) significantly impairs the body's ability to fight off bacterial and fungal infections, increasing the risk of serious illness. The severity of neutropenia is often graded:</p>
        <ul>
            <li>Mild: 1.0 - 1.5 x 10<sup>9</sup>/L</li>
            <li>Moderate: 0.5 - 1.0 x 10<sup>9</sup>/L</li>
            <li>Severe: Less than 0.5 x 10<sup>9</sup>/L (Agranulocytosis is typically defined as ANC < 0.1 x 10<sup>9</sup>/L)</li>
        </ul>
        <p>Causes of neutropenia include:</p>
        <ul>
            <li><strong>Bone Marrow Suppression/Damage:</strong>
                <ul>
                    <li><strong>Chemotherapy and Radiation Therapy:</strong> Common and severe side effects of cancer treatment.</li>
                    <li><strong>Aplastic Anemia:</strong> Bone marrow failure.</li>
                    <li><strong>Myelodysplastic Syndromes (MDS):</strong> Disorders where bone marrow produces ineffective cells.</li>
                    <li><strong>Bone Marrow Infiltration:</strong> By cancers (e.g., leukemia, lymphoma, metastatic cancer).</li>
                    <li><strong>Certain Medications:</strong> (e.g., some antibiotics, antithyroid drugs, anti-inflammatory drugs, psychiatric medications, immunosuppressants) can cause drug-induced neutropenia.</li>
                </ul>
            </li>
            <li><strong>Severe Infections (Sepsis):</strong> In overwhelming bacterial infections, neutrophils may be rapidly consumed or shift into tissues, leading to a drop in circulating count.</li>
            <li><strong>Viral Infections:</strong> Many viral infections (e.g., influenza, HIV, hepatitis, infectious mononucleosis) can temporarily suppress neutrophil production or cause them to move out of circulation.</li>
            <li><strong>Autoimmune Diseases:</strong> The immune system attacks and destroys neutrophils (e.g., Lupus, Rheumatoid Arthritis, Felty's syndrome).</li>
            <li><strong>Nutritional Deficiencies:</strong> Severe deficiencies in Vitamin B12 or folate can impair neutrophil production.</li>
            <li><strong>Hypersplenism:</strong> An enlarged or overactive spleen can sequester and destroy neutrophils.</li>
            <li><strong>Congenital Neutropenias:</strong> Rare genetic disorders affecting neutrophil production.</li>
            <li><strong>Cyclic Neutropenia:</strong> A rare disorder characterized by regular, recurring episodes of neutropenia.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Neutrophils are crucial for the body's initial defense. When interpreting neutrophil results, it's essential to consider the **Absolute Neutrophil Count (ANC)** rather than just the percentage, as the ANC provides a direct measure of the body's immediate infection-fighting capacity. A low ANC (especially severe neutropenia) is a medical emergency that significantly increases the risk of life-threatening infections.</p>
        <p>The presence of **"bands" or "band neutrophils"** (immature neutrophils) on a differential count is also important. An increase in bands (known as a "left shift") typically indicates a rapid production of neutrophils in response to an acute infection, as the bone marrow is releasing cells before they are fully mature. This is a classic sign of a bacterial infection.</p>
        <p>Interpreting neutrophil counts in conjunction with total WBC count and other differential components provides a comprehensive picture of the body's immune status and potential underlying conditions.</p>
    `,
    relatedBiomarkers: ['wbc', 'lymphocytes', 'monocytes', 'eosinophils', 'basophils'] 
    },
    {
    id: 'lymphocytes',
    name: 'Lymphocytes',
    description: 'A type of white blood cell involved in the immune response, fighting viral infections.',
    type: 'White Blood Cell Differential',
    responsibleFor: 'Targeting viruses, producing antibodies (B-cells), and destroying infected cells (T-cells).',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Lymphocytes are a crucial type of white blood cell (WBC) and a key component of the **White Blood Cell Differential**. They are part of the adaptive immune system, providing specific and long-lasting immunity against pathogens.</p>

        <h3>Role and Function:</h3>
        <p>Lymphocytes are fundamental to the body's **adaptive immune response**. They are primarily responsible for targeting and eliminating viruses, but also play roles in fighting bacteria, fungi, and cancer cells. There are two main types:</p>
        <ul>
            <li><strong>B-lymphocytes (B-cells):</strong> Produce antibodies, which are proteins that target and neutralize specific pathogens or toxins. They are essential for humoral immunity.</li>
            <li><strong>T-lymphocytes (T-cells):</strong> Directly destroy infected cells or cancer cells (cytotoxic T-cells) and regulate other immune cells (helper T-cells). They are central to cell-mediated immunity.</li>
            <li><strong>Natural Killer (NK) cells:</strong> A type of lymphocyte that provides immediate defenses against viral infections and tumor cells.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>Percentage:</strong> % (percentage) of total white blood cells. This indicates their relative proportion among all WBCs.</li>
            <li><strong>Absolute Count (SI/Recommended):</strong> 10<sup>9</sup>/L (giga per liter). This is often more clinically significant as it indicates the actual number of lymphocytes present, regardless of changes in other WBC types. For example, 1.0 - 4.5 x 10<sup>9</sup>/L.</li>
            <li><strong>Conventional Units:</strong> 10<sup>3</sup>/µL (thousands per microliter) or 10<sup>3</sup>/mm<sup>3</sup> (thousands per cubic millimeter).</li>
            <li><em>Note: 10<sup>9</sup>/L is equivalent to 10<sup>3</sup>/µL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for lymphocytes can vary slightly depending on the laboratory and age. Lymphocytes are typically the most numerous WBCs in children between 6 months and 4 years of age, after which neutrophils become predominant.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> Absolute: 2.0 - 11.0 x 10<sup>9</sup>/L. Percentage: Highly variable, often lower than neutrophils.</li>
                    <li><strong>Infants (2 months - 1 year):</strong> Absolute: 2.5 - 10.0 x 10<sup>9</sup>/L. Percentage: Often highest WBC type (up to 70%).</li>
                    <li><strong>Children (1 - 6 years):</strong> Absolute: 2.0 - 8.0 x 10<sup>9</sup>/L. Percentage: Often still predominant or equal to neutrophils.</li>
                    <li><strong>Children (6 - 12 years):</strong> Absolute: 1.5 - 6.0 x 10<sup>9</sup>/L. Percentage: Gradually decreasing towards adult proportions.</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> Absolute: 1.0 - 4.5 x 10<sup>9</sup>/L. Percentage: 20% - 45%.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Percentage of total WBC:</strong> 20% - 45%</li>
                    <li><strong>Absolute Lymphocyte Count (ALC):</strong> 1.0 - 4.5 x 10<sup>9</sup>/L (1,000 - 4,500/µL)</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values, though some studies suggest a slight decrease in overall lymphocyte numbers with advanced age.</li>
            <li><em>Values can vary by age and laboratory.</em></li>
        </ul>

        <h3>High Lymphocytes (Lymphocytosis):</h3>
        <p>An elevated lymphocyte count (lymphocytosis) typically indicates an active viral infection or a chronic immune stimulation.</p>
        <ul>
            <li><strong>Viral Infections:</strong> The most common cause.
                <ul>
                    <li><strong>Acute Viral Infections:</strong> Such as infectious mononucleosis (Epstein-Barr virus), cytomegalovirus (CMV), hepatitis, pertussis (whooping cough - a bacterial infection but often causes lymphocytosis), and some influenza strains.</li>
                    <li><strong>Chronic Viral Infections:</strong> Including HIV (especially in certain stages).</li>
                </ul>
            </li>
            <li><strong>Chronic Bacterial Infections:</strong> Less common than viral, but some chronic bacterial infections (e.g., tuberculosis, brucellosis) can lead to lymphocytosis.</li>
            <li><strong>Leukemias:</strong> Certain types of blood cancers, particularly **Chronic Lymphocytic Leukemia (CLL)** and Acute Lymphocytic Leukemia (ALL), involve uncontrolled proliferation of abnormal lymphocytes, leading to very high counts.</li>
            <li><strong>Lymphoma (Non-Hodgkin's and Hodgkin's):</strong> While not directly causing lymphocytosis in the blood, some lymphomas can have associated lymphocytosis.</li>
            <li><strong>Stress Response:</strong> Less common than neutrophilia, but certain forms of stress can cause a transient increase in lymphocytes.</li>
            <li><strong>Autoimmune Diseases:</strong> Some autoimmune conditions can be associated with chronic immune activation and lymphocytosis.</li>
            <li><strong>Splenectomy (Spleen Removal):</strong> The spleen normally filters lymphocytes; its removal can lead to a slight increase in circulating lymphocytes.</li>
        </ul>

        <h3>Low Lymphocytes (Lymphopenia):</h3>
        <p>A low lymphocyte count (lymphopenia) indicates a weakened immune system, particularly affecting the ability to fight viral infections and regulate immune responses. Severe lymphopenia (e.g., less than 0.5 x 10<sup>9</sup>/L) can significantly increase the risk of opportunistic infections.</p>
        <ul>
            <li><strong>Acute Infections:</strong>
                <ul>
                    <li><strong>Severe Viral Infections:</strong> Such as HIV/AIDS (direct destruction of T-cells), severe influenza, or hepatitis.</li>
                    <li><strong>Sepsis:</strong> In severe systemic infections, lymphocytes can be consumed or migrate to tissues.</li>
                </ul>
            </li>
            <li><strong>Corticosteroid Use:</strong> Medications like prednisone cause lymphocytes to move from the bloodstream into lymphoid tissues, leading to lower circulating counts.</li>
            <li><strong>Immunosuppressive Therapies:</strong> Medications used after organ transplantation or for autoimmune diseases (e.g., cyclosporine, azathioprine) deliberately suppress lymphocyte activity.</li>
            <li><strong>Bone Marrow Suppression/Damage:</strong>
                <ul>
                    <li><strong>Chemotherapy and Radiation Therapy:</strong> Can significantly reduce lymphocyte production.</li>
                    <li><strong>Aplastic Anemia:</strong> Bone marrow failure.</li>
                    <li><strong>Myelodysplastic Syndromes (MDS):</strong> Impaired blood cell production.</li>
                </ul>
            </li>
            <li><strong>Autoimmune Diseases:</strong> Conditions like Systemic Lupus Erythematosus (SLE) can sometimes cause lymphopenia.</li>
            <li><strong>Malnutrition:</strong> Severe protein-calorie malnutrition or specific vitamin deficiencies can impair lymphocyte production and function.</li>
            <li><strong>Stress:</strong> Chronic severe stress can lead to sustained cortisol release, which can suppress lymphocyte counts.</li>
            <li><strong>Certain Genetic Immunodeficiencies:</strong> Rare inherited conditions can affect lymphocyte development.</li>
            <li><strong>Renal Failure:</strong> Chronic kidney disease can be associated with lymphopenia.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>The absolute lymphocyte count is crucial for evaluating the immune status, especially in conditions like HIV/AIDS (where CD4 T-lymphocyte counts are monitored) or in patients undergoing immunosuppressive therapy. While the percentage provides a relative measure, the absolute count offers a more accurate picture of the body's defensive capacity.</p>
        <p>Changes in lymphocyte counts, in combination with other WBC differential components (neutrophils, monocytes, eosinophils, basophils), provide detailed insights into the type of immune response taking place and help guide diagnosis and treatment for a wide array of diseases, including infections, inflammatory conditions, and hematological malignancies.</p>
    `,
    relatedBiomarkers: ['wbc', 'neutrophils', 'monocytes', 'eosinophils', 'basophils'] // Added all WBC components as related
},
    {
    id: 'monocytes',
    name: 'Monocytes',
    description: 'A type of white blood cell that helps clean up damaged cells and fight chronic infections.',
    type: 'White Blood Cell Differential',
    responsibleFor: 'Phagocytosis, presenting antigens, and differentiating into macrophages.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Monocytes are a type of white blood cell (WBC) and are part of the **White Blood Cell Differential**. They are the largest type of leukocyte and play a crucial role in both the innate and adaptive immune systems.</p>

        <h3>Role and Function:</h3>
        <p>Monocytes circulate in the bloodstream for a relatively short period before migrating into tissues, where they mature and differentiate into **macrophages** and dendritic cells. In their mature forms, they perform several vital immune functions:</p>
        <ul>
            <li><strong>Phagocytosis:</strong> They are powerful phagocytes, engulfing and digesting cellular debris, dead cells, foreign substances, and microorganisms (bacteria, fungi, protozoa).</li>
            <li><strong>Antigen Presentation:</strong> As macrophages or dendritic cells, they present antigens to lymphocytes, initiating and coordinating the adaptive immune response.</li>
            <li><strong>Inflammation Resolution:</strong> They help resolve inflammation by clearing dead cells and secreting factors that promote tissue repair.</li>
            <li><strong>Fighting Chronic Infections:</strong> They are particularly important in long-term, chronic infections where neutrophils may not be as effective.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>Percentage:</strong> % (percentage) of total white blood cells. This indicates their relative proportion among all WBCs.</li>
            <li><strong>Absolute Count (SI/Recommended):</strong> 10<sup>9</sup>/L (giga per liter). This is often more clinically significant as it indicates the actual number of monocytes present, regardless of changes in other WBC types. For example, 0.2 - 1.0 x 10<sup>9</sup>/L.</li>
            <li><strong>Conventional Units:</strong> 10<sup>3</sup>/µL (thousands per microliter) or 10<sup>3</sup>/mm<sup>3</sup> (thousands per cubic millimeter).</li>
            <li><em>Note: 10<sup>9</sup>/L is equivalent to 10<sup>3</sup>/µL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for monocytes can vary slightly depending on the laboratory and age. The absolute monocyte count (AMC) is generally more clinically relevant.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> Absolute: 0.2 - 2.0 x 10<sup>9</sup>/L. Percentage: Highly variable.</li>
                    <li><strong>Infants (2 months - 1 year):</strong> Absolute: 0.1 - 1.5 x 10<sup>9</sup>/L. Percentage: 4% - 10%.</li>
                    <li><strong>Children (1 - 12 years):</strong> Absolute: 0.1 - 1.0 x 10<sup>9</sup>/L. Percentage: 2% - 8%.</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> Absolute: 0.2 - 1.0 x 10<sup>9</sup>/L. Percentage: 2% - 10%.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Percentage of total WBC:</strong> 2% - 10%</li>
                    <li><strong>Absolute Monocyte Count (AMC):</strong> 0.2 - 1.0 x 10<sup>9</sup>/L (200 - 1,000/µL)</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values.</li>
            <li><em>Values can vary by age and laboratory.</em></li>
        </ul>

        <h3>High Monocytes (Monocytosis):</h3>
        <p>An elevated monocyte count (monocytosis) typically indicates a chronic inflammatory or infectious process, or conditions involving tissue breakdown and repair. Monocytes are often elevated when the body is dealing with more long-term issues, unlike neutrophils which respond quickly to acute bacterial infections.</p>
        <ul>
            <li><strong>Chronic Infections:</strong>
                <ul>
                    <li><strong>Tuberculosis:</strong> A classic cause of monocytosis.</li>
                    <li><strong>Bacterial Endocarditis:</strong> Inflammation of the heart lining.</li>
                    <li><strong>Syphilis, Brucellosis, Rickettsial infections.</strong></li>
                    <li><strong>Fungal and Protozoal Infections.</strong></li>
                    <li><strong>Viral Infections:</strong> During the recovery phase (e.g., infectious mononucleosis) or chronic viral infections.</li>
                </ul>
            </li>
            <li><strong>Chronic Inflammatory Diseases:</strong>
                <ul>
                    <li><strong>Inflammatory Bowel Disease (Crohn's disease, ulcerative colitis).</strong></li>
                    <li><strong>Autoimmune Diseases:</strong> Such as Systemic Lupus Erythematosus (SLE), Rheumatoid Arthritis, Sarcoidosis.</li>
                    <li><strong>Vasculitis.</strong></li>
                </ul>
            </li>
            <li><strong>Malignancies:</strong>
                <ul>
                    <li><strong>Myelomonocytic Leukemias:</strong> Such as Chronic Myelomonocytic Leukemia (CMML) and Acute Myeloid Leukemia (AML) with monocytic differentiation.</li>
                    <li><strong>Hodgkin's Lymphoma and other Lymphomas.</strong></li>
                    <li><strong>Other Cancers:</strong> Some solid tumors can cause monocytosis.</li>
                </ul>
            </li>
            <li><strong>Recovery from Bone Marrow Suppression:</strong> As the bone marrow recovers from chemotherapy or aplastic anemia, monocytes (and other cells) may increase.</li>
            <li><strong>Tissue Necrosis/Damage:</strong> Conditions involving significant tissue breakdown and repair, like recovery from a myocardial infarction (heart attack) or surgery.</li>
            <li><strong>Granulomatous Diseases:</strong> Diseases characterized by granuloma formation (e.g., sarcoidosis, Crohn's disease).</li>
        </ul>

        <h3>Low Monocytes (Monocytopenia):</h3>
        <p>A low monocyte count (monocytopenia) is less common and often less clinically significant than monocytosis, but it can indicate certain bone marrow issues or severe immune suppression. Isolated monocytopenia is rare; it usually occurs as part of a broader reduction in WBCs.</p>
        <ul>
            <li><strong>Bone Marrow Suppression/Damage:</strong>
                <ul>
                    <li><strong>Aplastic Anemia:</strong> Generalized bone marrow failure.</li>
                    <li><strong>Chemotherapy or Radiation Therapy:</strong> Can suppress the production of all blood cells, including monocytes.</li>
                    <li><strong>Hairy Cell Leukemia:</strong> A rare type of leukemia that can selectively reduce monocyte counts.</li>
                </ul>
            </li>
            <li><strong>Corticosteroid Therapy:</strong> High doses of corticosteroids can lead to a temporary decrease in monocytes (similar to lymphocytes and eosinophils).</li>
            <li><strong>Acute Infections:</strong> In the very acute phase of overwhelming infections (sepsis), monocytes might temporarily drop as they migrate rapidly to tissues.</li>
            <li><strong>Certain Genetic Disorders:</strong> Rare primary immunodeficiencies affecting monocyte development.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Monocytes, and their tissue-resident forms (macrophages), are highly versatile immune cells. Their increase often suggests a prolonged or chronic battle against pathogens or inflammation, as they are involved in sustained immune responses and tissue remodeling.</p>
        <p>When interpreting monocyte counts, it's essential to consider the **Absolute Monocyte Count (AMC)**, as a percentage alone can be misleading if the total WBC count is abnormal. For instance, a normal percentage with a very low total WBC count would still mean a low absolute number of monocytes.</p>
        <p>Monocyte levels, along with other components of the WBC differential, provide crucial insights into the body's immune state, aiding in the diagnosis and monitoring of chronic infections, autoimmune diseases, and certain hematological malignancies.</p>
    `,
    relatedBiomarkers: ['wbc', 'neutrophils', 'lymphocytes', 'eosinophils', 'basophils'] 
    },
    {
    id: 'eosinophils',
    name: 'Eosinophils',
    description: 'A type of white blood cell involved in allergic reactions and fighting parasitic infections.',
    type: 'White Blood Cell Differential',
    responsibleFor: 'Modulating allergic reactions and defending against parasites.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Eosinophils are a type of granulocytic white blood cell (WBC) and a component of the **White Blood Cell Differential**. They are characterized by granules in their cytoplasm that stain bright red with eosin dye.</p>

        <h3>Role and Function:</h3>
        <p>Eosinophils play a specialized role in the immune system, primarily involved in:</p>
        <ul>
            <li><strong>Allergic Reactions:</strong> They are central mediators of allergic and asthmatic responses. Eosinophils release inflammatory chemicals that contribute to the symptoms of allergies and asthma, but also help to down-regulate and control the allergic response.</li>
            <li><strong>Defense Against Parasitic Infections:</strong> Eosinophils are highly effective at combating larger parasites (such as helminths/worms) that are too big for phagocytosis by other immune cells. They release cytotoxic proteins and free radicals to damage and destroy these parasites.</li>
            <li><strong>Modulating Inflammation:</strong> They are found in inflamed tissues and contribute to the inflammatory process, particularly in allergic responses.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>Percentage:</strong> % (percentage) of total white blood cells. This indicates their relative proportion among all WBCs.</li>
            <li><strong>Absolute Count (SI/Recommended):</strong> 10<sup>9</sup>/L (giga per liter). This is often more clinically significant as it reflects the actual number of eosinophils in the blood. For example, 0.0 - 0.5 x 10<sup>9</sup>/L.</li>
            <li><strong>Conventional Units:</strong> 10<sup>3</sup>/µL (thousands per microliter) or 10<sup>3</sup>/mm<sup>3</sup> (thousands per cubic millimeter).</li>
            <li><em>Note: 10<sup>9</sup>/L is equivalent to 10<sup>3</sup>/µL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for eosinophils can vary slightly depending on the laboratory and age. Absolute eosinophil count (AEC) is generally the most important clinical measure.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> Absolute: Up to 0.8 x 10<sup>9</sup>/L. Percentage: Variable.</li>
                    <li><strong>Infants and Children (generally):</strong> Absolute: Can be slightly higher than adults, up to 0.7 x 10<sup>9</sup>/L, often due to higher exposure to allergens or parasites. Percentage: 0% - 7%.</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> Absolute: 0.0 - 0.5 x 10<sup>9</sup>/L. Percentage: 0% - 6%.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Percentage of total WBC:</strong> 0% - 6%</li>
                    <li><strong>Absolute Eosinophil Count (AEC):</strong> 0.0 - 0.5 x 10<sup>9</sup>/L (0 - 500/µL)</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values.</li>
            <li><em>Values can vary by laboratory. Eosinophil counts can also show diurnal variation, being lowest in the morning.</em></li>
        </ul>

        <h3>High Eosinophils (Eosinophilia):</h3>
        <p>An elevated eosinophil count (eosinophilia) most commonly indicates an allergic reaction, a parasitic infection, or certain inflammatory conditions. The degree of elevation can vary significantly depending on the underlying cause.</p>
        <ul>
            <li><strong>Allergic Reactions/Diseases:</strong> The most frequent cause.
                <ul>
                    <li><strong>Asthma:</strong> Especially allergic asthma.</li>
                    <li><strong>Allergic Rhinitis (Hay Fever).</strong></li>
                    <li><strong>Eczema (Atopic Dermatitis).</strong></li>
                    <li><strong>Food and Drug Allergies.</strong></li>
                    <li><strong>Allergic Bronchopulmonary Aspergillosis (ABPA).</strong></li>
                </ul>
            </li>
            <li><strong>Parasitic Infections:</strong> Particularly infections caused by helminths (worms) such as roundworms, tapeworms, and flukes. Eosinophils are crucial for fighting these larger parasites.</li>
            <li><strong>Skin Conditions:</strong> Various dermatological conditions, including eczema, pemphigus, and dermatitis herpetiformis.</li>
            <li><strong>Drug Reactions:</strong> Hypersensitivity reactions to certain medications can cause eosinophilia.</li>
            <li><strong>Adrenal Insufficiency (Addison's Disease):</strong> Low cortisol levels can lead to increased eosinophils.</li>
            <li><strong>Gastrointestinal Disorders:</strong> Eosinophilic esophagitis, gastroenteritis, or colitis.</li>
            <li><strong>Connective Tissue Diseases/Autoimmune Disorders:</strong> E.g., Churg-Strauss syndrome (eosinophilic granulomatosis with polyangiitis), hypereosinophilic syndrome.</li>
            <li><strong>Certain Malignancies:</strong>
                <ul>
                    <li><strong>Lymphomas (especially Hodgkin's Lymphoma).</strong></li>
                    <li><strong>Myeloproliferative Neoplasms.</strong></li>
                    <li><strong>Some solid tumors.</strong></li>
                </ul>
            </li>
        </ul>

        <h3>Low Eosinophils (Eosinopenia):</h3>
        <p>A low eosinophil count (eosinopenia) is generally less clinically significant than eosinophilia. It often occurs as a transient response to acute stress or certain medications. A complete absence of eosinophils is rare but can be seen in severe conditions.</p>
        <ul>
            <li><strong>Acute Infections/Stress:</strong> During periods of acute stress, such as severe bacterial infections (sepsis), trauma, or surgery, the body releases corticosteroids, which suppress eosinophil levels.</li>
            <li><strong>Corticosteroid Use:</strong> Medications like prednisone cause eosinophils to move out of the bloodstream and into tissues or be destroyed, leading to lower circulating counts.</li>
            <li><strong>Cushing's Syndrome:</strong> A condition of excess cortisol production, which can cause eosinopenia.</li>
            <li><strong>Bone Marrow Suppression:</strong> Severe bone marrow suppression (e.g., from chemotherapy, aplastic anemia) can affect the production of all WBCs, including eosinophils.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Eosinophil counts are most valuable when interpreted in the context of a patient's clinical symptoms, especially if allergies, asthma, or potential parasitic exposures are suspected. The absolute eosinophil count (AEC) is crucial for accurate assessment, as a percentage can be misleading if the total WBC count is very high or low.</p>
        <p>Eosinophilia can range from mild to severe, with very high levels sometimes indicating more serious conditions like hypereosinophilic syndrome or certain leukemias, which require further investigation. Monitoring eosinophil levels is also important in managing allergic diseases and assessing the effectiveness of treatments.</p>
        <p>While often associated with "unpleasant" conditions like allergies, eosinophils play a vital role in host defense, particularly against parasitic threats that cannot be handled by phagocytosis alone.</p>
    `,
    relatedBiomarkers: ['wbc', 'neutrophils', 'lymphocytes', 'monocytes', 'basophils'] 
    },
    {
    id: 'basophils',
    name: 'Basophils',
    description: 'A type of white blood cell involved in allergic reactions and inflammation.',
    type: 'White Blood Cell Differential',
    responsibleFor: 'Releasing histamine and other mediators in allergic and inflammatory responses.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Basophils are the least common type of white blood cell (WBC) and are a component of the **White Blood Cell Differential**. They are a type of granulocyte, characterized by large, dark-staining granules in their cytoplasm that contain various inflammatory mediators.</p>

        <h3>Role and Function:</h3>
        <p>Basophils play a critical role in **allergic reactions and inflammatory responses**, particularly immediate hypersensitivity reactions. Their main functions include:</p>
        <ul>
            <li><strong>Releasing Histamine:</strong> When activated (often by allergens binding to IgE antibodies on their surface), basophils release histamine from their granules. Histamine causes vasodilation, increased vascular permeability, and smooth muscle contraction, contributing to symptoms like itching, swelling, and bronchoconstriction seen in allergic reactions (e.g., hives, asthma, anaphylaxis).</li>
            <li><strong>Releasing Other Mediators:</strong> They also release other inflammatory mediators like leukotrienes and platelet-activating factor.</li>
            <li><strong>Anticoagulant Properties:</strong> They contain heparin, an anticoagulant, which may help maintain blood flow at sites of inflammation.</li>
            <li><strong>Modulating Immune Responses:</strong> They can contribute to the immune response against parasites and may have some role in specific types of chronic inflammation.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>Percentage:</strong> % (percentage) of total white blood cells. This indicates their relative proportion among all WBCs.</li>
            <li><strong>Absolute Count (SI/Recommended):</strong> 10<sup>9</sup>/L (giga per liter). This is often more clinically significant as it indicates the actual number of basophils in the blood. For example, 0.0 - 0.2 x 10<sup>9</sup>/L.</li>
            <li><strong>Conventional Units:</strong> 10<sup>3</sup>/µL (thousands per microliter) or 10<sup>3</sup>/mm<sup>3</sup> (thousands per cubic millimeter).</li>
            <li><em>Note: 10<sup>9</sup>/L is equivalent to 10<sup>3</sup>/µL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Basophils are normally present in very small numbers in the bloodstream, making their percentage and absolute count naturally low. Reference ranges can vary slightly by laboratory and age.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> Absolute: Up to 0.1 x 10<sup>9</sup>/L. Percentage: Variable.</li>
                    <li><strong>Infants and Children:</strong> Absolute: Generally 0.0 - 0.1 x 10<sup>9</sup>/L. Percentage: 0% - 1.5%.</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> Absolute: 0.0 - 0.2 x 10<sup>9</sup>/L. Percentage: 0% - 2%.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Percentage of total WBC:</strong> 0% - 2%</li>
                    <li><strong>Absolute Basophil Count (ABC):</strong> 0.0 - 0.2 x 10<sup>9</sup>/L (0 - 200/µL)</li>
                </ul>
            </li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Basophils (Basophilia):</h3>
        <p>An elevated basophil count (basophilia) is relatively uncommon but can be an important indicator of certain underlying conditions, particularly chronic myeloproliferative disorders.</p>
        <ul>
            <li><strong>Chronic Myeloproliferative Neoplasms (MPNs):</strong> The most significant cause. These are bone marrow disorders characterized by the overproduction of one or more types of blood cells. Basophilia is a common finding in:
                <ul>
                    <li><strong>Chronic Myeloid Leukemia (CML):</strong> Often one of the hallmark findings, sometimes preceding other changes.</li>
                    <li><strong>Polycythemia Vera.</strong></li>
                    <li><strong>Essential Thrombocythemia.</strong></li>
                    <li><strong>Myelofibrosis.</strong></li>
                </ul>
            </li>
            <li><strong>Allergic Reactions (Severe/Chronic):</strong> While mast cells (tissue-resident cells derived from a different lineage but sharing many functions with basophils) are the primary drivers of allergic reactions, basophils can be elevated in severe or chronic allergic conditions, or in response to food allergies.</li>
            <li><strong>Hypothyroidism (Myxedema):</strong> An underactive thyroid gland can sometimes be associated with basophilia.</li>
            <li><strong>Chronic Inflammatory Conditions:</strong> Less common, but some chronic inflammatory states (e.g., ulcerative colitis, rheumatoid arthritis, chronic infections like tuberculosis) can occasionally cause mild basophilia.</li>
            <li><strong>Splenectomy (Spleen Removal):</strong> Can sometimes lead to a slight increase in basophils.</li>
            <li><strong>Certain Infections:</strong> Rare instances, such as some viral infections or chickenpox in children, might be associated with temporary basophilia.</li>
        </ul>

        <h3>Low Basophils (Basopenia):</h3>
        <p>A low basophil count (basopenia) is very difficult to detect reliably on standard lab tests because basophils are normally present in such small numbers. Thus, a count of zero or near-zero is often considered normal. However, profound basopenia can be associated with:</p>
        <ul>
            <li><strong>Acute Infections:</strong> Especially severe or acute inflammatory processes, where basophils might be consumed or leave the circulation rapidly.</li>
            <li><strong>Acute Stress Reactions:</strong> Similar to eosinophils, severe physical or emotional stress can lead to a temporary decrease in basophils.</li>
            <li><strong>Corticosteroid Use:</strong> Glucocorticoids (like prednisone) can suppress basophil levels.</li>
            <li><strong>Ovulation and Pregnancy:</strong> Hormonal changes during these periods can sometimes lead to transient basopenia.</li>
            <li><strong>Hyperthyroidism:</strong> An overactive thyroid gland.</li>
            <li><strong>Urticaria (Hives):</strong> During an acute episode of hives, basophils may be degranulating and leaving the circulation, leading to a temporary drop in blood levels.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Due to their normally low numbers, even a small absolute increase in basophils can be significant. When basophilia is observed, particularly if persistent and accompanied by other abnormal blood counts, it often prompts an investigation for underlying myeloproliferative disorders. Basophilia is a less common finding compared to changes in other WBC types (neutrophils, lymphocytes) and thus, when present, can be a particularly informative diagnostic clue.</p>
        <p>While their precise role in routine immune surveillance is less understood than other WBCs, their potent release of inflammatory mediators makes them key players in immediate hypersensitivity and allergic reactions. Monitoring basophil levels, especially the absolute count, helps clinicians evaluate chronic allergic conditions and screen for hematological malignancies.</p>
    `,
    relatedBiomarkers: ['wbc', 'neutrophils', 'lymphocytes', 'monocytes', 'eosinophils'] 
    },
    {
    id: 'plt',
    name: 'Platelets (PLT)',
    description: 'Measures the number of platelets, which are essential for blood clotting.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Forming blood clots to stop bleeding (hemostasis).',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Platelets, also known as thrombocytes, are small, anucleated cell fragments derived from megakaryocytes in the bone marrow. They are a critical component of the **Complete Blood Count (CBC)** and play a central role in blood clotting.</p>

        <h3>Role and Function:</h3>
        <p>Platelets are essential for **hemostasis**, the process by which the body stops bleeding. Their key functions include:</p>
        <ul>
            <li><strong>Primary Hemostasis:</strong> When a blood vessel is injured, platelets rapidly adhere to the exposed collagen at the site of injury and aggregate (clump together) to form a temporary "platelet plug," which physically seals the breach.</li>
            <li><strong>Secondary Hemostasis (Coagulation):</strong> Platelets also provide a surface for the activation of clotting factors, which are proteins involved in the coagulation cascade. This leads to the formation of a stable fibrin clot that reinforces the initial platelet plug.</li>
            <li><strong>Wound Healing:</strong> They release growth factors and other substances that promote tissue repair and angiogenesis (new blood vessel formation) at the site of injury.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> 10<sup>9</sup>/L (giga per liter)</li>
            <li><strong>Conventional Units:</strong> 10<sup>3</sup>/µL (thousands per microliter) or 10<sup>3</sup>/mm<sup>3</sup> (thousands per cubic millimeter)</li>
            <li><em>Note: 10<sup>9</sup>/L is equivalent to 10<sup>3</sup>/µL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for platelet count can vary slightly depending on the laboratory and age. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-2 weeks):</strong> 150 - 350 x 10<sup>9</sup>/L.</li>
                    <li><strong>Infants and Children:</strong> Generally similar to adult ranges, 150 - 400 x 10<sup>9</sup>/L.</li>
                    <li><strong>Adolescents (12 - 18 years):</strong> 150 - 450 x 10<sup>9</sup>/L.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 150 - 450 x 10<sup>9</sup>/L (150,000 - 450,000/µL)</li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values, though some studies suggest a slight tendency for higher counts with increasing age, but still within the normal range.</li>
            <li><em>Values can vary by age and laboratory. Transient fluctuations can occur due to exercise, stress, or minor infections.</em></li>
        </ul>

        <h3>High Platelet Count (Thrombocytosis/Thrombocythemia):</h3>
        <p>An elevated platelet count (thrombocytosis) can increase the risk of abnormal clotting (thrombosis) or, paradoxically, bleeding (due to dysfunctional platelets at very high counts). It is broadly categorized into reactive (secondary) and primary thrombocytosis.</p>
        <ul>
            <li><strong>Reactive (Secondary) Thrombocytosis:</strong> The most common cause, where the bone marrow produces more platelets in response to an underlying condition. Platelets are usually functional.
                <ul>
                    <li><strong>Inflammation or Infection:</strong> Acute or chronic inflammatory conditions (e.g., rheumatoid arthritis, inflammatory bowel disease), and infections (bacterial, viral) are common triggers.</li>
                    <li><strong>Iron Deficiency Anemia:</strong> Often seen as a compensatory mechanism.</li>
                    <li><strong>Trauma/Surgery:</strong> Especially after major surgery or significant blood loss.</li>
                    <li><strong>Malignancy:</strong> Various cancers can stimulate platelet production.</li>
                    <li><strong>Splenectomy (Spleen Removal):</strong> The spleen normally removes old platelets; its removal leads to increased circulating platelets.</li>
                    <li><strong>Acute Hemorrhage:</strong> After significant blood loss.</li>
                </ul>
            </li>
            <li><strong>Primary (Essential) Thrombocythemia:</strong> A myeloproliferative neoplasm (a type of bone marrow cancer) where the bone marrow overproduces platelets independently of external stimuli. These platelets may be dysfunctional, leading to both clotting and bleeding risks.</li>
            <li><strong>Other Myeloproliferative Disorders:</strong> Polycythemia Vera, Chronic Myeloid Leukemia (CML), Myelofibrosis.</li>
        </ul>

        <h3>Low Platelet Count (Thrombocytopenia):</h3>
        <p>A low platelet count (thrombocytopenia) increases the risk of bleeding, ranging from mild bruising to severe, life-threatening hemorrhage. The severity of bleeding risk correlates with the degree of thrombocytopenia.</p>
        <ul>
            <li><strong>Decreased Platelet Production in Bone Marrow:</strong>
                <ul>
                    <li><strong>Bone Marrow Suppression/Damage:</strong> From chemotherapy, radiation therapy, aplastic anemia, or exposure to toxins (e.g., alcohol, certain chemicals).</li>
                    <li><strong>Viral Infections:</strong> Many viral infections (e.g., HIV, Hepatitis C, mumps, rubella, infectious mononucleosis) can temporarily suppress bone marrow or cause platelet destruction.</li>
                    <li><strong>Nutritional Deficiencies:</strong> Severe deficiencies in Vitamin B12 or folate can impair platelet production.</li>
                    <li><strong>Myelodysplastic Syndromes (MDS) and Leukemias:</strong> Cancers that affect bone marrow production.</li>
                </ul>
            </li>
            <li><strong>Increased Platelet Destruction or Consumption:</strong>
                <ul>
                    <li><strong>Immune Thrombocytopenia (ITP):</strong> An autoimmune disorder where the immune system mistakenly attacks and destroys platelets.</li>
                    <li><strong>Drug-Induced Thrombocytopenia:</strong> Certain medications (e.g., heparin, some antibiotics, quinine) can trigger an immune reaction that destroys platelets or directly suppress production.</li>
                    <li><strong>Disseminated Intravascular Coagulation (DIC):</strong> A severe condition where widespread clotting consumes platelets rapidly.</li>
                    <li><strong>Thrombotic Thrombocytopenic Purpura (TTP) / Hemolytic Uremic Syndrome (HUS):</strong> Conditions involving small blood clot formation that consumes platelets.</li>
                    <li><strong>Severe Infections (Sepsis):</strong> Can lead to increased platelet consumption.</li>
                </ul>
            </li>
            <li><strong>Platelet Sequestration (Pooling):</strong>
                <ul>
                    <li><strong>Enlarged Spleen (Hypersplenism):</strong> An enlarged spleen can trap and hold a large proportion of the body's platelets, leading to fewer circulating platelets.</li>
                </ul>
            </li>
            <li><strong>Dilutional Thrombocytopenia:</strong> Massive blood transfusions with fluid but without sufficient platelets can dilute the existing platelets.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Platelet count is a fundamental parameter for assessing a patient's risk of bleeding or clotting. While the total count is important, other platelet indices, such as **Mean Platelet Volume (MPV)**, can provide additional diagnostic clues.</p>
        <p>When investigating abnormal platelet counts, healthcare providers often consider:</p>
        <ul>
            <li><strong>Symptoms:</strong> Easy bruising, prolonged bleeding, petechiae (small red spots on the skin) for low counts; unexplained clots for high counts.</li>
            <li><strong>Medical History:</strong> Recent infections, medications, chronic diseases.</li>
            <li><strong>Other CBC Parameters:</strong> Such as RBCs, WBCs, and their indices, to get a complete picture of bone marrow function and overall health.</li>
            <li><strong>Blood Smear Review:</strong> Manual examination of blood under a microscope to confirm automated counts and identify abnormal platelet morphology or clumping (which can cause falsely low counts).</li>
            <li><strong>Coagulation Tests:</strong> Such as PT/INR and PTT, to assess the overall clotting cascade.</li>
            <li><strong>D-dimer:</strong> A test that measures a product of fibrin degradation, useful in assessing clotting activity (often elevated in DIC or other thrombotic states).</li>
        </ul>
        <p>Accurate interpretation of platelet counts and related parameters is vital for managing bleeding disorders and thrombotic risks.</p>
    `,
    relatedBiomarkers: ['mpv', 'd-dimer']
},
{
    id: 'mpv',
    name: 'Mean Platelet Volume (MPV)',
    description: 'Measures the average size of platelets.',
    type: 'Complete Blood Count (CBC)',
    responsibleFor: 'Indicates platelet activity and production rate; larger platelets are generally younger and more active.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Mean Platelet Volume (MPV) is one of the platelet indices included in a Complete Blood Count (CBC). It measures the **average size of platelets** in a blood sample.</p>

        <h3>Role and Function:</h3>
        <p>MPV provides insight into platelet production and activity. Generally, **larger platelets are younger, more reactive, and often more functionally active** than smaller, older platelets. A higher MPV can indicate that the bone marrow is rapidly producing new platelets, often in response to increased demand or destruction of existing platelets. A lower MPV might suggest impaired platelet production or a predominance of older, less active platelets.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> fL (femtoliter)</li>
            <li><em>Note: 1 femtoliter (fL) is $10^{-15}$ liters.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for MPV can vary slightly depending on the laboratory. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong> Generally similar to adult ranges.</li>
            <li><strong>Adults:</strong> 7.5 - 11.5 fL</li>
            <li><strong>Elderly (over 65 years):</strong> Generally similar to adult values.</li>
            <li><em>Values can vary by laboratory. MPV can also be affected by collection tube additives (e.g., EDTA can cause platelets to swell over time, leading to falsely high MPV if not measured promptly).</em></li>
        </ul>

        <h3>High MPV (Larger Platelets):</h3>
        <p>A high MPV indicates that the average size of platelets is larger than normal. This typically suggests that the bone marrow is actively releasing more immature, larger platelets into circulation, often in response to a demand for more or more active platelets.</p>
        <ul>
            <li><strong>Increased Platelet Destruction or Consumption:</strong> The most common reason for high MPV. The body senses a need for more platelets (because existing ones are being destroyed or consumed), and the bone marrow responds by releasing larger, younger platelets.
                <ul>
                    <li><strong>Immune Thrombocytopenia (ITP):</strong> Platelets are destroyed by the immune system, leading to compensatory production of larger platelets.</li>
                    <li><strong>Disseminated Intravascular Coagulation (DIC):</strong> Platelets are consumed in widespread clotting, prompting the release of larger, newer platelets.</li>
                    <li><strong>Thrombotic Thrombocytopenic Purpura (TTP) / Hemolytic Uremic Syndrome (HUS):</strong> Conditions involving microvascular clots that consume platelets.</li>
                    <li><strong>Platelet Loss:</strong> From hemorrhage or recent blood loss.</li>
                </ul>
            </li>
            <li><strong>Myeloproliferative Disorders:</strong> Conditions where the bone marrow produces too many cells, including platelets, which can sometimes be abnormally large.
                <ul>
                    <li><strong>Essential Thrombocythemia:</strong> High platelet count with often high MPV.</li>
                    <li><strong>Chronic Myeloid Leukemia (CML).</strong></li>
                </ul>
            </li>
            <li><strong>Hyperthyroidism:</strong> An overactive thyroid gland.</li>
            <li><strong>Severe Infection/Sepsis:</strong> In some cases, as a response to severe demand.</li>
            <li><strong>Liver Disease:</strong> Some forms of liver disease can influence platelet size.</li>
            <li><strong>Vitamin D Deficiency:</strong> Emerging research suggests a possible link between Vitamin D deficiency and elevated MPV.</li>
        </ul>

        <h3>Low MPV (Smaller Platelets):</h3>
        <p>A low MPV indicates that the average size of platelets is smaller than normal. This usually suggests impaired platelet production in the bone marrow or a predominance of older, less active platelets.</p>
        <ul>
            <li><strong>Impaired Platelet Production:</strong>
                <ul>
                    <li><strong>Aplastic Anemia:</strong> Bone marrow failure leading to reduced production of all blood cells, including platelets. The few platelets produced might be older and smaller.</li>
                    <li><strong>Chemotherapy or Radiation Therapy:</strong> Bone marrow suppression by cancer treatments can lead to both low platelet count and small platelet size.</li>
                    <li><strong>Myelodysplastic Syndromes (MDS):</strong> Disorders where the bone marrow produces ineffective blood cells.</li>
                </ul>
            </li>
            <li><strong>Wiskott-Aldrich Syndrome:</strong> A rare inherited immunodeficiency disorder characterized by microthrombocytopenia (low count of small platelets).</li>
            <li><strong>Certain Genetic Disorders:</strong> Rare conditions affecting platelet formation.</li>
            <li><strong>Chronic Renal Failure:</strong> Can sometimes be associated with a lower MPV.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>MPV is generally interpreted in conjunction with the platelet count (PLT) to gain a more complete understanding of platelet dynamics:</p>
        <ul>
            <li><strong>Low PLT with High MPV:</strong> Suggests increased platelet destruction or consumption (e.g., ITP, DIC), where the bone marrow is attempting to compensate by releasing larger, younger platelets.</li>
            <li><strong>Low PLT with Low MPV:</strong> Points towards impaired platelet production in the bone marrow (e.g., aplastic anemia, bone marrow suppression from chemotherapy).</li>
            <li><strong>Normal PLT with High MPV:</strong> Can be seen in early stages of conditions that might eventually lead to thrombocytopenia, or in healthy individuals with naturally larger platelets.</li>
            <li><strong>High PLT with High MPV:</strong> Often seen in myeloproliferative disorders (e.g., essential thrombocythemia) where there is an overproduction of often abnormally large platelets.</li>
            <li><strong>High PLT with Normal/Low MPV:</strong> More characteristic of reactive thrombocytosis (e.g., due to inflammation or infection) where the body simply produces more normal-sized platelets.</li>
        </ul>
        <p>MPV provides valuable insights into the mechanism behind abnormal platelet counts, helping clinicians differentiate between various causes of thrombocytopenia or thrombocytosis, and guiding further diagnostic workup.</p>
    `,
    relatedBiomarkers: ['plt']
    },
    {
    id: 'esr',
    name: 'Erythrocyte Sedimentation Rate (ESR)',
    description: 'Measures the rate at which red blood cells settle in a test tube, indicating inflammation.',
    type: 'Inflammation Marker',
    responsibleFor: 'Non-specific marker of inflammation, infection, or tissue injury.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Erythrocyte Sedimentation Rate (ESR), also known as "sed rate," is a simple, non-specific blood test that measures the **rate at which red blood cells (erythrocytes) settle to the bottom of a vertical tube of blood in one hour**. The test is influenced by the presence of certain proteins, especially acute phase reactants, which increase in concentration during inflammation.</p>

        <h3>Role and Function:</h3>
        <p>ESR is an **indirect measure of inflammation** in the body. When inflammation is present, increased levels of acute phase proteins (like fibrinogen and immunoglobulins) cause red blood cells to clump together and settle more quickly than usual. It is a non-specific test, meaning it can indicate inflammation but does not pinpoint the cause or location of the inflammation.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mm/hr (millimeter per hour)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for ESR can vary slightly by laboratory and increase with age. Female individuals generally have slightly higher ESR values than male individuals.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn:</strong> 0 - 2 mm/hr</li>
                    <li><strong>Children (up to puberty):</strong> 3 - 13 mm/hr</li>
                </ul>
            </li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Adult Male (under 50 years):</strong> 0 - 15 mm/hr</li>
                    <li><strong>Adult Male (over 50 years):</strong> 0 - 20 mm/hr</li>
                    <li><strong>Adult Female (under 50 years):</strong> 0 - 20 mm/hr</li>
                    <li><strong>Adult Female (over 50 years):</strong> 0 - 30 mm/hr (or (Age + 10) / 2 for females; Age / 2 for males can be used as a rough guide for age-adjusted normal upper limits).</li>
                </ul>
            </li>
            <li><strong>Pregnancy:</strong> ESR typically increases significantly during pregnancy, especially in the second and third trimesters, due to physiological increases in fibrinogen. Values up to 40-70 mm/hr can be normal.</li>
            <li><em>Values tend to increase with age and can vary by laboratory.</em></li>
        </ul>

        <h3>High ESR (Elevated Sedimentation Rate):</h3>
        <p>An elevated ESR indicates the presence of inflammation or an inflammatory process somewhere in the body. The higher the ESR, the greater the degree of inflammation. However, it's important to note that a high ESR does not diagnose a specific condition; it only signals that inflammation is present.</p>
        <ul>
            <li><strong>Infections:</strong> Both acute and chronic infections, particularly bacterial infections (e.g., pneumonia, sepsis, osteomyelitis, tuberculosis). Viral infections can also increase ESR, but usually to a lesser extent than bacterial.</li>
            <li><strong>Autoimmune Diseases/Inflammatory Diseases:</strong>
                <ul>
                    <li><strong>Rheumatoid Arthritis (RA).</strong></li>
                    <li><strong>Systemic Lupus Erythematosus (SLE).</strong></li>
                    <li><strong>Polymyalgia Rheumatica (PMR) and Giant Cell Arteritis (Temporal Arteritis):</strong> ESR is often markedly elevated in these conditions.</li>
                    <li><strong>Inflammatory Bowel Disease (Crohn's disease, ulcerative colitis).</strong></li>
                    <li><strong>Vasculitis.</strong></li>
                </ul>
            </li>
            <li><strong>Cancers (Malignancies):</strong> ESR can be elevated in various cancers, especially lymphomas, multiple myeloma, and metastatic cancers, due to increased production of inflammatory proteins.</li>
            <li><strong>Tissue Damage/Trauma/Surgery:</strong> Any condition involving tissue injury or necrosis (e.g., heart attack, stroke, recent surgery, severe burns) can trigger an inflammatory response and raise ESR.</li>
            <li><strong>Anemia:</strong> Severe anemia can cause an elevated ESR due to changes in blood viscosity and red blood cell aggregation.</li>
            <li><strong>Kidney Disease:</strong> Chronic kidney disease can be associated with elevated ESR.</li>
            <li><strong>Thyroid Disease:</strong> Both hyperthyroidism and hypothyroidism can sometimes affect ESR.</li>
            <li><strong>Pregnancy:</strong> Physiological increase (as noted in reference values).</li>
            <li><strong>Obesity:</strong> Chronic low-grade inflammation associated with obesity can cause a mildly elevated ESR.</li>
            <li><strong>Age:</strong> ESR naturally increases with age.</li>
        </ul>

        <h3>Low ESR (Decreased Sedimentation Rate):</h3>
        <p>A low ESR is less common and usually not clinically significant, meaning it does not typically indicate a disease state. However, extremely low values can be seen in certain conditions.</p>
        <ul>
            <li><strong>Polycythemia:</strong> An abnormally high number of red blood cells increases blood viscosity, hindering their ability to settle quickly.</li>
            <li><strong>Sickle Cell Anemia:</strong> The abnormally shaped (sickled) red blood cells do not stack properly, which impedes their sedimentation.</li>
            <li><strong>Extreme Leukocytosis:</strong> A very high white blood cell count can sometimes interfere with red blood cell settling.</li>
            <li><strong>Severe Hyperviscosity:</strong> Very thick blood from other causes.</li>
            <li><strong>Congestive Heart Failure:</strong> Can sometimes be associated with a low ESR due to changes in fibrinogen levels.</li>
            <li><strong>Hypofibrinogenemia:</strong> Abnormally low levels of fibrinogen, a key protein that promotes red blood cell aggregation.</li>
            <li><strong>Microcytosis/Poikilocytosis:</strong> Abnormally small or irregularly shaped red blood cells (e.g., in some forms of thalassemia) may settle more slowly.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>ESR is a useful but non-specific inflammatory marker. It is often used to:</p>
        <ul>
            <li><strong>Detect inflammation:</strong> To screen for and monitor inflammatory conditions.</li>
            <li><strong>Monitor disease activity:</strong> In chronic inflammatory diseases like rheumatoid arthritis or lupus, changes in ESR can reflect the effectiveness of treatment or disease flares.</li>
            <li><strong>Differentiate conditions:</strong> For example, a very high ESR (often >100 mm/hr) in an elderly patient with headache and muscle pain might strongly suggest giant cell arteritis or polymyalgia rheumatica.</li>
        </ul>
        <p>However, because it is non-specific and influenced by many factors, ESR should always be interpreted in conjunction with a patient's clinical history, symptoms, and other diagnostic tests. It often complements other inflammation markers like C-Reactive Protein (CRP), which typically responds more quickly to acute inflammation.</p>
    `,
    relatedBiomarkers: ['crp', 'pct']
},
{
    id: 'glucose',
    name: 'Glucose',
    description: 'Primary indicator of blood sugar. Essential for energy.',
    type: 'Blood Chemistry',
    responsibleFor: 'Providing energy for cells; regulated by insulin and glucagon.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Glucose is a simple sugar that serves as the body's primary source of energy. Blood glucose levels are a key component of routine **Blood Chemistry** tests and are fundamental for assessing metabolic health, particularly in relation to diabetes.</p>

        <h3>Role and Function:</h3>
        <p>Glucose obtained from the digestion of carbohydrates is transported via the bloodstream to all cells in the body, where it is used for energy production (cellular respiration). Its levels in the blood are tightly regulated by two main hormones produced by the pancreas:</p>
        <ul>
            <li><strong>Insulin:</strong> Lowers blood glucose by facilitating its uptake into cells (especially muscle and fat cells) and promoting its storage as glycogen in the liver and muscles.</li>
            <li><strong>Glucagon:</strong> Raises blood glucose by stimulating the liver to release stored glucose (glycogenolysis) and produce new glucose (gluconeogenesis).</li>
        </ul>
        <p>Maintaining glucose within a narrow range is crucial for optimal organ function, especially for the brain, which relies almost exclusively on glucose for energy.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert mmol/L to mg/dL, multiply by 18.018. To convert mg/dL to mmol/L, divide by 18.018. For example, 5.5 mmol/L is approximately 99 mg/dL.</em></li>
        </ul>

        <h3>Reference Values (Fasting Blood Glucose):</h3>
        <p>Fasting blood glucose is typically measured after an 8-12 hour fast. These values are used to screen for and diagnose diabetes and prediabetes.</p>
        <ul>
            <li><strong>Adults (Normal Fasting Glucose):</strong> 3.9 - 5.5 mmol/L (70 - 99 mg/dL)</li>
            <li><strong>Prediabetes (Impaired Fasting Glucose - IFG):</strong> 5.6 - 6.9 mmol/L (100 - 125 mg/dL) - indicates a higher risk of developing Type 2 diabetes.</li>
            <li><strong>Diabetes Mellitus:</strong> &ge; 7.0 mmol/L (&ge; 126 mg/dL) on two separate occasions. This requires confirmation with a repeat test on a different day or additional tests like an Oral Glucose Tolerance Test (OGTT) or HbA1c.</li>
        </ul>
        <p><strong>Other Glucose Tests:</strong></p>
        <ul>
            <li><strong>Random (Non-fasting) Plasma Glucose:</strong> &ge; 11.1 mmol/L (&ge; 200 mg/dL) with classic symptoms of diabetes (e.g., increased thirst, frequent urination, unexplained weight loss) is diagnostic of diabetes.</li>
            <li><strong>Oral Glucose Tolerance Test (OGTT) - 2-hour post-glucose load:</strong>
                <ul>
                    <li><strong>Normal:</strong> &lt; 7.8 mmol/L (&lt; 140 mg/dL)</li>
                    <li><strong>Prediabetes (Impaired Glucose Tolerance - IGT):</strong> 7.8 - 11.0 mmol/L (140 - 199 mg/dL)</li>
                    <li><strong>Diabetes:</strong> &ge; 11.1 mmol/L (&ge; 200 mg/dL)</li>
                </ul>
            </li>
        </ul>
        <h3>High Glucose Levels (Hyperglycemia):</h3>
        <p>Hyperglycemia indicates that there is too much sugar in the blood. Persistent hyperglycemia is a hallmark of diabetes and can lead to serious long-term complications affecting various organs.</p>
        <ul>
            <li><strong>Diabetes Mellitus (Type 1 and Type 2):</strong>
                <ul>
                    <li><strong>Type 1 Diabetes:</strong> Autoimmune destruction of insulin-producing cells in the pancreas, leading to absolute insulin deficiency.</li>
                    <li><strong>Type 2 Diabetes:</strong> Insulin resistance (cells don't respond well to insulin) and/or insufficient insulin production.</li>
                </ul>
            </li>
            <li><strong>Prediabetes:</strong> Elevated but not yet diabetic levels.</li>
            <li><strong>Stress:</strong> Physical or emotional stress, trauma, surgery, or acute illness can cause temporary hyperglycemia due to the release of stress hormones (e.g., cortisol, adrenaline).</li>
            <li><strong>Cushing's Syndrome:</strong> A condition of excess cortisol, which promotes glucose production.</li>
            <li><strong>Pancreatitis:</strong> Inflammation of the pancreas can damage insulin-producing cells.</li>
            <li><strong>Certain Medications:</strong>
                <ul>
                    <li><strong>Corticosteroids (e.g., prednisone).</strong></li>
                    <li><strong>Thiazide diuretics.</strong></li>
                    <li><strong>Beta-blockers.</strong></li>
                    <li><strong>Some antipsychotics.</strong></li>
                </ul>
            </li>
            <li><strong>Gestational Diabetes:</strong> Diabetes that develops during pregnancy.</li>
            <li><strong>Hyperthyroidism:</strong> An overactive thyroid can sometimes affect glucose metabolism.</li>
            <li><strong>Rare Endocrine Tumors:</strong> Such as glucagonoma or pheochromocytoma.</li>
        </ul>

        <h3>Low Glucose Levels (Hypoglycemia):</h3>
        <p>Hypoglycemia occurs when blood glucose levels drop too low, which can be dangerous as the brain and other organs are deprived of their main energy source. Symptoms can include sweating, tremors, dizziness, confusion, and in severe cases, seizures or loss of consciousness.</p>
        <ul>
            <li><strong>Insulin Overdose/Excess Diabetes Medications:</strong> In individuals with diabetes, taking too much insulin or certain oral diabetes medications (sulfonylureas) can cause blood sugar to drop too low.</li>
            <li><strong>Prolonged Fasting:</strong> Especially in individuals with impaired glucose regulation.</li>
            <li><strong>Excessive Alcohol Consumption:</strong> Alcohol can interfere with the liver's ability to produce glucose.</li>
            <li><strong>Severe Liver Disease:</strong> A severely damaged liver cannot effectively store or produce glucose.</li>
            <li><strong>Certain Tumors:</strong>
                <ul>
                    <li><strong>Insulinoma:</strong> A rare tumor of the pancreas that produces excessive insulin.</li>
                    <li><strong>Other non-pancreatic tumors</strong> that produce insulin-like growth factors.</li>
                </ul>
            </li>
            <li><strong>Adrenal Insufficiency (Addison's Disease):</strong> Low cortisol levels can lead to hypoglycemia.</li>
            <li><strong>Hypopituitarism:</strong> Deficiency of hormones from the pituitary gland.</li>
            <li><strong>Reactive Hypoglycemia:</strong> A drop in blood sugar a few hours after a meal, sometimes seen in early stages of Type 2 diabetes or after gastric surgery.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Blood glucose measurement is a cornerstone of diabetes diagnosis and management. It is often performed multiple times and under various conditions (fasting, random, post-meal, or during an oral glucose tolerance test) to provide a comprehensive picture of glucose metabolism. It is also often combined with the **HbA1c test**, which provides an average blood glucose level over the past 2-3 months, offering a longer-term view of glucose control.</p>
        <p>Regular monitoring of blood glucose is essential for individuals with diabetes to prevent acute complications (hypoglycemia, diabetic ketoacidosis) and reduce the risk of long-term complications (neuropathy, retinopathy, nephropathy, cardiovascular disease).</p>
    `,
    relatedBiomarkers: ['hba1c', 'insulin']
},
{
    id: 'total-protein',
    name: 'Total Protein',
    description: 'Measures the total amount of protein in the blood, including albumin and globulins.',
    type: 'Blood Chemistry',
    responsibleFor: 'Maintaining osmotic pressure, transporting substances, immune function, clotting, and enzyme activity.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Total Protein is a measurement of the total amount of protein present in the blood serum. It is a common component of a comprehensive **Blood Chemistry** panel and provides a general assessment of nutritional status, liver function, and kidney function.</p>

        <h3>Role and Function:</h3>
        <p>Proteins are essential macromolecules involved in virtually every cellular and bodily function. In the blood, they perform numerous critical roles, including:</p>
        <ul>
            <li><strong>Maintaining Oncotic/Osmotic Pressure:</strong> Especially albumin, which helps keep fluid within blood vessels and prevents swelling (edema).</li>
            <li><strong>Transporting Substances:</strong> Proteins bind and transport hormones, vitamins, minerals, lipids, drugs, and waste products throughout the body.</li>
            <li><strong>Immune Function:</strong> Globulins, particularly immunoglobulins (antibodies), are vital for fighting infections.</li>
            <li><strong>Blood Clotting:</strong> Various proteins (e.g., fibrinogen, clotting factors) are essential for hemostasis.</li>
            <li><strong>Enzyme Activity:</strong> Many enzymes, which catalyze biochemical reactions, are proteins.</li>
            <li><strong>pH Buffering:</strong> Proteins help maintain the acid-base balance of the blood.</li>
        </ul>
        <p>The two main types of protein measured in total protein are **Albumin** and **Globulins**.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional Units:</strong> g/dL (gram per deciliter)</li>
            <li><em>Note: 1 g/L is equivalent to 0.1 g/dL. For example, 70 g/L is 7.0 g/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for total protein can vary slightly depending on the laboratory and age. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-1 month):</strong> 44 - 76 g/L</li>
                    <li><strong>Infants (1 month - 1 year):</strong> 51 - 73 g/L</li>
                    <li><strong>Children (1 - 18 years):</strong> 60 - 80 g/L (similar to adults but can vary by age group).</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 60 - 80 g/L (6.0 - 8.0 g/dL)</li>
            <li><strong>Elderly (over 65 years):</strong> Can sometimes be slightly lower, but generally within the adult range.</li>
            <li><em>Values can vary by laboratory. Dehydration can falsely elevate results, and overhydration can falsely lower them.</em></li>
        </ul>

        <h3>High Total Protein (Hyperproteinemia):</h3>
        <p>An elevated total protein level (hyperproteinemia) often indicates a relative or absolute increase in certain protein components, usually globulins. It is less common than low protein levels.</p>
        <ul>
            <li><strong>Dehydration:</strong> The most common cause of an apparent high total protein. When the fluid portion of the blood (plasma) decreases, the concentration of proteins appears higher.</li>
            <li><strong>Chronic Inflammatory Diseases/Infections:</strong> Prolonged inflammation (e.g., autoimmune diseases like rheumatoid arthritis, lupus, chronic infections like tuberculosis, hepatitis) can lead to an increase in globulin proteins (immunoglobulins).</li>
            <li><strong>Multiple Myeloma:</strong> A cancer of plasma cells that produces excessive amounts of a single type of immunoglobulin (monoclonal protein), leading to a significant increase in total protein.</li>
            <li><strong>Waldenström's Macroglobulinemia:</strong> Another type of cancer that produces large amounts of a specific antibody.</li>
            <li><strong>Other Lymphoproliferative Disorders:</strong> Conditions involving increased production of lymphocytes or plasma cells.</li>
            <li><strong>Certain Liver Diseases:</strong> Some chronic liver diseases (e.g., chronic active hepatitis, cirrhosis) can lead to increased globulin production, although albumin is often decreased.</li>
        </ul>

        <h3>Low Total Protein (Hypoproteinemia):</h3>
        <p>A low total protein level (hypoproteinemia) can result from decreased protein synthesis, increased protein loss, or increased fluid volume (dilution). It often signifies an underlying health issue.</p>
        <ul>
            <li><strong>Malnutrition/Malabsorption:</strong> Insufficient dietary protein intake or inability to absorb proteins from the gut (e.g., celiac disease, Crohn's disease, pancreatic insufficiency) can lead to low total protein.</li>
            <li><strong>Liver Disease:</strong> The liver is the primary site of albumin and many other protein synthesis. Severe liver damage (e.g., cirrhosis, hepatitis) impairs its ability to produce proteins, leading to low levels.</li>
            <li><strong>Kidney Disease:</strong> Damage to the kidneys (e.g., nephrotic syndrome, glomerulonephritis) can lead to excessive loss of proteins, particularly albumin, in the urine.</li>
            <li><strong>Severe Burns:</strong> Large amounts of plasma proteins can be lost through damaged skin in severe burns.</li>
            <li><strong>Fluid Overload (Overhydration):</strong> Excessive intravenous fluid administration or conditions causing fluid retention can dilute the blood, leading to a falsely low total protein concentration.</li>
            <li><strong>Gastrointestinal Protein Loss (Protein-Losing Enteropathy):</strong> Conditions where proteins leak from the intestines into the digestive tract and are lost.</li>
            <li><strong>Severe Bleeding:</strong> Prolonged or severe blood loss can reduce total protein.</li>
            <li><strong>Severe Inflammatory States:</strong> While chronic inflammation can increase globulins, very severe or acute inflammation can lead to protein consumption or loss.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>The total protein test is usually evaluated in conjunction with its two main components: **Albumin** and **Globulins**. Often, the **Albumin/Globulin (A/G) ratio** is also calculated, which can provide more specific diagnostic clues than total protein alone.</p>
        <ul>
            <li><strong>Albumin:</strong> The most abundant protein in plasma, primarily responsible for maintaining oncotic pressure and transporting substances. Low albumin is a common indicator of liver disease, kidney disease, or malnutrition.</li>
            <li><strong>Globulins:</strong> A diverse group of proteins including enzymes, transport proteins, and immunoglobulins (antibodies). Elevated globulins often suggest inflammation, infection, or immune system disorders (e.g., autoimmune diseases, multiple myeloma).</li>
        </ul>
        <p>By assessing the balance between albumin and globulins, healthcare professionals can better differentiate between conditions causing abnormal total protein levels, leading to a more precise diagnosis.</p>
    `,
    relatedBiomarkers: ['albumin', 'globulins'] // Globulins implicitly from Total Protein - Albumin
},
    {
    id: 'albumin',
    name: 'Albumin',
    description: 'A major protein produced by the liver, essential for maintaining blood volume and transporting substances.',
    type: 'Blood Chemistry',
    responsibleFor: 'Maintaining oncotic pressure, transporting hormones, drugs, and fatty acids.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Albumin is the most abundant protein found in blood plasma, comprising approximately 50-60% of total plasma proteins. It is synthesized exclusively by the liver and is a key component of a routine **Blood Chemistry** panel.</p>

        <h3>Role and Function:</h3>
        <p>Albumin performs several vital physiological functions:</p>
        <ul>
            <li><strong>Maintaining Oncotic (Colloid Osmotic) Pressure:</strong> This is its most critical role. Albumin helps to keep fluid within the blood vessels, preventing it from leaking into surrounding tissues. This maintains blood volume and blood pressure and prevents edema (swelling).</li>
            <li><strong>Transport Protein:</strong> Albumin acts as a non-specific carrier for a wide variety of substances in the blood, including hormones (e.g., thyroid hormones, cortisol), fatty acids, bilirubin, drugs (e.g., warfarin, aspirin), and calcium. This transport function ensures these substances are delivered to target tissues or safely transported for elimination.</li>
            <li><strong>Buffer System:</strong> It contributes to the blood's pH buffering capacity, helping to maintain acid-base balance.</li>
            <li><strong>Nutritional Status Indicator:</strong> Because it is synthesized in the liver and has a relatively long half-life (about 15-20 days), albumin levels can reflect long-term nutritional status and chronic liver function.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional Units:</strong> g/dL (gram per deciliter)</li>
            <li><em>Note: 1 g/L is equivalent to 0.1 g/dL. For example, 40 g/L is 4.0 g/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for albumin can vary slightly depending on the laboratory and age. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn (0-1 month):</strong> 28 - 44 g/L</li>
                    <li><strong>Infants (1 month - 1 year):</strong> 35 - 54 g/L</li>
                    <li><strong>Children (1 - 18 years):</strong> 38 - 54 g/L</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 35 - 50 g/L (3.5 - 5.0 g/dL)</li>
            <li><strong>Elderly (over 65 years):</strong> Can sometimes be slightly lower than in younger adults, but usually remains within the established reference range.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Albumin (Hyperalbuminemia):</h3>
        <p>An elevated albumin level (hyperalbuminemia) is almost always due to a **relative increase** in its concentration rather than increased production. It typically indicates a reduction in the fluid portion of the blood.</p>
        <ul>
            <li><strong>Dehydration:</strong> The most common cause. When there is insufficient fluid intake or excessive fluid loss (e.g., from severe vomiting, diarrhea, excessive sweating, or inadequate fluid replacement), the blood becomes more concentrated, and albumin appears elevated.</li>
            <li><strong>Severe Hemoconcentration:</strong> Any condition leading to a significant decrease in plasma volume relative to red blood cells.</li>
        </ul>
        <p>True overproduction of albumin by the liver is extremely rare and usually not a cause of hyperalbuminemia.</p>

        <h3>Low Albumin (Hypoalbuminemia):</h3>
        <p>A low albumin level (hypoalbuminemia) is a common and clinically significant finding, often indicating an underlying medical condition. It can result from decreased synthesis, increased loss, or increased fluid volume.</p>
        <ul>
            <li><strong>Liver Disease:</strong> The liver is the sole site of albumin synthesis. Severe or chronic liver damage (e.g., cirrhosis, chronic hepatitis, liver failure) impairs the liver's ability to produce sufficient albumin. This is a crucial indicator of liver synthetic function.</li>
            <li><strong>Malnutrition/Malabsorption:</strong> Insufficient protein intake (e.g., severe protein-calorie malnutrition) or conditions that prevent proper absorption of amino acids from the gut (e.g., celiac disease, Crohn's disease, short bowel syndrome) can lead to insufficient building blocks for albumin synthesis.</li>
            <li><strong>Kidney Disease (Nephrotic Syndrome):</strong> Damage to the glomeruli (filtering units) in the kidneys can lead to excessive leakage of albumin into the urine (proteinuria), resulting in significant loss from the blood.</li>
            <li><strong>Chronic Inflammation/Infection:</strong> In chronic inflammatory states (e.g., severe infections, autoimmune diseases, cancer), there is a "negative acute phase response" where albumin synthesis is decreased, and inflammatory proteins (acute phase reactants like CRP) are increased. This is a mechanism to conserve amino acids for the production of immune-related proteins.</li>
            <li><strong>Severe Burns:</strong> Extensive burns cause significant protein loss from the damaged skin surface.</li>
            <li><strong>Protein-Losing Enteropathy:</strong> Conditions where proteins leak from the gastrointestinal tract into the stool (e.g., severe inflammatory bowel disease, certain intestinal infections).</li>
            <li><strong>Fluid Overload (Overhydration):</strong> Excessive intravenous fluid administration or conditions leading to fluid retention (e.g., heart failure) can dilute the blood, leading to a falsely low albumin concentration.</li>
            <li><strong>Hyperthyroidism:</strong> Can sometimes increase albumin catabolism.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Albumin levels are a sensitive indicator of liver synthetic function and overall nutritional status. Because of its relatively long half-life, it is a better indicator of chronic rather than acute changes. For example, in acute liver failure, albumin levels may not drop immediately but will do so as the condition progresses.</p>
        <p>Low albumin is often associated with edema (swelling) due to reduced oncotic pressure, which allows fluid to leak out of blood vessels into the interstitial space. It is frequently assessed as part of a **total protein** measurement, and the ratio of **Albumin to Globulin (A/G ratio)** can provide further diagnostic clues about the type of protein imbalance present.</p>
        <p>Monitoring albumin levels is important in managing patients with chronic liver disease, kidney disease, severe infections, and those at risk of malnutrition.</p>
    `,
    relatedBiomarkers: ['total-protein']
},
{
    id: 'creatinine',
    name: 'Creatinine',
    description: 'A waste product from muscle metabolism, filtered by the kidneys. Indicates kidney function.',
    type: 'Kidney Function Marker',
    responsibleFor: 'Reflecting glomerular filtration rate (GFR) and overall kidney health.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Creatinine is a waste product generated from the normal breakdown of creatine phosphate in muscle tissue. It is freely filtered by the glomeruli in the kidneys and minimally reabsorbed or secreted by the renal tubules. As such, it is a widely used and reliable **Kidney Function Marker**.</p>

        <h3>Role and Function:</h3>
        <p>The concentration of creatinine in the blood directly reflects the **efficiency of glomerular filtration rate (GFR)**, which is the best overall measure of kidney function. A healthy kidney effectively filters creatinine out of the blood. If kidney function declines, creatinine accumulates in the blood, leading to elevated levels.</p>
        <p>Creatinine production is relatively constant, proportional to an individual's muscle mass. This makes it a stable indicator, though diet (e.g., high meat intake) and muscle mass variations need to be considered.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert µmol/L to mg/dL, divide by 88.4. To convert mg/dL to µmol/L, multiply by 88.4. For example, 106 µmol/L is approximately 1.2 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for creatinine vary with age, sex, and muscle mass. Due to generally higher muscle mass, adult males typically have higher creatinine levels than adult females.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborn:</strong> 26 - 71 µmol/L (0.3 - 0.8 mg/dL)</li>
                    <li><strong>Infants/Children:</strong> Values gradually increase with age and muscle development.</li>
                </ul>
            </li>
            <li><strong>Adult Male:</strong> 62 - 106 µmol/L (0.7 - 1.2 mg/dL)</li>
            <li><strong>Adult Female:</strong> 44 - 88 µmol/L (0.5 - 1.0 mg/dL)</li>
            <li><em>Values can vary with muscle mass, age, and diet. Individuals with very large muscle mass (e.g., bodybuilders) can have slightly higher normal creatinine levels, while those with very low muscle mass (e.g., elderly, amputees, severe malnutrition) can have lower normal levels.</em></li>
        </ul>

        <h3>High Creatinine (Elevated Creatinine):</h3>
        <p>An elevated creatinine level is the primary indicator of **impaired kidney function or kidney damage**. As kidney function declines, the kidneys are less able to filter creatinine efficiently, causing it to build up in the blood.</p>
        <ul>
            <li><strong>Acute Kidney Injury (AKI):</strong> A sudden and rapid decline in kidney function, often due to dehydration, severe infection, reduced blood flow to the kidneys, or certain medications.</li>
            <li><strong>Chronic Kidney Disease (CKD):</strong> A progressive, long-term loss of kidney function. Creatinine levels will gradually increase as CKD worsens.</li>
            <li><strong>Dehydration:</strong> A common cause of a temporary increase in creatinine due to reduced blood flow to the kidneys (pre-renal azotemia). This is usually reversible with rehydration.</li>
            <li><strong>Urinary Tract Obstruction:</strong> Blockages in the urinary tract (e.g., kidney stones, enlarged prostate, tumors) can cause urine to back up, impairing kidney function.</li>
            <li><strong>High Muscle Mass:</strong> Individuals with very high muscle mass (e.g., bodybuilders) can have slightly elevated creatinine levels even with normal kidney function, as they produce more creatinine.</li>
            <li><strong>High Protein Diet:</strong> A diet very rich in meat can temporarily increase creatinine levels.</li>
            <li><strong>Certain Medications:</strong> Some drugs can temporarily elevate creatinine by interfering with its secretion by the kidneys or by reducing kidney blood flow (e.g., NSAIDs, some antibiotics, ACE inhibitors, ARBs).</li>
            <li><strong>Rhabdomyolysis:</strong> Rapid breakdown of muscle tissue releases large amounts of creatinine and other muscle breakdown products.</li>
        </ul>

        <h3>Low Creatinine (Decreased Creatinine):</h3>
        <p>A low creatinine level is less common and usually not clinically significant on its own. It typically reflects conditions associated with decreased muscle mass or dilution.</p>
        <ul>
            <li><strong>Low Muscle Mass:</strong> Individuals with very little muscle mass (e.g., elderly, malnourished individuals, amputees, chronic debilitating illness) naturally produce less creatinine.</li>
            <li><strong>Malnutrition/Severe Liver Disease:</strong> In severe cases, where muscle wasting occurs, or the liver's ability to synthesize creatine is compromised (though this is a rare cause for significantly low creatinine).</li>
            <li><strong>Pregnancy:</strong> Creatinine levels can be slightly lower due to increased glomerular filtration rate (GFR).</li>
            <li><strong>Overhydration:</strong> Excessive fluid in the body can dilute blood creatinine.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Creatinine is a very useful kidney function test. However, because its levels are influenced by muscle mass, it is often used to **estimate Glomerular Filtration Rate (eGFR)**. eGFR is calculated using formulas (e.g., CKD-EPI, MDRD) that take into account creatinine levels, age, sex, and sometimes race, providing a more accurate assessment of kidney function than creatinine alone.</p>
        <p>Creatinine is often measured alongside **Blood Urea Nitrogen (BUN)**. The **BUN/Creatinine ratio** can help differentiate between different causes of kidney impairment (pre-renal, renal, post-renal). For example, a high BUN/Creatinine ratio (with normal or slightly elevated creatinine) often indicates dehydration.</p>
        <p>Monitoring creatinine levels is essential for diagnosing kidney disease, assessing its progression, and monitoring the effects of medications that impact kidney function.</p>
    `,
    relatedBiomarkers: ['urea']
},
{
    id: 'urea',
    name: 'Urea (Blood Urea Nitrogen - BUN)',
    description: 'A waste product from protein breakdown, filtered by the kidneys. Indicates kidney and liver function.',
    type: 'Kidney & Liver Function Marker',
    responsibleFor: 'Transporting nitrogenous waste from protein metabolism to the kidneys for excretion.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Urea is a waste product formed in the liver as a result of protein metabolism (breakdown of amino acids). It is transported in the blood to the kidneys, where it is filtered out and excreted in the urine. Blood Urea Nitrogen (BUN) is a common way to measure urea in the United States, referring specifically to the nitrogen portion of the urea molecule. Both urea and BUN are used as **Kidney and Liver Function Markers**.</p>

        <h3>Role and Function:</h3>
        <p>Urea serves as the primary means for the body to **excrete excess nitrogen** generated from protein breakdown. The liver converts ammonia (a toxic byproduct of protein metabolism) into urea, which is then transported by the blood to the kidneys. Healthy kidneys efficiently filter urea from the blood. Therefore, urea levels in the blood reflect:</p>
        <ul>
            <li><strong>Kidney function:</strong> Impaired kidney function leads to reduced urea excretion and its accumulation in the blood.</li>
            <li><strong>Liver function:</strong> A severely damaged liver may not be able to produce enough urea, leading to low levels (though this is less common).</li>
            <li><strong>Protein intake and metabolism:</strong> Higher protein intake or increased protein breakdown can increase urea production.</li>
            <li><strong>Hydration status:</strong> Affects blood concentration.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter) for Urea.</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter) for Urea Nitrogen (BUN).</li>
            <li><em>Note: To convert Urea (mmol/L) to BUN (mg/dL), multiply mmol/L by 2.8. To convert BUN (mg/dL) to Urea (mmol/L), divide mg/dL by 2.8. For example, 7.5 mmol/L Urea is approximately 21 mg/dL BUN.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for urea (or BUN) can vary slightly depending on the laboratory, age, and diet.</p>
        <ul>
            <li><strong>Children:</strong> Generally lower than adults, increasing with age.</li>
            <li><strong>Adults:</strong> 2.5 - 7.5 mmol/L (7 - 20 mg/dL as BUN)</li>
            <li><strong>Elderly (over 65 years):</strong> Upper limit can be slightly higher, e.g., up to 25 mg/dL BUN (8.9 mmol/L Urea), due to normal age-related decline in kidney function and decreased muscle mass influencing creatinine.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Urea (High BUN - Azotemia):</h3>
        <p>An elevated urea (or BUN) level, a condition known as azotemia, indicates that the kidneys are not clearing urea from the blood efficiently, or that there is increased urea production. It's broadly categorized by its cause:</p>
        <ul>
            <li><strong>Pre-renal Azotemia (Decreased Blood Flow to Kidneys):</strong>
                <ul>
                    <li><strong>Dehydration:</strong> The most common cause. Reduced fluid volume leads to less blood flow through the kidneys, reducing filtration.</li>
                    <li><strong>Heart Failure/Shock:</strong> Conditions that reduce blood flow to the kidneys.</li>
                    <li><strong>Severe Bleeding/Hypovolemia:</strong> Significant blood loss.</li>
                </ul>
            </li>
            <li><strong>Renal Azotemia (Kidney Damage/Disease):</strong>
                <ul>
                    <li><strong>Acute Kidney Injury (AKI):</strong> Sudden damage to kidney tubules or glomeruli (e.g., from toxins, severe infections).</li>
                    <li><strong>Chronic Kidney Disease (CKD):</strong> Progressive loss of kidney function over time (e.g., due to diabetes, hypertension).</li>
                </ul>
            </li>
            <li><strong>Post-renal Azotemia (Urinary Tract Obstruction):</strong>
                <ul>
                    <li><strong>Kidney Stones.</strong></li>
                    <li><strong>Enlarged Prostate (BPH).</strong></li>
                    <li><strong>Tumors</strong> blocking the urinary tract.</li>
                </ul>
            </li>
            <li><strong>Increased Protein Catabolism/High Protein Intake:</strong>
                <ul>
                    <li><strong>High Protein Diet.</strong></li>
                    <li><strong>Gastrointestinal Bleeding:</strong> Digestion of blood protein.</li>
                    <li><strong>Excessive Tissue Breakdown:</strong> (e.g., severe burns, trauma, fever, major surgery, starvation).</li>
                </ul>
            </li>
            <li><strong>Certain Medications:</strong> Some drugs can increase BUN (e.g., corticosteroids, tetracycline).</li>
        </ul>

        <h3>Low Urea (Low BUN):</h3>
        <p>A low urea (or BUN) level is less common and usually indicates either reduced urea production by the liver or increased fluid volume in the blood. It is rarely clinically significant on its own unless very low.</p>
        <ul>
            <li><strong>Severe Liver Disease:</strong> A severely damaged liver (e.g., late-stage cirrhosis, acute fulminant hepatitis) may be unable to convert ammonia to urea effectively, leading to low urea and potentially high ammonia.</li>
            <li><strong>Malnutrition/Low Protein Diet:</strong> Insufficient protein intake reduces the amount of nitrogen available for urea synthesis.</li>
            <li><strong>Overhydration:</strong> Excessive fluid in the body (e.g., from excessive IV fluids, Syndrome of Inappropriate Antidiuretic Hormone - SIADH) can dilute the blood, leading to a falsely low urea concentration.</li>
            <li><strong>Pregnancy:</strong> Normal physiological hemodilution can lead to slightly lower urea levels.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Urea (BUN) is most useful when interpreted in conjunction with **Creatinine**. The **BUN/Creatinine ratio** is an important diagnostic tool:</p>
        <ul>
            <li><strong>High BUN/Creatinine Ratio (e.g., >20:1) with elevated BUN and normal or slightly elevated Creatinine:</strong> Often indicates pre-renal azotemia (e.g., dehydration, heart failure).</li>
            <li><strong>Normal BUN/Creatinine Ratio (e.g., 10-20:1) with both elevated BUN and Creatinine:</strong> Suggests intrinsic kidney disease (renal azotemia).</li>
            <li><strong>High BUN/Creatinine Ratio (e.g., >20:1) with both elevated BUN and Creatinine:</strong> Can indicate post-renal obstruction or severe gastrointestinal bleeding.</li>
        </ul>
        <p>Monitoring urea (BUN) levels is crucial for evaluating kidney function, hydration status, and liver health, especially in patients with chronic diseases or those undergoing certain medical treatments.</p>
    `,
    relatedBiomarkers: ['creatinine']
},
{
    id: 'bilirubin',
    name: 'Bilirubin (Total, Direct, Indirect)',
    description: 'A yellow pigment produced during red blood cell breakdown. Elevated levels cause jaundice.',
    type: 'Liver Function Marker',
    responsibleFor: 'Assessing liver health and bile duct function; direct bilirubin indicates conjugated, indirect unconjugated.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Bilirubin is a yellowish pigment that is a byproduct of the normal breakdown of red blood cells. When red blood cells complete their lifespan, hemoglobin is broken down, and the heme portion is converted into bilirubin. Bilirubin levels are a key component of **Liver Function Tests (LFTs)** and are crucial for assessing liver health and bile duct function.</p>

        <h3>Metabolism of Bilirubin:</h3>
        <ol>
            <li><strong>Indirect (Unconjugated) Bilirubin:</strong> When red blood cells break down, the heme is initially converted into **unconjugated bilirubin** (also called indirect bilirubin). This form is fat-soluble and insoluble in water, so it binds to albumin in the blood for transport to the liver.</li>
            <li><strong>Direct (Conjugated) Bilirubin:</strong> In the liver, unconjugated bilirubin is "conjugated" (joined) with glucuronic acid by an enzyme called UDP-glucuronosyltransferase. This produces **conjugated bilirubin** (also called direct bilirubin), which is water-soluble.</li>
            <li><strong>Bile Excretion:</strong> Conjugated bilirubin is then excreted from the liver into the bile ducts, eventually reaching the small intestine and being eliminated in the stool (giving stool its characteristic brown color). A small amount is reabsorbed and excreted in the urine.</li>
        </ol>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert µmol/L to mg/dL, divide by 17.1. To convert mg/dL to µmol/L, multiply by 17.1. For example, 21 µmol/L is approximately 1.2 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for bilirubin can vary slightly by laboratory. Values are often significantly higher in newborns due to immature liver function and increased red blood cell turnover.</p>
        <ul>
            <li><strong>Newborns:</strong> Can be much higher, peaking at 5-6 mg/dL (85-100 µmol/L) or more in physiological jaundice, and requiring treatment if levels are too high.</li>
            <li><strong>Adults:</strong>
                <ul>
                    <li><strong>Total Bilirubin:</strong> 5 - 21 µmol/L (0.3 - 1.2 mg/dL)</li>
                    <li><strong>Direct (Conjugated) Bilirubin:</strong> 0 - 5 µmol/L (0 - 0.3 mg/dL)</li>
                    <li><strong>Indirect (Unconjugated) Bilirubin:</strong> 5 - 16 µmol/L (0.2 - 0.9 mg/dL)</li>
                    <li><em>Note: Indirect bilirubin is calculated as Total Bilirubin - Direct Bilirubin.</em></li>
                </ul>
            </li>
            <li><em>Values can vary by age (especially in newborns) and laboratory.</em></li>
        </ul>

        <h3>High Bilirubin (Hyperbilirubinemia - Jaundice):</h3>
        <p>An elevated bilirubin level (hyperbilirubinemia) leads to jaundice, a yellowish discoloration of the skin and whites of the eyes. High levels can indicate problems with red blood cell breakdown, liver function, or bile flow. The type of bilirubin elevated helps pinpoint the cause.</p>

        <h4><strong>High Indirect (Unconjugated) Bilirubin:</strong></h4>
        <p>Indicates a problem before bilirubin reaches or is processed by the liver. The liver is typically functional but overwhelmed or has an impaired ability to conjugate bilirubin.</p>
        <ul>
            <li><strong>Excessive Red Blood Cell Destruction (Hemolysis):</strong> When red blood cells are breaking down too rapidly (e.g., hemolytic anemia, large hematoma, transfusion reactions), the liver is overwhelmed by the increased bilirubin load.</li>
            <li><strong>Liver Impairment (Conjugation Defect):</strong> The liver's ability to conjugate bilirubin is reduced.
                <ul>
                    <li><strong>Gilbert's Syndrome:</strong> A common, benign genetic condition where the liver enzyme that conjugates bilirubin is less active, leading to mild, fluctuating elevations in unconjugated bilirubin, especially during stress or fasting.</li>
                    <li><strong>Crigler-Najjar Syndrome:</strong> A rare, more severe genetic defect in bilirubin conjugation.</li>
                </ul>
            </li>
            <li><strong>Neonatal Jaundice:</strong> Very common in newborns due to immature liver enzymes and increased red blood cell turnover.</li>
            <li><strong>Ineffective Erythropoiesis:</strong> Premature destruction of red blood cell precursors in the bone marrow.</li>
        </ul>

        <h4><strong>High Direct (Conjugated) Bilirubin:</strong></h4>
        <p>Indicates a problem after bilirubin has been conjugated by the liver, typically an issue with its excretion from the liver into the bile ducts or from the bile ducts into the intestine.</p>
        <ul>
            <li><strong>Bile Duct Obstruction (Cholestasis):</strong> Blockage of the bile ducts prevents conjugated bilirubin from being excreted. Causes include:
                <ul>
                    <li><strong>Gallstones.</strong></li>
                    <li><strong>Tumors</strong> (e.g., pancreatic cancer, bile duct cancer).</li>
                    <li><strong>Strictures (narrowing) of bile ducts.</strong></li>
                </ul>
            </li>
            <li><strong>Liver Disease (Hepatocellular Damage):</strong> Damage to liver cells (hepatocytes) can impair their ability to excrete conjugated bilirubin into bile.
                <ul>
                    <li><strong>Hepatitis (Viral, Alcoholic, Autoimmune, Drug-induced).</strong></li>
                    <li><strong>Cirrhosis:</strong> Advanced scarring of the liver.</li>
                    <li><strong>Drug-induced Liver Injury:</strong> Certain medications can cause direct liver cell damage.</li>
                </ul>
            </li>
            <li><strong>Genetic Disorders of Secretion:</strong> Rare genetic conditions affecting bilirubin transport out of liver cells (e.g., Dubin-Johnson Syndrome, Rotor Syndrome).</li>
        </ul>

        <h4><strong>High Total Bilirubin (Mixed Elevation of Direct & Indirect):</strong></h4>
        <p>Often seen in conditions that affect both bilirubin production/conjugation and excretion, or in more severe forms of liver disease.</p>

        <h3>Low Bilirubin:</h3>
        <p>A low bilirubin level is generally **not considered clinically significant** and usually does not indicate a health problem. It is typically a normal finding.</p>

        <h3>Additional Information:</h3>
        <p>Bilirubin tests are vital for diagnosing and monitoring liver diseases, bile duct obstructions, and hemolytic conditions. When evaluating bilirubin levels, it is crucial to:</p>
        <ul>
            <li><strong>Distinguish between indirect and direct bilirubin:</strong> This helps localize the problem to pre-hepatic (hemolysis), hepatic (liver disease affecting conjugation or excretion), or post-hepatic (bile duct obstruction) causes.</li>
            <li><strong>Consider other Liver Function Tests (LFTs):</strong> Bilirubin results are always interpreted in conjunction with other LFTs like **ALT, AST, ALP, and GGT** to provide a comprehensive picture of liver health and to narrow down the differential diagnosis.</li>
            <li><strong>Assess Clinical Symptoms:</strong> Jaundice, dark urine (due to conjugated bilirubin), pale stools (due to lack of bile pigment in stool), and itching (pruritus) are important symptoms.</li>
            <li><strong>Consider Age:</strong> Jaundice in newborns is common but requires careful monitoring due to the risk of kernicterus (bilirubin toxicity to the brain) at very high levels.</li>
        </ul>
        <p>Understanding the pattern of bilirubin elevation, along with other liver enzymes, is key to diagnosing the cause of jaundice and guiding appropriate management.</p>
    `,
    relatedBiomarkers: ['alt', 'ast', 'ggt']
    },
    {
    id: 'cholesterol',
    name: 'Cholesterol (Total, HDL, LDL, Triglycerides)',
    description: 'Important fats in the blood, crucial for cell health but high levels increase cardiovascular risk.',
    type: 'Lipid Panel',
    responsibleFor: 'Cell membrane structure, hormone production, and energy storage. Crucial for cardiovascular risk assessment.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Cholesterol and triglycerides are types of lipids (fats) that are essential for various bodily functions, but abnormal levels can significantly increase the risk of cardiovascular disease. They are measured as part of a **Lipid Panel (or Lipid Profile)**.</p>

        <h3>Role and Function:</h3>
        <ul>
            <li><strong>Total Cholesterol:</strong> Represents the sum of all types of cholesterol in the blood. Cholesterol is a waxy, fat-like substance found in all cells of the body. It is vital for:
                <ul>
                    <li>Building healthy cells.</li>
                    <li>Producing hormones (steroid hormones, vitamin D).</li>
                    <li>Aiding in digestion (forming bile acids).</li>
                </ul>
                The body produces all the cholesterol it needs, but it is also consumed through diet.
            </li>
            <li><strong>HDL Cholesterol (High-Density Lipoprotein - "Good" Cholesterol):</strong> Helps remove excess cholesterol from the arteries and transport it back to the liver for excretion or re-processing. High levels are protective against heart disease.</li>
            <li><strong>LDL Cholesterol (Low-Density Lipoprotein - "Bad" Cholesterol):</strong> Carries cholesterol to cells throughout the body. High levels can lead to the buildup of plaque in the arteries (atherosclerosis), narrowing them and increasing the risk of heart attack and stroke.</li>
            <li><strong>Triglycerides:</strong> The most common type of fat in the body. They store excess energy from your diet. High levels, especially in combination with high LDL or low HDL, are associated with an increased risk of heart disease and pancreatitis.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert mmol/L to mg/dL for cholesterol, multiply by 38.67. For triglycerides, multiply by 88.57.</em></li>
        </ul>

        <h3>Reference Values (Fasting Lipid Panel - 9-12 hours fast is usually required):</h3>
        <p>Optimal levels can vary significantly based on individual risk factors for cardiovascular disease (e.g., age, sex, family history, presence of diabetes, hypertension, smoking status). The following are general guidelines:</p>
        <ul>
            <li><strong>Total Cholesterol:</strong>
                <ul>
                    <li><strong>Desirable:</strong> < 5.2 mmol/L (< 200 mg/dL)</li>
                    <li><strong>Borderline High:</strong> 5.2 - 6.2 mmol/L (200 - 239 mg/dL)</li>
                    <li><strong>High:</strong> ≥ 6.2 mmol/L (≥ 240 mg/dL)</li>
                </ul>
            </li>
            <li><strong>HDL (Good) Cholesterol:</strong>
                <ul>
                    <li><strong>Low (Increased Risk):</strong>
                        <ul>
                            <li>Men: < 1.0 mmol/L (< 40 mg/dL)</li>
                            <li>Women: < 1.3 mmol/L (< 50 mg/dL)</li>
                        </ul>
                    </li>
                    <li><strong>Optimal (Protective):</strong> ≥ 1.55 mmol/L (≥ 60 mg/dL)</li>
                </ul>
            </li>
            <li><strong>LDL (Bad) Cholesterol:</strong>
                <ul>
                    <li><strong>Optimal:</strong> < 2.6 mmol/L (< 100 mg/dL)</li>
                    <li><strong>Near Optimal/Above Optimal:</strong> 2.6 - 3.3 mmol/L (100 - 129 mg/dL)</li>
                    <li><strong>Borderline High:</strong> 3.4 - 4.1 mmol/L (130 - 159 mg/dL)</li>
                    <li><strong>High:</strong> 4.1 - 4.9 mmol/L (160 - 189 mg/dL)</li>
                    <li><strong>Very High:</strong> ≥ 4.9 mmol/L (≥ 190 mg/dL)</li>
                    <li><em>Note: For individuals with existing cardiovascular disease or very high risk, target LDL levels may be even lower, e.g., < 1.8 mmol/L (< 70 mg/dL).</em></li>
                </ul>
            </li>
            <li><strong>Triglycerides:</strong>
                <ul>
                    <li><strong>Normal:</strong> < 1.7 mmol/L (< 150 mg/dL)</li>
                    <li><strong>Borderline High:</strong> 1.7 - 2.2 mmol/L (150 - 199 mg/dL)</li>
                    <li><strong>High:</strong> 2.3 - 5.6 mmol/L (200 - 499 mg/dL)</li>
                    <li><strong>Very High:</strong> ≥ 5.6 mmol/L (≥ 500 mg/dL) - significantly increases risk of pancreatitis.</li>
                </ul>
            </li>
            <li><em>Optimal levels vary based on individual risk factors and clinical guidelines.</em></li>
        </ul>

        <h3>High Cholesterol/Triglycerides (Dyslipidemia/Hyperlipidemia):</h3>
        <p>High levels of total cholesterol, LDL cholesterol, and/or triglycerides, and low levels of HDL cholesterol, are collectively known as dyslipidemia or hyperlipidemia. This condition is a major risk factor for **atherosclerosis** (hardening and narrowing of the arteries), leading to **heart attack, stroke, and peripheral artery disease**.</p>
        <ul>
            <li><strong>Causes:</strong>
                <ul>
                    <li><strong>Diet:</strong> High intake of saturated fats, trans fats, and dietary cholesterol. Excessive calories (especially from refined carbohydrates and sugars) contributing to high triglycerides.</li>
                    <li><strong>Genetics (Familial Hyperlipidemia):</strong> Inherited conditions can cause very high cholesterol levels, even with a healthy lifestyle.</li>
                    <li><strong>Obesity and Lack of Physical Activity.</strong></li>
                    <li><strong>Type 2 Diabetes:</strong> Often characterized by high triglycerides, low HDL, and sometimes high LDL.</li>
                    <li><strong>Hypothyroidism:</strong> Underactive thyroid can lead to increased LDL cholesterol.</li>
                    <li><strong>Kidney Disease:</strong> Nephrotic syndrome can cause increased lipid production.</li>
                    <li><strong>Liver Disease:</strong> Some liver conditions can affect lipid metabolism.</li>
                    <li><strong>Certain Medications:</strong> (e.g., corticosteroids, some diuretics, beta-blockers, some oral contraceptives).</li>
                    <li><strong>Metabolic Syndrome:</strong> A cluster of conditions (high blood pressure, high blood sugar, excess body fat around the waist, abnormal cholesterol or triglyceride levels) that increase the risk of heart disease, stroke, and diabetes.</li>
                </ul>
            </li>
        </ul>

        <h3>Low HDL:</h3>
        <p>A low HDL cholesterol level, even with normal total cholesterol, is associated with an **increased cardiovascular risk** because it means less "good" cholesterol is available to clear excess cholesterol from the arteries.</p>
        <ul>
            <li><strong>Causes:</strong> Lack of regular exercise, obesity, smoking, high triglyceride levels, Type 2 diabetes, metabolic syndrome, certain medications (e.g., beta-blockers).</li>
        </ul>

        <h3>Low LDL/Triglycerides:</h3>
        <p>Generally, lower LDL and triglyceride levels are desirable for cardiovascular health. However, extremely low levels can sometimes be indicative of certain rare conditions.</p>
        <ul>
            <li><strong>Extremely Low LDL/Total Cholesterol:</strong> Can be associated with rare genetic disorders (e.g., abetalipoproteinemia), severe liver disease, or severe malabsorption/malnutrition. These are usually accompanied by other significant symptoms.</li>
            <li><strong>Extremely Low Triglycerides:</strong> Often seen with severe malabsorption (e.g., celiac disease, cystic fibrosis), hyperthyroidism, or severe malnutrition.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Lipid panel testing is a cornerstone of cardiovascular risk assessment and management. Regular screening is recommended, especially for individuals with risk factors for heart disease.</p>
        <p>Management of dyslipidemia typically involves:</p>
        <ul>
            <li><strong>Lifestyle Modifications:</strong> Dietary changes (reducing saturated/trans fats, increasing fiber, consuming healthy fats), regular physical activity, weight management, and quitting smoking.</li>
            <li><strong>Medications:</strong> Statins are commonly prescribed to lower LDL cholesterol, fibrates for high triglycerides, and other medications to improve lipid profiles.</li>
        </ul>
        <p>Monitoring lipid levels, along with other cardiovascular risk factors, is crucial for preventing heart disease and its complications.</p>
    `,
    relatedBiomarkers: ['hba1c', 'homocysteine']
},
{
    id: 'alt',
    name: 'Alanine Aminotransferase (ALT)',
    description: 'An enzyme found primarily in the liver. Elevated levels indicate liver damage.',
    type: 'Liver Enzyme',
    responsibleFor: 'Catalyzing a reaction involved in amino acid metabolism; highly specific for liver injury.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Alanine Aminotransferase (ALT), also known as Serum Glutamic Pyruvic Transaminase (SGPT), is an enzyme predominantly found in the liver. It is a highly sensitive and relatively specific **Liver Enzyme** used to detect liver cell damage.</p>

        <h3>Role and Function:</h3>
        <p>ALT is involved in amino acid metabolism, catalyzing the transfer of an amino group from alanine to $\alpha$-ketoglutarate, producing pyruvate and glutamate. This reaction is crucial for energy production and gluconeogenesis within liver cells (hepatocytes).</p>
        <p>Because ALT is primarily located in the cytoplasm of hepatocytes, significant amounts are released into the bloodstream when liver cells are damaged or inflamed. Therefore, elevated ALT levels directly indicate **liver cell injury or inflammation**.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: Standardized units ensure comparability across laboratories.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for ALT can vary slightly by laboratory, sex, and age. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong> Can be slightly higher than adults, especially in younger children.</li>
            <li><strong>Adults:</strong> 0 - 45 U/L (some labs use up to 55 U/L, or lower upper limits for females)</li>
            <li><strong>Adult Male:</strong> Often slightly higher upper limit (e.g., 0 - 55 U/L)</li>
            <li><strong>Adult Female:</strong> Often slightly lower upper limit (e.g., 0 - 45 U/L)</li>
            <li><em>Ranges can vary by laboratory, sex, and age. Obesity and insulin resistance can cause mildly elevated ALT in otherwise healthy individuals.</em></li>
        </ul>

        <h3>High ALT (Elevated ALT):</h3>
        <p>An elevated ALT level is the most common and specific indicator of **acute or chronic liver cell damage (hepatocellular injury)**. The degree of elevation often correlates with the extent of liver inflammation or necrosis.</p>
        <ul>
            <li><strong>Viral Hepatitis:</strong> Acute (e.g., Hepatitis A, B, C) and chronic (e.g., Hepatitis B, C) viral infections are a major cause of highly elevated ALT.</li>
            <li><strong>Fatty Liver Disease (Non-alcoholic Fatty Liver Disease - NAFLD / Non-alcoholic Steatohepatitis - NASH):</strong> Increasingly common cause of chronically elevated ALT, often associated with obesity, diabetes, and metabolic syndrome.</li>
            <li><strong>Alcoholic Liver Disease:</strong> Alcohol abuse can cause alcoholic hepatitis and cirrhosis, leading to elevated ALT (though AST is often higher than ALT in alcoholic liver disease).</li>
            <li><strong>Drug-Induced Liver Injury (DILI):</strong> Many medications, supplements, and herbal remedies can cause liver damage (e.g., acetaminophen overdose, statins, some antibiotics).</li>
            <li><strong>Cirrhosis:</strong> Advanced scarring of the liver from any chronic cause can lead to elevated ALT, though levels may normalize in very late-stage cirrhosis when there are few remaining healthy liver cells.</li>
            <li><strong>Autoimmune Hepatitis:</strong> The immune system attacks liver cells.</li>
            <li><strong>Ischemic Hepatitis ("Shock Liver"):</strong> Liver damage due to insufficient blood flow (e.g., from severe heart failure or shock), leading to very high ALT levels (often thousands U/L).</li>
            <li><strong>Hemochromatosis:</strong> Iron overload.</li>
            <li><strong>Wilson's Disease:</strong> Copper accumulation.</li>
            <li><strong>Alpha-1 Antitrypsin Deficiency:</strong> Genetic disorder affecting liver and lung.</li>
            <li><strong>Celiac Disease:</strong> Can sometimes cause mild ALT elevation.</li>
            <li><strong>Muscle Injury:</strong> While ALT is primarily hepatic, very high levels of muscle damage (e.g., rhabdomyolysis, severe trauma) can cause mild ALT elevation (as AST is more predominantly found in muscle).</li>
        </ul>

        <h3>Low ALT:</h3>
        <p>A low ALT level is generally **not clinically significant** and usually does not indicate a health problem. It is a normal finding. Extremely low levels are rare and might be seen in very severe, end-stage liver disease where there are few functional liver cells left to produce the enzyme, or in vitamin B6 deficiency (a cofactor for ALT activity), but these are not primary diagnostic indicators.</p>

        <h3>Additional Information:</h3>
        <p>ALT is a crucial component of **Liver Function Tests (LFTs)**. It is frequently evaluated in conjunction with **Aspartate Aminotransferase (AST)**. While both enzymes are elevated in liver damage, ALT is considered more specific to the liver.</p>
        <p>The **AST/ALT ratio** can provide additional diagnostic clues:</p>
        <ul>
            <li><strong>AST/ALT ratio > 2:1 (or even 3:1):</strong> Highly suggestive of alcoholic liver disease.</li>
            <li><strong>AST/ALT ratio < 1:</strong> More commonly seen in viral hepatitis, fatty liver disease, or drug-induced liver injury.</li>
        </ul>
        <p>ALT levels are vital for screening for liver disease, monitoring its progression, and assessing the effectiveness of treatments, especially for conditions like hepatitis and fatty liver.</p>
    `,
    relatedBiomarkers: ['ast', 'ggt', 'alp']
},
{
    id: 'ast',
    name: 'Aspartate Aminotransferase (AST)',
    description: 'An enzyme found in the liver, heart, muscles, and kidneys. Elevated levels can indicate damage to these organs.',
    type: 'Liver Enzyme',
    responsibleFor: 'Catalyzing a reaction involved in amino acid metabolism; less specific for liver than ALT.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Aspartate Aminotransferase (AST), also known as Serum Glutamic Oxaloacetic Transaminase (SGOT), is an enzyme found in various tissues throughout the body, including the **liver, heart, skeletal muscles, kidneys, brain, and red blood cells**. While often included in Liver Function Tests, its presence in multiple organs makes it **less specific for liver damage than ALT**.</p>

        <h3>Role and Function:</h3>
        <p>AST plays a role in amino acid metabolism, catalyzing the transfer of an amino group from aspartate to $\alpha$-ketoglutarate, producing oxaloacetate and glutamate. This reaction is important for energy production and gluconeogenesis.</p>
        <p>Like ALT, AST is released into the bloodstream when cells containing it are damaged or inflamed. Therefore, elevated AST levels indicate **cellular injury** in any of the organs where it is present.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: Standardized units ensure comparability across laboratories.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for AST can vary slightly by laboratory, sex, and age. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong> Can be slightly higher than adults, especially in younger children.</li>
            <li><strong>Adults:</strong> 0 - 40 U/L (some labs use up to 50 U/L)</li>
            <li><strong>Adult Male:</strong> Often slightly higher than females.</li>
            <li><em>Ranges can vary by laboratory, sex, and age.</em></li>
        </ul>

        <h3>High AST (Elevated AST):</h3>
        <p>An elevated AST level indicates cell damage in an organ where AST is abundant. To determine if the liver is the primary source, it is crucial to interpret AST in conjunction with ALT.</p>
        <ul>
            <li><strong>Liver Damage:</strong>
                <ul>
                    <li><strong>Viral Hepatitis (Acute or Chronic).</strong></li>
                    <li><strong>Alcoholic Liver Disease:</strong> **AST is often significantly higher than ALT (AST/ALT ratio > 2:1, often >3:1)**, which is a key distinguishing feature.</li>
                    <li><strong>Fatty Liver Disease (NAFLD/NASH).</strong></li>
                    <li><strong>Drug-Induced Liver Injury.</strong></li>
                    <li><strong>Cirrhosis.</strong></li>
                    <li><strong>Ischemic Hepatitis ("Shock Liver"):</strong> Can cause very high AST, often in the thousands U/L.</li>
                </ul>
            </li>
            <li><strong>Heart Attack (Myocardial Infarction):</strong> AST levels rise several hours after a heart attack, though troponin and CK-MB are now the preferred cardiac markers.</li>
            <li><strong>Muscle Injury/Damage:</strong>
                <ul>
                    <li><strong>Rhabdomyolysis:</strong> Severe muscle breakdown.</li>
                    <li><strong>Trauma, Strenuous Exercise, Muscle Disease (e.g., myositis, muscular dystrophy).</strong></li>
                    <li><strong>Intramuscular Injections.</strong></li>
                </ul>
            </li>
            <li><strong>Kidney Disease:</strong> Damage to kidney tissue.</li>
            <li><strong>Pancreatitis:</strong> Inflammation of the pancreas.</li>
            <li><strong>Hemolytic Anemia:</strong> Rapid breakdown of red blood cells.</li>
            <li><strong>Other Conditions:</strong> Severe burns, heatstroke, celiac disease, some cancers.</li>
        </ul>

        <h3>Low AST:</h3>
        <p>A low AST level is generally **not clinically significant** and usually does not indicate a health problem. It is a normal finding. Extremely low levels are rare and might be seen in very severe, end-stage liver disease (where there are few remaining viable liver cells) or in vitamin B6 deficiency (a cofactor for AST activity), but these are not primary diagnostic indicators.</p>

        <h3>Additional Information:</h3>
        <p>AST is a routine component of **Liver Function Tests (LFTs)**. Its interpretation is most valuable when compared to ALT. The **AST/ALT ratio** is a critical diagnostic tool:</p>
        <ul>
            <li><strong>AST/ALT ratio > 2:1 (or higher):</strong> Strongly suggests alcoholic liver disease.</li>
            <li><strong>AST/ALT ratio < 1:</strong> More common in viral hepatitis, non-alcoholic fatty liver disease, or drug-induced liver injury.</li>
            <li><strong>Isolated AST elevation (with normal ALT):</strong> Points to non-hepatic sources like heart or muscle injury.</li>
        </ul>
        <p>While AST can indicate liver damage, its lack of specificity means that an elevated AST always prompts consideration of other potential sources and further investigation if the liver is not the suspected cause.</p>
    `,
    relatedBiomarkers: ['alt', 'ggt', 'alp']
},
{
    id: 'ggt',
    name: 'Gamma-Glutamyl Transferase (GGT)',
    description: 'An enzyme found in the liver, bile ducts, and kidneys. Elevated levels indicate liver or bile duct issues.',
    type: 'Liver Enzyme',
    responsibleFor: 'Transferring gamma-glutamyl groups; useful for detecting bile duct obstruction and alcohol-induced liver damage.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Gamma-Glutamyl Transferase (GGT), also known as Gamma-Glutamyl Transpeptidase, is an enzyme widely distributed in various tissues, but its highest concentrations are found in the **liver, bile ducts, and kidneys**. It is a useful **Liver Enzyme** marker, particularly for detecting bile duct issues and liver damage associated with alcohol or certain drugs.</p>

        <h3>Role and Function:</h3>
        <p>GGT plays a role in the metabolism of glutathione, an important antioxidant, and in amino acid transport across cell membranes. It is predominantly located on the cell membranes of cells lining the bile ducts (cholangiocytes) and hepatocytes.</p>
        <p>Elevated GGT levels in the blood most commonly indicate **damage to the bile ducts (cholestasis) or liver cell injury**, or can be a marker of **alcohol consumption** or certain drug effects.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: Standardized units ensure comparability across laboratories.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for GGT can vary slightly by laboratory, sex, and age. Values are generally higher in males than in females.</p>
        <ul>
            <li><strong>Children:</strong> Varies significantly by age, typically higher in newborns and infants, then decreases.</li>
            <li><strong>Adult Male:</strong> 10 - 71 U/L (some labs use up to 70-80 U/L)</li>
            <li><strong>Adult Female:</strong> 6 - 42 U/L (some labs use up to 45-50 U/L)</li>
            <li><em>Ranges can vary by laboratory and age. Chronic alcohol consumption, even in moderate amounts, can elevate GGT.</em></li>
        </ul>

        <h3>High GGT (Elevated GGT):</h3>
        <p>An elevated GGT level is a sensitive indicator of hepatobiliary (liver and bile duct) dysfunction. It is particularly useful in distinguishing the source of an elevated Alkaline Phosphatase (ALP).</p>
        <ul>
            <li><strong>Bile Duct Obstruction (Cholestasis):</strong> The most common and significant cause of GGT elevation. When bile flow is blocked (e.g., by gallstones, tumors, strictures), GGT is released from the damaged bile duct cells. In this context, GGT is typically elevated along with ALP.</li>
            <li><strong>Alcohol Abuse:</strong> GGT is highly sensitive to even moderate chronic alcohol consumption and is often used as a marker for alcohol-induced liver damage or excessive drinking, even before other liver enzymes are significantly affected. The enzyme activity is induced by alcohol.</li>
            <li><strong>Liver Diseases (Hepatocellular Damage):</strong>
                <ul>
                    <li><strong>Viral Hepatitis (Acute or Chronic).</strong></li>
                    <li><strong>Fatty Liver Disease (NAFLD/NASH).</strong></li>
                    <li><strong>Cirrhosis</strong> (from any cause).</li>
                    <li><strong>Drug-Induced Liver Injury:</strong> Many medications (e.g., phenobarbital, phenytoin, carbamazepine, some antifungals, statins) can induce GGT production.</li>
                </ul>
            </li>
            <li><strong>Pancreatitis:</strong> Especially if there is associated bile duct involvement.</li>
            <li><strong>Heart Failure:</strong> Congestive heart failure can cause liver congestion and mild GGT elevation.</li>
            <li><strong>Obesity and Metabolic Syndrome:</strong> Often associated with non-alcoholic fatty liver disease, leading to GGT elevation.</li>
            <li><strong>Diabetes:</strong> Poorly controlled diabetes can sometimes lead to mild GGT elevation.</li>
            <li><strong>Myocardial Infarction (Heart Attack):</strong> Can sometimes cause a transient GGT elevation.</li>
        </ul>

        <h3>Low GGT:</h3>
        <p>A low GGT level is generally **not clinically significant** and usually does not indicate a health problem. It is a normal finding. GGT levels are typically very low in healthy individuals.</p>

        <h3>Additional Information:</h3>
        <p>GGT is a key component of **Liver Function Tests (LFTs)**. Its primary utility lies in its relationship with ALP:</p>
        <ul>
            <li><strong>Elevated ALP + Elevated GGT:</strong> Strongly suggests that the elevated ALP is due to liver or bile duct disease (cholestasis).</li>
            <li><strong>Elevated ALP + Normal GGT:</strong> Suggests that the elevated ALP is likely due to non-liver sources, such as bone disease (e.g., Paget's disease, bone fractures, vitamin D deficiency).</li>
        </ul>
        <p>GGT is also particularly useful in monitoring individuals with a history of alcohol abuse or those on medications known to induce liver enzymes. However, like other liver enzymes, GGT should always be interpreted in the context of other liver tests (ALT, AST, ALP, bilirubin) and the patient's full clinical picture.</p>
    `,
    relatedBiomarkers: ['alt', 'ast', 'alp']
    },
    {
    id: 'alp',
    name: 'Alkaline Phosphatase (ALP)',
    description: 'An enzyme found in liver, bone, kidneys, and intestines. Elevated levels suggest liver or bone disorders.',
    type: 'Liver/Bone Enzyme',
    responsibleFor: 'Various metabolic processes; elevated in conditions affecting bone formation or bile flow.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Alkaline Phosphatase (ALP) is an enzyme found throughout the body, with significant concentrations in the **liver, bone, kidneys, intestines, and placenta (during pregnancy)**. It is often included in a **Liver Function Test (LFT) panel** but also serves as an important **Bone Marker**.</p>

        <h3>Role and Function:</h3>
        <p>ALP's precise physiological role is complex and varies by tissue, but it is broadly involved in dephosphorylation, removing phosphate groups from various molecules. Its key clinical significance relates to:</p>
        <ul>
            <li><strong>Liver:</strong> ALP is concentrated in the cells lining the bile ducts (cholangiocytes). When bile flow is obstructed (cholestasis), ALP synthesis increases, and it leaks into the bloodstream.</li>
            <li><strong>Bone:</strong> ALP is produced by osteoblasts, the cells responsible for bone formation and mineralization. Therefore, conditions involving increased bone turnover or new bone growth lead to elevated ALP.</li>
            <li><strong>Other Tissues:</strong> Smaller amounts are found in the intestines and kidneys; the placenta produces a specific isoform during pregnancy.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: Standardized units ensure comparability across laboratories.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for ALP can vary significantly by age and physiological state, particularly due to bone growth and pregnancy. Sex differences are also observed. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborns and Infants:</strong> Significantly higher (e.g., 50 - 300 U/L or more) due to rapid bone growth.</li>
                    <li><strong>Puberty/Adolescents:</strong> Can reach very high levels (e.g., up to 500 U/L) during bone growth spurts.</li>
                </ul>
            </li>
            <li><strong>Adults:</strong> 40 - 150 U/L (ranges can vary; some labs use lower upper limits for females).</li>
            <li><strong>Pregnant Women:</strong> Levels can increase significantly in the second and third trimesters due to placental production of ALP.</li>
            <li><strong>Elderly:</strong> May have slightly higher normal ranges than younger adults.</li>
            <li><em>Values are higher in children and pregnant women due to bone growth and placental production. Can vary by laboratory.</em></li>
        </ul>

        <h3>High ALP (Elevated Alkaline Phosphatase):</h3>
        <p>An elevated ALP is a common finding and requires careful interpretation, as it can arise from liver, bone, or other sources. Often, other tests are needed to pinpoint the origin.</p>
        <ul>
            <li><strong>Liver and Bile Duct Disorders:</strong> The most common pathological cause.
                <ul>
                    <li><strong>Bile Duct Obstruction (Cholestasis):</strong> This is the primary hepatic cause. Conditions like gallstones, tumors (e.g., pancreatic, bile duct), strictures, or inflammation (e.g., primary biliary cholangitis, primary sclerosing cholangitis) that block bile flow lead to significant ALP elevation. GGT is often also elevated in these cases.</li>
                    <li><strong>Hepatitis/Cirrhosis:</strong> While ALT/AST are more indicative of liver cell damage, ALP can also be elevated in various liver diseases, particularly those with a cholestatic component.</li>
                    <li><strong>Drug-Induced Liver Injury:</strong> Some medications can cause cholestatic injury.</li>
                </ul>
            </li>
            <li><strong>Bone Diseases:</strong> Conditions involving increased osteoblast activity (bone formation).
                <ul>
                    <li><strong>Paget's Disease of Bone:</strong> A chronic disorder leading to abnormally rapid bone breakdown and regrowth, causing very high ALP levels.</li>
                    <li><strong>Osteomalacia (Adults) / Rickets (Children):</strong> Softening of bones due to vitamin D deficiency, leading to impaired mineralization and increased osteoblast activity.</li>
                    <li><strong>Bone Fractures:</strong> During the healing process, ALP levels can be elevated.</li>
                    <li><strong>Bone Tumors (Primary or Metastatic):</strong> Cancers that have spread to the bone or originate in bone can stimulate osteoblast activity.</li>
                    <li><strong>Hyperparathyroidism:</strong> Excessive parathyroid hormone can lead to increased bone turnover.</li>
                </ul>
            </li>
            <li><strong>Physiological Causes:</strong>
                <ul>
                    <li><strong>Childhood Growth:</strong> Normal bone development.</li>
                    <li><strong>Pregnancy:</strong> Placental production of ALP.</li>
                    <li><strong>Healing Fractures.</strong></li>
                </ul>
            </li>
            <li><strong>Other Causes:</strong>
                <ul>
                    <li><strong>Kidney Failure:</strong> Can sometimes cause ALP elevation.</li>
                    <li><strong>Heart Failure.</strong></li>
                    <li><strong>Some Cancers:</strong> Can produce ALP ectopically (e.g., certain lung, breast, or kidney cancers).</li>
                    <li><strong>Chronic Pancreatitis.</strong></li>
                    <li><strong>Intestinal ALP:</strong> Some individuals have naturally higher levels of intestinal ALP, especially after fatty meals (rarely clinically significant).</li>
                </ul>
            </li>
        </ul>

        <h3>Low ALP (Decreased Alkaline Phosphatase):</h3>
        <p>A low ALP level (hypophosphatasia) is less common and usually not as clinically concerning as an elevated level, but it can indicate certain rare conditions or nutritional deficiencies.</p>
        <ul>
            <li><strong>Malnutrition/Severe Protein Deficiency:</strong> Particularly zinc deficiency, as zinc is a cofactor for ALP.</li>
            <li><strong>Hypophosphatasia:</strong> A rare genetic disorder characterized by defective bone mineralization and very low ALP levels, leading to skeletal abnormalities.</li>
            <li><strong>Wilson's Disease:</strong> In some cases, a very low ALP (particularly in the presence of acute liver failure) might suggest Wilson's disease.</li>
            <li><strong>Magnesium Deficiency.</strong></li>
            <li><strong>Pernicious Anemia.</strong></li>
            <li><strong>Hypothyroidism.</strong></li>
            <li><strong>Celiac Disease:</strong> Some studies show a link.</li>
            <li><strong>Rare Inherited Disorders:</strong> Affecting ALP production.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>When ALP is elevated, it's crucial to determine its source (liver vs. bone vs. other). This is typically done by evaluating other liver enzymes and specific bone markers:</p>
        <ul>
            <li><strong>If GGT is also elevated:</strong> The elevated ALP is almost certainly due to **liver or bile duct disease (cholestasis)**.</li>
            <li><strong>If GGT is normal:</strong> The elevated ALP is likely coming from **bone** (or possibly placenta, intestine in specific contexts).</li>
            <li><strong>Other Liver Enzymes (ALT, AST, Bilirubin):</strong> Provide further context for liver involvement.</li>
            <li><strong>Bone Markers:</strong> If bone disease is suspected, specific bone turnover markers (e.g., parathyroid hormone, calcium, phosphate, vitamin D) can be measured.</li>
        </ul>
        <p>ALP is an important diagnostic tool for a wide range of conditions affecting bone and the hepatobiliary system, and its interpretation requires a comprehensive clinical approach.</p>
    `,
    relatedBiomarkers: ['alt', 'ast', 'ggt']
},
{
    id: 'amylase',
    name: 'Amylase',
    description: 'An enzyme primarily produced by the pancreas and salivary glands. Used to diagnose pancreatitis.',
    type: 'Pancreatic Enzyme',
    responsibleFor: 'Breaking down carbohydrates into sugars.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Amylase is a digestive enzyme primarily produced by the **pancreas** and the **salivary glands**. Smaller amounts are also made by the ovaries, fallopian tubes, and small intestine. It is a key **Pancreatic Enzyme** often measured to diagnose conditions affecting these organs.</p>

        <h3>Role and Function:</h3>
        <p>Amylase's main function is to **break down complex carbohydrates (starches) into simpler sugars** (maltose and glucose) in the digestive tract. This process begins in the mouth (salivary amylase) and continues in the small intestine (pancreatic amylase).</p>
        <p>In a healthy state, only small amounts of amylase are found in the blood. However, when the pancreas or salivary glands are inflamed or damaged, large amounts of amylase leak into the bloodstream, leading to elevated levels.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: Standardized units ensure comparability across laboratories.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for amylase can vary slightly by laboratory. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Adults:</strong> 25 - 125 U/L (some labs use up to 100 U/L)</li>
            <li><strong>Children:</strong> Similar to adults after infancy.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Amylase (Hyperamylasemia):</h3>
        <p>An elevated amylase level strongly suggests **pancreatitis (inflammation of the pancreas)**, but because amylase is also produced elsewhere, other conditions can cause its elevation. Levels are typically 3-4 times the upper limit of normal or higher in acute pancreatitis.</p>
        <ul>
            <li><strong>Acute Pancreatitis:</strong> The most common and significant cause of markedly elevated amylase. The enzyme spills into the bloodstream as pancreatic cells are damaged. Levels usually rise within 6-12 hours of symptom onset and normalize within 3-5 days.</li>
            <li><strong>Chronic Pancreatitis:</strong> Levels may be normal or only mildly elevated, and can even be low if extensive pancreatic damage has occurred.</li>
            <li><strong>Salivary Gland Disorders:</strong>
                <ul>
                    <li><strong>Mumps:</strong> Inflammation of the parotid glands.</li>
                    <li><strong>Salivary Gland Tumors or Obstruction (e.g., salivary duct stone).</strong></li>
                </ul>
            </li>
            <li><strong>Kidney Failure:</strong> Since amylase is cleared by the kidneys, impaired kidney function can lead to its accumulation and elevated blood levels, even without pancreatic disease.</li>
            <li><strong>Bowel Obstruction or Infarction:</strong> Damage to the intestine can release amylase.</li>
            <li><strong>Perforated Ulcer or Bowel Perforation:</strong> Contents from the GI tract can leak into the abdomen.</li>
            <li><strong>Ectopic Pregnancy (Ruptured):</strong> Can cause elevation.</li>
            <li><strong>Diabetic Ketoacidosis (DKA):</strong> Can cause mild elevation.</li>
            <li><strong>Abdominal Trauma.</strong></li>
            <li><strong>Certain Medications:</strong> (e.g., opiates, some diuretics).</li>
            <li><strong>Macroamylasemia:</strong> A benign condition where amylase binds to other proteins, forming large complexes that are not easily filtered by the kidneys, leading to persistently elevated amylase without symptoms.</li>
        </ul>

        <h3>Low Amylase (Hypoamylasemia):</h3>
        <p>A low amylase level is rarely clinically significant and is not routinely used for diagnosis. However, it can occasionally be seen in:</p>
        <ul>
            <li><strong>Severe Pancreatic Damage:</strong> In very late-stage chronic pancreatitis, extensive damage to the pancreatic cells that produce amylase can lead to low levels.</li>
            <li><strong>Cystic Fibrosis:</strong> Can lead to pancreatic exocrine insufficiency.</li>
            <li><strong>Liver Disease (Severe):</strong> Liver can contribute to amylase clearance.</li>
            <li><strong>Extensive Pancreatic Resection:</strong> Surgical removal of part of the pancreas.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>While amylase is a useful indicator for pancreatitis, its lack of specificity (due to production by salivary glands and renal clearance) means it is often interpreted in conjunction with **Lipase**.</p>
        <ul>
            <li><strong>Lipase is generally more specific for pancreatic injury than amylase.</strong> In cases of suspected pancreatitis, a lipase test is usually preferred or performed in addition to amylase.</li>
            <li>Amylase levels can rise and fall more quickly than lipase, which can be useful in monitoring the acute phase of pancreatitis.</li>
        </ul>
        <p>Therefore, when diagnosing pancreatitis, a significantly elevated amylase level (typically >3 times the upper limit of normal) combined with elevated lipase and characteristic clinical symptoms (severe abdominal pain) is usually diagnostic.</p>
    `,
    relatedBiomarkers: ['lipase']
},
{
    id: 'lipase',
    name: 'Lipase',
    description: 'An enzyme primarily produced by the pancreas. More specific than amylase for pancreatitis.',
    type: 'Pancreatic Enzyme',
    responsibleFor: 'Breaking down fats in the digestive system.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Lipase is a digestive enzyme that is predominantly produced by the **pancreas**. Smaller amounts are also made in the mouth and stomach. It is considered a highly specific **Pancreatic Enzyme** marker, particularly for the diagnosis of acute pancreatitis.</p>

        <h3>Role and Function:</h3>
        <p>Lipase's primary function is to **break down dietary fats (triglycerides) into smaller fatty acids and glycerol** in the small intestine, facilitating their absorption. This is a critical step in fat digestion.</p>
        <p>In a healthy state, only very low levels of lipase are present in the blood. When the pancreas is inflamed or damaged, lipase leaks into the bloodstream, leading to elevated levels. Because the pancreas is the main source of lipase that enters the bloodstream, elevated serum lipase is a **more specific indicator of pancreatic injury than amylase**.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: Standardized units ensure comparability across laboratories.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for lipase can vary slightly by laboratory. The values provided below are general guidelines.</p>
        <ul>
            <li><strong>Adults:</strong> 0 - 160 U/L (some labs may have an upper limit of 60 U/L or up to 200 U/L)</li>
            <li><strong>Children:</strong> Similar to adults after infancy.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Lipase (Elevated Lipase):</h3>
        <p>A significantly elevated lipase level is a **highly specific indicator of acute pancreatitis**. Levels are typically 3-5 times the upper limit of normal or higher in acute pancreatitis. Lipase generally remains elevated for a longer period than amylase in acute pancreatitis, making it useful for diagnosis even if a patient presents a few days after symptom onset.</p>
        <ul>
            <li><strong>Acute Pancreatitis:</strong> The most common and significant cause of markedly elevated lipase. As pancreatic cells are damaged, lipase leaks into the bloodstream. Levels usually rise within 4-8 hours of symptom onset, peak around 24 hours, and can remain elevated for 8-14 days.</li>
            <li><strong>Chronic Pancreatitis:</strong> Levels may be normal or only mildly elevated, and can even be low in end-stage chronic pancreatitis where significant pancreatic tissue has been destroyed.</li>
            <li><strong>Kidney Failure:</strong> Since lipase is primarily cleared by the kidneys, impaired kidney function can lead to its accumulation and elevated blood levels, even without pancreatic disease. This is a common non-pancreatic cause of elevated lipase.</li>
            <li><strong>Pancreatic Cancer:</strong> Can cause lipase elevation, especially if the tumor obstructs the pancreatic or bile ducts.</li>
            <li><strong>Bowel Obstruction or Infarction:</strong> Damage to the intestinal wall.</li>
            <li><strong>Perforated Ulcer or Bowel Perforation:</strong> Leakage of digestive enzymes into the abdominal cavity.</li>
            <li><strong>Cholecystitis (Gallbladder Inflammation):</strong> Especially if it leads to pancreatitis.</li>
            <li><strong>Abdominal Trauma.</strong></li>
            <li><strong>Certain Medications:</strong> (e.g., opiates, some diuretics).</li>
            <li><strong>Diabetic Ketoacidosis (DKA):</strong> Can cause mild elevation.</li>
        </ul>

        <h3>Low Lipase (Decreased Lipase):</h3>
        <p>A low lipase level is rarely clinically significant and is not routinely used for diagnosis. However, it can occasionally be seen in:</p>
        <ul>
            <li><strong>Severe Pancreatic Damage:</strong> In very late-stage chronic pancreatitis or extensive pancreatic resection, the severely damaged or removed pancreatic tissue may no longer produce sufficient lipase. This often leads to pancreatic exocrine insufficiency, requiring enzyme replacement.</li>
            <li><strong>Cystic Fibrosis:</strong> Can lead to severe pancreatic insufficiency and low lipase.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Lipase is the preferred test for diagnosing acute pancreatitis due to its higher specificity compared to amylase. A combination of significantly elevated lipase (typically >3 times the upper limit of normal) and characteristic clinical symptoms (severe acute abdominal pain radiating to the back, nausea, vomiting) is usually sufficient for diagnosing acute pancreatitis.</p>
        <p>While lipase is more specific, amylase can still be useful, particularly if a patient presents very early in the course of pancreatitis, as amylase levels may rise slightly faster. However, lipase generally stays elevated longer, making it useful for later presentations.</p>
        <p>Monitoring lipase levels is critical for diagnosing acute pancreatitis, assessing its severity, and differentiating it from other causes of abdominal pain.</p>
    `,
    relatedBiomarkers: ['amylase']
},
{
    id: 'sodium',
    name: 'Sodium',
    description: 'An electrolyte essential for fluid balance, nerve, and muscle function.',
    type: 'Electrolyte',
    responsibleFor: 'Maintaining fluid balance, blood pressure, nerve impulse transmission, and muscle contraction.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Sodium (Na$^+$) is the most abundant cation (positively charged ion) in the extracellular fluid (fluid outside cells), including blood plasma. It is a critical **Electrolyte** and its concentration is tightly regulated by the body to maintain fluid balance and proper cellular function.</p>

        <h3>Role and Function:</h3>
        <p>Sodium plays a central role in several vital physiological processes:</p>
        <ul>
            <li><strong>Fluid Balance and Blood Pressure:</strong> Sodium is the primary determinant of extracellular fluid volume. Changes in sodium concentration directly affect water movement between cells and the extracellular space, thereby influencing blood volume and blood pressure.</li>
            <li><strong>Nerve Impulse Transmission:</strong> Sodium ions are crucial for the generation and transmission of electrical impulses (action potentials) in nerve cells.</li>
            <li><strong>Muscle Contraction:</strong> Essential for the proper functioning of muscle cells, including the heart muscle.</li>
            <li><strong>Nutrient Transport:</strong> Involved in the co-transport of glucose and amino acids into cells.</li>
            <li><strong>Acid-Base Balance:</strong> Plays a minor role in maintaining the body's pH balance.</li>
        </ul>
        <p>Sodium balance is primarily regulated by the kidneys, along with hormones like aldosterone and antidiuretic hormone (ADH).</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional:</strong> mEq/L (milliequivalent per liter)</li>
            <li><em>Note: For sodium, mmol/L and mEq/L are numerically equivalent.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for sodium are typically quite narrow, reflecting the body's tight regulation of this electrolyte.</p>
        <ul>
            <li><strong>Adults:</strong> 135 - 145 mmol/L (mEq/L)</li>
            <li><strong>Children:</strong> Similar to adults, often 134 - 145 mmol/L.</li>
            <li><strong>Newborns:</strong> Can be slightly lower or similar, 133 - 146 mmol/L.</li>
            <li><em>Values can vary by laboratory, but the range is generally very consistent.</em></li>
        </ul>

        <h3>High Sodium (Hypernatremia):</h3>
        <p>Hypernatremia occurs when serum sodium concentration is above the normal range (&gt;145 mmol/L). It almost always indicates a **deficit of total body water relative to total body sodium**, meaning the body has lost too much water or not taken in enough. The underlying problem is typically water imbalance rather than excess sodium intake.</p>
        <ul>
            <li><strong>Dehydration:</strong> The most common cause. Insufficient water intake, or excessive water loss (e.g., severe vomiting, diarrhea, excessive sweating, high fever, severe burns).</li>
            <li><strong>Diabetes Insipidus:</strong> A condition where the kidneys cannot conserve water, leading to excessive urine output and water loss, even if water intake is normal. Can be central (ADH deficiency) or nephrogenic (kidneys don't respond to ADH).</li>
            <li><strong>Kidney Dysfunction:</strong> Certain kidney diseases that impair the kidney's ability to concentrate urine.</li>
            <li><strong>Cushing's Syndrome:</strong> Excess cortisol can lead to sodium retention and water loss.</li>
            <li><strong>Primary Hyperaldosteronism:</strong> Excess aldosterone leads to sodium retention.</li>
            <li><strong>Osmotic Diuresis:</strong> High levels of glucose (in uncontrolled diabetes) or mannitol can draw water out of the body, leading to water loss.</li>
            <li><strong>Excessive Sodium Intake (Rare):</strong> Very rarely, consuming extremely large amounts of sodium (e.g., accidental ingestion of concentrated salt) can cause hypernatremia.</li>
        </ul>
        <p>Symptoms of hypernatremia include thirst, dry mucous membranes, confusion, lethargy, and in severe cases, seizures and coma due to brain cell shrinkage.</p>

        <h3>Low Sodium (Hyponatremia):</h3>
        <p>Hyponatremia occurs when serum sodium concentration is below the normal range (&lt;135 mmol/L). It usually indicates an **excess of total body water relative to total body sodium**, rather than an absolute sodium deficiency. The body has too much water, diluting the sodium.</p>
        <ul>
            <li><strong>Excessive Water Intake (Water Intoxication):</strong> Drinking too much plain water, especially in individuals with impaired kidney function or during intense exercise without adequate electrolyte replacement.</li>
            <li><strong>Certain Medications:</strong>
                <ul>
                    <li><strong>Diuretics:</strong> Especially thiazide diuretics, can increase water and sodium excretion.</li>
                    <li><strong>Antidepressants (SSRIs).</strong></li>
                    <li><strong>Certain anticonvulsants.</strong></li>
                </ul>
            </li>
            <li><strong>Syndrome of Inappropriate Antidiuretic Hormone (SIADH):</strong> The body produces too much ADH, leading to excessive water retention, which dilutes sodium. Can be caused by lung cancers, central nervous system disorders, or certain medications.</li>
            <li><strong>Heart Failure:</strong> The heart's reduced pumping ability leads to decreased blood flow to the kidneys, triggering water and sodium retention, but often with disproportionate water retention.</li>
            <li><strong>Kidney Disease:</strong> Impaired kidney function can lead to reduced excretion of water.</li>
            <li><strong>Liver Disease (Cirrhosis):</strong> Fluid retention (ascites, edema) is common, leading to dilutional hyponatremia.</li>
            <li><strong>Adrenal Insufficiency (Addison's Disease):</strong> Deficiency of aldosterone leads to excessive sodium loss in urine.</li>
            <li><strong>Severe Vomiting or Diarrhea:</strong> While these can cause dehydration (leading to hypernatremia if water loss exceeds sodium), if fluid replacement is with plain water, it can lead to hyponatremia. Also, loss of gastric fluid containing sodium.</li>
            <li><strong>Hypothyroidism:</strong> Can sometimes impair water excretion.</li>
        </ul>
        <p>Symptoms of hyponatremia range from mild (nausea, headache, fatigue) to severe (confusion, seizures, coma, brain swelling), depending on the speed and severity of the drop in sodium.</p>

        <h3>Additional Information:</h3>
        <p>Sodium is a fundamental electrolyte, and its balance is critical for life. Sodium levels are routinely measured as part of an **electrolyte panel** along with potassium and chloride. These measurements help assess fluid balance, kidney function, and the body's acid-base status.</p>
        <p>When assessing sodium levels, clinicians always consider the patient's hydration status, fluid intake/output, and the presence of any underlying conditions or medications that could affect water and sodium regulation. Rapid changes in sodium levels are particularly dangerous and require urgent medical attention.</p>
    `,
    relatedBiomarkers: ['potassium', 'chloride']
},
{
    id: 'potassium',
    name: 'Potassium',
    description: 'An electrolyte crucial for heart, nerve, and muscle cell function.',
    type: 'Electrolyte',
    responsibleFor: 'Nerve impulse transmission, muscle contraction (especially heart muscle), and maintaining intracellular fluid balance.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Potassium (K$^+$) is the primary cation (positively charged ion) found inside cells (intracellular fluid). Although only a small amount is in the extracellular fluid (blood plasma), its precise concentration in the blood is crucial for various physiological processes. It is a critical **Electrolyte** routinely measured as part of an electrolyte panel.</p>

        <h3>Role and Function:</h3>
        <p>Potassium plays a vital role in maintaining cellular function, particularly in excitable cells like nerves and muscles:</p>
        <ul>
            <li><strong>Nerve Impulse Transmission:</strong> Along with sodium, potassium is essential for generating and repolarizing action potentials in nerve cells, allowing for proper nerve signaling.</li>
            <li><strong>Muscle Contraction:</strong> Critical for the contraction of skeletal muscles, smooth muscles (e.g., in the gut), and especially the **heart muscle**. Abnormal potassium levels can lead to life-threatening heart arrhythmias.</li>
            <li><strong>Maintaining Intracellular Fluid Volume:</strong> Along with sodium, potassium helps regulate the movement of water between the intracellular and extracellular compartments.</li>
            <li><strong>Enzyme Function:</strong> Involved in the activation of several enzymes.</li>
            <li><strong>Acid-Base Balance:</strong> Plays a role in maintaining the body's pH balance by exchanging with hydrogen ions.</li>
        </ul>
        <p>Potassium balance is tightly regulated by the kidneys, insulin, and aldosterone.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional:</strong> mEq/L (milliequivalent per liter)</li>
            <li><em>Note: For potassium, mmol/L and mEq/L are numerically equivalent.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for potassium are very narrow, reflecting the body's strict control over this vital electrolyte. Even small deviations can have significant clinical consequences.</p>
        <ul>
            <li><strong>Adults:</strong> 3.5 - 5.0 mmol/L (mEq/L)</li>
            <li><strong>Children:</strong> Can be slightly higher than adults.</li>
            <li><strong>Newborns:</strong> Higher, e.g., 3.7 - 5.9 mmol/L.</li>
            <li><em>Values can vary by laboratory. Hemolysis (rupture of red blood cells in the sample) can falsely elevate potassium levels.</em></li>
        </ul>

        <h3>High Potassium (Hyperkalemia):</h3>
        <p>Hyperkalemia occurs when serum potassium concentration is above the normal range (&gt;5.0 mmol/L). It is a potentially dangerous condition, particularly because it can lead to **life-threatening cardiac arrhythmias and cardiac arrest**.</p>
        <ul>
            <li><strong>Kidney Failure:</strong> The most common cause. Impaired kidney function reduces the kidneys' ability to excrete potassium, leading to its accumulation.</li>
            <li><strong>Adrenal Insufficiency (Addison's Disease):</strong> Deficiency of aldosterone (a hormone that promotes potassium excretion) leads to potassium retention.</li>
            <li><strong>Cellular Shift (Transcellular Shift):</strong> Potassium moves from inside cells to the outside (bloodstream).
                <ul>
                    <li><strong>Acidosis:</strong> In conditions like diabetic ketoacidosis, hydrogen ions move into cells, and potassium moves out.</li>
                    <li><strong>Crushing Injuries/Rhabdomyolysis:</strong> Damage to muscle cells releases large amounts of intracellular potassium into the blood.</li>
                    <li><strong>Tumor Lysis Syndrome:</strong> Rapid breakdown of cancer cells (e.g., after chemotherapy) releases intracellular contents.</li>
                    <li><strong>Burns:</strong> Severe burns can cause potassium release from damaged cells.</li>
                </ul>
            </li>
            <li><strong>Certain Medications:</strong>
                <ul>
                    <li><strong>ACE Inhibitors and Angiotensin Receptor Blockers (ARBs):</strong> Reduce aldosterone's effects.</li>
                    <li><strong>Potassium-Sparing Diuretics:</strong> (e.g., spironolactone, amiloride).</li>
                    <li><strong>NSAIDs.</strong></li>
                    <li><strong>Heparin.</strong></li>
                    <li><strong>Beta-blockers.</strong></li>
                </ul>
            </li>
            <li><strong>Excessive Potassium Intake:</strong> Usually only a problem in individuals with impaired kidney function (e.g., potassium supplements, high-potassium diet).</li>
            <li><strong>Pseudohyperkalemia:</strong> Falsely elevated potassium due to issues with blood collection (e.g., hemolysis in the sample, prolonged tourniquet use, excessive fist clenching, or drawing blood above an IV line).</li>
        </ul>
        <p>Symptoms range from muscle weakness, fatigue, and tingling to more severe cardiac effects (arrhythmias, heart block).</p>

        <h3>Low Potassium (Hypokalemia):</h3>
        <p>Hypokalemia occurs when serum potassium concentration is below the normal range (&lt;3.5 mmol/L). It can lead to a variety of symptoms, including muscle weakness, cramps, and potentially **dangerous heart arrhythmias**.</p>
        <ul>
            <li><strong>Gastrointestinal Losses:</strong> The most common cause.
                <ul>
                    <li><strong>Severe Vomiting.</strong></li>
                    <li><strong>Severe Diarrhea.</strong></li>
                    <li><strong>Nasogastric Suction.</strong></li>
                </ul>
            </li>
            <li><strong>Diuretic Use:</strong>
                <ul>
                    <li><strong>Loop Diuretics (e.g., furosemide).</strong></li>
                    <li><strong>Thiazide Diuretics (e.g., hydrochlorothiazide).</strong></li>
                </ul>
            </li>
            <li><strong>Hyperaldosteronism (e.g., Conn's Syndrome):</strong> Excess aldosterone leads to increased potassium excretion by the kidneys.</li>
            <li><strong>Renal Tubular Acidosis (RTA):</strong> Kidney disorders affecting tubular reabsorption.</li>
            <li><strong>Cushing's Syndrome:</strong> Excess cortisol can have mineralocorticoid effects, leading to potassium loss.</li>
            <li><strong>Alkalosis:</strong> In alkalosis, hydrogen ions move out of cells, and potassium moves into cells to maintain electrical neutrality.</li>
            <li><strong>Insulin Administration:</strong> Insulin drives potassium into cells, which is why it's used to treat hyperkalemia.</li>
            <li><strong>Malnutrition:</strong> Insufficient dietary potassium intake (rare as a sole cause).</li>
        </ul>
        <p>Symptoms include muscle weakness, fatigue, constipation, muscle cramps, and heart palpitations or irregular heartbeats.</p>

        <h3>Additional Information:</h3>
        <p>Potassium levels are critical and tightly regulated. Any significant deviation, particularly hyperkalemia, can be a medical emergency due to its effects on cardiac function. Potassium is always measured as part of an **electrolyte panel** along with sodium and chloride. Management of abnormal potassium levels involves addressing the underlying cause and, if necessary, rapid correction (e.g., intravenous potassium for severe hypokalemia, or medications like insulin/glucose, calcium gluconate, or dialysis for severe hyperkalemia).</p>
        <p>It's important to consider sample handling issues (like hemolysis) when interpreting potassium results, as they can lead to spurious elevations.</p>
    `,
    relatedBiomarkers: ['sodium', 'chloride']
},
{
    id: 'chloride',
    name: 'Chloride',
    description: 'An electrolyte that helps maintain fluid balance and acid-base balance.',
    type: 'Electrolyte',
    responsibleFor: 'Maintaining fluid and acid-base balance, and osmotic pressure.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Chloride (Cl$^-$) is the most abundant anion (negatively charged ion) in the extracellular fluid. It is crucial for maintaining the body's fluid balance and acid-base balance. It is routinely measured as part of an **Electrolyte** panel, along with sodium and potassium.</p>

        <h3>Role and Function:</h3>
        <p>Chloride primarily functions as a counter-ion to sodium, helping to maintain electrical neutrality in the extracellular fluid. Its key roles include:</p>
        <ul>
            <li><strong>Fluid Balance and Osmotic Pressure:</strong> Chloride helps maintain the osmotic pressure of body fluids, ensuring that fluid remains in the correct compartments (intravascular, interstitial). It moves passively across cell membranes, often following sodium and water.</li>
            <li><strong>Acid-Base Balance:</strong> Chloride plays a significant role in maintaining the body's acid-base balance. When bicarbonate (HCO$_3^-$) is reabsorbed or excreted by the kidneys, chloride often moves in the opposite direction to maintain electrical neutrality. This is evident in conditions like metabolic acidosis or alkalosis.</li>
            <li><strong>Gastric Acid Production:</strong> Chloride is an essential component of hydrochloric acid (HCl) in the stomach, which is vital for digestion.</li>
            <li><strong>Nerve and Muscle Function:</strong> Contributes to nerve impulse transmission and muscle contraction, although less directly than sodium and potassium.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional:</strong> mEq/L (milliequivalent per liter)</li>
            <li><em>Note: For chloride, mmol/L and mEq/L are numerically equivalent.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for chloride are relatively stable.</p>
        <ul>
            <li><strong>Adults:</strong> 98 - 107 mmol/L (mEq/L)</li>
            <li><strong>Children:</strong> Similar to adults, often 95 - 110 mmol/L.</li>
            <li><strong>Newborns:</strong> Can be slightly higher.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Chloride (Hyperchloremia):</h3>
        <p>Hyperchloremia occurs when serum chloride concentration is above the normal range (&gt;107 mmol/L). It often indicates problems with fluid balance or acid-base balance.</p>
        <ul>
            <li><strong>Dehydration:</strong> A common cause, as water loss concentrates all extracellular electrolytes. Often seen with hypernatremia.</li>
            <li><strong>Metabolic Acidosis (Non-Anion Gap Metabolic Acidosis / Hyperchloremic Acidosis):</strong> When the body loses too much bicarbonate (e.g., from severe diarrhea, renal tubular acidosis, or excessive administration of chloride-containing IV fluids), chloride levels rise to compensate and maintain electrical neutrality.</li>
            <li><strong>Kidney Disease:</strong> Impaired kidney function can reduce chloride excretion.</li>
            <li><strong>Excessive Saline Infusion:</strong> Intravenous fluids containing high concentrations of sodium chloride can lead to hyperchloremia.</li>
            <li><strong>Diabetes Insipidus:</strong> Excessive water loss without proportional sodium and chloride loss can lead to concentration.</li>
            <li><strong>Certain Medications:</strong> (e.g., some diuretics, carbonic anhydrase inhibitors).</li>
        </ul>
        <p>Symptoms often relate to the underlying cause (e.g., symptoms of dehydration or acidosis).</p>

        <h3>Low Chloride (Hypochloremia):</h3>
        <p>Hypochloremia occurs when serum chloride concentration is below the normal range (&lt;98 mmol/L). It is frequently associated with fluid loss from the upper gastrointestinal tract or metabolic alkalosis.</p>
        <ul>
            <li><strong>Severe Vomiting or Gastric Suction:</strong> Leads to loss of hydrochloric acid from the stomach, which is rich in chloride. This is a common cause.</li>
            <li><strong>Metabolic Alkalosis:</strong> When the body has an excess of bicarbonate (e.g., from vomiting, diuretic use, or hyperaldosteronism), chloride levels often drop to maintain electrical neutrality.</li>
            <li><strong>Diuretic Use:</strong> Loop and thiazide diuretics can increase chloride excretion along with sodium and potassium.</li>
            <li><strong>Kidney Disorders:</strong> Certain conditions affecting the kidney's ability to reabsorb chloride (e.g., Bartter syndrome, Gitelman syndrome).</li>
            <li><strong>Congestive Heart Failure:</strong> Can sometimes lead to dilutional hypochloremia due to fluid retention.</li>
            <li><strong>Adrenal Insufficiency (Addison's Disease):</strong> Can cause both hyponatremia and hypochloremia.</li>
            <li><strong>Cystic Fibrosis:</strong> Affects chloride transport.</li>
        </ul>
        <p>Symptoms can include muscle weakness, irritability, shallow breathing, and altered mental status, often related to associated electrolyte imbalances and acid-base disturbances.</p>

        <h3>Additional Information:</h3>
        <p>Chloride is typically evaluated as part of an **electrolyte panel** to assess overall fluid and electrolyte balance and acid-base status. It is particularly important for calculating the **Anion Gap**, which is a valuable tool in differentiating causes of metabolic acidosis.</p>
        <p>Changes in chloride often parallel changes in sodium to maintain electrical neutrality. Therefore, interpretation of chloride levels is usually done in conjunction with sodium, potassium, and bicarbonate to get a comprehensive understanding of a patient's fluid, electrolyte, and acid-base status.</p>
    `,
    relatedBiomarkers: ['sodium', 'potassium']
    },
    {
    id: 'calcium',
    name: 'Calcium (Total, Ionized)',
    description: 'A mineral essential for bone health, muscle contraction, and nerve function.',
    type: 'Mineral',
    responsibleFor: 'Bone and teeth strength, muscle contraction, nerve signal transmission, blood clotting, and hormone secretion.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Calcium (Ca$^{2+}$) is the most abundant mineral in the human body. The vast majority (99%) is stored in bones and teeth, providing structural support. The remaining 1% circulates in the blood, where it exists in three forms:</p>
        <ul>
            <li><strong>Protein-bound calcium:</strong> Primarily bound to albumin (about 40-45%).</li>
            <li><strong>Complexed calcium:</strong> Bound to anions like citrate, phosphate, or bicarbonate (about 5-10%).</li>
            <li><strong>Ionized (Free) Calcium:</strong> The physiologically active form (about 45-50%). This is the unbound, active form that performs biological functions.</li>
        </ul>
        <p>Both **Total Calcium** and **Ionized Calcium** are important **Mineral** markers, though ionized calcium is a more accurate reflection of the body's functional calcium status, especially when albumin levels are abnormal.</p>

        <h3>Role and Function:</h3>
        <p>Calcium is a vital electrolyte with numerous critical functions beyond bone structure:</p>
        <ul>
            <li><strong>Bone and Teeth Strength:</strong> The primary structural component of bones and teeth.</li>
            <li><strong>Muscle Contraction:</strong> Essential for the contraction of skeletal, smooth, and cardiac muscle.</li>
            <li><strong>Nerve Signal Transmission:</strong> Plays a crucial role in nerve impulse conduction and neurotransmitter release.</li>
            <li><strong>Blood Clotting:</strong> A vital cofactor in the coagulation cascade.</li>
            <li><strong>Hormone Secretion:</strong> Involved in the release of various hormones.</li>
            <li><strong>Cellular Signaling:</strong> Acts as a second messenger in many cellular processes.</li>
        </ul>
        <p>Calcium levels are tightly regulated by three main hormones:</p>
        <ul>
            <li><strong>Parathyroid Hormone (PTH):</strong> Increases blood calcium by stimulating bone resorption, increasing calcium reabsorption in the kidneys, and promoting Vitamin D activation.</li>
            <li><strong>Vitamin D (Calcitriol):</strong> Increases calcium absorption from the intestines and contributes to bone mineralization.</li>
            <li><strong>Calcitonin:</strong> Lowers blood calcium by inhibiting bone resorption (less significant in adults).</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert mmol/L to mg/dL, multiply by 4.0. To convert mg/dL to mmol/L, divide by 4.0. For example, 2.5 mmol/L is 10.0 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges can vary slightly by laboratory and age. Fasting samples are often preferred. Ionized calcium is often considered more reliable as it's not affected by albumin levels.</p>
        <ul>
            <li><strong>Total Calcium:</strong>
                <ul>
                    <li><strong>Adults:</strong> 2.20 - 2.55 mmol/L (8.8 - 10.2 mg/dL)</li>
                    <li><strong>Children:</strong> Generally higher than adults due to rapid bone growth (e.g., up to 2.75 mmol/L or 11.0 mg/dL in infants).</li>
                </ul>
            </li>
            <li><strong>Ionized Calcium:</strong>
                <ul>
                    <li><strong>Adults:</strong> 1.15 - 1.35 mmol/L (4.6 - 5.4 mg/dL)</li>
                    <li><em>Ionized calcium is considered more accurate, especially in patients with abnormal albumin levels, as it reflects the metabolically active form.</em></li>
                </ul>
            </li>
            <li><em>Note: Total calcium levels should be "corrected" for albumin levels when albumin is low, using formulas such as: Corrected Calcium (mg/dL) = Measured Total Calcium (mg/dL) + 0.8 * (4.0 - Serum Albumin (g/dL)).</em></li>
        </ul>

        <h3>High Calcium (Hypercalcemia):</h3>
        <p>Hypercalcemia occurs when blood calcium levels are elevated. It can be mild and asymptomatic or severe and life-threatening.</p>
        <ul>
            <li><strong>Primary Hyperparathyroidism:</strong> The most common cause in outpatients. One or more parathyroid glands produce too much PTH, leading to excessive calcium release from bones and increased reabsorption in kidneys.</li>
            <li><strong>Malignancy (Cancer):</strong> The most common cause in hospitalized patients. Cancers can cause hypercalcemia through:
                <ul>
                    <li><strong>PTH-Related Protein (PTHrP) production:</strong> Mimics PTH.</li>
                    <li><strong>Bone Metastasis:</strong> Direct destruction of bone by cancer cells.</li>
                    <li><strong>Excess Vitamin D production:</strong> By some lymphomas.</li>
                </ul>
            </li>
            <li><strong>Excessive Vitamin D Intake:</strong> High doses of vitamin D supplements can lead to hypercalcemia.</li>
            <li><strong>Thiazide Diuretics:</strong> These medications reduce calcium excretion by the kidneys.</li>
            <li><strong>Prolonged Immobilization:</strong> Especially in individuals with high bone turnover (e.g., children, adolescents, Paget's disease), lack of weight-bearing can cause calcium release from bones.</li>
            <li><strong>Sarcoidosis and Other Granulomatous Diseases:</strong> Activated macrophages can produce extra Vitamin D.</li>
            <li><strong>Milk-Alkali Syndrome:</strong> Excessive intake of calcium (e.g., calcium supplements) and absorbable alkali (e.g., antacids).</li>
            <li><strong>Adrenal Insufficiency.</strong></li>
            <li><strong>Hyperthyroidism.</strong></li>
        </ul>
        <p>Symptoms (often remembered by "stones, bones, groans, and psychiatric overtones"): include kidney stones, bone pain, abdominal pain (nausea, constipation), and psychiatric symptoms (confusion, depression). Severe hypercalcemia can cause cardiac arrhythmias and coma.</p>

        <h3>Low Calcium (Hypocalcemia):</h3>
        <p>Hypocalcemia occurs when blood calcium levels are too low. It can lead to neuromuscular irritability and cardiac issues.</p>
        <ul>
            <li><strong>Hypoparathyroidism:</strong> Insufficient production of PTH (e.g., after thyroid or parathyroid surgery, autoimmune destruction), leading to reduced calcium release from bones and decreased kidney reabsorption.</li>
            <li><strong>Vitamin D Deficiency:</strong> Insufficient vitamin D leads to impaired calcium absorption from the intestines. Common causes include inadequate sunlight exposure, poor diet, malabsorption syndromes (e.g., celiac disease, Crohn's), or liver/kidney disease affecting vitamin D activation.</li>
            <li><strong>Kidney Failure (Chronic):</strong> Impaired kidney function leads to decreased activation of Vitamin D and impaired phosphate excretion (high phosphate binds calcium).</li>
            <li><strong>Malabsorption:</strong> Conditions affecting nutrient absorption in the gut (e.g., celiac disease, short bowel syndrome, bariatric surgery).</li>
            <li><strong>Pancreatitis (Acute):</strong> In severe pancreatitis, fatty acids are released and bind calcium, forming insoluble soaps.</li>
            <li><strong>Severe Magnesium Deficiency:</strong> Can cause functional hypoparathyroidism and resistance to PTH.</li>
            <li><strong>Hyperphosphatemia:</strong> High phosphate levels can bind calcium, leading to calcium deposition in tissues.</li>
            <li><strong>Certain Medications:</strong> (e.g., bisphosphonates, calcitonin, foscarnet, some anticonvulsants, loop diuretics).</li>
            <li><strong>Massive Blood Transfusion:</strong> Citrate used as an anticoagulant in stored blood can bind calcium.</li>
        </ul>
        <p>Symptoms include muscle cramps, spasms (tetany), tingling (paresthesias) in fingers/toes/around the mouth, and in severe cases, seizures, laryngospasm, and cardiac arrhythmias.</p>

        <h3>Additional Information:</h3>
        <p>When assessing calcium levels, it's crucial to consider **albumin levels** and the **ionized calcium** measurement for accuracy. Total calcium alone can be misleading if albumin is abnormal.</p>
        <p>Calcium is almost always interpreted in conjunction with other related biomarkers:</p>
        <ul>
            <li><strong>Phosphorus:</strong> Calcium and phosphorus often have an inverse relationship.</li>
            <li><strong>Parathyroid Hormone (PTH):</strong> Essential for understanding calcium dysregulation.</li>
            <li><strong>Vitamin D:</strong> Crucial for calcium absorption and metabolism.</li>
            <li><strong>Magnesium:</strong> Affects PTH secretion and action.</li>
        </ul>
        <p>Comprehensive evaluation of these markers is necessary to diagnose the specific cause of calcium imbalances and guide appropriate treatment.</p>
    `,
    relatedBiomarkers: ['phosphorus', 'pth', 'vitamin-d']
},
{
    id: 'phosphorus',
    name: 'Phosphorus',
    description: 'A mineral crucial for bone formation, energy metabolism, and cell function.',
    type: 'Mineral',
    responsibleFor: 'Bone and teeth formation, energy production (ATP), cell membrane structure, and nerve/muscle function.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Phosphorus, primarily in the form of phosphate (PO$_4^{3-}$), is the second most abundant mineral in the body after calcium. Approximately 85% of the body's phosphorus is found in bones and teeth as hydroxyapatite. The remaining 15% is distributed in soft tissues and extracellular fluid. It is an essential **Mineral** and electrolyte.</p>

        <h3>Role and Function:</h3>
        <p>Phosphorus is vital for countless biological processes:</p>
        <ul>
            <li><strong>Bone and Teeth Formation:</strong> A key structural component, alongside calcium, giving bones their rigidity.</li>
            <li><strong>Energy Production (ATP):</strong> Phosphate groups are fundamental to adenosine triphosphate (ATP), the body's primary energy currency.</li>
            <li><strong>Cell Membrane Structure:</strong> As phospholipids, it forms the basic structure of all cell membranes.</li>
            <li><strong>Genetic Material:</strong> A component of DNA and RNA.</li>
            <li><strong>Nerve and Muscle Function:</strong> Involved in nerve conduction and muscle contraction.</li>
            <li><strong>Acid-Base Balance:</strong> Acts as an important buffer system in the blood and kidneys.</li>
            <li><strong>Enzyme Activation:</strong> Involved in phosphorylation and dephosphorylation of proteins, crucial for enzyme regulation.</li>
        </ul>
        <p>Phosphate levels are tightly regulated by PTH, Vitamin D, and fibroblast growth factor 23 (FGF-23).</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert mmol/L to mg/dL, multiply by 3.1. To convert mg/dL to mmol/L, divide by 3.1. For example, 1.45 mmol/L is approximately 4.5 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for phosphorus can vary slightly by laboratory and age. Levels are typically higher in children due to active bone growth.</p>
        <ul>
            <li><strong>Adults:</strong> 0.81 - 1.45 mmol/L (2.5 - 4.5 mg/dL)</li>
            <li><strong>Children:</strong>
                <ul>
                    <li><strong>Newborns:</strong> Higher, e.g., 1.45 - 2.91 mmol/L (4.5 - 9.0 mg/dL).</li>
                    <li><strong>Infants/Young Children:</strong> Higher than adults, gradually decreasing with age.</li>
                </ul>
            </li>
            <li><em>Values higher in children. Can vary by laboratory.</em></li>
        </ul>

        <h3>High Phosphorus (Hyperphosphatemia):</h3>
        <p>Hyperphosphatemia occurs when serum phosphorus concentration is above the normal range (&gt;1.45 mmol/L). It often leads to low calcium levels (due to calcium-phosphate precipitation) and can cause soft tissue calcification.</p>
        <ul>
            <li><strong>Kidney Failure (Chronic Kidney Disease):</strong> The most common cause. Impaired kidney function reduces the ability to excrete phosphorus, leading to its accumulation.</li>
            <li><strong>Hypoparathyroidism:</strong> Insufficient PTH leads to decreased phosphorus excretion by the kidneys.</li>
            <li><strong>Excessive Dietary Intake/Supplements:</strong> High intake of phosphate-containing foods or supplements (e.g., phosphate laxatives, enemas).</li>
            <li><strong>Cellular Lysis/Tissue Breakdown:</strong> Rapid breakdown of cells releases intracellular phosphate into the bloodstream.
                <ul>
                    <li><strong>Tumor Lysis Syndrome:</strong> After chemotherapy for certain cancers.</li>
                    <li><strong>Rhabdomyolysis:</strong> Severe muscle breakdown.</li>
                    <li><strong>Hemolysis:</strong> Destruction of red blood cells.</li>
                </ul>
            </li>
            <li><strong>Lactic Acidosis/Diabetic Ketoacidosis (during treatment):</strong> Phosphate can shift out of cells.</li>
            <li><strong>Vitamin D Intoxication:</strong> Excess vitamin D can increase phosphorus absorption from the gut.</li>
        </ul>
        <p>Symptoms are often related to associated hypocalcemia (e.g., muscle cramps, tetany) or long-term complications like vascular calcification.</p>

        <h3>Low Phosphorus (Hypophosphatemia):</h3>
        <p>Hypophosphatemia occurs when serum phosphorus concentration is below the normal range (&lt;0.81 mmol/L). It can affect various organ systems due to impaired cellular energy and function.</p>
        <ul>
            <li><strong>Malnutrition/Alcoholism:</strong> Chronic poor intake.</li>
            <li><strong>Refeeding Syndrome:</strong> When severely malnourished individuals are rapidly re-fed, glucose intake stimulates insulin release, which drives phosphorus (and potassium, magnesium) into cells, causing a sharp drop in blood levels. This can be life-threatening.</li>
            <li><strong>Hyperparathyroidism (Primary or Secondary):</strong> Excess PTH leads to increased phosphorus excretion by the kidneys.</li>
            <li><strong>Vitamin D Deficiency/Rickets/Osteomalacia:</strong> Impaired phosphorus absorption from the gut and/or impaired renal reabsorption.</li>
            <li><strong>Diabetic Ketoacidosis (during treatment):</strong> Phosphate moves into cells as insulin is given.</li>
            <li><strong>Certain Medications:</strong> (e.g., phosphate binders (used in kidney disease), antacids containing aluminum or magnesium, diuretics, intravenous glucose).</li>
            <li><strong>Respiratory Alkalosis:</strong> Causes intracellular shift of phosphate.</li>
            <li><strong>Chronic Diarrhea/Malabsorption Syndromes:</strong> Decreased absorption of phosphorus.</li>
            <li><strong>Sepsis/Severe Burns.</strong></li>
        </ul>
        <p>Symptoms include muscle weakness, fatigue, bone pain, confusion, and in severe cases, respiratory failure, cardiac dysfunction, and hemolysis.</p>

        <h3>Additional Information:</h3>
        <p>Phosphorus levels are often interpreted in conjunction with **calcium, PTH, and Vitamin D** levels, as these elements are intricately linked in regulating bone health and mineral metabolism. The **calcium-phosphate product** is also calculated, which is important for assessing the risk of soft tissue and vascular calcification, particularly in chronic kidney disease.</p>
        <p>Monitoring phosphorus is essential in patients with kidney disease, critical illness, malnutrition, and those undergoing refeeding, to prevent significant complications.</p>
    `,
    relatedBiomarkers: ['calcium', 'pth', 'vitamin-d']
},
{
    id: 'magnesium',
    name: 'Magnesium',
    description: 'An essential mineral involved in over 300 enzyme reactions, muscle and nerve function.',
    type: 'Mineral',
    responsibleFor: 'Muscle and nerve function, blood glucose control, blood pressure regulation, and bone development.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Magnesium (Mg$^{2+}$) is an essential mineral and electrolyte, the fourth most abundant cation in the body. Approximately 50-60% of magnesium is found in bones, while the rest is in soft tissues (muscles, nerves) and only about 1% is in the blood. It is a vital **Mineral** for numerous biochemical reactions.</p>

        <h3>Role and Function:</h3>
        <p>Magnesium is a critical cofactor for over 300 enzyme systems, playing a fundamental role in:</p>
        <ul>
            <li><strong>Muscle and Nerve Function:</strong> Essential for nerve impulse transmission, muscle contraction and relaxation, and maintaining proper electrical stability of cells. Crucial for cardiac function.</li>
            <li><strong>Blood Glucose Control:</strong> Involved in insulin secretion and action, and glucose metabolism.</li>
            <li><strong>Blood Pressure Regulation:</strong> Contributes to vascular tone and blood pressure maintenance.</li>
            <li><strong>Bone Development:</strong> Important for bone structure and density.</li>
            <li><strong>Energy Production:</strong> Required for ATP synthesis and utilization.</li>
            <li><strong>Protein Synthesis.</strong></li>
            <li><strong>DNA and RNA Synthesis.</strong></li>
        </ul>
        <p>Magnesium levels are primarily regulated by the kidneys.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert mmol/L to mg/dL, multiply by 2.43. To convert mg/dL to mmol/L, divide by 2.43. For example, 1.10 mmol/L is approximately 2.68 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for magnesium can vary slightly by laboratory. Since most magnesium is intracellular, blood levels may not always perfectly reflect total body stores.</p>
        <ul>
            <li><strong>Adults:</strong> 0.70 - 1.10 mmol/L (1.7 - 2.7 mg/dL)</li>
            <li><strong>Children:</strong> Similar to adults.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Magnesium (Hypermagnesemia):</h3>
        <p>Hypermagnesemia occurs when serum magnesium concentration is above the normal range (&gt;1.10 mmol/L). It is relatively rare and typically occurs only when there is impaired kidney function or excessive exogenous magnesium intake.</p>
        <ul>
            <li><strong>Kidney Failure (Chronic or Acute):</strong> The most common cause. Impaired kidney excretion leads to magnesium accumulation.</li>
            <li><strong>Excessive Magnesium Intake:</strong>
                <ul>
                    <li><strong>Overuse of Magnesium-Containing Antacids or Laxatives:</strong> Especially in individuals with kidney impairment.</li>
                    <li><strong>Intravenous Magnesium Administration:</strong> (e.g., for pre-eclampsia/eclampsia, arrhythmias) if not carefully monitored.</li>
                    <li><strong>Magnesium-Containing Enemas.</strong></li>
                </ul>
            </li>
            <li><strong>Adrenal Insufficiency (Addison's Disease).</strong></li>
            <li><strong>Hypothyroidism.</strong></li>
            <li><strong>Diabetic Ketoacidosis (rarely).</strong></li>
            <li><strong>Lithium Toxicity.</strong></li>
        </ul>
        <p>Symptoms range from muscle weakness, nausea, flushing, and lethargy (at moderate levels) to hypotension, bradycardia, respiratory depression, and cardiac arrest (at very high levels).</p>

        <h3>Low Magnesium (Hypomagnesemia):</h3>
        <p>Hypomagnesemia occurs when serum magnesium concentration is below the normal range (&lt;0.70 mmol/L). It is a common electrolyte disturbance, especially in hospitalized patients, and can lead to a variety of neuromuscular and cardiac symptoms.</p>
        <ul>
            <li><strong>Gastrointestinal Losses:</strong>
                <ul>
                    <li><strong>Chronic Diarrhea/Malabsorption Syndromes:</strong> (e.g., Crohn's disease, celiac disease, short bowel syndrome).</li>
                    <li><strong>Excessive Vomiting.</strong></li>
                    <li><strong>Prolonged Nasogastric Suction.</strong></li>
                </ul>
            </li>
            <li><strong>Alcoholism (Chronic):</strong> Poor dietary intake, increased renal excretion, and malabsorption are common.</li>
            <li><strong>Malnutrition/Refeeding Syndrome:</strong> Inadequate intake or intracellular shift during refeeding.</li>
            <li><strong>Certain Medications:</strong>
                <ul>
                    <li><strong>Loop and Thiazide Diuretics.</strong></li>
                    <li><strong>Proton Pump Inhibitors (PPIs):</strong> Long-term use can reduce magnesium absorption.</li>
                    <li><strong>Antibiotics (e.g., aminoglycosides).</strong></li>
                    <li><strong>Chemotherapy Agents (e.g., cisplatin).</strong></li>
                </ul>
            </li>
            <li><strong>Kidney Disorders:</strong> Conditions causing impaired renal reabsorption (e.g., renal tubular acidosis, Gitelman syndrome).</li>
            <li><strong>Diabetic Ketoacidosis (DKA):</strong> Due to osmotic diuresis and intracellular shifts.</li>
            <li><strong>Hyperparathyroidism/Hyperthyroidism.</strong></li>
            <li><strong>Excessive Sweating.</strong></li>
        </ul>
        <p>Symptoms include muscle weakness, cramps, tremors, tetany, fatigue, nausea, and more dangerously, cardiac arrhythmias (including Torsades de Pointes) and seizures. Hypomagnesemia often coexists with and exacerbates hypokalemia and hypocalcemia, as magnesium is required for proper function of PTH and for potassium retention.</p>

        <h3>Additional Information:</h3>
        <p>Magnesium is essential for overall health, particularly for cardiovascular and neurological function. It is often measured as part of an **electrolyte panel**. Because magnesium imbalance can lead to other electrolyte disturbances (especially potassium and calcium), it is crucial to check and correct magnesium levels when dealing with refractory hypokalemia or hypocalcemia.</p>
        <p>Monitoring magnesium levels is important in patients with kidney disease, alcoholism, malnutrition, gastrointestinal disorders, and those on certain medications that can affect magnesium balance.</p>
    `,
    relatedBiomarkers: ['calcium', 'potassium']
},
{
    id: 'uric-acid',
    name: 'Uric Acid',
    description: 'A waste product from purine metabolism, excreted by the kidneys. High levels can cause gout.',
    type: 'Blood Chemistry',
    responsibleFor: 'The end product of purine metabolism; elevated levels can lead to crystal formation and inflammation.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Uric acid is the final product of **purine metabolism** in humans. Purines are nitrogen-containing compounds found in many foods and are also synthesized by the body as components of DNA and RNA. Uric acid is primarily excreted by the kidneys (about 70%) and to a lesser extent by the intestines. It is a common component of routine **Blood Chemistry** tests.</p>

        <h3>Role and Function:</h3>
        <p>While uric acid is largely a waste product, it does act as a potent **antioxidant** in the blood, protecting against oxidative damage. However, its primary clinical significance lies in its potential to form crystals if present in high concentrations, leading to various health issues.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert µmol/L to mg/dL, divide by 59.48. To convert mg/dL to µmol/L, multiply by 59.48. For example, 420 µmol/L is approximately 7.06 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for uric acid vary by laboratory and gender, with males generally having higher levels than females. Post-menopausal women tend to have higher levels than pre-menopausal women.</p>
        <ul>
            <li><strong>Adult Male:</strong> 200 - 420 µmol/L (3.5 - 7.0 mg/dL)</li>
            <li><strong>Adult Female:</strong> 140 - 340 µmol/L (2.5 - 6.0 mg/dL)</li>
            <li><em>Values can vary by age, sex, and diet.</em></li>
        </ul>

        <h3>High Uric Acid (Hyperuricemia):</h3>
        <p>Hyperuricemia occurs when serum uric acid concentration is above the normal range. It is a necessary, but not sufficient, condition for the development of gout. High levels can lead to crystal formation and various complications.</p>
        <ul>
            <li><strong>Gout:</strong> The most well-known consequence. Uric acid crystals (monosodium urate) deposit in joints, causing sudden, severe inflammatory arthritis (gouty attacks).</li>
            <li><strong>Kidney Stones (Uric Acid Stones):</strong> High uric acid in the urine can lead to the formation of kidney stones.</li>
            <li><strong>Kidney Dysfunction:</strong> Impaired kidney excretion of uric acid is a very common cause of hyperuricemia. Chronic hyperuricemia can also, in turn, contribute to kidney damage.</li>
            <li><strong>High Purine Diet:</strong> Consumption of foods rich in purines (e.g., red meat, organ meats, seafood, certain alcoholic beverages like beer) increases uric acid production.</li>
            <li><strong>Alcohol Consumption:</strong> Alcohol (especially beer) increases purine breakdown and can inhibit uric acid excretion.</li>
            <li><strong>Obesity and Metabolic Syndrome:</strong> Associated with increased uric acid levels.</li>
            <li><strong>Certain Medications:</strong>
                <ul>
                    <li><strong>Diuretics:</strong> Especially thiazide and loop diuretics, reduce uric acid excretion.</li>
                    <li><strong>Aspirin (low dose).</strong></li>
                    <li><strong>Immunosuppressants (e.g., cyclosporine, tacrolimus).</strong></li>
                    <li><strong>Pyrazinamide (anti-tuberculosis drug).</strong></li>
                </ul>
            </li>
            <li><strong>Increased Cell Turnover/Breakdown:</strong> Conditions with rapid cell destruction release large amounts of purines.
                <ul>
                    <li><strong>Chemotherapy/Radiation Therapy.</strong></li>
                    <li><strong>Leukemia, Lymphoma, Myeloproliferative Disorders.</strong></li>
                    <li><strong>Psoriasis.</strong></li>
                    <li><strong>Hemolytic Anemia.</strong></li>
                </ul>
            </li>
            <li><strong>Lead Poisoning.</strong></li>
            <li><strong>Hypothyroidism.</strong></li>
            <li><strong>Preeclampsia.</strong></li>
        </ul>

        <h3>Low Uric Acid (Hypouricemia):</h3>
        <p>Hypouricemia occurs when serum uric acid concentration is below the normal range. It is much less common than hyperuricemia and is usually not clinically significant, though very low levels can indicate certain conditions.</p>
        <ul>
            <li><strong>Severe Liver Disease:</strong> The liver is involved in purine metabolism; severe impairment can lead to reduced uric acid production.</li>
            <li><strong>Certain Genetic Disorders:</strong>
                <ul>
                    <li><strong>Xanthine Oxidase Deficiency:</strong> A rare genetic disorder causing a defect in the enzyme responsible for uric acid production.</li>
                    <li><strong>Renal Tubular Disorders:</strong> Genetic defects in kidney transporters can cause increased uric acid excretion (e.g., Hereditary Renal Hypouricemia).</li>
                </ul>
            </li>
            <li><strong>Certain Medications:</strong>
                <ul>
                    <li><strong>Uricosuric Agents:</strong> Drugs that increase uric acid excretion (e.g., probenecid, high-dose aspirin).</li>
                    <li><strong>Allopurinol:</strong> A medication used to treat gout by reducing uric acid production.</li>
                    <li><strong>Contrast dyes.</strong></li>
                </ul>
            </li>
            <li><strong>Syndrome of Inappropriate Antidiuretic Hormone (SIADH):</strong> Due to dilution.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Uric acid levels are primarily monitored for the diagnosis and management of **gout** and to assess the risk of **uric acid kidney stones**. It is also considered a potential cardiovascular risk factor in some contexts, though its direct causal role is debated.</p>
        <p>Management of hyperuricemia often involves dietary modifications, lifestyle changes, and medications (e.g., allopurinol to reduce production, or probenecid to increase excretion). Regular monitoring of uric acid, especially in patients with gout, is essential to achieve target levels and prevent crystal formation.</p>
    `,
    relatedBiomarkers: ['creatinine', 'urea']
},
{
    id: 'ck',
    name: 'Creatine Kinase (CK, CK-MB)',
    description: 'An enzyme found in muscle cells. Elevated levels indicate muscle damage, including heart muscle (CK-MB).',
    type: 'Enzyme Marker',
    responsibleFor: 'Energy production in muscle cells. CK-MB is specific to cardiac muscle.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Creatine Kinase (CK), also known as Creatine Phosphokinase (CPK), is an enzyme primarily found in cells of highly metabolically active tissues, particularly **skeletal muscle, cardiac (heart) muscle, and brain tissue**. When these cells are damaged, CK leaks into the bloodstream. There are different isoforms (isoenzymes) of CK:</p>
        <ul>
            <li><strong>CK-MM:</strong> Predominantly found in skeletal muscle.</li>
            <li><strong>CK-MB:</strong> Predominantly found in cardiac muscle.</li>
            <li><strong>CK-BB:</strong> Predominantly found in brain tissue, but also in smooth muscle and other tissues.</li>
        </ul>
        <p>The total CK level measures all isoforms, while CK-MB specifically measures the cardiac isoform, making them important **Enzyme Markers** for muscle damage and cardiac injury.</p>

        <h3>Role and Function:</h3>
        <p>CK plays a crucial role in cellular energy metabolism, specifically catalyzing the reversible transfer of a phosphate group from ATP to creatine, forming phosphocreatine. Phosphocreatine serves as a rapidly available energy reserve for muscle contraction.</p>
        <p>When muscle cells (skeletal or cardiac) are injured, their cell membranes become permeable, allowing CK to leak into the circulating blood. Therefore, elevated CK levels indicate **muscle damage or necrosis**.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: For CK-MB, conventional units often use ng/mL (nanograms per milliliter) or a percentage of total CK.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for CK can vary significantly by laboratory, sex, age, and muscle mass/activity level. Males typically have higher CK levels than females due to greater muscle mass.</p>
        <ul>
            <li><strong>Total CK:</strong>
                <ul>
                    <li><strong>Adults:</strong> 30 - 200 U/L (some labs use higher upper limits for males, e.g., up to 220-300 U/L).</li>
                    <li><em>Can be higher in individuals with significant muscle mass, after strenuous exercise, or certain ethnic groups.</em></li>
                </ul>
            </li>
            <li><strong>CK-MB:</strong>
                <ul>
                    <li><strong>Absolute Value:</strong> < 5 ng/mL (or < 0.05-0.10 µg/L depending on unit)</li>
                    <li><strong>Relative Index:</strong> < 4% of total CK (meaning CK-MB comprises less than 4% of the total CK activity).</li>
                    <li><em>The relative index is important to confirm cardiac origin, as high total CK from skeletal muscle can also elevate the absolute CK-MB slightly.</em></li>
                </ul>
            </li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Total CK (Elevated Creatine Kinase):</h3>
        <p>An elevated total CK level indicates damage to muscle cells (skeletal or cardiac) or brain tissue. Further investigation, including CK isoenzyme analysis (CK-MB) or cardiac troponins, is often needed to determine the source.</p>
        <ul>
            <li><strong>Skeletal Muscle Damage:</strong> The most common cause of high total CK.
                <ul>
                    <li><strong>Trauma/Injury:</strong> Muscle crush injuries, falls, surgery, burns.</li>
                    <li><strong>Strenuous Exercise:</strong> (e.g., marathon running, heavy weightlifting) can cause transient elevations.</li>
                    <li><strong>Muscle Diseases (Myopathies):</strong> Muscular dystrophies, polymyositis, dermatomyositis.</li>
                    <li><strong>Rhabdomyolysis:</strong> Severe muscle breakdown, leading to very high CK levels (often in the tens of thousands).</li>
                    <li><strong>Intramuscular Injections.</strong></li>
                    <li><strong>Seizures.</strong></li>
                    <li><strong>Certain Medications:</strong> Statins (can cause myalgia/myopathy), fibrates, antipsychotics, colchicine.</li>
                    <li><strong>Hypothyroidism:</strong> Can cause myopathy and elevated CK.</li>
                </ul>
            </li>
            <li><strong>Myocardial Infarction (Heart Attack):</strong> Damaged heart muscle releases CK, particularly the CK-MB isoform.</li>
            <li><strong>Brain Injury:</strong> Stroke, head trauma (elevates CK-BB, usually not measured in routine blood tests).</li>
            <li><strong>Alcoholism.</strong></li>
            <li><strong>Infections:</strong> Severe viral or bacterial infections.</li>
            <li><strong>Malignant Hyperthermia.</strong></li>
        </ul>

        <h3>High CK-MB (Elevated Cardiac-Specific CK):</h3>
        <p>An elevated CK-MB, especially when it is also a significant percentage of the total CK (&gt;4%), is a strong indicator of **myocardial injury (damage to the heart muscle)**. It is most commonly used in the diagnosis of **acute myocardial infarction (heart attack)**.</p>
        <ul>
            <li><strong>Acute Myocardial Infarction (Heart Attack):</strong> CK-MB levels typically rise within 3-6 hours after the onset of chest pain, peak at 12-24 hours, and return to normal within 24-48 hours.</li>
            <li><strong>Myocarditis:</strong> Inflammation of the heart muscle.</li>
            <li><strong>Cardiac Contusion:</strong> Trauma to the heart.</li>
            <li><strong>Cardiac Surgery (e.g., CABG):</strong> Expected rise due to surgical trauma to the heart.</li>
            <li><strong>Severe Tachyarrhythmias.</strong></li>
            <li><strong>Other Cardiac Ischemia.</strong></li>
        </ul>
        <p><em>Note: While CK-MB was historically a primary cardiac marker, **Troponins (Cardiac Troponin I and T)** are now the preferred and more sensitive/specific biomarkers for myocardial infarction. However, CK-MB can still be useful in specific situations, such as detecting reinfarction (a second heart attack) shortly after the first, because CK-MB levels return to normal faster than troponins.</em></p>

        <h3>Low CK:</h3>
        <p>A low CK level is generally **not clinically significant** and usually does not indicate a health problem. It is typically a normal finding.</p>

        <h3>Additional Information:</h3>
        <p>CK measurements are important for diagnosing and monitoring muscle disorders and, in the case of CK-MB, cardiac injury. When total CK is elevated, CK-MB is often measured to differentiate between skeletal muscle and cardiac sources. If CK-MB is normal, the elevation is likely due to skeletal muscle damage.</p>
        <p>In the context of chest pain, the combination of **CK-MB and Troponins** is often used. Troponins are more sensitive and specific for cardiac damage and remain elevated longer, making them ideal for initial diagnosis. CK-MB can be helpful for assessing the timing of injury or reinfarction.</p>
    `,
    relatedBiomarkers: ['troponins']
},
{
    id: 'ldh',
    name: 'Lactate Dehydrogenase (LDH)',
    description: 'An enzyme found in almost all body cells. Elevated levels indicate tissue damage.',
    type: 'Enzyme Marker',
    responsibleFor: 'Catalyzing the conversion of lactate to pyruvate, essential for energy metabolism. Non-specific marker of cell damage.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Lactate Dehydrogenase (LDH), also known as Lactic Acid Dehydrogenase, is an intracellular enzyme found in the cytoplasm of almost all body cells. It is particularly abundant in the **heart, liver, kidneys, skeletal muscles, red blood cells, brain, and lungs**. Due to its widespread presence, LDH is a **non-specific Enzyme Marker** for cellular damage or tissue injury.</p>

        <h3>Role and Function:</h3>
        <p>LDH plays a critical role in cellular energy production (glycolysis). It catalyzes the reversible interconversion of lactate and pyruvate, a step essential for both aerobic and anaerobic respiration. This reaction allows cells to produce energy in the absence of oxygen (anaerobic glycolysis) and to convert lactate back to pyruvate for further energy production or glucose synthesis (gluconeogenesis).</p>
        <p>When cells are damaged or destroyed, their cellular contents, including LDH, leak into the bloodstream, leading to elevated serum LDH levels. Because it's found in so many tissues, an elevated LDH indicates general **tissue damage or cell destruction**, but not its specific location without further tests.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (Units per liter)</li>
            <li><em>Note: Standardized units ensure comparability across laboratories.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for LDH can vary by laboratory, age, and sex. Levels are often higher in children.</p>
        <ul>
            <li><strong>Adults:</strong> 140 - 280 U/L (ranges can vary, e.g., 100-250 U/L)</li>
            <li><strong>Children:</strong> Higher than adults, especially in infants.</li>
            <li><em>Values can vary by laboratory. Hemolysis in the blood sample can falsely elevate results significantly.</em></li>
        </ul>

        <h3>High LDH (Elevated Lactate Dehydrogenase):</h3>
        <p>An elevated LDH level indicates widespread cellular damage or destruction. Because it is non-specific, identifying the source usually requires correlating with other clinical findings and specific organ markers.</p>
        <ul>
            <li><strong>Myocardial Infarction (Heart Attack):</strong> LDH levels rise later than CK and troponins (10-12 hours post-event), peak at 24-48 hours, and can remain elevated for 10-14 days. While historically used, troponins are now the primary cardiac markers.</li>
            <li><strong>Liver Disease:</strong> Any significant liver cell damage (e.g., viral hepatitis, cirrhosis, drug-induced liver injury, liver cancer, ischemic liver) can elevate LDH, along with ALT and AST.</li>
            <li><strong>Kidney Disease:</strong> Renal infarction, severe kidney injury.</li>
            <li><strong>Anemias:</strong>
                <ul>
                    <li><strong>Hemolytic Anemia:</strong> Rapid destruction of red blood cells releases large amounts of LDH (especially LDH-1 and LDH-2). This is a common and significant cause of high LDH.</li>
                    <li><strong>Megaloblastic Anemia:</strong> Ineffective red blood cell production leads to cell destruction in bone marrow.</li>
                </ul>
            </li>
            <li><strong>Muscle Injury/Disease:</strong> Severe trauma, extensive burns, muscular dystrophy, rhabdomyolysis, strenuous exercise (elevates LDH, alongside CK).</li>
            <li><strong>Certain Cancers:</strong> Many types of cancer (e.g., leukemia, lymphoma, germ cell tumors, metastatic solid tumors) can show elevated LDH, often reflecting tumor burden, cell turnover, or prognosis.</li>
            <li><strong>Pneumonia/Pulmonary Embolism:</strong> Lung tissue damage.</li>
            <li><strong>Pancreatitis:</strong> Severe inflammation.</li>
            <li><strong>Severe Infections/Sepsis:</strong> Widespread tissue damage.</li>
            <li><strong>Hypothyroidism.</strong></li>
        </ul>
        <p><em>Note: It is crucial to check for **hemolysis** (red blood cell breakdown) in the blood sample, as this is a very common cause of falsely elevated LDH in laboratory specimens.</em></p>

        <h3>Low LDH:</h3>
        <p>A low LDH level is generally **not clinically significant** and usually does not indicate a health problem. It is typically a normal finding.</p>

        <h3>Additional Information:</h3>
        <p>Because of its non-specificity, LDH is less commonly used as a primary diagnostic marker today compared to more specific enzymes (like ALT for liver, troponin for heart, lipase for pancreas). However, it still holds value in certain contexts:</p>
        <ul>
            <li><strong>Monitoring Disease Progression:</strong> Particularly useful in oncology as a general marker of tumor burden and response to therapy in certain cancers (e.g., lymphoma, germ cell tumors, melanoma).</li>
            <li><strong>Detecting Hemolysis:</strong> A high LDH with unconjugated hyperbilirubinemia and low haptoglobin is highly suggestive of hemolytic anemia.</li>
            <li><strong>Assessing Tissue Ischemia:</strong> Can rise in conditions like bowel ischemia or limb ischemia.</li>
        </ul>
        <p>LDH can be further analyzed into five different isoenzymes (LDH-1 to LDH-5), which can help pinpoint the tissue origin of the elevated LDH, though this is less commonly performed than a total LDH assay.</p>
    `,
    relatedBiomarkers: ['ck']
    },

    // --- 3. Hormones ---
    {
    id: 'tsh',
    name: 'Thyroid Stimulating Hormone (TSH)',
    description: 'A pituitary hormone that regulates thyroid gland activity. Best indicator of thyroid function.',
    type: 'Thyroid Hormone',
    responsibleFor: 'Stimulating the thyroid gland to produce thyroid hormones (T3, T4). Central regulator of thyroid function.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Thyroid Stimulating Hormone (TSH), also known as thyrotropin, is a hormone produced by the **pituitary gland** in the brain. It is the primary regulator of thyroid gland function and is considered the **single best initial test** for evaluating overall thyroid status.</p>

        <h3>Role and Function:</h3>
        <p>TSH's main function is to **stimulate the thyroid gland** (located in the neck) to produce and release thyroid hormones, primarily **Thyroxine (T4)** and to a lesser extent **Triiodothyronine (T3)**.</p>
       </p>
        <p>When thyroid hormone levels (T3 and T4) in the blood are low, the pituitary gland increases TSH production to stimulate the thyroid. Conversely, when thyroid hormone levels are high, the pituitary gland reduces TSH production to decrease thyroid activity.</p>
        <p>Because TSH reacts sensitively to even subtle changes in thyroid hormone levels, it acts as a very early and reliable indicator of thyroid dysfunction.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mIU/L (milli-international units per liter) or µIU/mL (micro-international units per milliliter).</li>
            <li><strong>Conventional Units:</strong> mIU/mL (milli-international units per milliliter).</li>
            <li><em>Note: mIU/L and µIU/mL are numerically equivalent.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for TSH can vary slightly by laboratory methods and population characteristics. Optimal ranges can also differ for specific physiological states, such as pregnancy.</p>
        <ul>
            <li><strong>Adults:</strong> 0.4 - 4.0 mIU/L (or µIU/mL)</li>
            <li><strong>Pregnancy:</strong> Optimal TSH levels are generally lower in the first trimester (e.g., 0.1-2.5 mIU/L) and slightly higher in later trimesters.</li>
            <li><strong>Children:</strong> Reference ranges are often higher in newborns and gradually decrease with age.</li>
            <li><em>Ranges can vary slightly by laboratory, and optimal range for pregnancy may differ.</em></li>
        </ul>

        <h3>High TSH (Elevated Thyroid Stimulating Hormone):</h3>
        <p>A high TSH level indicates that the pituitary gland is working harder than normal to stimulate the thyroid, suggesting an **underactive thyroid gland (hypothyroidism)**. This is usually due to a primary problem with the thyroid gland itself (primary hypothyroidism).</p>
        <ul>
            <li><strong>Primary Hypothyroidism:</strong> The most common cause. The thyroid gland is not producing enough T3 and T4, so the pituitary releases more TSH in an attempt to compensate. Common causes include:
                <ul>
                    <li><strong>Hashimoto's Thyroiditis:</strong> An autoimmune condition where the immune system attacks the thyroid.</li>
                    <li><strong>Thyroidectomy:</strong> Surgical removal of the thyroid gland.</li>
                    <li><strong>Radioactive Iodine Treatment:</strong> For hyperthyroidism.</li>
                    <li><strong>Certain Medications:</strong> (e.g., amiodarone, lithium, interferon alpha).</li>
                    <li><strong>Iodine Deficiency (less common in developed countries).</strong></li>
                </ul>
            </li>
            <li><strong>Subclinical Hypothyroidism:</strong> TSH is elevated, but free T4 and free T3 levels are still within the normal range. May or may not cause symptoms.</li>
            <li><strong>Recovery from Non-Thyroidal Illness (Euthyroid Sick Syndrome):</strong> TSH may transiently rise during recovery.</li>
            <li><strong>TSH-secreting pituitary adenoma (rare).</strong></li>
        </ul>
        <p>Symptoms of hypothyroidism include fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss, and depression.</p>

        <h3>Low TSH (Suppressed Thyroid Stimulating Hormone):</h3>
        <p>A low TSH level indicates that the pituitary gland is producing less TSH, usually because the thyroid gland is overactive or because of external factors suppressing TSH production. This suggests **hyperthyroidism** or TSH suppression.</p>
        <ul>
            <li><strong>Hyperthyroidism (Overactive Thyroid):</strong> The most common cause. The thyroid gland is producing too much T3 and T4, which suppresses TSH release from the pituitary. Common causes include:
                <ul>
                    <li><strong>Graves' Disease:</strong> An autoimmune condition where antibodies stimulate the thyroid gland.</li>
                    <li><strong>Toxic Multinodular Goiter.</strong></li>
                    <li><strong>Toxic Adenoma.</strong></li>
                    <li><strong>Thyroiditis:</strong> Inflammation of the thyroid (initially can cause hyperthyroidism due to hormone release).</li>
                    <li><strong>Excessive Iodine Intake.</strong></li>
                </ul>
            </li>
            <li><strong>Subclinical Hyperthyroidism:</strong> TSH is low, but free T4 and free T3 levels are still within the normal range.</li>
            <li><strong>Over-treatment with Thyroid Hormone Medication:</strong> Patients taking levothyroxine for hypothyroidism may have suppressed TSH if the dose is too high.</li>
            <li><strong>Non-Thyroidal Illness (Euthyroid Sick Syndrome):</strong> During acute severe illness, TSH can be transiently low.</li>
            <li><strong>Secondary/Central Hypothyroidism (rare):</strong> Problem with the pituitary or hypothalamus leading to low TSH, which then causes the thyroid to be underactive (low T4/T3).</li>
        </ul>
        <p>Symptoms of hyperthyroidism include weight loss, rapid heart rate, heat intolerance, anxiety, tremors, and increased appetite.</p>

        <h3>Additional Information:</h3>
        <p>TSH is often the **first-line test** for thyroid disorders. If TSH is abnormal, further tests like **Free T4** and **Free T3** are usually performed to confirm the diagnosis and identify the specific type of thyroid dysfunction.</p>
        <ul>
            <li><strong>High TSH with Low Free T4:</strong> Confirms primary hypothyroidism.</li>
            <li><strong>Low TSH with High Free T4 (and/or Free T3):</strong> Confirms primary hyperthyroidism.</li>
            <li><strong>Abnormal TSH with Normal Free T4/T3:</strong> Suggests subclinical thyroid disease.</li>
            <li><strong>Low TSH with Low Free T4:</strong> Suggests central (secondary) hypothyroidism (pituitary/hypothalamic problem).</li>
        </ul>
        <p>Monitoring TSH is also essential for patients on thyroid hormone replacement therapy or anti-thyroid medications to ensure appropriate dosing.</p>
    `,
    relatedBiomarkers: ['t3-total', 't3-free', 't4-total', 't4-free']
},
{
    id: 't3-total',
    name: 'Total Triiodothyronine (Total T3)',
    description: 'Measures the total amount of T3 hormone, which is the active thyroid hormone.',
    type: 'Thyroid Hormone',
    responsibleFor: 'Regulating metabolism, growth, and development. Most active form of thyroid hormone.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Triiodothyronine (T3) is one of the two main hormones produced by the thyroid gland. It is the **metabolically active form** of thyroid hormone, responsible for most of the effects of thyroid hormones on body tissues. **Total T3** measures both the T3 that is bound to proteins in the blood and the unbound, "free" T3.</p>

        <h3>Role and Function:</h3>
        <p>T3 is crucial for regulating the body's metabolism and influencing nearly every physiological process, including:</p>
        <ul>
            <li><strong>Metabolic Rate:</strong> Regulates how quickly the body uses energy.</li>
            <li><strong>Growth and Development:</strong> Essential for normal growth in children and development of the nervous system.</li>
            <li><strong>Heart Rate and Contractility.</strong></li>
            <li><strong>Body Temperature.</strong></li>
            <li><strong>Brain Function.</strong></li>
            <li><strong>Digestive Function.</strong></li>
            <li><strong>Muscle Strength and Control.</strong></li>
        </ul>
        <p>Most T3 (around 80%) is formed by the conversion of T4 (thyroxine) to T3 in peripheral tissues (e.g., liver, kidneys) by deiodinase enzymes. Only about 20% of T3 is directly secreted by the thyroid gland. The majority of T3 in the blood is bound to transport proteins (Thyroxine-Binding Globulin - TBG, transthyretin, albumin); only a small fraction is unbound (Free T3) and biologically active.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional Units:</strong> ng/dL (nanogram per deciliter)</li>
            <li><em>Note: To convert nmol/L to ng/dL, multiply by 65.1. To convert ng/dL to nmol/L, divide by 65.1. For example, 3.1 nmol/L is approximately 202 ng/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for Total T3 can vary slightly by laboratory and physiological factors. They are generally broader than for free T3.</p>
        <ul>
            <li><strong>Adults:</strong> 1.2 - 3.1 nmol/L (78 - 200 ng/dL)</li>
            <li><strong>Children:</strong> Levels are generally higher than adults, especially in newborns and infants, gradually decreasing with age.</li>
            <li><strong>Pregnancy:</strong> Total T3 can be elevated due to increased binding proteins, but free T3 should remain normal.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Total T3 (Hyperthyroidism/T3 Toxicosis):</h3>
        <p>An elevated Total T3 level is a strong indicator of **hyperthyroidism (overactive thyroid)**. In some cases, only T3 levels are elevated, a condition known as T3 toxicosis.</p>
        <ul>
            <li><strong>Hyperthyroidism:</strong>
                <ul>
                    <li><strong>Graves' Disease:</strong> The most common cause.</li>
                    <li><strong>Toxic Multinodular Goiter or Toxic Adenoma.</strong></li>
                    <li><strong>Thyroiditis (early phase).</strong></li>
                    <li><strong>Excessive Iodine Intake.</strong></li>
                </ul>
            </li>
            <li><strong>T3 Toxicosis:</strong> A form of hyperthyroidism where T3 is elevated but T4 may be normal.</li>
            <li><strong>Increased Thyroid Hormone Binding Proteins:</strong>
                <ul>
                    <li><strong>Pregnancy.</strong></li>
                    <li><strong>Oral Contraceptives or Estrogen Therapy.</strong></li>
                    <li><strong>Genetic conditions (rare).</strong></li>
                </ul>
                In these cases, total T3 is high but free T3 is typically normal, and the patient is euthyroid.
            </li>
            <li><strong>Certain Medications:</strong> (e.g., amiodarone can affect T3/T4 conversion and binding).</li>
        </ul>
        <p>Symptoms of high T3 are those of hyperthyroidism: weight loss, rapid heartbeat, anxiety, tremors, heat intolerance, increased appetite.</p>

        <h3>Low Total T3 (Hypothyroidism/Non-Thyroidal Illness):</h3>
        <p>A low Total T3 level can indicate **hypothyroidism (underactive thyroid)** or, more commonly, **non-thyroidal illness (euthyroid sick syndrome)**.</p>
        <ul>
            <li><strong>Hypothyroidism:</strong> When the thyroid gland produces insufficient hormones. Total T3 may be low, often accompanying low Total T4 and high TSH.</li>
            <li><strong>Non-Thyroidal Illness (Euthyroid Sick Syndrome / Low T3 Syndrome):</strong> In severe acute or chronic illnesses, starvation, or trauma, the body reduces the conversion of T4 to T3 (favoring reverse T3 production). This leads to low T3 levels (and sometimes low Total T4) even if the thyroid gland itself is functioning normally. TSH is typically normal or slightly abnormal.</li>
            <li><strong>Certain Medications:</strong> (e.g., corticosteroids, propranolol, amiodarone, phenytoin, carbamazepine) can inhibit T4 to T3 conversion.</li>
            <li><strong>Iodine Deficiency (severe).</strong></li>
        </ul>
        <p>Symptoms of low T3 due to hypothyroidism include fatigue, weight gain, cold intolerance, constipation, and dry skin.</p>

        <h3>Additional Information:</h3>
        <p>While Total T3 provides an overall picture, its levels can be influenced by changes in protein binding, which may not reflect the actual amount of active hormone. For this reason, **Free T3** (which measures only the unbound, active form) is often considered a more accurate indicator of thyroid function.</p>
        <p>Total T3 is typically ordered along with **TSH and Total T4 (and often Free T4/Free T3)** to provide a comprehensive assessment of thyroid function.</p>
        <p>Monitoring Total T3 can be particularly useful in cases of suspected T3 toxicosis, where TSH and Total T4 might be normal but Total T3 is elevated.</p>
    `,
    relatedBiomarkers: ['tsh', 't3-free']
},
{
    id: 't3-free',
    name: 'Free Triiodothyronine (Free T3)',
    description: 'Measures the unbound, active form of T3, which is more accurate than total T3.',
    type: 'Thyroid Hormone',
    responsibleFor: 'Directly influencing metabolic rate and cellular activity without protein binding.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Free Triiodothyronine (Free T3) measures the concentration of unbound, biologically active T3 hormone in the blood. Unlike Total T3, Free T3 is not affected by changes in protein binding and therefore provides a more accurate assessment of the body's actual thyroid hormone status at the tissue level. It is a key **Thyroid Hormone** marker.</p>

        <h3>Role and Function:</h3>
        <p>Free T3 is the active form of thyroid hormone that directly enters cells and interacts with receptors to regulate metabolism, energy production, growth, and development. It influences virtually every organ system in the body, including the heart, brain, muscles, and digestive system.</p>
        <p>While most T3 is produced by the conversion of T4 in peripheral tissues, it is the small, unbound fraction of T3 that is responsible for its physiological effects. This is why Free T3 is often considered a superior indicator of thyroid function compared to Total T3, as it reflects the amount of hormone available to target cells.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pmol/L (picomole per liter)</li>
            <li><strong>Conventional Units:</strong> pg/dL (picogram per deciliter)</li>
            <li><em>Note: To convert pmol/L to pg/dL, multiply by 0.651. To convert pg/dL to pmol/L, divide by 0.651. For example, 6.8 pmol/L is approximately 4.43 pg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for Free T3 can vary slightly by laboratory, but they are generally consistent.</p>
        <ul>
            <li><strong>Adults:</strong> 3.1 - 6.8 pmol/L (2.0 - 4.4 pg/dL)</li>
            <li><strong>Children:</strong> Levels are generally higher than adults, especially in newborns and infants, gradually decreasing with age.</li>
            <li><strong>Pregnancy:</strong> Free T3 levels may be slightly affected by physiological changes but are generally maintained within the normal reference range, unlike Total T3.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Free T3 (Hyperthyroidism):</h3>
        <p>An elevated Free T3 level is a direct indicator of **hyperthyroidism (overactive thyroid gland)**, meaning the body has too much active thyroid hormone circulating. It is often elevated alongside Free T4 and a suppressed TSH.</p>
        <ul>
            <li><strong>Graves' Disease:</strong> The most common cause of hyperthyroidism.</li>
            <li><strong>Toxic Multinodular Goiter or Toxic Adenoma.</strong></li>
            <li><strong>Thyroiditis (early phase):</strong> Inflammation leading to uncontrolled hormone release.</li>
            <li><strong>Excessive Iodine Intake.</strong></li>
            <li><strong>Over-treatment with Thyroid Hormone Medication:</strong> Particularly if a T3-containing preparation (e.g., liothyronine or desiccated thyroid extract) is used or if levothyroxine dose is too high leading to excess T4 to T3 conversion.</li>
            <li><strong>T3 Toxicosis:</strong> A rare form of hyperthyroidism where only Free T3 is significantly elevated, while Free T4 may be normal.</li>
        </ul>
        <p>Symptoms are those of hyperthyroidism: weight loss despite increased appetite, rapid or irregular heartbeat, anxiety, tremors, heat intolerance, sweating, and difficulty sleeping.</p>

        <h3>Low Free T3 (Hypothyroidism/Non-Thyroidal Illness):</h3>
        <p>A low Free T3 level can indicate **hypothyroidism (underactive thyroid)** or, more commonly, **non-thyroidal illness (euthyroid sick syndrome)**.</p>
        <ul>
            <li><strong>Hypothyroidism (Primary):</strong> When the thyroid gland produces insufficient hormones. Free T3 will be low, usually accompanied by low Free T4 and a high TSH.</li>
            <li><strong>Non-Thyroidal Illness (Euthyroid Sick Syndrome / Low T3 Syndrome):</strong> In severe acute or chronic illnesses, the body's conversion of T4 to T3 is reduced, leading to lower Free T3 levels (and sometimes lower Free T4) even if the thyroid gland itself is not primarily dysfunctional. TSH is typically normal or slightly abnormal.</li>
            <li><strong>Medications:</strong> Certain drugs (e.g., corticosteroids, propranolol, amiodarone, phenytoin, carbamazepine) can inhibit the conversion of T4 to T3, leading to lower Free T3 levels.</li>
            <li><strong>Severe Iodine Deficiency.</strong></li>
        </ul>
        <p>Symptoms of low Free T3 due to hypothyroidism include fatigue, weight gain, cold intolerance, constipation, dry skin, and depression.</p>

        <h3>Additional Information:</h3>
        <p>Free T3 is considered a more reliable measure of thyroid hormone activity than Total T3 because it is not affected by protein binding variations caused by conditions like pregnancy, oral contraceptive use, or certain liver diseases. It is a critical test, especially when TSH and Free T4 results are equivocal or when a diagnosis of T3 toxicosis is suspected.</p>
        <p>Free T3 is typically evaluated in conjunction with **TSH and Free T4** to provide a complete picture of thyroid function and aid in diagnosis and monitoring of thyroid disorders.</p>
    `,
    relatedBiomarkers: ['tsh', 't3-total']
},
{
    id: 't4-total',
    name: 'Total Thyroxine (Total T4)',
    description: 'Measures the total amount of T4 hormone, which is the main hormone produced by the thyroid.',
    type: 'Thyroid Hormone',
    responsibleFor: 'Serving as a precursor to T3 and influencing overall metabolic rate.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Thyroxine (T4) is the primary hormone produced and secreted by the thyroid gland. **Total T4** measures the entire amount of T4 in the blood, which includes both the T4 bound to proteins and the small fraction of unbound, "free" T4. It is a fundamental **Thyroid Hormone** marker.</p>

        <h3>Role and Function:</h3>
        <p>T4 is the main secretory product of the thyroid gland, accounting for about 80% of the hormones released. While T4 itself has some metabolic activity, its primary role is as a **prohormone**. In peripheral tissues (like the liver and kidneys), T4 is converted into the more active Triiodothyronine (T3) by deiodinase enzymes.</p>
        <p>T4 influences overall metabolic rate and is essential for:</p>
        <ul>
            <li><strong>Energy Metabolism.</strong></li>
            <li><strong>Growth and Development.</strong></li>
            <li><strong>Organ Function.</strong></li>
        </ul>
        <p>The vast majority (over 99%) of T4 in the blood is bound to transport proteins, mainly Thyroxine-Binding Globulin (TBG), but also transthyretin (TTR) and albumin. Only the small unbound fraction (Free T4) is biologically active and available to target tissues.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional Units:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Note: To convert nmol/L to µg/dL, divide by 12.87. To convert µg/dL to nmol/L, multiply by 12.87. For example, 154 nmol/L is approximately 11.97 µg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for Total T4 can vary slightly by laboratory, age, and physiological factors due to variations in binding protein levels.</p>
        <ul>
            <li><strong>Adults:</strong> 64 - 154 nmol/L (5.0 - 12.0 µg/dL)</li>
            <li><strong>Children:</strong> Higher than adults, especially in newborns and infants, gradually decreasing with age.</li>
            <li><strong>Pregnancy:</strong> Total T4 is typically elevated in pregnancy due to increased estrogen leading to higher levels of TBG (thyroxine-binding globulin). This increased binding capacity means more total T4, but free T4 should remain normal.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Total T4 (Hyperthyroidism/Increased Binding Proteins):</h3>
        <p>An elevated Total T4 level can indicate **hyperthyroidism (an overactive thyroid gland)**, or it can be due to an increase in the binding proteins that carry T4 in the blood, without true hyperthyroidism.</p>
        <ul>
            <li><strong>Hyperthyroidism:</strong>
                <ul>
                    <li><strong>Graves' Disease:</strong> The most common cause.</li>
                    <li><strong>Toxic Multinodular Goiter or Toxic Adenoma.</strong></li>
                    <li><strong>Thyroiditis (early phase).</strong></li>
                    <li><strong>Over-treatment with Thyroid Hormone Medication (Levothyroxine).</strong></li>
                </ul>
            </li>
            <li><strong>Increased Thyroid Hormone Binding Proteins:</strong> This is a common non-thyroidal cause of high Total T4, where the patient is actually euthyroid (normal thyroid function).
                <ul>
                    <li><strong>Pregnancy.</strong></li>
                    <li><strong>Oral Contraceptives or Estrogen Therapy.</strong></li>
                    <li><strong>Hormone Replacement Therapy.</strong></li>
                    <li><strong>Certain Medications:</strong> (e.g., tamoxifen, methadone).</li>
                    <li><strong>Genetic conditions (e.g., familial dysalbuminemic hyperthyroxinemia).</strong></li>
                </ul>
                In these cases, the high Total T4 is due to more T4 being bound, but the Free T4 remains normal.
            </li>
            <li><strong>Certain Medications:</strong> (e.g., amiodarone can affect T4 levels).</li>
        </ul>
        <p>Symptoms of high T4 due to hyperthyroidism include weight loss, rapid heartbeat, anxiety, tremors, heat intolerance, and difficulty sleeping.</p>

        <h3>Low Total T4 (Hypothyroidism/Decreased Binding Proteins/Non-Thyroidal Illness):</h3>
        <p>A low Total T4 level can indicate **hypothyroidism (an underactive thyroid gland)**, or it can be due to a decrease in the binding proteins, without true hypothyroidism, or severe non-thyroidal illness.</p>
        <ul>
            <li><strong>Hypothyroidism (Primary):</strong> When the thyroid gland produces insufficient hormones. Total T4 will be low, usually accompanied by low Free T4 and high TSH. Common causes include Hashimoto's thyroiditis, thyroidectomy, radioactive iodine treatment.</li>
            <li><strong>Decreased Thyroid Hormone Binding Proteins:</strong>
                <ul>
                    <li><strong>Severe Liver Disease:</strong> Impaired protein synthesis.</li>
                    <li><strong>Kidney Disease (Nephrotic Syndrome):</strong> Protein loss in urine.</li>
                    <li><strong>Severe Malnutrition.</strong></li>
                    <li><strong>Certain Medications:</strong> (e.g., androgens, high-dose corticosteroids).</li>
                    <li><strong>Genetic disorders (rare).</strong></li>
                </ul>
                In these cases, Total T4 is low, but Free T4 is typically normal, and the patient is euthyroid.
            </li>
            <li><strong>Non-Thyroidal Illness (Euthyroid Sick Syndrome):</strong> In acute or chronic severe illness, Total T4 (and sometimes Free T4) can be low due to various factors affecting hormone production, conversion, and binding. TSH may be normal or slightly abnormal.</li>
            <li><strong>Central Hypothyroidism (Secondary/Tertiary):</strong> A problem with the pituitary or hypothalamus leading to insufficient TSH production, which then results in low T4 from a healthy thyroid gland.</li>
        </ul>
        <p>Symptoms of low T4 due to hypothyroidism include fatigue, weight gain, cold intolerance, constipation, dry skin, and depression.</p>

        <h3>Additional Information:</h3>
        <p>While Total T4 provides a general overview, its interpretation can be complicated by factors affecting thyroid hormone binding proteins. Therefore, **Free T4** (which measures only the unbound, active form) is often a more accurate indicator of thyroid function and is widely preferred for initial assessment and monitoring.</p>
        <p>Total T4 is typically evaluated in conjunction with **TSH and Free T4 (and often Total T3/Free T3)** to provide a comprehensive assessment of thyroid function and aid in diagnosis and management of thyroid disorders.</p>
    `,
    relatedBiomarkers: ['tsh', 't4-free']
},
{
    id: 't4-free',
    name: 'Free Thyroxine (Free T4)',
    description: 'Measures the unbound, active form of T4, which is a more accurate indicator than total T4.',
    type: 'Thyroid Hormone',
    responsibleFor: 'Directly influencing metabolic rate without protein binding; converts to active T3 in tissues.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Free Thyroxine (Free T4) measures the concentration of unbound, biologically active T4 hormone in the blood. Unlike Total T4, Free T4 is not affected by variations in thyroid hormone binding proteins (like Thyroxine-Binding Globulin - TBG), making it a more accurate and reliable indicator of the body's true thyroid status. It is a primary **Thyroid Hormone** marker used for diagnosis and monitoring.</p>

        <h3>Role and Function:</h3>
        <p>Free T4 is the active form of Thyroxine that is freely available to enter target cells throughout the body. Once inside cells, Free T4 can be converted to the even more metabolically potent Triiodothyronine (T3) by deiodinase enzymes. Therefore, Free T4 directly reflects the amount of T4 that is available to exert its effects on metabolism and various physiological processes.</p>
        <p>Because it is not bound to proteins, its levels are not influenced by changes in protein concentrations due to conditions like pregnancy, liver disease, or certain medications. This makes it a superior measure compared to Total T4 for assessing thyroid function.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pmol/L (picomole per liter)</li>
            <li><strong>Conventional Units:</strong> ng/dL (nanogram per deciliter)</li>
            <li><em>Note: To convert pmol/L to ng/dL, multiply by 0.0776. To convert ng/dL to pmol/L, divide by 0.0776. For example, 23 pmol/L is approximately 1.78 ng/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for Free T4 can vary slightly by laboratory, but they are generally consistent and less affected by non-thyroidal factors than Total T4.</p>
        <ul>
            <li><strong>Adults:</strong> 10 - 23 pmol/L (0.8 - 1.8 ng/dL)</li>
            <li><strong>Children:</strong> Levels are generally higher than adults, especially in newborns and infants, gradually decreasing with age.</li>
            <li><strong>Pregnancy:</strong> Free T4 levels should generally remain within the normal reference range, although they may slightly decrease in later trimesters due to increased T4 binding and metabolism.</li>
            <li><em>Values can vary by laboratory.</em></li>
        </ul>

        <h3>High Free T4 (Hyperthyroidism):</h3>
        <p>An elevated Free T4 level indicates **hyperthyroidism (an overactive thyroid gland)**, meaning the thyroid is producing too much active T4. This is typically accompanied by a suppressed TSH level.</p>
        <ul>
            <li><strong>Graves' Disease:</strong> The most common cause of hyperthyroidism.</li>
            <li><strong>Toxic Multinodular Goiter or Toxic Adenoma.</strong></li>
            <li><strong>Thyroiditis (early phase):</strong> Inflammation leading to uncontrolled hormone release.</li>
            <li><strong>Excessive Iodine Intake.</strong></li>
            <li><strong>Over-treatment with Thyroid Hormone Medication (Levothyroxine):</strong> Patients taking synthetic T4 for hypothyroidism may have high Free T4 if the dose is too high.</li>
            <li><strong>Pituitary Adenoma (TSH-secreting, rare):</strong> Leads to inappropriately high TSH and subsequent high Free T4.</li>
        </ul>
        <p>Symptoms of hyperthyroidism include weight loss despite increased appetite, rapid or irregular heartbeat, anxiety, tremors, heat intolerance, sweating, and difficulty sleeping.</p>

        <h3>Low Free T4 (Hypothyroidism):</h3>
        <p>A low Free T4 level indicates **hypothyroidism (an underactive thyroid gland)**, meaning the thyroid is not producing enough active T4. This is typically accompanied by a high TSH level (in primary hypothyroidism).</p>
        <ul>
            <li><strong>Primary Hypothyroidism:</strong> The most common cause. The thyroid gland is failing to produce enough T4. Common causes include Hashimoto's thyroiditis, surgical removal of the thyroid, or radioactive iodine treatment.</li>
            <li><strong>Central Hypothyroidism (Secondary/Tertiary):</strong> A problem with the pituitary gland (secondary hypothyroidism) or the hypothalamus (tertiary hypothyroidism) leads to insufficient TSH production, which then results in the thyroid not being adequately stimulated to produce T4. In this case, both TSH and Free T4 would be low.</li>
            <li><strong>Severe Non-Thyroidal Illness (Euthyroid Sick Syndrome):</strong> In acute or chronic severe illness, Free T4 can sometimes be mildly low, along with low Free T3. TSH may be normal or slightly abnormal.</li>
            <li><strong>Certain Medications:</strong> (e.g., amiodarone, certain anticonvulsants, corticosteroids) can affect T4 metabolism or binding.</li>
            <li><strong>Iodine Deficiency (severe).</strong></li>
        </ul>
        <p>Symptoms of hypothyroidism include fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss, and depression.</p>

        <h3>Additional Information:</h3>
        <p>Free T4 is considered one of the most reliable and clinically useful thyroid function tests, alongside TSH. It is typically the **second-line test** performed after TSH to confirm a diagnosis of hyperthyroidism or hypothyroidism.</p>
        <ul>
            <li><strong>High TSH with Low Free T4:</strong> Confirms primary hypothyroidism.</li>
            <li><strong>Low TSH with High Free T4:</strong> Confirms primary hyperthyroidism.</li>
            <li><strong>Low TSH with Low Free T4:</strong> Suggests central (secondary or tertiary) hypothyroidism.</li>
        </ul>
        <p>Free T4 is also crucial for monitoring patients on thyroid hormone replacement therapy (levothyroxine) to ensure they are receiving an adequate but not excessive dose.</p>
    `,
    relatedBiomarkers: ['tsh', 't4-total']
    },
    {
    id: 'cortisol',
    name: 'Cortisol',
    description: 'A stress hormone produced by the adrenal glands, involved in metabolism and immune response.',
    type: 'Adrenal Hormone',
    responsibleFor: 'Regulating metabolism, immune response, blood pressure, and managing stress.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Cortisol is a **glucocorticoid hormone** produced by the adrenal glands, which are located on top of the kidneys. It is often referred to as the "stress hormone" because its levels typically rise in response to physical or psychological stress. Cortisol is an essential **Adrenal Hormone** that plays a wide range of roles in the body.</p>

        <h3>Role and Function:</h3>
        <p>Cortisol is a vital hormone involved in numerous physiological processes, including:</p>
        <ul>
            <li><strong>Stress Response:</strong> Helps the body respond to stress by increasing energy availability and altering immune function.</li>
            <li><strong>Metabolism:</strong>
                <ul>
                    <li>Increases blood glucose (sugar) by promoting gluconeogenesis (glucose production from non-carbohydrate sources) and decreasing glucose uptake by peripheral tissues.</li>
                    <li>Influences fat, protein, and carbohydrate metabolism.</li>
                </ul>
            </li>
            <li><strong>Immune Response:</strong> Has anti-inflammatory and immunosuppressive effects.</li>
            <li><strong>Blood Pressure Regulation:</strong> Contributes to maintaining blood pressure and cardiovascular function.</li>
            <li><strong>Sleep-Wake Cycle (Diurnal Rhythm):</strong> Cortisol levels naturally fluctuate throughout the day, following a diurnal rhythm:
                <ul>
                    <li>**Highest:** Typically in the early morning (around 8 AM).</li>
                    <li>**Lowest:** In the late evening or around midnight.</li>
                </ul>
                This rhythm is important for assessing cortisol function.
            </li>
            <li><strong>Bone Formation.</strong></li>
            <li><strong>Cognitive Function.</strong></li>
        </ul>
        <p>Corticotropin-Releasing Hormone (CRH) from the hypothalamus stimulates the pituitary to release Adrenocorticotropic Hormone (ACTH), which then stimulates the adrenal glands to produce cortisol. High cortisol levels, in turn, feedback to inhibit CRH and ACTH release.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional Units:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Note: To convert nmol/L to µg/dL, divide by 27.59. To convert µg/dL to nmol/L, multiply by 27.59. For example, 635 nmol/L is approximately 23 µg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Cortisol levels vary significantly throughout the day, so the time of sample collection is crucial for accurate interpretation. Morning (around 8 AM) values are typically used for baseline assessment.</p>
        <ul>
            <li><strong>Adults (Morning, around 8 AM):</strong> 138 - 635 nmol/L (5 - 23 µg/dL)</li>
            <li><strong>Evening (around 4 PM):</strong> Typically 50% lower than morning levels.</li>
            <li><strong>Midnight:</strong> Very low, often < 50 nmol/L (< 1.8 µg/dL).</li>
            <li><em>Levels vary throughout the day (diurnal rhythm), typically highest in the morning. Stress, illness, and certain medications can significantly impact levels.</em></li>
        </ul>

        <h3>High Cortisol (Hypercortisolism / Cushing's Syndrome):</h3>
        <p>Chronically elevated cortisol levels lead to **Cushing's syndrome**. The cause can be endogenous (from within the body) or exogenous (from outside, like medication).</p>
        <ul>
            <li><strong>Cushing's Disease:</strong> A pituitary tumor produces excessive ACTH, leading to adrenal overstimulation and high cortisol.</li>
            <li><strong>Adrenal Tumor:</strong> A tumor in the adrenal gland directly produces too much cortisol, suppressing ACTH.</li>
            <li><strong>Ectopic ACTH Syndrome:</strong> A non-pituitary tumor (e.g., in the lung) produces ACTH, stimulating adrenal glands.</li>
            <li><strong>Exogenous Corticosteroid Use:</strong> The most common cause of Cushing's syndrome symptoms. Taking high doses of prednisone or similar medications for conditions like asthma or autoimmune diseases.</li>
            <li><strong>Chronic Stress:</strong> Prolonged physical or psychological stress can lead to sustained, though often milder, elevations.</li>
        </ul>
        <p>Symptoms of high cortisol include weight gain (especially in the trunk and face, "moon face"), easy bruising, thin skin, purple stretch marks (striae), high blood pressure, high blood sugar, muscle weakness, fatigue, mood changes, and increased risk of infections.</p>

        <h3>Low Cortisol (Hypocortisolism / Adrenal Insufficiency):</h3>
        <p>Chronically low cortisol levels lead to **adrenal insufficiency**.</p>
        <ul>
            <li><strong>Primary Adrenal Insufficiency (Addison's Disease):</strong> The adrenal glands themselves are damaged and cannot produce enough cortisol (and often aldosterone). This leads to high ACTH as the pituitary tries to stimulate the failing adrenals. Causes include autoimmune destruction (most common), infections (e.g., tuberculosis), hemorrhage.</li>
            <li><strong>Secondary Adrenal Insufficiency:</strong> A problem with the pituitary gland, leading to insufficient ACTH production, which then causes the adrenal glands to produce less cortisol. This results in low ACTH and low cortisol. Causes include pituitary tumors, pituitary surgery, or withdrawal from long-term corticosteroid therapy.</li>
            <li><strong>Tertiary Adrenal Insufficiency:</strong> A problem with the hypothalamus (e.g., due to tumors or inflammation) leading to insufficient CRH, which in turn causes low ACTH and low cortisol.</li>
        </ul>
        <p>Symptoms of low cortisol include chronic fatigue, muscle weakness, weight loss, low blood pressure (especially orthostatic hypotension), nausea, vomiting, abdominal pain, salt craving, and hyperpigmentation (darkening of skin) in primary adrenal insufficiency.</p>

        <h3>Additional Information:</h3>
        <p>Cortisol testing requires careful interpretation due to its diurnal variation and the influence of stress and medications. Often, multiple samples at different times of the day (e.g., morning and midnight) are collected, or dynamic tests like the **ACTH stimulation test** or **dexamethasone suppression test** are performed to assess adrenal function. Urinary free cortisol and salivary cortisol measurements are also used to assess overall daily cortisol production.</p>
        <p>Cortisol is always interpreted in conjunction with **ACTH** to determine the underlying cause of adrenal dysfunction (primary vs. secondary/tertiary).</p>
    `,
    relatedBiomarkers: ['acth']
},
{
    id: 'acth',
    name: 'Adrenocorticotropic Hormone (ACTH)',
    description: 'A pituitary hormone that stimulates cortisol production by the adrenal glands.',
    type: 'Pituitary Hormone',
    responsibleFor: 'Regulating the adrenal glands\' production of cortisol.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Adrenocorticotropic Hormone (ACTH), also known as corticotropin, is a **polypeptide hormone** produced by the anterior lobe of the **pituitary gland** in the brain. It is the primary regulator of cortisol production by the adrenal glands. ACTH is a crucial **Pituitary Hormone** in the hypothalamic-pituitary-adrenal (HPA) axis.</p>

        <h3>Role and Function:</h3>
        <p>ACTH's main function is to **stimulate the adrenal cortex** (the outer part of the adrenal glands) to produce and release **cortisol**. It also has a minor role in stimulating the production of adrenal androgens and aldosterone.</p>
        <p>When cortisol levels are low, the hypothalamus releases Corticotropin-Releasing Hormone (CRH), which stimulates the pituitary to secrete ACTH. ACTH then travels to the adrenal glands, prompting them to produce more cortisol. Conversely, high cortisol levels suppress both CRH and ACTH release, thus maintaining hormonal balance.</p>
        <p>Like cortisol, ACTH levels also exhibit a **diurnal rhythm**, typically highest in the early morning and lowest in the late evening/midnight.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pmol/L (picomole per liter)</li>
            <li><strong>Conventional Units:</strong> pg/mL (picogram per milliliter)</li>
            <li><em>Note: To convert pmol/L to pg/mL, multiply by 4.54. To convert pg/mL to pmol/L, divide by 4.54. For example, 11.0 pmol/L is approximately 50 pg/mL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>ACTH levels vary throughout the day, so timing of collection is critical. Morning (around 8 AM) values are standard for initial assessment.</p>
        <ul>
            <li><strong>Adults (Morning, around 8 AM):</strong> 2.2 - 11.0 pmol/L (10 - 50 pg/mL)</li>
            <li><strong>Evening/Midnight:</strong> Significantly lower.</li>
            <li><em>Levels vary throughout the day, and also depend on stress, illness, and medications. Samples must be collected and handled carefully due to ACTH's instability.</em></li>
        </ul>

        <h3>High ACTH (Elevated Adrenocorticotropic Hormone):</h3>
        <p>High ACTH indicates that the pituitary gland is overproducing ACTH, usually in an attempt to stimulate the adrenal glands, or due to a tumor producing ACTH.</p>
        <ul>
            <li><strong>Primary Adrenal Insufficiency (Addison's Disease):</strong> The most common cause of high ACTH with low cortisol. The adrenal glands are damaged and cannot produce enough cortisol, so the pituitary gland compensates by producing excessive ACTH. This is a primary problem with the adrenal glands themselves.</li>
            <li><strong>Cushing's Disease:</strong> A pituitary tumor (adenoma) produces excessive ACTH, leading to chronic overstimulation of the adrenal glands and high cortisol levels. This is the most common cause of endogenous Cushing's syndrome.</li>
            <li><strong>Ectopic ACTH Syndrome:</strong> A non-pituitary tumor (e.g., small cell lung cancer, carcinoid tumor) produces ACTH, leading to adrenal overstimulation and high cortisol.</li>
            <li><strong>Congenital Adrenal Hyperplasia (CAH):</strong> A group of genetic disorders affecting cortisol synthesis, leading to high ACTH due to lack of negative feedback.</li>
            <li><strong>Stress:</strong> Severe physical stress, surgery, or critical illness can cause transient ACTH elevation.</li>
        </ul>
        <p>Symptoms depend on the underlying condition. In Addison's disease, symptoms are those of low cortisol (fatigue, weight loss, low blood pressure, hyperpigmentation). In Cushing's disease/syndrome, symptoms are those of high cortisol (weight gain, high blood pressure, muscle weakness).</p>

        <h3>Low ACTH (Suppressed Adrenocorticotropic Hormone):</h3>
        <p>Low ACTH indicates that the pituitary gland is producing insufficient ACTH, often leading to understimulation of the adrenal glands.</p>
        <ul>
            <li><strong>Secondary Adrenal Insufficiency:</strong> A problem with the pituitary gland itself (e.g., pituitary tumor, pituitary surgery, Sheehan's syndrome, radiation) leads to insufficient ACTH production, resulting in low cortisol. In this case, both ACTH and cortisol are low.</li>
            <li><strong>Exogenous Steroid Use:</strong> The most common cause. Taking corticosteroid medications (e.g., prednisone) for an extended period suppresses the normal function of the HPA axis, leading to very low ACTH and suppressed adrenal cortisol production. Abrupt withdrawal can cause an adrenal crisis.</li>
            <li><strong>Adrenal Tumor (Cortisol-producing):</strong> A tumor in the adrenal gland produces excessive cortisol independently, which then suppresses normal ACTH production from the pituitary. In this case, ACTH is low, but cortisol is high.</li>
            <li><strong>Tertiary Adrenal Insufficiency:</strong> A problem with the hypothalamus (e.g., due to tumors or inflammation) leading to insufficient CRH, which in turn causes low ACTH and low cortisol.</li>
        </ul>
        <p>Symptoms of low ACTH are primarily those of low cortisol (fatigue, weakness, low blood pressure, weight loss), as the adrenal glands are not being adequately stimulated.</p>

        <h3>Additional Information:</h3>
        <p>ACTH levels are almost always measured in conjunction with **Cortisol** to help differentiate between primary, secondary, and tertiary adrenal disorders. The pattern of ACTH and cortisol results is crucial for diagnosis:</p>
        <ul>
            <li><strong>Low Cortisol + High ACTH:</strong> Suggests primary adrenal insufficiency (Addison's disease).</li>
            <li><strong>Low Cortisol + Low ACTH:</strong> Suggests secondary or tertiary adrenal insufficiency.</li>
            <li><strong>High Cortisol + High ACTH:</strong> Suggests Cushing's disease (pituitary overproduction of ACTH) or ectopic ACTH syndrome.</li>
            <li><strong>High Cortisol + Low ACTH:</strong> Suggests an adrenal tumor (adrenal overproduction of cortisol suppressing ACTH) or exogenous steroid use.</li>
        </ul>
        <p>ACTH samples require special handling (e.g., collection in a chilled tube, immediate transport to lab) due to the hormone's instability.</p>
    `,
    relatedBiomarkers: ['cortisol']
},
{
    id: 'testosterone',
    name: 'Testosterone',
    description: 'The primary male sex hormone, also present in females. Important for libido, muscle mass, and bone density.',
    type: 'Sex Hormone',
    responsibleFor: 'Male sexual development, sperm production, muscle and bone mass, red blood cell production, and libido in both sexes.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Testosterone is the principal **androgen** (male sex hormone) in males, primarily produced by the Leydig cells in the testes. It is also produced in smaller amounts by the adrenal glands in both sexes, and by the ovaries in females. It is a crucial **Sex Hormone** involved in various physiological processes in both males and females.</p>

        <h3>Role and Function:</h3>
        <p>Testosterone plays a wide array of roles throughout the body:</p>
        <ul>
            <li><strong>Male Sexual Development:</strong> Essential for the development of male primary (testes, penis) and secondary (deep voice, facial/body hair, muscle growth) sexual characteristics.</li>
            <li><strong>Sperm Production (Spermatogenesis):</strong> Critical for fertility in males.</li>
            <li><strong>Muscle Mass and Strength:</strong> Promotes protein synthesis and muscle growth.</li>
            <li><strong>Bone Density:</strong> Contributes to maintaining bone mineral density.</li>
            <li><strong>Red Blood Cell Production:</strong> Stimulates erythropoiesis (red blood cell formation).</li>
            <li><strong>Libido (Sex Drive):</strong> Influences libido in both males and females.</li>
            <li><strong>Energy Levels and Mood:</strong> Affects overall energy, well-being, and mood.</li>
        </ul>
        <p>Gonadotropin-Releasing Hormone (GnRH) from the hypothalamus stimulates the pituitary to release Luteinizing Hormone (LH) and Follicle-Stimulating Hormone (FSH). LH primarily stimulates testosterone production in Leydig cells, while FSH is important for sperm production. Testosterone, in turn, provides negative feedback to the hypothalamus and pituitary.</p>
        <p>In the blood, testosterone circulates in three forms: free (unbound, active), weakly bound to albumin, and strongly bound to Sex Hormone-Binding Globulin (SHBG). Total testosterone measures all forms.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional Units:</strong> ng/dL (nanogram per deciliter)</li>
            <li><em>Note: To convert nmol/L to ng/dL, multiply by 28.84. To convert ng/dL to nmol/L, divide by 28.84. For example, 35 nmol/L is approximately 1010 ng/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Testosterone levels vary significantly by sex, age, and time of day (for males, typically highest in the morning). Free testosterone or bioavailable testosterone measurements are often more clinically relevant than total testosterone, especially in cases where SHBG levels are abnormal.</p>
        <ul>
            <li><strong>Adult Male (Total Testosterone - Morning Sample):</strong> 8 - 35 nmol/L (280 - 1080 ng/dL)</li>
            <li><strong>Adult Female (Total Testosterone):</strong> 0.5 - 2.5 nmol/L (15 - 70 ng/dL)</li>
            <li><em>Levels vary by age, time of day (highest in morning for males), and individual. Levels generally decline with age in males.</em></li>
        </ul>

        <h3>High Testosterone (Hyperandrogenism):</h3>
        <p>Elevated testosterone levels can have different implications depending on sex.</p>
        <ul>
            <li><strong>In Males:</strong>
                <ul>
                    <li><strong>Anabolic Steroid Use (Exogenous Testosterone):</strong> The most common cause, leading to supraphysiological levels.</li>
                    <li><strong>Testosterone-Producing Tumors:</strong> Rare Leydig cell tumors or adrenal tumors.</li>
                    <li><strong>Androgen Resistance Syndromes (very high LH, normal/high T).</strong></li>
                </ul>
            </li>
            <li><strong>In Females:</strong>
                <ul>
                    <li><strong>Polycystic Ovary Syndrome (PCOS):</strong> The most common cause, characterized by hormonal imbalance, ovarian cysts, and symptoms of hyperandrogenism (hirsutism, acne, menstrual irregularities).</li>
                    <li><strong>Adrenal Tumors or Ovarian Tumors:</strong> Rare androgen-producing tumors.</li>
                    <li><strong>Congenital Adrenal Hyperplasia (CAH):</strong> Genetic disorders affecting adrenal steroid synthesis.</li>
                    <li><strong>Cushing's Syndrome:</strong> Can cause some increase in adrenal androgens.</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms in males may include aggression, acne, and, paradoxically, testicular atrophy (due to suppression of natural production). In females, symptoms include hirsutism (excessive body hair), acne, menstrual irregularities, and male-pattern baldness.</p>

        <h3>Low Testosterone (Hypogonadism):</h3>
        <p>Low testosterone levels can lead to a range of symptoms, particularly in males.</p>
        <ul>
            <li><strong>In Males:</strong>
                <ul>
                    <li><strong>Primary Hypogonadism (Testicular Failure):</strong> Problem with the testes themselves (e.g., Klinefelter syndrome, testicular trauma/infection, chemotherapy, radiation, aging). LH and FSH levels will be high as the pituitary tries to stimulate the failing testes.</li>
                    <li><strong>Secondary Hypogonadism (Pituitary/Hypothalamic Problem):</strong> Problem with the pituitary or hypothalamus leading to insufficient LH and FSH production, which then causes low testosterone. Causes include pituitary tumors, Kallmann syndrome, hyperprolactinemia, chronic illness, significant weight loss, opioid use. LH and FSH will be low or normal.</li>
                    <li><strong>Aging (Late-Onset Hypogonadism):</strong> Gradual decline in testosterone production is common with age.</li>
                    <li><strong>Obesity and Type 2 Diabetes.</strong></li>
                </ul>
                Symptoms include fatigue, decreased libido, erectile dysfunction, reduced muscle mass and strength, increased body fat, decreased bone density (osteoporosis), mood changes, and depression.
            </li>
            <li><strong>In Females:</strong> Low testosterone can also occur but is less clearly defined clinically. It can lead to decreased libido, reduced energy, and diminished sense of well-being. However, specific reference ranges and clinical significance are still areas of ongoing research.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>When evaluating testosterone levels, it's important to consider factors like the time of day the sample was taken (for males, morning is best), age, and the patient's symptoms. Often, **Free Testosterone** or **Bioavailable Testosterone** (which accounts for SHBG levels) is measured in addition to Total Testosterone for a more accurate assessment, especially if SHBG levels are suspected to be abnormal (e.g., due to liver disease, thyroid disease, or obesity).</p>
        <p>Testosterone levels are typically interpreted in conjunction with **LH and FSH** to differentiate between primary and secondary hypogonadism. **Estradiol** levels may also be relevant, especially in males with symptoms of estrogen excess or females with hormonal imbalances.</p>
    `,
    relatedBiomarkers: ['estradiol', 'fsh', 'lh']
},
{
    id: 'estradiol',
    name: 'Estradiol (E2)',
    description: 'A primary female sex hormone, crucial for reproductive health and bone density.',
    type: 'Sex Hormone',
    responsibleFor: 'Female sexual development, menstrual cycle regulation, pregnancy, and bone health.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Estradiol (E2) is the most potent and abundant form of estrogen produced during a woman's reproductive years. It is primarily synthesized in the ovaries, but also in smaller amounts by the adrenal glands, testes (in males), and other tissues (e.g., fat, brain). It is a key **Sex Hormone** involved in a wide range of physiological processes.</p>

        <h3>Role and Function:</h3>
        <p>Estradiol plays a crucial role in female reproductive health and overall well-being:</p>
        <ul>
            <li><strong>Female Sexual Development:</strong> Essential for the development of female secondary sexual characteristics (breast development, widening of hips) at puberty.</li>
            <li><strong>Menstrual Cycle Regulation:</strong> Crucial for the growth of the uterine lining (endometrium) in the first half of the menstrual cycle, leading to ovulation. It also signals the pituitary to release LH and FSH.</li>
            <li><strong>Pregnancy:</strong> Essential for maintaining pregnancy and fetal development.</li>
            <li><strong>Bone Health:</strong> Helps maintain bone density and strength, preventing osteoporosis.</li>
            <li><strong>Cardiovascular Health:</strong> Influences blood vessel function and cholesterol levels.</li>
            <li><strong>Cognitive Function and Mood.</strong></li>
            <li><strong>Skin Health.</strong></li>
        </ul>
        <p>FSH stimulates the growth of ovarian follicles, which produce estradiol. The rise in estradiol then triggers a surge in LH, leading to ovulation. Estradiol also provides negative feedback to the hypothalamus and pituitary.</p>
        <p>In males, estradiol plays a role in bone health, sperm production, and libido, though at much lower concentrations.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pmol/L (picomole per liter)</li>
            <li><strong>Conventional Units:</strong> pg/mL (picogram per milliliter)</li>
            <li><em>Note: To convert pmol/L to pg/mL, divide by 3.67. To convert pg/mL to pmol/L, multiply by 3.67. For example, 730 pmol/L is approximately 198.9 pg/mL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Estradiol levels in females vary significantly throughout the menstrual cycle. Values in males are much lower.</p>
        <ul>
            <li><strong>Adult Female (varies by cycle phase):</strong>
                <ul>
                    <li><strong>Follicular Phase (early cycle):</strong> 70 - 730 pmol/L (20 - 200 pg/mL)</li>
                    <li><strong>Midcycle Peak (ovulation):</strong> 440 - 2200 pmol/L (120 - 600 pg/mL)</li>
                    <li><strong>Luteal Phase (post-ovulation):</strong> 180 - 1000 pmol/L (50 - 270 pg/mL)</li>
                    <li><strong>Postmenopausal:</strong> < 110 pmol/L (< 30 pg/mL)</li>
                </ul>
            </li>
            <li><strong>Adult Male:</strong> < 140 pmol/L (< 40 pg/mL)</li>
            <li><em>Levels can vary by age, time of cycle, and individual.</em></li>
        </ul>

        <h3>High Estradiol (Hyperestrogenism):</h3>
        <p>Elevated estradiol levels can indicate various conditions, differing between sexes.</p>
        <ul>
            <li><strong>In Females:</strong>
                <ul>
                    <li><strong>Ovarian Cysts:</strong> Functional cysts can sometimes produce excess estrogen.</li>
                    <li><strong>Estrogen-Producing Tumors:</strong> Rare ovarian or adrenal tumors.</li>
                    <li><strong>Polycystic Ovary Syndrome (PCOS):</strong> Can sometimes cause elevated estradiol, though testosterone is usually the more prominent elevated androgen.</li>
                    <li><strong>Pregnancy:</strong> Naturally very high during pregnancy.</li>
                    <li><strong>Assisted Reproductive Technology (ART) treatment.</strong></li>
                    <li><strong>Liver Disease:</strong> Impaired estrogen metabolism and excretion.</li>
                    <li><strong>Obesity:</strong> Adipose tissue converts androgens to estrogen, leading to higher levels.</li>
                </ul>
                Symptoms may include irregular or heavy menstrual bleeding, breast tenderness, fluid retention, or worsening of fibroids/endometriosis.
            </li>
            <li><strong>In Males:</strong>
                <ul>
                    <li><strong>Gynecomastia (breast enlargement):</strong> Excess estrogen can cause breast tissue growth.</li>
                    <li><strong>Testosterone Deficiency/Imbalance:</strong> Increased aromatization of testosterone to estrogen (e.g., with obesity or aging).</li>
                    <li><strong>Estrogen-Producing Tumors:</strong> Rare testicular or adrenal tumors.</li>
                    <li><strong>Liver Disease.</strong></li>
                    <li><strong>Exogenous Estrogen Exposure.</strong></li>
                </ul>
            </li>
        </ul>

        <h3>Low Estradiol (Hypoestrogenism):</h3>
        <p>Low estradiol levels are common and can have significant health implications, especially in females.</p>
        <ul>
            <li><strong>In Females:</strong>
                <ul>
                    <li><strong>Menopause/Perimenopause:</strong> Natural decline in ovarian function.</li>
                    <li><strong>Premature Ovarian Failure (Primary Ovarian Insufficiency):</strong> Ovaries stop functioning before age 40.</li>
                    <li><strong>Hypothalamic or Pituitary Dysfunction (Secondary Hypogonadism):</strong> Insufficient GnRH, LH, or FSH production (e.g., anorexia nervosa, excessive exercise, severe stress, pituitary tumors, Kallmann syndrome).</li>
                    <li><strong>Polycystic Ovary Syndrome (PCOS):</strong> Despite high androgens, estradiol can be low/normal.</li>
                    <li><strong>Surgical Removal of Ovaries (Oophorectomy).</strong></li>
                    <li><strong>Certain Medications:</strong> (e.g., GnRH agonists, aromatase inhibitors).</li>
                </ul>
                Symptoms include hot flashes, night sweats, vaginal dryness, irregular or absent menstruation (amenorrhea), bone loss (osteoporosis), and decreased libido.
            </li>
            <li><strong>In Males:</strong> Very low estradiol is rare but can be associated with unexplained bone loss or increased body fat, though testosterone is usually the primary focus.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Estradiol is a key marker in evaluating **female reproductive health**, including fertility, menstrual irregularities, and menopausal status. It is often measured in conjunction with **FSH, LH, and Progesterone** to assess ovarian function and diagnose hormonal imbalances.</p>
        <p>In males, estradiol is typically assessed when evaluating hypogonadism, gynecomastia, or other signs of hormonal imbalance. It is also important in bone health for both sexes.</p>
    `,
    relatedBiomarkers: ['progesterone', 'fsh', 'lh']
},
{
    id: 'progesterone',
    name: 'Progesterone',
    description: 'A female sex hormone primarily involved in the menstrual cycle and maintaining pregnancy.',
    type: 'Sex Hormone',
    responsibleFor: 'Preparing the uterus for pregnancy, maintaining pregnancy, and regulating the menstrual cycle.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Progesterone is a crucial **steroid hormone** primarily produced by the **corpus luteum** (a temporary structure formed in the ovary after ovulation) in females. Smaller amounts are produced by the adrenal glands in both sexes and by the placenta during pregnancy. It is a key **Sex Hormone** essential for female reproductive processes.</p>

        <h3>Role and Function:</h3>
        <p>Progesterone is often called the "hormone of pregnancy" due to its critical roles, but it also plays a vital part in the menstrual cycle:</p>
        <ul>
            <li><strong>Menstrual Cycle Regulation:</strong> After ovulation, progesterone prepares the uterine lining (endometrium) for potential implantation of a fertilized egg. It makes the endometrium receptive by promoting thickening and vascularization. If pregnancy does not occur, progesterone levels fall, leading to menstruation.</li>
            <li><strong>Maintaining Pregnancy:</strong> If pregnancy occurs, the corpus luteum continues to produce progesterone for the first trimester, after which the placenta takes over. Progesterone helps maintain the uterine lining, suppresses uterine contractions to prevent premature labor, and supports fetal development.</li>
            <li><strong>Breast Development:</strong> Contributes to breast development and prepares mammary glands for lactation during pregnancy.</li>
            <li><strong>Mood and Sleep:</strong> Can have calming and sedative effects.</li>
        </ul>
        <p>Progesterone levels are tightly regulated by **LH** from the pituitary gland, particularly after ovulation.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional Units:</strong> ng/mL (nanogram per milliliter)</li>
            <li><em>Note: To convert nmol/L to ng/mL, divide by 3.18. To convert ng/mL to nmol/L, multiply by 3.18. For example, 95 nmol/L is approximately 29.87 ng/mL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Progesterone levels in adult females vary dramatically depending on the phase of the menstrual cycle and whether pregnancy is present. In males and postmenopausal females, levels are consistently low.</p>
        <ul>
            <li><strong>Adult Female (varies by cycle phase):</strong>
                <ul>
                    <li><strong>Follicular Phase (before ovulation):</strong> < 3.2 nmol/L (< 1.0 ng/mL) - *Low, as ovulation has not occurred yet.*</li>
                    <li><strong>Ovulatory Phase:</strong> Slight rise, but still low.</li>
                    <li><strong>Luteal Phase (after ovulation):</strong> 16 - 95 nmol/L (5 - 30 ng/mL) - *Significantly elevated, indicating ovulation and corpus luteum function.*</li>
                    <li><strong>First Trimester Pregnancy:</strong> 30 - 150 nmol/L (10 - 47.7 ng/mL) - *High and increasing to maintain pregnancy.*</li>
                    <li><strong>Second/Third Trimester Pregnancy:</strong> Can reach much higher levels.</li>
                </ul>
            </li>
            <li><strong>Postmenopausal:</strong> < 3.2 nmol/L (< 1.0 ng/mL)</li>
            <li><strong>Adult Male:</strong> < 3.2 nmol/L (< 1.0 ng/mL)</li>
            <li><em>Levels can vary by individual and laboratory. Mid-luteal phase measurements are often used to confirm ovulation.</em></li>
        </ul>

        <h3>High Progesterone (Hyperprogesteronemia):</h3>
        <p>Elevated progesterone levels are most commonly a normal physiological event, but can also indicate certain conditions.</p>
        <ul>
            <li><strong>Pregnancy:</strong> Physiologically elevated to maintain pregnancy.</li>
            <li><strong>Luteal Phase of Menstrual Cycle:</strong> Normal elevation after ovulation.</li>
            <li><strong>Luteal Cysts:</strong> Ovarian cysts that continue to produce progesterone.</li>
            <li><strong>Certain Adrenal or Ovarian Tumors:</strong> Rare cases where tumors produce progesterone.</li>
            <li><strong>Congenital Adrenal Hyperplasia (CAH):</strong> Some forms involve excess progesterone precursors.</li>
            <li><strong>Ovarian Hyperstimulation Syndrome (OHSS):</strong> In fertility treatments.</li>
        </ul>
        <p>Symptoms are usually mild or related to pregnancy (e.g., morning sickness, breast tenderness). High levels outside of pregnancy or the luteal phase might not cause distinct symptoms but warrant further investigation.</p>

        <h3>Low Progesterone (Hypoprogesteronemia):</h3>
        <p>Low progesterone levels can indicate problems with ovulation, luteal phase defects, or a risk to pregnancy.</p>
        <ul>
            <li><strong>Anovulation / Luteal Phase Defect:</strong> If ovulation does not occur, or if the corpus luteum is dysfunctional, insufficient progesterone is produced, which can lead to irregular periods or difficulty conceiving.</li>
            <li><strong>Threatened or Ectopic Pregnancy:</strong> Levels may be lower than expected in early pregnancy, indicating a potential issue.</li>
            <li><strong>Miscarriage Risk:</strong> Low progesterone in early pregnancy is associated with an increased risk of miscarriage.</li>
            <li><strong>Hypogonadism (Secondary):</strong> Pituitary or hypothalamic dysfunction leading to insufficient LH and FSH, which in turn impairs ovarian function and progesterone production.</li>
            <li><strong>Menopause/Perimenopause:</strong> As ovarian function declines, progesterone production decreases significantly.</li>
            <li><strong>Use of GnRH Agonists/Antagonists.</strong></li>
        </ul>
        <p>Symptoms in non-pregnant women can include irregular or heavy periods, spotting, short luteal phase, or premenstrual syndrome (PMS) symptoms. In early pregnancy, low levels can cause vaginal bleeding or abdominal pain.</p>

        <h3>Additional Information:</h3>
        <p>Progesterone testing is crucial for:</p>
        <ul>
            <li>**Confirming Ovulation:** A mid-luteal phase (typically 7 days after presumed ovulation or 21 days into a 28-day cycle) progesterone level above 16 nmol/L (5 ng/mL) generally confirms that ovulation has occurred.</li>
            <li>**Assessing Luteal Phase Adequacy:** Important for fertility investigations.</li>
            <li>**Evaluating Early Pregnancy:** To assess viability, differentiate between normal and abnormal pregnancies (e.g., ectopic, miscarriage).</li>
            <li>**Monitoring Fertility Treatments.**</li>
        </ul>
        <p>Progesterone levels are typically interpreted in conjunction with **Estradiol (E2) and Luteinizing Hormone (LH)** to provide a comprehensive assessment of the menstrual cycle and reproductive function.</p>
    `,
    relatedBiomarkers: ['estradiol', 'lh']
},
{
    id: 'fsh',
    name: 'Follicle-Stimulating Hormone (FSH)',
    description: 'A pituitary hormone that stimulates follicle growth in females and sperm production in males.',
    type: 'Pituitary Hormone',
    responsibleFor: 'Stimulating ovarian follicle development in females and spermatogenesis in males.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Follicle-Stimulating Hormone (FSH) is a **gonadotropin hormone** produced and secreted by the anterior lobe of the **pituitary gland** in the brain. It is one of the key hormones in the regulation of the reproductive system in both males and females. FSH is a crucial **Pituitary Hormone** in the hypothalamic-pituitary-gonadal (HPG) axis.</p>

        <h3>Role and Function:</h3>
        <p>FSH plays distinct but equally vital roles in male and female reproduction:</p>
        <ul>
            <li><strong>In Females:</strong>
                <ul>
                    <li><strong>Follicle Development:</strong> Stimulates the growth and maturation of ovarian follicles (which contain eggs) in the ovaries during the first half of the menstrual cycle (follicular phase).</li>
                    <li><strong>Estrogen Production:</strong> Promotes the production of estrogen (primarily estradiol) by the developing follicles.</li>
                    <li><strong>Ovarian Reserve:</strong> FSH levels are a key indicator of ovarian reserve, reflecting the number and quality of remaining eggs.</li>
                </ul>
            </li>
            <li><strong>In Males:</strong>
                <ul>
                    <li><strong>Spermatogenesis:</strong> Essential for stimulating and maintaining sperm production in the testes (specifically acting on Sertoli cells).</li>
                    <li><strong>Androgen Binding Protein Production:</strong> Stimulates Sertoli cells to produce androgen binding protein, which helps maintain high local testosterone concentrations necessary for spermatogenesis.</li>
                </ul>
            </li>
        </ul>
        <p>FSH release is regulated by **Gonadotropin-Releasing Hormone (GnRH)** from the hypothalamus and by negative feedback from sex hormones (estrogen, progesterone, testosterone) and inhibin produced by the gonads.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> IU/L (international units per liter) or mIU/mL (milli-international units per milliliter)</li>
            <li><em>Note: IU/L and mIU/mL are numerically equivalent.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>FSH levels in females vary significantly with the menstrual cycle phase and menopausal status. In males, levels are relatively stable.</p>
        <ul>
            <li><strong>Adult Female (varies by cycle phase):</strong>
                <ul>
                    <li><strong>Follicular Phase (Day 2-4 of cycle):</strong> 3.5 - 12.5 IU/L (mIU/mL) - *Typically measured on Day 3 for fertility assessment.*</li>
                    <li><strong>Midcycle Peak (Ovulatory):</strong> 4.7 - 21.5 IU/L (mIU/mL)</li>
                    <li><strong>Luteal Phase (post-ovulation):</strong> 1.7 - 7.7 IU/L (mIU/mL)</li>
                    <li><strong>Postmenopausal:</strong> 25.8 - 134.8 IU/L (mIU/mL) - *Significantly elevated due to lack of ovarian feedback.*</li>
                </ul>
            </li>
            <li><strong>Adult Male:</strong> 1.5 - 12.4 IU/L (mIU/mL)</li>
            <li><em>Ranges can vary by laboratory and individual.</em></li>
        </ul>

        <h3>High FSH (Elevated Follicle-Stimulating Hormone):</h3>
        <p>High FSH levels indicate that the pituitary gland is working harder to stimulate the gonads, suggesting a problem with the gonads themselves (primary gonadal failure).</p>
        <ul>
            <li><strong>In Females:</strong>
                <ul>
                    <li><strong>Diminished Ovarian Reserve / Menopause / Perimenopause:</strong> The most common cause. As ovaries age or fail (e.g., due to natural menopause, premature ovarian failure/primary ovarian insufficiency, surgery, chemotherapy), they produce less estrogen and inhibin, leading to a compensatory rise in FSH from the pituitary. High FSH is a hallmark of menopause.</li>
                    <li><strong>Turner Syndrome:</strong> A genetic condition causing ovarian dysfunction.</li>
                </ul>
            </li>
            <li><strong>In Males:</strong>
                <ul>
                    <li><strong>Testicular Failure (Primary Hypogonadism):</strong> The testes are not producing enough testosterone or adequately supporting spermatogenesis (e.g., due to Klinefelter syndrome, orchitis, trauma, chemotherapy, radiation). The pituitary increases FSH in an attempt to stimulate them.</li>
                </ul>
            </li>
            <li><strong>Certain Pituitary Tumors (rare).</strong></li>
        </ul>
        <p>Symptoms vary depending on the underlying cause (e.g., menopausal symptoms in females, symptoms of low testosterone in males).</p>

        <h3>Low FSH (Suppressed Follicle-Stimulating Hormone):</h3>
        <p>Low FSH levels indicate that the pituitary gland is producing insufficient FSH, often due to a problem with the hypothalamus or pituitary itself, leading to understimulation of the gonads.</p>
        <ul>
            <li><strong>Hypothalamic or Pituitary Dysfunction (Secondary Hypogonadism / Central Hypogonadism):</strong> The hypothalamus is not producing enough GnRH, or the pituitary is not responding adequately to GnRH (e.g., due to tumors, Kallmann syndrome, severe stress, excessive exercise, significant weight loss/anorexia). This leads to low FSH (and often low LH), resulting in insufficient gonadal stimulation and low sex hormone production (estradiol in females, testosterone in males).</li>
            <li><strong>High Estrogen or Testosterone Levels (Negative Feedback):</strong> High levels of sex hormones (e.g., from an ovarian/adrenal tumor, exogenous steroid use) can suppress FSH (and LH) release from the pituitary.</li>
            <li><strong>Sheehan's Syndrome (pituitary necrosis after childbirth).</strong></li>
        </ul>
        <p>Symptoms depend on the sex and the severity of sex hormone deficiency (e.g., amenorrhea and infertility in females, low libido and erectile dysfunction in males).</p>

        <h3>Additional Information:</h3>
        <p>FSH is commonly measured in conjunction with **LH, Estradiol, and Testosterone** to evaluate:</p>
        <ul>
            <li>**Female Fertility:** To assess ovarian reserve, diagnose ovulatory disorders, and evaluate for menopause or premature ovarian failure.</li>
            <li>**Male Fertility:** To evaluate testicular function and sperm production, and differentiate between primary and secondary hypogonadism.</li>
            <li>**Pituitary Function:** To identify central causes of hypogonadism.</li>
            <li>**Pubertal Development:** To assess delayed or precocious puberty.</li>
        </ul>
        <p>The **FSH:LH ratio** can also be clinically relevant in some conditions, such as PCOS, where LH may be disproportionately higher than FSH.</p>
    `,
    relatedBiomarkers: ['lh', 'estradiol', 'testosterone']
    },
    {
    id: 'lh',
    name: 'Luteinizing Hormone (LH)',
    description: 'A pituitary hormone that triggers ovulation in females and testosterone production in males.',
    type: 'Pituitary Hormone',
    responsibleFor: 'Triggering ovulation in females and stimulating Leydig cells in males to produce testosterone.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Luteinizing Hormone (LH) is a **gonadotropin hormone** produced and secreted by the anterior lobe of the **pituitary gland** in the brain. It is one of the key hormones in the regulation of the reproductive system in both males and females. LH is a crucial **Pituitary Hormone** in the hypothalamic-pituitary-gonadal (HPG) axis.</p>

        <h3>Role and Function:</h3>
        <p>LH plays distinct but equally vital roles in male and female reproduction:</p>
        <ul>
            <li><strong>In Females:</strong>
                <ul>
                    <li><strong>Ovulation Trigger:</strong> The most critical role; a surge in LH ("LH surge") triggers ovulation, the release of a mature egg from the ovarian follicle.</li>
                    <li><strong>Corpus Luteum Formation:</strong> Stimulates the ruptured follicle to transform into the corpus luteum, which then produces progesterone (and some estrogen) to prepare the uterus for pregnancy.</li>
                    <li><strong>Estrogen Production:</strong> LH also stimulates the theca cells in the ovary to produce androgens, which are then converted to estrogen (estradiol) by FSH-stimulated granulosa cells.</li>
                </ul>
            </li>
            <li><strong>In Males:</strong>
                <ul>
                    <li><strong>Testosterone Production:</strong> Stimulates the Leydig cells in the testes to produce testosterone, the primary male sex hormone.</li>
                    <li><strong>Spermatogenesis Support:</strong> Indirectly supports sperm production by ensuring adequate local testosterone levels.</li>
                </ul>
            </li>
        </ul>
        <p>LH release is regulated by **Gonadotropin-Releasing Hormone (GnRH)** from the hypothalamus. Sex hormones (estrogen, progesterone, testosterone) provide negative feedback to the hypothalamus and pituitary, regulating LH secretion. In females, there's also a positive feedback mechanism where rising estrogen triggers the LH surge.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> IU/L (international units per liter) or mIU/mL (milli-international units per milliliter)</li>
            <li><em>Note: IU/L and mIU/mL are numerically equivalent.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>LH levels in females vary dramatically throughout the menstrual cycle and are elevated after menopause. In males, levels are relatively stable.</p>
        <ul>
            <li><strong>Adult Female (varies by cycle phase):</strong>
                <ul>
                    <li><strong>Follicular Phase (early cycle):</strong> 2.4 - 12.6 IU/L (mIU/mL)</li>
                    <li><strong>Midcycle Peak (Ovulatory Surge):</strong> 14.0 - 95.6 IU/L (mIU/mL) - *This surge occurs just before ovulation.*</li>
                    <li><strong>Luteal Phase (post-ovulation):</strong> 1.0 - 11.4 IU/L (mIU/mL)</li>
                    <li><strong>Postmenopausal:</strong> 7.7 - 58.5 IU/L (mIU/mL) - *Elevated due to lack of ovarian feedback.*</li>
                </ul>
            </li>
            <li><strong>Adult Male:</strong> 1.7 - 8.6 IU/L (mIU/mL)</li>
            <li><em>Ranges can vary by laboratory and individual.</em></li>
        </ul>

        <h3>High LH (Elevated Luteinizing Hormone):</h3>
        <p>High LH levels indicate that the pituitary gland is working harder to stimulate the gonads, suggesting a primary problem with the gonads themselves (gonadal failure) or, in females, certain conditions affecting ovulation.</p>
        <ul>
            <li><strong>In Females:</strong>
                <ul>
                    <li><strong>Polycystic Ovary Syndrome (PCOS):</strong> Often characterized by elevated LH levels (sometimes with a high LH:FSH ratio), contributing to anovulation.</li>
                    <li><strong>Ovarian Failure / Menopause / Perimenopause:</strong> As ovaries age or fail (e.g., natural menopause, premature ovarian failure/primary ovarian insufficiency, surgery, chemotherapy), they produce less estrogen and inhibin, leading to a compensatory rise in both LH and FSH from the pituitary.</li>
                    <li><strong>Turner Syndrome:</strong> A genetic condition causing ovarian dysfunction.</li>
                </ul>
            </li>
            <li><strong>In Males:</strong>
                <ul>
                    <li><strong>Testicular Failure (Primary Hypogonadism):</strong> The testes are not producing enough testosterone (e.g., due to Klinefelter syndrome, testicular trauma/infection, chemotherapy, radiation). The pituitary increases LH (and FSH) in an attempt to stimulate them.</li>
                </ul>
            </li>
            <li><strong>Certain Pituitary Tumors (rare).</strong></li>
        </ul>
        <p>Symptoms vary depending on the underlying cause (e.g., menstrual irregularities and infertility in females, symptoms of low testosterone in males).</p>

        <h3>Low LH (Suppressed Luteinizing Hormone):</h3>
        <p>Low LH levels indicate that the pituitary gland is producing insufficient LH, often due to a problem with the hypothalamus or pituitary itself, leading to understimulation of the gonads.</p>
        <ul>
            <li><strong>Hypothalamic or Pituitary Dysfunction (Secondary Hypogonadism / Central Hypogonadism):</strong> The hypothalamus is not producing enough GnRH, or the pituitary is not responding adequately to GnRH (e.g., due to tumors, Kallmann syndrome, severe stress, excessive exercise, significant weight loss/anorexia). This leads to low LH (and often low FSH), resulting in insufficient gonadal stimulation and low sex hormone production (estradiol in females, testosterone in males).</li>
            <li><strong>High Estrogen or Testosterone Levels (Negative Feedback):</strong> High levels of sex hormones (e.g., from an ovarian/adrenal tumor, exogenous steroid use like anabolic steroids) can suppress LH (and FSH) release from the pituitary.</li>
            <li><strong>Sheehan's Syndrome (pituitary necrosis after childbirth).</strong></li>
        </ul>
        <p>Symptoms depend on the sex and the severity of sex hormone deficiency (e.g., amenorrhea, anovulation, and infertility in females; low libido, erectile dysfunction, and low testosterone in males).</p>

        <h3>Additional Information:</h3>
        <p>LH is commonly measured in conjunction with **FSH, Estradiol, Progesterone, and Testosterone** to evaluate:</p>
        <ul>
            <li>**Female Fertility:** To predict ovulation (LH surge), diagnose ovulatory disorders, and assess ovarian function, particularly in relation to PCOS and menopause.</li>
            <li>**Male Fertility:** To evaluate testicular function and testosterone production, and differentiate between primary and secondary hypogonadism.</li>
            <li>**Pituitary Function:** To identify central causes of hypogonadism.</li>
            <li>**Pubertal Development:** To assess delayed or precocious puberty.</li>
        </ul>
        <p>The **LH:FSH ratio** can be particularly helpful in diagnosing PCOS in some cases.</p>
    `,
    relatedBiomarkers: ['fsh', 'estradiol', 'progesterone', 'testosterone']
},
{
    id: 'prolactin',
    name: 'Prolactin',
    description: 'A pituitary hormone primarily responsible for milk production (lactation).',
    type: 'Pituitary Hormone',
    responsibleFor: 'Stimulating milk production in breastfeeding women and influencing reproductive function.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Prolactin is a **peptide hormone** primarily produced and secreted by the anterior lobe of the **pituitary gland** in the brain. It is also produced in smaller amounts by other tissues, including the breast, brain, uterus, and immune cells. It is a crucial **Pituitary Hormone** best known for its role in lactation.</p>

        <h3>Role and Function:</h3>
        <p>Prolactin's main function is to **stimulate and maintain milk production (lactation)** in women after childbirth. However, it has over 300 known functions, including roles in:</p>
        <ul>
            <li><strong>Reproductive Function:</strong> High prolactin levels can inhibit the secretion of GnRH, LH, and FSH, thereby suppressing ovulation in females and testosterone production in males, leading to infertility. This is the physiological basis for lactational amenorrhea (absence of periods during breastfeeding).</li>
            <li><strong>Immune Regulation.</strong></li>
            <li><strong>Metabolism.</strong></li>
            <li><strong>Behavior and Stress Response.</strong></li>
        </ul>
        <p>Prolactin secretion is primarily regulated by **dopamine** (which inhibits its release) from the hypothalamus. Other factors, such as TRH (Thyrotropin-Releasing Hormone), VIP, and estrogen, can stimulate prolactin release.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mIU/L (milli-international units per liter) or mIU/mL (milli-international units per milliliter)</li>
            <li><strong>Conventional Units:</strong> ng/mL (nanogram per milliliter)</li>
            <li><em>Note: Conversion factors can vary slightly between laboratories, but a common conversion is: 1 ng/mL $\approx$ 21.2 mIU/L (or 1 mIU/mL $\approx$ 1 ng/mL, which is a common but approximate clinical conversion). The provided reference values use mIU/L and ng/mL, suggesting a conversion factor is implicitly used.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Prolactin levels can fluctuate and are naturally higher during pregnancy, breastfeeding, stress, sleep, and after nipple stimulation or exercise.</p>
        <ul>
            <li><strong>Non-pregnant Female:</strong> 40 - 530 mIU/L (4.0 - 25.0 ng/mL)</li>
            <li><strong>Adult Male:</strong> 40 - 450 mIU/L (4.0 - 20.0 ng/mL)</li>
            <li><strong>Pregnant/Breastfeeding Female:</strong> Significantly higher, sometimes reaching several thousand mIU/L.</li>
            <li><em>Levels are naturally higher during pregnancy and breastfeeding. Stress, certain medications, and time of day can influence results.</em></li>
        </ul>

        <h3>High Prolactin (Hyperprolactinemia):</h3>
        <p>Elevated prolactin levels can disrupt reproductive function and cause other symptoms.</p>
        <ul>
            <li><strong>Prolactinoma:</strong> A benign tumor of the pituitary gland that produces excessive prolactin. This is the most common cause of sustained hyperprolactinemia.</li>
            <li><strong>Medications:</strong>
                <ul>
                    <li><strong>Dopamine Antagonists:</strong> Antipsychotics (e.g., risperidone), antiemetics (e.g., metoclopramide, domperidone).</li>
                    <li>**Certain Antidepressants, Opioids, Estrogens (high doses).**</li>
                </ul>
            </li>
            <li><strong>Hypothyroidism (Underactive Thyroid):</strong> Low thyroid hormones (T3/T4) lead to increased TRH from the hypothalamus, which can stimulate prolactin release.</li>
            <li><strong>Kidney Disease:</strong> Reduced clearance of prolactin.</li>
            <li><strong>Chest Wall Trauma/Surgery/Irritation:</strong> Can stimulate prolactin release via neural pathways.</li>
            <li><strong>Stress:</strong> Psychological or physical stress (e.g., blood draw itself) can transiently elevate prolactin.</li>
            <li><strong>Pregnancy and Breastfeeding:</strong> Physiological hyperprolactinemia.</li>
        </ul>
        <p>Symptoms of hyperprolactinemia include:</p>
        <ul>
            <li><strong>In Females:</strong> Menstrual irregularities (oligomenorrhea or amenorrhea), galactorrhea (inappropriate milk production, not related to breastfeeding), infertility, decreased libido, vaginal dryness.</li>
            <li><strong>In Males:</strong> Decreased libido, erectile dysfunction, infertility, gynecomastia (breast enlargement), galactorrhea (rare).</li>
        </ul>

        <h3>Low Prolactin (Hypoprolactinemia):</h3>
        <p>Low prolactin levels are rare and typically not clinically significant, except in the context of inability to lactate.</p>
        <ul>
            <li><strong>Pituitary Gland Damage/Dysfunction:</strong> (e.g., Sheehan's syndrome, pituitary tumors, radiation to the pituitary) leading to general hypopituitarism.</li>
            <li><strong>Dopamine Agonist Medications:</strong> (e.g., bromocriptine, cabergoline) used to treat hyperprolactinemia.</li>
        </ul>
        <p>The primary symptom is typically the inability to lactate after childbirth.</p>

        <h3>Additional Information:</h3>
        <p>When assessing prolactin, it's important to rule out **macroprolactinemia**, a condition where prolactin circulates in a large, inactive form (macroprolactin) that can cause falsely elevated readings on standard assays without clinical symptoms. If hyperprolactinemia is suspected, especially without clear symptoms, further investigation for macroprolactin is often done.</p>
        <p>Prolactin is often measured as part of an infertility workup for both sexes, and when investigating menstrual irregularities, galactorrhea, or symptoms of hypogonadism. It is often interpreted alongside **TSH** (due to the link between hypothyroidism and hyperprolactinemia) and sex hormones (e.g., **estradiol, testosterone, LH, FSH**).</p>
    `,
    relatedBiomarkers: ['tsh']
},
{
    id: 'insulin',
    name: 'Insulin',
    description: 'A hormone produced by the pancreas that helps regulate blood glucose levels.',
    type: 'Pancreatic Hormone',
    responsibleFor: 'Facilitating glucose uptake by cells, lowering blood sugar, and promoting fat and protein synthesis.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Insulin is a **peptide hormone** produced by the **beta cells of the islets of Langerhans** in the pancreas. It is the primary hormone responsible for lowering blood glucose levels after a meal. Insulin is a critical **Pancreatic Hormone** in glucose homeostasis.</p>

        <h3>Role and Function:</h3>
        <p>Insulin plays a central role in carbohydrate, fat, and protein metabolism. Its main functions are:</p>
        <ul>
            <li><strong>Glucose Uptake:</strong> Facilitates the uptake of glucose from the bloodstream into cells (muscle, fat, and liver cells) for energy or storage.</li>
            <li><strong>Glycogenesis:</strong> Promotes the conversion of glucose into glycogen for storage in the liver and muscles.</li>
            <li><strong>Lipogenesis:</strong> Stimulates the synthesis of fatty acids and triglycerides (fat) and inhibits fat breakdown.</li>
            <li><strong>Protein Synthesis:</strong> Promotes amino acid uptake into cells and stimulates protein synthesis, while inhibiting protein breakdown.</li>
            <li><strong>Lowering Blood Sugar:</strong> The overall effect of insulin is to lower blood glucose levels, preventing hyperglycemia.</li>
        </ul>
        <p>Insulin secretion is primarily stimulated by high blood glucose levels (e.g., after a meal). It is counter-regulated by hormones like glucagon, cortisol, growth hormone, and adrenaline, which tend to raise blood glucose.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pmol/L (picomole per liter)</li>
            <li><strong>Conventional Units:</strong> µIU/mL (micro-international units per milliliter) or mIU/L (milli-international units per liter)</li>
            <li><em>Note: 1 µIU/mL = 1 mIU/L. To convert µIU/mL to pmol/L, multiply by 6.945. To convert pmol/L to µIU/mL, divide by 6.945. For example, 25.0 µIU/mL is approximately 173.6 pmol/L.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Insulin levels are typically measured in a fasting state, as they fluctuate significantly after food intake.</p>
        <ul>
            <li><strong>Adults (Fasting):</strong> 2.0 - 25.0 mIU/L (approx. 14 - 174 pmol/L)</li>
            <li><em>Reference ranges can vary widely between laboratories and depend on the assay method used.</em></li>
        </ul>

        <h3>High Insulin (Hyperinsulinemia):</h3>
        <p>Chronically high insulin levels indicate that the pancreas is producing excessive insulin, often in an attempt to overcome insulin resistance or due to an insulin-producing tumor.</p>
        <ul>
            <li><strong>Insulin Resistance:</strong> The most common cause. Cells do not respond effectively to insulin, so the pancreas produces more to compensate. This is characteristic of:
                <ul>
                    <li><strong>Type 2 Diabetes (early stages):</strong> Before beta cells fail.</li>
                    <li><strong>Obesity.</strong></li>
                    <li><strong>Polycystic Ovary Syndrome (PCOS).</strong></li>
                    <li><strong>Metabolic Syndrome.</strong></li>
                </ul>
            </li>
            <li><strong>Insulinoma:</strong> A rare, usually benign, tumor of the pancreatic beta cells that produces excessive insulin, leading to hypoglycemia.</li>
            <li><strong>Exogenous Insulin Administration:</strong> Taking too much insulin (in diabetic patients).</li>
            <li><strong>Certain Medications:</strong> (e.g., sulfonylureas, corticosteroids).</li>
            <li><strong>Cushing's Syndrome.</strong></li>
        </ul>
        <p>Symptoms associated with high insulin often relate to insulin resistance (e.g., weight gain, difficulty losing weight, fatigue, acanthosis nigricans) or, in the case of insulinoma, recurrent episodes of hypoglycemia (low blood sugar), which can cause shakiness, sweating, confusion, and dizziness.</p>

        <h3>Low Insulin (Hypoinsulinemia):</h3>
        <p>Low insulin levels indicate that the pancreas is not producing enough insulin.</p>
        <ul>
            <li><strong>Type 1 Diabetes Mellitus:</strong> The most common cause. An autoimmune condition where the body's immune system destroys the insulin-producing beta cells in the pancreas, leading to absolute insulin deficiency.</li>
            <li><strong>Advanced Type 2 Diabetes Mellitus:</strong> After many years of insulin resistance and compensatory hyperinsulinemia, the beta cells can "burn out" and lose their ability to produce sufficient insulin.</li>
            <li><strong>Pancreatitis or Pancreatectomy:</strong> Damage to or surgical removal of the pancreas.</li>
            <li><strong>Genetic Defects:</strong> Rare genetic conditions affecting beta cell function.</li>
        </ul>
        <p>Symptoms of low insulin are those of high blood sugar (hyperglycemia) due to uncontrolled diabetes: increased thirst, frequent urination, unexplained weight loss, fatigue, blurred vision. In severe cases, it can lead to diabetic ketoacidosis.</p>

        <h3>Additional Information:</h3>
        <p>Insulin testing is not typically used for routine diabetes diagnosis, but it is valuable for:</p>
        <ul>
            <li>**Investigating Hypoglycemia:** To determine if low blood sugar is due to excess insulin (e.g., insulinoma) or other causes.</li>
            <li>**Assessing Insulin Resistance:** High fasting insulin with normal or elevated glucose suggests insulin resistance.</li>
            <li>**Differentiating Diabetes Types:** While not definitive on its own, very low or undetectable insulin levels in a newly diagnosed diabetic typically point to Type 1 diabetes. However, **C-peptide** is a more reliable marker for this purpose as it is not affected by exogenous insulin administration.</li>
        </ul>
        <p>Insulin is often measured alongside **C-peptide, Glucose, and HbA1c** to provide a comprehensive assessment of glucose metabolism and pancreatic beta cell function.</p>
    `,
    relatedBiomarkers: ['c-peptide', 'glucose', 'hba1c']
},
{
    id: 'c-peptide',
    name: 'C-peptide',
    description: 'A byproduct of insulin production. Indicates how much insulin the body is making.',
    type: 'Pancreatic Hormone',
    responsibleFor: 'Serving as a marker of endogenous insulin secretion, as it is co-secreted with insulin in equal molar amounts.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>C-peptide (connecting peptide) is a **short protein** that is produced in the pancreas and released into the bloodstream in equal molar amounts with insulin when the proinsulin molecule is cleaved to form insulin. Unlike insulin, C-peptide is not significantly removed by the liver, giving it a longer half-life and more stable blood levels. This makes it an excellent and reliable indicator of the **body's own (endogenous) insulin production**.</p>
        <p>It is a crucial **Pancreatic Hormone**-related biomarker for assessing beta-cell function.</p>

        <h3>Role and Function:</h3>
        <p>The primary role of C-peptide measurement in diagnostics is to serve as a **marker of endogenous insulin secretion**. When the pancreatic beta cells produce insulin, they first synthesize proinsulin. Proinsulin is then cleaved into two parts: active insulin and C-peptide. Both are released into the portal circulation.</p>
        <ul>
            <li><strong>Indicator of Beta Cell Function:</strong> C-peptide levels directly reflect how much insulin the pancreas is currently producing.</li>
            <li><strong>Distinguishing Diabetes Types:</strong> This is its most common and important clinical application.</li>
            <li><strong>Assessing Residual Beta Cell Function:</strong> Can help determine if a patient with diabetes still has some pancreatic insulin production.</li>
        </ul>
        <p>Unlike insulin, C-peptide is not used by the body to regulate blood sugar, and its measurement is not affected by administered (exogenous) insulin.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional Units:</strong> ng/mL (nanogram per milliliter) or pmol/mL (picomole per milliliter)</li>
            <li><em>Note: To convert nmol/L to ng/mL, multiply by 3.02. To convert ng/mL to nmol/L, divide by 3.02. To convert ng/mL to pmol/mL, multiply by 0.331. For example, 1.3 nmol/L is approximately 3.9 ng/mL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>C-peptide levels are typically measured in a fasting state. They will rise after meals or glucose stimulation.</p>
        <ul>
            <li><strong>Adults (Fasting):</strong> 0.2 - 1.3 nmol/L (0.5 - 4.0 ng/mL)</li>
            <li><em>Reference ranges can vary slightly between laboratories.</em></li>
        </ul>

        <h3>High C-peptide (Elevated Endogenous Insulin Production):</h3>
        <p>High C-peptide levels indicate that the pancreas is producing a large amount of insulin.</p>
        <ul>
            <li><strong>Insulin Resistance:</strong> The most common cause. In conditions like **Type 2 Diabetes (especially in early stages), obesity, or Polycystic Ovary Syndrome (PCOS)**, cells are resistant to insulin's effects, so the pancreas compensates by producing more insulin, and thus more C-peptide.</li>
            <li><strong>Insulinoma:</strong> A rare, usually benign, tumor of the pancreatic beta cells that secretes excessive insulin (and C-peptide), leading to hypoglycemia.</li>
            <li><strong>Kidney Failure:</strong> Reduced clearance of C-peptide from the body, leading to higher blood levels.</li>
            <li><strong>Exogenous Sulfonylurea Use:</strong> Medications that stimulate insulin release from the pancreas.</li>
        </ul>
        <p>Symptoms are usually related to the underlying condition, such as symptoms of insulin resistance (weight gain, high blood sugar) or hypoglycemia (if an insulinoma is present).</p>

        <h3>Low C-peptide (Reduced Endogenous Insulin Production):</h3>
        <p>Low C-peptide levels indicate that the pancreas is producing insufficient insulin.</p>
        <ul>
            <li><strong>Type 1 Diabetes Mellitus:</strong> The hallmark of Type 1 diabetes is the autoimmune destruction of beta cells, leading to very low or undetectable C-peptide levels (and thus very low or no insulin production). This is the primary use of C-peptide testing.</li>
            <li><strong>Advanced Type 2 Diabetes Mellitus:</strong> In later stages, after years of overwork due to insulin resistance, beta cells can fail, leading to reduced C-peptide (and insulin) production.</li>
            <li><strong>Pancreatitis or Pancreatectomy:</strong> Damage to or surgical removal of the pancreas.</li>
            <li><strong>Exogenous Insulin Administration (without endogenous production):</strong> When insulin is taken from an external source, it does not contain C-peptide. So, if a patient is taking insulin and their C-peptide is low, it suggests their own pancreas is not making much insulin.</li>
        </ul>
        <p>Symptoms are those of uncontrolled high blood sugar (hyperglycemia) or diabetic ketoacidosis.</p>

        <h3>Additional Information:</h3>
        <p>C-peptide testing is invaluable for:</p>
        <ul>
            <li>**Differentiating Type 1 from Type 2 Diabetes:** Low C-peptide strongly suggests Type 1, while normal to high C-peptide suggests Type 2 (or insulin resistance).</li>
            <li>**Assessing Residual Beta Cell Function:** In established diabetes, it can help determine if the patient's pancreas still produces some insulin, which can influence treatment decisions (e.g., need for insulin therapy).</li>
            <li>**Investigating Hypoglycemia:** To determine if low blood sugar is due to endogenous insulin overproduction (high C-peptide, e.g., insulinoma) or exogenous insulin overdose (low C-peptide).</li>
            <li>**Monitoring Pancreas Transplants.**</li>
        </ul>
        <p>C-peptide is often measured alongside **Insulin, Glucose, and HbA1c** for a comprehensive evaluation of glucose metabolism and pancreatic function.</p>
    `,
    relatedBiomarkers: ['insulin', 'glucose']
},
{
    id: 'pth',
    name: 'Parathyroid Hormone (PTH)',
    description: 'A hormone that regulates calcium and phosphorus levels in the blood.',
    type: 'Parathyroid Hormone',
    responsibleFor: 'Regulating calcium, phosphate, and vitamin D metabolism to maintain bone health and mineral balance.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Parathyroid Hormone (PTH), also known as parathormone, is a **peptide hormone** produced by the **parathyroid glands**, four small glands located in the neck, usually behind the thyroid gland. PTH is the primary regulator of calcium and phosphate metabolism in the body. It is a crucial **Parathyroid Hormone** marker.</p>

        <h3>Role and Function:</h3>
        <p>PTH plays a central role in maintaining precise calcium and phosphate balance in the blood, which is essential for nerve, muscle, and bone function. It primarily acts on three targets:</p>
        <ul>
            <li><strong>Bones:</strong> Stimulates the release of calcium and phosphate from bone into the blood (bone resorption) by activating osteoclasts.</li>
            <li><strong>Kidneys:</strong>
                <ul>
                    <li>Increases the reabsorption of calcium from urine back into the blood.</li>
                    <li>Increases the excretion of phosphate in the urine.</li>
                    <li>Stimulates the conversion of inactive Vitamin D (25-hydroxyvitamin D) into its active form (1,25-dihydroxyvitamin D or calcitriol).</li>
                </ul>
            </li>
            <li><strong>Intestines:</strong> Indirectly (via activated Vitamin D) increases the absorption of calcium and phosphate from food in the intestines.</li>
        </ul>
        <p>PTH secretion is directly regulated by blood calcium levels: a drop in blood calcium stimulates PTH release, while a rise in blood calcium inhibits it. This forms a tight feedback loop to maintain calcium homeostasis.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pmol/L (picomole per liter)</li>
            <li><strong>Conventional Units:</strong> pg/mL (picogram per milliliter)</li>
            <li><em>Note: To convert pmol/L to pg/mL, multiply by 9.4. To convert pg/mL to pmol/L, divide by 9.4. For example, 6.9 pmol/L is approximately 64.86 pg/mL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>PTH levels are typically interpreted in conjunction with calcium and Vitamin D levels.</p>
        <ul>
            <li><strong>Adults:</strong> 1.6 - 6.9 pmol/L (10 - 65 pg/mL)</li>
            <li><em>Ranges can vary slightly by laboratory, particularly depending on the assay method (intact PTH, whole PTH).</em></li>
        </ul>

        <h3>High PTH (Hyperparathyroidism):</h3>
        <p>Elevated PTH levels indicate hyperparathyroidism, meaning the parathyroid glands are producing too much PTH. This leads to increased calcium in the blood (hypercalcemia) and often decreased phosphate.</p>
        <ul>
            <li><strong>Primary Hyperparathyroidism:</strong> The most common cause. One or more of the parathyroid glands are overactive, usually due to a benign tumor (adenoma). This leads to inappropriately high PTH for a given calcium level, causing high blood calcium.</li>
            <li><strong>Secondary Hyperparathyroidism:</strong> The parathyroid glands are overactive in response to chronically low blood calcium, often due to:
                <ul>
                    <li><strong>Chronic Kidney Disease:</strong> Impaired Vitamin D activation and phosphate excretion lead to low calcium, stimulating PTH.</li>
                    <li><strong>Severe Vitamin D Deficiency:</strong> Insufficient Vitamin D leads to poor calcium absorption, causing low calcium and compensatory high PTH.</li>
                    <li><strong>Malabsorption Syndromes.</strong></li>
                </ul>
            </li>
            <li><strong>Tertiary Hyperparathyroidism:</strong> In long-standing secondary hyperparathyroidism, the parathyroid glands can become autonomously overactive (like primary hyperparathyroidism), even if the initial cause (e.g., kidney failure) is resolved.</li>
        </ul>
        <p>Symptoms of high PTH (due to high calcium) include fatigue, bone pain, kidney stones, frequent urination, constipation, nausea, and cognitive issues ("bones, stones, abdominal groans, and psychic moans").</p>

        <h3>Low PTH (Hypoparathyroidism):</h3>
        <p>Low PTH levels indicate hypoparathyroidism, meaning the parathyroid glands are not producing enough PTH. This leads to decreased calcium in the blood (hypocalcemia) and often increased phosphate.</p>
        <ul>
            <li><strong>Post-Surgical:</strong> The most common cause. Accidental removal or damage to parathyroid glands during thyroid or neck surgery.</li>
            <li><strong>Autoimmune Disease:</strong> The immune system attacks and damages the parathyroid glands.</li>
            <li><strong>Genetic Disorders:</strong> Rare inherited conditions affecting parathyroid development or function.</li>
            <li><strong>Severe Magnesium Deficiency:</strong> Can impair PTH secretion and action.</li>
            <li><strong>Hypercalcemia of Malignancy:</strong> High blood calcium due to cancer (not related to PTH), which suppresses normal PTH release.</li>
        </ul>
        <p>Symptoms of low PTH (due to low calcium) include muscle cramps, spasms (tetany), tingling sensations (paresthesias), numbness, fatigue, anxiety, and seizures in severe cases.</p>

        <h3>Additional Information:</h3>
        <p>PTH testing is almost always performed in conjunction with **Calcium** levels (ionized calcium and total calcium) and often **Phosphorus and Vitamin D** (25-hydroxyvitamin D) to diagnose and manage disorders of calcium and phosphate metabolism. It is crucial for differentiating between different causes of abnormal calcium levels.</p>
        <p>Monitoring PTH is vital in patients with chronic kidney disease and those undergoing parathyroidectomy.</p>
    `,
    relatedBiomarkers: ['calcium', 'phosphorus', 'vitamin-d']
},
{
    id: 'crp',
    name: 'C-Reactive Protein (CRP)',
    description: 'An acute phase reactant, elevated in inflammation and infection.',
    type: 'Inflammation Marker',
    responsibleFor: 'Non-specific marker of acute inflammation, infection, and tissue damage.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>C-Reactive Protein (CRP) is an **acute phase reactant** protein produced by the liver. Its production rapidly increases in response to inflammation, infection, and tissue injury. CRP is a widely used **Inflammation Marker**.</p>

        <h3>Role and Function:</h3>
        <p>CRP is part of the innate immune system. Its functions include:</p>
        <ul>
            <li><strong>Binding to Pathogens:</strong> Binds to phosphocholine on the surface of dead or dying cells and some bacteria, fungi, and parasites.</li>
            <li><strong>Activating Complement System:</strong> Helps activate the complement system, a part of the immune system that enhances the ability of antibodies and phagocytic cells to clear microbes and damaged cells.</li>
            <li><strong>Promoting Phagocytosis:</strong> Acts as an opsonin, marking pathogens for destruction by phagocytic cells (macrophages).</li>
        </ul>
        <p>Because its levels rise rapidly (within 6-12 hours of an inflammatory stimulus) and fall quickly when inflammation subsides, CRP is a sensitive, but non-specific, indicator of systemic inflammation.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mg/L (milligram per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert mg/L to mg/dL, divide by 10. To convert mg/dL to mg/L, multiply by 10. For example, 5 mg/L is 0.5 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges are typically low in healthy individuals. CRP assays are often categorized into "standard CRP" for detecting acute inflammation and "high-sensitivity CRP (hs-CRP)" for assessing cardiovascular risk.</p>
        <ul>
            <li><strong>Standard CRP:</strong> < 5 mg/L (or < 0.5 mg/dL)</li>
            <li><strong>High-sensitivity CRP (hs-CRP) for cardiovascular risk:</strong>
                <ul>
                    <li><strong>Low Risk:</strong> < 1.0 mg/L</li>
                    <li><strong>Average Risk:</strong> 1.0 - 3.0 mg/L</li>
                    <li><strong>High Risk:</strong> > 3.0 mg/L</li>
                </ul>
            </li>
            <li><em>Reference values can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High CRP (Elevated C-Reactive Protein):</h3>
        <p>High CRP indicates the presence of significant inflammation or infection in the body.</p>
        <ul>
            <li><strong>Infections:</strong> Especially bacterial infections (e.g., pneumonia, sepsis, urinary tract infections, appendicitis). Viral infections can also raise CRP, but usually to a lesser extent.</li>
            <li><strong>Autoimmune Diseases / Inflammatory Conditions:</strong> (e.g., Rheumatoid Arthritis, Systemic Lupus Erythematosus, Inflammatory Bowel Disease, vasculitis). CRP is useful for monitoring disease activity in many of these conditions.</li>
            <li><strong>Tissue Damage:</strong> Trauma, surgery, burns, heart attack (myocardial infarction).</li>
            <li><strong>Cancer:</strong> Many cancers can cause chronic inflammation and elevated CRP.</li>
            <li><strong>Obesity:</strong> Adipose tissue produces inflammatory cytokines, leading to chronically low-grade elevated CRP.</li>
            <li><strong>Cardiovascular Disease Risk (using hs-CRP):</strong> Even mildly elevated hs-CRP can indicate increased risk of heart attack and stroke due to underlying vascular inflammation.</li>
        </ul>
        <p>Symptoms are typically those of the underlying inflammatory condition (e.g., fever, pain, swelling, malaise).</p>

        <h3>Low CRP (Normal/Desirable C-Reactive Protein):</h3>
        <p>A low CRP level is generally desirable and indicates minimal to no systemic inflammation or infection.</p>
        <ul>
            <li><strong>Healthy Individuals.</strong></li>
            <li><strong>Resolution of Infection or Inflammation:</strong> As the underlying cause of inflammation subsides, CRP levels will decrease.</li>
        </ul>
        <p>Extremely low CRP values are not typically clinically significant in themselves.</p>

        <h3>Additional Information:</h3>
        <p>CRP is a **non-specific** marker, meaning it indicates inflammation but does not tell you the cause or location of the inflammation. It must be interpreted in the context of a patient's clinical symptoms, history, and other diagnostic tests.</p>
        <p>It is particularly useful for:</p>
        <ul>
            <li>**Detecting Acute Inflammation/Infection:** A rapid rise suggests an active process.</li>
            <li>**Monitoring Disease Activity:** In chronic inflammatory diseases (e.g., RA, IBD), CRP can track treatment effectiveness.</li>
            <li>**Assessing Cardiovascular Risk (hs-CRP):** A valuable predictor independent of cholesterol levels.</li>
            <li>**Differentiating between bacterial and viral infections:** While not absolute, very high CRP often suggests bacterial.</li>
        </ul>
        <p>CRP is often measured alongside **Erythrocyte Sedimentation Rate (ESR)**, another non-specific inflammation marker, though CRP typically rises and falls more rapidly than ESR. **Procalcitonin (PCT)** can be used to specifically help distinguish bacterial from viral infections.</p>
    `,
    relatedBiomarkers: ['esr', 'pct']
},
{
    id: 'pct',
    name: 'Procalcitonin (PCT)',
    description: 'A precursor hormone. Levels rise significantly during bacterial infections and sepsis.',
    type: 'Sepsis Marker',
    responsibleFor: 'Distinguishing bacterial infections from viral infections and monitoring sepsis severity.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Procalcitonin (PCT) is a **prohormone** of calcitonin, a hormone involved in calcium metabolism. Unlike calcitonin, PCT has no known hormonal activity but serves as a crucial **biomarker for systemic bacterial infections and sepsis**. It is produced by the C-cells of the thyroid gland, but during severe systemic bacterial infections, many other cell types throughout the body can produce PCT, leading to a significant increase in its blood levels. It is a critical **Sepsis Marker**.</p>

        <h3>Role and Function:</h3>
        <p>PCT levels are typically very low in healthy individuals and during localized infections or viral infections. Its levels increase dramatically and rapidly (within 2-4 hours) in response to bacterial infections, particularly systemic ones like sepsis. Its functions in infection are believed to be related to modulating the inflammatory response.</p>
        <p>The primary clinical utility of PCT is:</p>
        <ul>
            <li><strong>Distinguishing Bacterial from Viral Infections:</strong> PCT levels rise significantly with bacterial infections but remain low or only mildly elevated with viral infections, allergies, or autoimmune diseases.</li>
            <li><strong>Diagnosing Sepsis and Septic Shock:</strong> Highly elevated levels are strongly indicative of severe bacterial infection, sepsis, and septic shock.</li>
            <li><strong>Guiding Antibiotic Therapy:</strong> Can help clinicians decide when to initiate or discontinue antibiotics, potentially reducing unnecessary antibiotic use and preventing antibiotic resistance.</li>
            <li><strong>Monitoring Sepsis Severity and Treatment Response:</strong> Falling PCT levels suggest that the infection is resolving or treatment is effective.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> ng/mL (nanogram per milliliter) or µg/L (microgram per liter)</li>
            <li><em>Note: ng/mL and µg/L are numerically equivalent (1 ng/mL = 1 µg/L).</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>PCT values are interpreted based on cut-off levels that indicate increasing likelihood of bacterial infection and sepsis.</p>
        <ul>
            <li><strong>Healthy Individuals:</strong> < 0.05 ng/mL (or < 0.05 µg/L)</li>
            <li><strong>Low risk of sepsis / Localized infection / Viral infection:</strong> < 0.1 ng/mL</li>
            <li><strong>Possible sepsis / Systemic inflammation:</strong> 0.1 - 0.5 ng/mL</li>
            <li><strong>High risk of severe sepsis/septic shock:</strong> > 0.5 ng/mL (often > 2 ng/mL or even > 10 ng/mL in severe cases)</li>
            <li><em>Interpretation should always be in the context of clinical presentation.</em></li>
        </ul>

        <h3>High PCT (Elevated Procalcitonin):</h3>
        <p>A significantly elevated PCT level is a strong indicator of a systemic bacterial infection or sepsis.</p>
        <ul>
            <li><strong>Bacterial Sepsis / Septic Shock:</strong> The most critical condition indicated by very high PCT.</li>
            <li><strong>Severe Bacterial Infections:</strong> (e.g., severe pneumonia, meningitis, pyelonephritis, bacterial peritonitis).</li>
            <li><strong>Major Trauma, Burns, or Major Surgery:</strong> Can cause transient increases in PCT due to systemic inflammatory response, even without infection, but usually not to levels seen in severe sepsis.</li>
            <li><strong>Cardiogenic Shock:</strong> Can rarely cause elevated PCT.</li>
            <li><strong>Certain Anti-cancer Therapies.</strong></li>
        </ul>
        <p>Symptoms are those of the underlying infection or sepsis (e.g., fever, chills, rapid heart rate, confusion, low blood pressure).</p>

        <h3>Low PCT (Normal/Low Procalcitonin):</h3>
        <p>A low PCT level indicates a low likelihood of a significant bacterial infection.</p>
        <ul>
            <li><strong>Viral Infections:</strong> (e.g., common cold, flu, viral bronchitis).</li>
            <li><strong>Localized Bacterial Infections:</strong> May cause only mild or no elevation.</li>
            <li><strong>Non-infectious Inflammation:</strong> (e.g., autoimmune diseases, allergic reactions, post-surgical inflammation without infection).</li>
            <li><strong>Effective Antibiotic Treatment:</strong> PCT levels should decrease rapidly with successful treatment of a bacterial infection.</li>
        </ul>
        <p>A low PCT result can help clinicians safely reduce or stop unnecessary antibiotic use, especially in respiratory tract infections.</p>

        <h3>Additional Information:</h3>
        <p>PCT is a more specific marker for bacterial infection than CRP or WBC count. Its rapid kinetics (faster rise and fall than CRP) make it particularly useful for monitoring the acute phase of infection and guiding antibiotic stewardship.</p>
        <p>PCT is often used in emergency departments and intensive care units to aid in the diagnosis and management of sepsis. It is typically interpreted along with other clinical signs, symptoms, and lab results like **CRP and White Blood Cell (WBC) count**.</p>
    `,
    relatedBiomarkers: ['crp', 'wbc']
},
{
    id: 'ferritin',
    name: 'Ferritin',
    description: 'A protein that stores iron. Reflects the body\'s total iron stores.',
    type: 'Iron Storage Marker',
    responsibleFor: 'Storing iron intracellularly; provides an estimate of the body\'s total iron reserves.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Ferritin is a **globular protein complex** that plays a crucial role in iron homeostasis by storing iron within cells in a non-toxic form. Small amounts of ferritin circulate in the blood, and the level of **serum ferritin** is directly proportional to the amount of iron stored in the body's tissues. It is considered the most reliable **Iron Storage Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Ferritin acts as the primary iron storage protein, safely sequestering iron to prevent it from causing cellular damage through oxidative stress. It is found in most cells, especially in the liver, spleen, bone marrow, and muscles.</p>
        <p>Its primary clinical utility is to:</p>
        <ul>
            <li><strong>Estimate Total Body Iron Stores:</strong> Low ferritin reliably indicates iron deficiency.</li>
            <li><strong>Identify Iron Overload:</strong> High ferritin can signal excess iron in the body.</li>
            <li><strong>Act as an Acute Phase Reactant:</strong> Ferritin levels can also increase in response to inflammation or infection, even if iron stores are normal or low. This is important for interpretation.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µg/L (microgram per liter) or ng/mL (nanogram per milliliter)</li>
            <li><em>Note: µg/L and ng/mL are numerically equivalent (1 µg/L = 1 ng/mL).</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Ferritin reference ranges vary by sex and can increase with age. They are typically higher in males.</p>
        <ul>
            <li><strong>Adult Male:</strong> 30 - 400 µg/L (30 - 400 ng/mL)</li>
            <li><strong>Adult Female:</strong> 13 - 150 µg/L (13 - 150 ng/mL)</li>
            <li><em>Levels increase with age. Can vary significantly.</em></li>
            <li><em>For diagnosing iron deficiency, ferritin below 30 µg/L is generally indicative, and below 15-20 µg/L is definitive for depleted iron stores.</em></li>
        </ul>

        <h3>High Ferritin (Hyperferritinemia):</h3>
        <p>Elevated ferritin levels can indicate iron overload, but more commonly, they signify inflammation, infection, or liver disease, as ferritin is an acute phase reactant.</p>
        <ul>
            <li><strong>Inflammation / Infection:</strong> The most common cause of high ferritin. Ferritin levels can be significantly elevated in response to any acute or chronic inflammatory process (e.g., chronic kidney disease, autoimmune diseases like rheumatoid arthritis, systemic lupus erythematosus, inflammatory bowel disease), or acute/chronic infections. In these cases, ferritin is high, but iron stores may not be truly excessive, or iron may be trapped in cells.</li>
            <li><strong>Iron Overload (Hemochromatosis):</strong> A genetic disorder leading to excessive iron absorption and accumulation in organs. Very high ferritin levels (>1000 µg/L) are often seen.</li>
            <li><strong>Liver Disease:</strong> (e.g., fatty liver, hepatitis, cirrhosis) - Damaged liver cells release ferritin.</li>
            <li><strong>Metabolic Syndrome/Obesity:</strong> Often associated with chronic low-grade inflammation and higher ferritin.</li>
            <li><strong>Certain Cancers:</strong> Some malignancies (e.g., lymphomas, leukemias, hepatocellular carcinoma) can cause elevated ferritin.</li>
            <li><strong>Frequent Blood Transfusions.</strong></li>
            <li><strong>Alcohol Abuse.</strong></li>
        </ul>
        <p>Symptoms are usually related to the underlying cause (e.g., fatigue, joint pain, abdominal pain in hemochromatosis; fever, malaise in infection).</p>

        <h3>Low Ferritin (Hypoferritinemia):</h3>
        <p>A low ferritin level is the earliest and most sensitive indicator of **iron deficiency** in the body, even before anemia develops.</p>
        <ul>
            <li><strong>Iron Deficiency:</strong> Insufficient iron intake, increased iron loss, or poor iron absorption leads to depleted iron stores. Common causes include:
                <ul>
                    <li><strong>Chronic Blood Loss:</strong> (e.g., heavy menstrual bleeding, gastrointestinal bleeding from ulcers, polyps, colon cancer).</li>
                    <li><strong>Insufficient Dietary Iron Intake:</strong> (e.g., vegetarian/vegan diets if not well-planned).</li>
                    <li><strong>Increased Iron Requirements:</strong> Pregnancy, rapid growth in children.</li>
                    <li><strong>Malabsorption:</strong> (e.g., celiac disease, bariatric surgery).</li>
                </ul>
            </li>
            <li><strong>Iron Deficiency Anemia:</strong> If iron deficiency is severe and prolonged, it leads to anemia, characterized by low ferritin, low hemoglobin, and small, pale red blood cells.</li>
        </ul>
        <p>Symptoms of low ferritin and iron deficiency include fatigue, weakness, pallor, shortness of breath, dizziness, brittle nails, hair loss, and restless legs syndrome.</p>

        <h3>Additional Information:</h3>
        <p>Due to its role as an acute phase reactant, a high ferritin level alone may not indicate iron overload if inflammation is also present. In such cases, other iron studies like **Transferrin Saturation (TSAT)** and **Serum Iron** are often needed for accurate diagnosis. A low TSAT with a high ferritin might suggest "anemia of chronic disease" rather than iron overload.</p>
        <p>Ferritin is routinely measured when **anemia is suspected**, particularly iron deficiency anemia. It is also used to screen for and monitor iron overload disorders like hemochromatosis. It's often interpreted in conjunction with **Serum Iron, Total Iron Binding Capacity (TIBC), and Transferrin Saturation** for a complete iron panel.</p>
    `,
    relatedBiomarkers: ['serum-iron', 'tibc']
    },
    {
    id: 'rheumatoid-factor',
    name: 'Rheumatoid Factor (RF)',
    description: 'An autoantibody often present in rheumatoid arthritis and other autoimmune diseases.',
    type: 'Autoantibody / Immune Marker',
    responsibleFor: 'An autoantibody that can target human IgG. Presence suggests autoimmune activity.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Rheumatoid Factor (RF) is an **autoantibody**, meaning it is an antibody produced by the immune system that mistakenly targets the body's own tissues. Specifically, RF typically targets the Fc portion of human IgG antibodies. It is a key **Autoantibody / Immune Marker** used in the diagnosis and prognosis of rheumatoid arthritis (RA) and other autoimmune conditions.</p>

        <h3>Role and Function:</h3>
        <p>The precise role of RF in the pathogenesis of rheumatoid arthritis is not fully understood, but its presence is associated with disease activity and severity. It is believed to contribute to the inflammatory process in RA by forming immune complexes that can activate the complement system and perpetuate inflammation in the joints.</p>
        <p>In clinical practice, RF is primarily used as a diagnostic and prognostic marker for rheumatoid arthritis:</p>
        <ul>
            <li><strong>Diagnosis:</strong> While not exclusive to RA, its presence, especially in high titers and combined with characteristic clinical symptoms (e.g., symmetric polyarthritis, morning stiffness), strongly supports a diagnosis of RA.</li>
            <li><strong>Prognosis:</strong> Patients with positive RF (seropositive RA) often have a more severe disease course, more aggressive joint destruction, and a poorer prognosis compared to seronegative RA patients.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> IU/mL (international units per milliliter) or U/mL (units per milliliter)</li>
            <li><strong>Conventional Units:</strong> U/mL (units per milliliter)</li>
            <li><em>Note: IU/mL and U/mL are often used interchangeably.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>RF values are typically reported as negative or positive, often with a specific cutoff. Values above the cutoff are considered positive.</p>
        <ul>
            <li><strong>Adults:</strong> < 14 IU/mL (or U/mL) (Negative)</li>
            <li><em>Reference values can vary slightly between laboratories depending on the assay method.</em></li>
            <li><em>It's important to note that a positive RF doesn't always indicate disease, and a negative RF doesn't rule it out.</em></li>
        </ul>

        <h3>High RF (Elevated Rheumatoid Factor):</h3>
        <p>A high RF level indicates the presence of these autoantibodies. While strongly associated with RA, it can be elevated in several other conditions.</p>
        <ul>
            <li><strong>Rheumatoid Arthritis (RA):</strong> Approximately 70-80% of RA patients are RF positive (seropositive RA). Higher levels often correlate with more severe disease.</li>
            <li><strong>Other Autoimmune Diseases:</strong>
                <ul>
                    <li><strong>Sjögren's Syndrome:</strong> Very commonly found in Sjögren's.</li>
                    <li><strong>Systemic Lupus Erythematosus (SLE).</strong></li>
                    <li><strong>Scleroderma.</strong></li>
                    <li><strong>Mixed Cryoglobulinemia.</strong></li>
                </ul>
            </li>
            <li><strong>Chronic Infections:</strong> (e.g., Hepatitis C, subacute bacterial endocarditis, tuberculosis, leprosy, syphilis, parasitic infections). The immune response to chronic infection can sometimes lead to RF production.</li>
            <li><strong>Chronic Liver Disease.</strong></li>
            <li><strong>Sarcoidosis.</strong></li>
            <li><strong>Healthy Individuals:</strong> A small percentage (up to 5-10%) of healthy individuals, especially older adults, can have low positive RF titers without having an autoimmune disease.</li>
        </ul>
        <p>Symptoms are dependent on the underlying condition. In RA, symptoms include joint pain, swelling, stiffness (especially in the morning), fatigue, and sometimes systemic manifestations.</p>

        <h3>Low RF (Normal/Negative Rheumatoid Factor):</h3>
        <p>A normal or negative RF result means these autoantibodies are not detected or are below the clinically significant threshold.</p>
        <ul>
            <li><strong>Absence of RA or Other RF-Associated Conditions.</strong></li>
            <li><strong>Seronegative Rheumatoid Arthritis:</strong> Up to 20-30% of RA patients do not have detectable RF and are classified as seronegative RA. These patients still have RA but lack this specific autoantibody. Therefore, a negative RF does not rule out RA.</li>
            <li><strong>Early Stage RA:</strong> RF may be negative in the very early stages of RA and become positive later in the disease course.</li>
        </ul>
        <p>A low RF result is generally desirable in the absence of clinical symptoms suggesting an autoimmune disorder.</p>

        <h3>Additional Information:</h3>
        <p>Due to its non-specificity, RF testing is rarely used in isolation. It is typically interpreted in conjunction with clinical symptoms, physical examination, and other inflammatory markers or autoantibodies.</p>
        <p>Related biomarkers often include:</p>
        <ul>
            <li>**Anti-Citrullinated Protein Antibodies (ACPA) / Anti-CCP Antibodies:** A more specific marker for RA than RF, often present even in RF-negative RA.</li>
            <li>**Erythrocyte Sedimentation Rate (ESR)** and **C-Reactive Protein (CRP):** Non-specific markers of inflammation that are often elevated in RA and other inflammatory conditions.</li>
            <li>**Other autoantibodies:** Depending on suspected underlying conditions (e.g., ANA for lupus, anti-Ro/La for Sjögren's).</li>
        </ul>
        <p>The combination of clinical presentation with serological markers like RF and ACPA is crucial for accurate diagnosis and prognosis of rheumatoid arthritis.</p>
    `,
    relatedBiomarkers: ['crp', 'esr', 'anti-ccp-antibodies'] // Added anti-CCP for better specificity.
},
{
    id: 'iga',
    name: 'Immunoglobulin A (IgA)',
    description: 'An antibody found in mucous membranes, important for local immunity.',
    type: 'Immunoglobulin',
    responsibleFor: 'Providing primary defense in mucous membranes (respiratory, gastrointestinal, urogenital tracts).',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Immunoglobulin A (IgA) is one of the five major classes of antibodies (immunoglobulins) produced by plasma cells, a type of B lymphocyte. It is the second most abundant antibody in the blood but is the predominant antibody found in external secretions, particularly in mucous membranes. IgA is a critical **Immunoglobulin** involved in mucosal immunity.</p>

        <h3>Role and Function:</h3>
        <p>IgA is primarily responsible for **local immunity** and plays a crucial role in the first line of defense against pathogens at mucosal surfaces. Its key functions include:</p>
        <ul>
            <li><strong>Mucosal Protection:</strong> Found in high concentrations in secretions such as saliva, tears, breast milk, and secretions of the respiratory, gastrointestinal, and urogenital tracts. It prevents pathogens from adhering to epithelial cells and neutralizes toxins.</li>
            <li><strong>Immune Exclusion:</strong> Prevents the entry of antigens and microorganisms into the bloodstream.</li>
            <li><strong>Anti-inflammatory Role:</strong> Can act to dampen inflammation in the gut, helping to maintain tolerance to commensal bacteria.</li>
        </ul>
        <p>There are two subclasses, IgA1 and IgA2, which have slightly different distributions and functions. Secretory IgA, a dimeric form with an added secretory component, is particularly resistant to enzymatic degradation in harsh environments like the gut.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert g/L to mg/dL, multiply by 100. To convert mg/dL to g/L, divide by 100. For example, 4.00 g/L is 400 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>IgA levels vary with age and can be influenced by various factors.</p>
        <ul>
            <li><strong>Adults:</strong> 0.70 - 4.00 g/L (70 - 400 mg/dL)</li>
            <li><em>Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High IgA (Hypergammaglobulinemia):</h3>
        <p>Elevated IgA levels can indicate an active immune response or an underlying inflammatory or chronic condition.</p>
        <ul>
            <li><strong>Chronic Infections:</strong> Particularly those affecting mucosal surfaces (e.g., chronic respiratory infections, liver infections).</li>
            <li><strong>Inflammatory Conditions:</strong> (e.g., Rheumatoid Arthritis, Systemic Lupus Erythematosus, Inflammatory Bowel Disease).</li>
            <li><strong>Liver Disease:</strong> Chronic liver diseases such as cirrhosis often lead to elevated IgA due to impaired clearance of gut-derived antigens and increased immune stimulation.</li>
            <li><strong>Autoimmune Disorders:</strong>
                <ul>
                    <li><strong>IgA Nephropathy (Berger's disease):</strong> Characterized by IgA deposits in the kidneys.</li>
                    <li><strong>Celiac Disease:</strong> Though often associated with IgA deficiency, sometimes elevated IgA can be seen.</li>
                </ul>
            </li>
            <li><strong>Monoclonal Gammopathies:</strong> (e.g., IgA myeloma, Waldenstrom's macroglobulinemia - though primarily IgM).</li>
        </ul>
        <p>Symptoms are related to the underlying condition (e.g., recurrent infections, inflammation). In IgA nephropathy, there might be blood in the urine.</p>

        <h3>Low IgA (Hypogammaglobulinemia):</h3>
        <p>Low IgA levels indicate a deficiency in this antibody, which can compromise mucosal immunity.</p>
        <ul>
            <li><strong>Selective IgA Deficiency:</strong> The most common primary immunodeficiency. Individuals have very low or undetectable IgA levels while other immunoglobulin classes (IgG, IgM) are normal. It can be asymptomatic but often leads to recurrent respiratory, gastrointestinal, and urogenital infections (e.g., sinusitis, bronchitis, giardiasis).</li>
            <li><strong>Common Variable Immunodeficiency (CVID):</strong> A primary immunodeficiency characterized by low levels of IgG and IgA (and sometimes IgM), leading to recurrent bacterial infections.</li>
            <li><strong>Medications:</strong> Certain drugs (e.g., some anticonvulsants, immunosuppressants).</li>
            <li><strong>Genetic Disorders.</strong></li>
        </ul>
        <p>Symptoms include increased susceptibility to infections, particularly of the respiratory and gastrointestinal tracts, and a higher risk of autoimmune diseases or allergies.</p>

        <h3>Additional Information:</h3>
        <p>IgA testing is often performed as part of an immunoglobulin panel to assess overall immune function, investigate recurrent infections, or diagnose certain autoimmune conditions.</p>
        <p>It is typically interpreted alongside other immunoglobulins:</p>
        <ul>
            <li>**Immunoglobulin G (IgG):** The most abundant antibody, providing long-term immunity.</li>
            <li>**Immunoglobulin M (IgM):** The first antibody produced in response to a new infection.</li>
            <li>**Immunoglobulin E (IgE):** Associated with allergies and parasitic infections.</li>
        </ul>
        <p>In cases of suspected celiac disease, IgA levels are often checked alongside IgA anti-transglutaminase (tTG-IgA) antibodies, as an IgA deficiency can lead to false-negative results for the latter.</p>
    `,
    relatedBiomarkers: ['igg', 'igm', 'ige', 'anti-tTG-IgA'] // Added IgE and anti-tTG-IgA for relevance to IgA.
},
{
    id: 'igg',
    name: 'Immunoglobulin G (IgG)',
    description: 'The most abundant antibody, providing long-term immunity against infections.',
    type: 'Immunoglobulin',
    responsibleFor: 'Providing long-term immunity; crosses the placenta to protect newborns.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Immunoglobulin G (IgG) is the most abundant class of antibodies, accounting for approximately 75-80% of all immunoglobulins in human serum. It is a monomeric antibody produced by plasma cells and is critical for long-term immune defense. IgG is a fundamental **Immunoglobulin** involved in adaptive immunity.</p>

        <h3>Role and Function:</h3>
        <p>IgG plays a central role in the body's adaptive immune response and provides durable protection against a wide range of pathogens. Its key functions include:</p>
        <ul>
            <li><strong>Long-Term Immunity:</strong> Produced in large quantities during secondary immune responses and provides long-lasting protection after exposure to an antigen (either through infection or vaccination).</li>
            <li><strong>Neutralization:</strong> Binds to toxins and viruses, preventing them from harming cells.</li>
            <li><strong>Opsonization:</strong> Coats pathogens, making them more easily recognized and engulfed by phagocytic cells (e.g., macrophages).</li>
            <li><strong>Complement Activation:</strong> Initiates the classical complement pathway, leading to the destruction of pathogens.</li>
            <li><strong>Antibody-Dependent Cell-Mediated Cytotoxicity (ADCC):</strong> Tags infected cells for destruction by natural killer (NK) cells.</li>
            <li><strong>Placental Transfer:</strong> Uniquely, IgG can cross the placenta from mother to fetus, providing passive immunity to the newborn during the first few months of life.</li>
        </ul>
        <p>There are four IgG subclasses (IgG1, IgG2, IgG3, IgG4), each with slightly different properties and functions.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert g/L to mg/dL, multiply by 100. To convert mg/dL to g/L, divide by 100. For example, 16.00 g/L is 1600 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>IgG levels typically increase from infancy to adulthood.</p>
        <ul>
            <li><strong>Adults:</strong> 7.00 - 16.00 g/L (700 - 1600 mg/dL)</li>
            <li><em>Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High IgG (Hypergammaglobulinemia):</h3>
        <p>Elevated IgG levels often indicate an active or chronic immune response.</p>
        <ul>
            <li><strong>Chronic Infections:</strong> Persistent bacterial, viral, fungal, or parasitic infections.</li>
            <li><strong>Autoimmune Diseases:</strong> (e.g., Systemic Lupus Erythematosus (SLE), Rheumatoid Arthritis, Sjögren's Syndrome, autoimmune hepatitis). Increased IgG can be part of the generalized immune activation.</li>
            <li><strong>Chronic Liver Disease:</strong> (e.g., cirrhosis, autoimmune hepatitis).</li>
            <li><strong>Monoclonal Gammopathies:</strong> (e.g., Multiple Myeloma, where a single clone of plasma cells produces an excessive amount of a specific IgG).</li>
            <li><strong>Polyclonal Gammopathy:</strong> A general increase in multiple types of IgG, usually in response to chronic antigen stimulation.</li>
        </ul>
        <p>Symptoms are dependent on the underlying condition. In autoimmune diseases, they include systemic inflammation; in myeloma, bone pain and fatigue.</p>

        <h3>Low IgG (Hypogammaglobulinemia):</h3>
        <p>Low IgG levels indicate a deficiency in this critical antibody, leading to increased susceptibility to infections.</p>
        <ul>
            <li><strong>Primary Immunodeficiencies:</strong> (e.g., Common Variable Immunodeficiency (CVID), X-linked Agammaglobulinemia, transient hypogammaglobulinemia of infancy). These are genetic conditions affecting antibody production.</li>
            <li><strong>Secondary Immunodeficiencies:</strong>
                <ul>
                    <li><strong>Malnutrition.</strong></li>
                    <li><strong>Protein-Losing Conditions:</strong> (e.g., nephrotic syndrome, protein-losing enteropathy) leading to excessive loss of IgG.</li>
                    <li><strong>Certain Medications:</strong> (e.g., immunosuppressants, certain anticonvulsants, rituximab).</li>
                    <li><strong>Hematologic Malignancies:</strong> (e.g., chronic lymphocytic leukemia (CLL), lymphoma) which can suppress normal B-cell function.</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms include recurrent bacterial and viral infections (especially respiratory, such as pneumonia, sinusitis, bronchitis), and sometimes an increased risk of autoimmune disease.</p>

        <h3>Additional Information:</h3>
        <p>IgG testing is routinely performed as part of an immunoglobulin panel to evaluate immune status, diagnose immunodeficiencies, or investigate certain autoimmune disorders or chronic infections.</p>
        <p>It is typically interpreted alongside other immunoglobulins:</p>
        <ul>
            <li>**Immunoglobulin A (IgA):** Important for mucosal immunity.</li>
            <li>**Immunoglobulin M (IgM):** First antibody produced in initial immune response.</li>
            <li>**Immunoglobulin E (IgE):** Associated with allergies and parasitic infections.</li>
            <li>**Complement C3 and C4:** Components of the complement system, which IgG can activate.</li>
        </ul>
        <p>Specific IgG antibody titers (e.g., IgG to measles, rubella, or tetanus) are also measured to assess immunity to specific pathogens or vaccine effectiveness.</p>
    `,
    relatedBiomarkers: ['iga', 'igm', 'ige', 'complement-c3', 'complement-c4'] // Added IgE and Complement for comprehensive immune panel.
},
{
    id: 'igm',
    name: 'Immunoglobulin M (IgM)',
    description: 'The first antibody produced in response to an infection, providing immediate protection.',
    type: 'Immunoglobulin',
    responsibleFor: 'Acting as the primary antibody in the initial immune response to a new antigen.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Immunoglobulin M (IgM) is the largest antibody and the first antibody class produced during the primary immune response to a new antigen (e.g., a new infection or vaccine). It typically exists as a pentamer (five antibody units linked together) in serum, making it highly efficient at binding multiple antigens. IgM is a crucial **Immunoglobulin** for immediate, first-line immune defense.</p>

        <h3>Role and Function:</h3>
        <p>IgM plays a vital role in early immune responses and antigen recognition:</p>
        <ul>
            <li><strong>Primary Immune Response:</strong> It is the first antibody produced by B cells upon initial exposure to an antigen. Its rapid production provides immediate, short-term protection while the adaptive immune system develops a more specific IgG response.</li>
            <li><strong>Potent Agglutinator:</strong> Due to its pentameric structure, IgM is highly effective at binding to multiple antigens on bacterial surfaces, causing them to clump together (agglutination), which aids in their clearance.</li>
            <li><strong>Complement Activation:</strong> IgM is a very efficient activator of the classical complement pathway, leading to pathogen lysis and enhanced phagocytosis.</li>
            <li><strong>Antigen Presentation:</strong> Can serve as a B cell receptor (BCR) on the surface of B lymphocytes, playing a role in antigen recognition and B cell activation.</li>
            <li><strong>Natural Antibodies:</strong> Some IgM antibodies (natural IgM) are produced without prior exposure to specific antigens and provide a basal level of protection against common pathogens.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert g/L to mg/dL, multiply by 100. To convert mg/dL to g/L, divide by 100. For example, 2.30 g/L is 230 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>IgM levels in infants are low at birth (as it doesn't cross the placenta) but rise rapidly in the first year of life.</p>
        <ul>
            <li><strong>Adults:</strong> 0.40 - 2.30 g/L (40 - 230 mg/dL)</li>
            <li><em>Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High IgM (Hypergammaglobulinemia):</h3>
        <p>Elevated IgM levels typically indicate a recent or ongoing acute infection, or certain immune disorders.</p>
        <ul>
            <li><strong>Recent/Acute Infection:</strong> (e.g., bacterial, viral, parasitic, fungal infections). The presence of IgM antibodies specific to a particular pathogen often indicates a recent primary infection.</li>
            <li><strong>Autoimmune Diseases:</strong> (e.g., Systemic Lupus Erythematosus, Rheumatoid Arthritis, mixed cryoglobulinemia).</li>
            <li><strong>Waldenström's Macroglobulinemia:</strong> A type of B-cell lymphoma characterized by overproduction of monoclonal IgM.</li>
            <li><strong>Chronic Liver Disease:</strong> Can sometimes lead to elevated IgM.</li>
            <li><strong>Mononucleosis.</strong></li>
        </ul>
        <p>Symptoms depend on the underlying condition (e.g., fever, fatigue, swollen lymph nodes in acute infection; hyperviscosity syndrome in Waldenström's).</p>

        <h3>Low IgM (Hypogammaglobulinemia):</h3>
        <p>Low IgM levels suggest a deficiency in the initial immune response, increasing susceptibility to infections.</p>
        <ul>
            <li><strong>Primary Immunodeficiencies:</strong> (e.g., X-linked agammaglobulinemia, selective IgM deficiency, Common Variable Immunodeficiency (CVID) - though primarily IgG/IgA).</li>
            <li><strong>Secondary Immunodeficiencies:</strong>
                <ul>
                    <li><strong>Certain Medications:</strong> (e.g., some immunosuppressants).</li>
                    <li><strong>Protein-Losing Syndromes:</strong> (e.g., nephrotic syndrome).</li>
                    <li><strong>Hematologic Malignancies:</strong> (e.g., multiple myeloma, chronic lymphocytic leukemia).</li>
                </ul>
            </li>
            <li><strong>Splenectomy/Asplenia:</strong> The spleen is a major site of IgM production, so its removal or dysfunction can lead to low IgM levels and increased risk of encapsulated bacterial infections.</li>
        </ul>
        <p>Symptoms include increased susceptibility to recurrent bacterial infections, particularly encapsulated bacteria like *Streptococcus pneumoniae*.</p>

        <h3>Additional Information:</h3>
        <p>IgM testing is commonly performed as part of an immunoglobulin panel to assess overall immune function, investigate recurrent infections, and diagnose certain hematological disorders.</p>
        <p>It is typically interpreted alongside other immunoglobulins:</p>
        <ul>
            <li>**Immunoglobulin A (IgA):** Important for mucosal immunity.</li>
            <li>**Immunoglobulin G (IgG):** Provides long-term immunity.</li>
            <li>**Immunoglobulin E (IgE):** Associated with allergies and parasitic infections.</li>
            <li>**Complement C3 and C4:** Components of the complement system, which IgM is a potent activator of.</li>
        </ul>
        <p>Specific IgM antibody testing (e.g., IgM to rubella, CMV, hepatitis A) is crucial for diagnosing acute or recent infections, as their presence indicates a primary immune response.</p>
    `,
    relatedBiomarkers: ['iga', 'igg', 'ige', 'complement-c3', 'complement-c4'] // Added IgE and Complement for comprehensive immune panel.
},
{
    id: 'ige',
    name: 'Immunoglobulin E (IgE)',
    description: 'An antibody primarily involved in allergic reactions and defense against parasites.',
    type: 'Immunoglobulin',
    responsibleFor: 'Mediating immediate hypersensitivity reactions (allergies) and immunity against parasites.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Immunoglobulin E (IgE) is the least abundant antibody in serum but plays a critical role in **Type I hypersensitivity reactions (allergies)** and immune responses to parasites. It is a monomeric antibody produced by plasma cells. IgE is a specialized **Immunoglobulin** involved in allergic and anti-parasitic immunity.</p>

        <h3>Role and Function:</h3>
        <p>IgE is unique among immunoglobulins due to its high affinity for receptors on mast cells and basophils, which are key immune cells involved in allergic responses.</p>
        <ul>
            <li><strong>Allergic Reactions:</strong> Upon first exposure to an allergen, IgE is produced and binds to mast cells and basophils. Subsequent exposure to the same allergen triggers cross-linking of IgE on these cells, leading to their degranulation and the release of histamine and other inflammatory mediators. This rapid release causes the symptoms of immediate hypersensitivity (e.g., hives, asthma, anaphylaxis, hay fever).</li>
            <li><strong>Parasite Defense:</strong> IgE also plays a role in immunity against certain parasitic infections, particularly helminths (worms). It can tag parasites for destruction by eosinophils.</li>
        </ul>
        <p>The total IgE level measures the overall amount of IgE in the blood, while specific IgE (sIgE) tests measure IgE antibodies directed against particular allergens.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> IU/mL (international units per milliliter) or kU/L (kilo-units per liter)</li>
            <li><strong>Conventional Units:</strong> ng/mL (nanogram per milliliter)</li>
            <li><em>Note: IU/mL and kU/L are numerically equivalent. The conversion between IU/mL and ng/mL varies by assay but is roughly 2.4 ng/mL per IU/mL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>IgE levels vary widely and are often influenced by age and environmental exposures.</p>
        <ul>
            <li><strong>Adults:</strong> < 100 IU/mL (or kU/L, ng/mL)</li>
            <li><em>There is a wide range of normal values, and individual IgE levels can fluctuate. Reference ranges can vary significantly between laboratories.</em></li>
        </ul>

        <h3>High IgE (Hyperimmunoglobulinemia E / Hyper-IgE Syndrome):</h3>
        <p>Elevated IgE levels are commonly associated with allergic diseases and parasitic infections.</p>
        <ul>
            <li><strong>Allergic Diseases:</strong> (e.g., Asthma, Eczema/Atopic Dermatitis, Allergic Rhinitis/Hay Fever, Food Allergies). The higher the IgE level, generally the more prone an individual is to allergic reactions.</li>
            <li><strong>Parasitic Infections:</strong> Especially helminth (worm) infections (e.g., ascariasis, strongyloidiasis).</li>
            <li><strong>Certain Immunodeficiencies:</strong>
                <ul>
                    <li><strong>Hyper-IgE Syndrome (Job's Syndrome):</strong> A rare primary immunodeficiency characterized by extremely high IgE levels, recurrent skin and lung infections, and skeletal abnormalities.</li>
                </ul>
            </li>
            <li><strong>Aspergillosis (e.g., Allergic Bronchopulmonary Aspergillosis).</strong></li>
            <li><strong>Some Cancers:</strong> (e.g., Hodgkin's lymphoma).</li>
        </ul>
        <p>Symptoms are typically those of allergies (e.g., itching, rash, wheezing, sneezing, gastrointestinal upset) or the parasitic infection.</p>

        <h3>Low IgE (Normal/Desirable Immunoglobulin E):</h3>
        <p>Low IgE levels are considered normal and are not typically clinically significant. They indicate a low likelihood of allergic predisposition or parasitic infection.</p>
        <ul>
            <li><strong>Non-allergic Individuals.</strong></li>
            <li><strong>Absence of Parasitic Infection.</strong></li>
        </ul>
        <p>Extremely low levels are not associated with any particular pathology and are generally desirable.</p>

        <h3>Additional Information:</h3>
        <p>Total IgE measures overall IgE, but specific IgE (sIgE) testing (e.g., RAST, ImmunoCAP) is often more useful for identifying specific allergens responsible for allergic reactions. When investigating allergic reactions, doctors may also consider:</p>
        <ul>
            <li>**Eosinophil Count:** Eosinophils are immune cells often elevated in allergies and parasitic infections.</li>
            <li>**Skin Prick Tests:** Direct assessment of allergic sensitization.</li>
            <li>**Tryptase:** Released by mast cells during acute allergic reactions.</li>
        </ul>
        <p>While IgE is part of the overall immunoglobulin panel (with **IgA, IgG, IgM**), its clinical utility is often more focused on allergic and parasitic diseases.</p>
    `,
    relatedBiomarkers: ['eosinophil-count', 'tryptase'] // Added eosinophil count and tryptase for direct relevance to IgE-mediated reactions.
},
{
    id: 'complement-c3',
    name: 'Complement C3',
    description: 'A protein of the complement system, part of the innate immune response.',
    type: 'Immune System Component',
    responsibleFor: 'Playing a central role in the complement cascade, which helps eliminate pathogens and clear immune complexes.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Complement C3 is a central protein of the **complement system**, a crucial part of the innate immune system. The complement system consists of a cascade of plasma proteins that, when activated, work together to enhance the body's ability to clear pathogens, remove damaged cells, and regulate inflammation. C3 is the most abundant complement protein and a key **Immune System Component**.</p>

        <h3>Role and Function:</h3>
        <p>C3 plays a pivotal role in all three pathways of complement activation (classical, alternative, and lectin pathways). Regardless of the activation pathway, C3 is cleaved into active fragments (C3a and C3b), which perform various immune functions:</p>
        <ul>
            <li><strong>Opsonization (C3b):</strong> C3b coats microbial surfaces, making them more palatable for phagocytic cells (macrophages and neutrophils) to engulf and destroy.</li>
            <li><strong>Inflammation (C3a):</strong> C3a (anaphylatoxin) attracts inflammatory cells and promotes the release of histamine, increasing vascular permeability and contributing to local inflammation.</li>
            <li><strong>Immune Complex Clearance:</strong> Helps in the solubilization and clearance of antigen-antibody complexes.</li>
            <li><strong>Membrane Attack Complex (MAC) Formation:</strong> C3b is essential for the downstream formation of the MAC (C5b-C9), which creates pores in pathogen membranes, leading to their lysis.</li>
        </ul>
        <p>Measuring C3 levels provides an indication of the overall activity and integrity of the complement system.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert g/L to mg/dL, multiply by 100. To convert mg/dL to g/L, divide by 100. For example, 1.80 g/L is 180 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Complement C3 levels are generally stable in healthy individuals.</p>
        <ul>
            <li><strong>Adults:</strong> 0.90 - 1.80 g/L (90 - 180 mg/dL)</li>
            <li><em>Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High Complement C3:</h3>
        <p>Elevated C3 levels are often seen as an acute phase reactant, rising in response to inflammation or infection.</p>
        <ul>
            <li><strong>Acute Inflammation / Infection:</strong> Like CRP, C3 can be elevated during active inflammatory processes, infections (bacterial, viral, fungal), or tissue damage.</li>
            <li><strong>Certain Autoimmune Conditions:</strong> Sometimes seen in the early stages of some autoimmune diseases as part of a generalized immune activation, though more often complement is consumed (low) in active autoimmune disease.</li>
            <li><strong>Malignancies.</strong></li>
        </ul>
        <p>Symptoms are usually those of the underlying condition (e.g., fever, pain, swelling).</p>

        <h3>Low Complement C3:</h3>
        <p>Low C3 levels indicate either increased consumption of complement components (due to active immune complex formation) or an inherited deficiency in complement production.</p>
        <ul>
            <li><strong>Active Autoimmune Disease:</strong> A hallmark of active immune complex-mediated diseases where complement is being heavily consumed. Most notably:
                <ul>
                    <li><strong>Systemic Lupus Erythematosus (SLE):</strong> Especially during flares or kidney involvement (lupus nephritis).</li>
                    <li><strong>Glomerulonephritis (e.g., post-streptococcal glomerulonephritis, membranoproliferative glomerulonephritis).</strong></li>
                    <li><strong>Serum Sickness.</strong></li>
                    <li><strong>Cryoglobulinemia.</strong></li>
                </ul>
            </li>
            <li><strong>Severe Liver Disease:</strong> Impaired synthesis of complement proteins by the liver.</li>
            <li><strong>Malnutrition.</strong></li>
            <li><strong>Inherited Complement Deficiencies:</strong> Rare genetic defects in C3 production, leading to recurrent bacterial infections and an increased risk of autoimmune disease.</li>
            <li><strong>Sepsis:</strong> In severe cases, overwhelming activation of the complement system can lead to its consumption and low levels.</li>
        </ul>
        <p>Symptoms vary widely depending on the cause, ranging from recurrent infections in deficiency to systemic inflammation in autoimmune disease.</p>

        <h3>Additional Information:</h3>
        <p>C3 levels are typically measured along with **Complement C4** to assess the overall status of the complement system and to help differentiate between activation pathways. For instance, low C4 and C3 suggest classical pathway activation (common in lupus), while low C3 with normal C4 might suggest alternative pathway activation.</p>
        <p>C3 and C4 are critical for monitoring disease activity and response to treatment in immune complex-mediated diseases like SLE. They are also interpreted in conjunction with other immune markers such as **IgG, IgA, IgM, and ANA (Antinuclear Antibodies)**.</p>
    `,
    relatedBiomarkers: ['complement-c4', 'igg', 'iga', 'igm', 'ana'] // Added immunoglobulins and ANA for comprehensive immune assessment.
},
{
    id: 'complement-c4',
    name: 'Complement C4',
    description: 'Another protein of the complement system, involved in immune defense.',
    type: 'Immune System Component',
    responsibleFor: 'Participating in the classical complement pathway, crucial for immune defense and clearing immune complexes.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Complement C4 is another significant protein of the **complement system**, a vital part of the innate immune response. C4 is primarily involved in the **classical and lectin pathways** of complement activation. Like C3, it is a key **Immune System Component** that contributes to the elimination of pathogens and the clearance of immune complexes.</p>

        <h3>Role and Function:</h3>
        <p>C4 is cleaved early in the classical and lectin pathways (activated by antigen-antibody complexes or microbial carbohydrates, respectively) into active fragments (C4a and C4b). These fragments contribute to:</p>
        <ul>
            <li><strong>Initiating the Classical/Lectin Pathways:</strong> C4b, along with C2a, forms the C3 convertase (C4b2a) of the classical pathway, which is essential for cleaving C3 and amplifying the complement cascade.</li>
            <li><strong>Opsonization:</strong> C4b can directly opsonize pathogens, though less efficiently than C3b.</li>
            <li><strong>Inflammation (C4a):</strong> C4a is a weaker anaphylatoxin compared to C3a or C5a, but it contributes to local inflammatory responses.</li>
            <li><strong>Immune Complex Processing:</strong> Plays a role in the solubilization and clearance of immune complexes.</li>
        </ul>
        <p>Measurement of C4 provides insight into the activity of the classical and lectin pathways of the complement system.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: To convert g/L to mg/dL, multiply by 100. To convert mg/dL to g/L, divide by 100. For example, 0.40 g/L is 40 mg/dL.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Complement C4 levels are generally stable in healthy individuals.</p>
        <ul>
            <li><strong>Adults:</strong> 0.10 - 0.40 g/L (10 - 40 mg/dL)</li>
            <li><em>Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High Complement C4:</h3>
        <p>Elevated C4 levels, similar to C3, can indicate an acute inflammatory response.</p>
        <ul>
            <li><strong>Acute Inflammation / Infection:</strong> C4 can act as an acute phase reactant, rising non-specifically during periods of inflammation, infection, or tissue injury.</li>
            <li><strong>Some Malignancies.</strong></li>
        </ul>
        <p>Symptoms are typically those of the underlying inflammatory condition.</p>

        <h3>Low Complement C4:</h3>
        <p>Low C4 levels most commonly indicate active consumption of the classical complement pathway or an inherited deficiency.</p>
        <ul>
            <li><strong>Active Autoimmune Disease:</strong> A strong indicator of active classical pathway activation due to the formation of immune complexes. Most notably:
                <ul>
                    <li><strong>Systemic Lupus Erythematosus (SLE):</strong> Low C4 (often with low C3) is a hallmark of active lupus, especially with kidney involvement. C4 levels correlate well with disease activity.</li>
                    <li><strong>Mixed Cryoglobulinemia.</strong></li>
                    <li><strong>Subacute Bacterial Endocarditis.</strong></li>
                </ul>
            </li>
            <li><strong>Inherited Complement Deficiencies:</strong> Rare genetic defects in C4 production, which can significantly increase the risk of developing SLE-like syndromes, recurrent infections, and other autoimmune diseases.</li>
            <li><strong>Sepsis:</strong> In severe cases, overwhelming complement activation can lead to consumption.</li>
        </ul>
        <p>Symptoms vary depending on the cause, from systemic inflammation in SLE to recurrent infections in deficiency.</p>

        <h3>Additional Information:</h3>
        <p>C4 levels are almost always measured alongside **Complement C3** to provide a more complete picture of complement system activity. The pattern of C3 and C4 levels can help pinpoint which pathway of the complement system is activated or deficient. For example:</p>
        <ul>
            <li><strong>Low C3 and Low C4:</strong> Suggests activation of the classical pathway, common in active SLE.</li>
            <li><strong>Low C3 and Normal C4:</strong> Suggests activation of the alternative pathway (e.g., some types of glomerulonephritis, severe infections) or a primary C3 deficiency.</li>
            <li><strong>Normal C3 and C4:</strong> Rules out significant complement activation.</li>
        </ul>
        <p>C4 is crucial for monitoring disease activity and response to treatment in immune complex-mediated diseases. It is also interpreted in conjunction with other immune markers such as **IgG, IgA, IgM, and ANA (Antinuclear Antibodies)**.</p>
    `,
    relatedBiomarkers: ['complement-c3', 'igg', 'iga', 'igm', 'ana'] // Added immunoglobulins and ANA for comprehensive immune assessment.
},
{
    id: 'troponins',
    name: 'Troponins (T, I)',
    description: 'Proteins released into the blood when heart muscle is damaged. Key for diagnosing heart attack.',
    type: 'Cardiac Marker',
    responsibleFor: 'Regulating muscle contraction; specific elevation indicates myocardial injury.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Troponins (Cardiac Troponin T [cTnT] and Cardiac Troponin I [cTnI]) are **regulatory proteins** found specifically in the muscle cells of the heart. When heart muscle is damaged, these proteins are released into the bloodstream. They are highly sensitive and specific **Cardiac Markers** for myocardial injury.</p>

        <h3>Role and Function:</h3>
        <p>In healthy cardiac muscle, troponins (along with troponin C) regulate muscle contraction by mediating the calcium-dependent interaction between actin and myosin. When cardiac myocytes are damaged (e.g., due to ischemia), the cell membrane integrity is compromised, and troponins leak into the circulation. The rise and fall of cardiac troponins are characteristic of myocardial infarction (heart attack).</p>
        <p>The primary clinical utility of troponin measurement is for:</p>
        <ul>
            <li><strong>Diagnosis of Acute Myocardial Infarction (AMI):</strong> Current guidelines recommend high-sensitivity cardiac troponin (hs-cTn) assays as the primary biomarker for diagnosing heart attack. A significant rise and/or fall in levels, along with clinical evidence of ischemia, confirms AMI.</li>
            <li><strong>Risk Stratification:</strong> Elevated troponin levels, even without an acute heart attack, can indicate myocardial injury and predict adverse cardiovascular outcomes in various conditions.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <p>High-sensitivity troponin assays typically report values in nanograms per liter (ng/L) or picograms per milliliter (pg/mL), which are numerically equivalent.</p>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> ng/L (nanogram per liter) or pg/mL (picogram per milliliter)</li>
            <li><strong>Conventional Units:</strong> ng/mL (nanogram per milliliter) for older, less sensitive assays.</li>
            <li><em>Note: 1 ng/L = 1 pg/mL. For older assays, 1 ng/mL = 1000 ng/L. High-sensitivity tests measure much lower concentrations.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference values for high-sensitivity troponins are very low, with cut-offs based on the 99th percentile of a healthy reference population.</p>
        <ul>
            <li><strong>High-sensitivity Troponin T (hs-cTnT):</strong> < 14 ng/L (or pg/mL)</li>
            <li><strong>High-sensitivity Troponin I (hs-cTnI):</strong> < 20 ng/L (or pg/mL)</li>
            <li><em>Specific cut-offs vary by assay, manufacturer, and laboratory. Values above the 99th percentile are considered elevated.</em></li>
        </ul>

        <h3>High Troponins:</h3>
        <p>Elevated troponin levels indicate myocardial injury, which can be due to various causes, with myocardial infarction being the most critical.</p>
        <ul>
            <li><strong>Acute Myocardial Infarction (Heart Attack):</strong> A rapid rise and/or fall of troponin levels, with at least one value above the 99th percentile URL (Upper Reference Limit), in the setting of acute myocardial ischemia, confirms AMI.</li>
            <li><strong>Myocardial Injury (Non-Ischemic Causes):</strong> Troponin can be elevated due to direct injury to heart muscle cells, even without a blockage in a coronary artery:
                <ul>
                    <li><strong>Heart Failure (Acute or Chronic):</strong> Especially during exacerbations, due to myocardial stretch and micro-injury.</li>
                    <li><strong>Kidney Disease/End-Stage Renal Disease:</strong> Reduced clearance of troponin, leading to chronically elevated levels.</li>
                    <li><strong>Myocarditis:</strong> Inflammation of the heart muscle.</li>
                    <li><strong>Pulmonary Embolism:</strong> Right heart strain.</li>
                    <li><strong>Sepsis/Critical Illness.</strong></li>
                    <li><strong>Tachyarrhythmias (very fast heart rates).</strong></li>
                    <li><strong>Hypertensive Crisis.</strong></li>
                    <li><strong>Extreme Exertion.</strong></li>
                    <li><strong>Cardiac Procedures:</strong> (e.g., angioplasty, surgery).</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms depend on the underlying cause. In AMI, symptoms include chest pain, shortness of breath, left arm pain. In other conditions, symptoms relate to the primary illness.</p>

        <h3>Low Troponins:</h3>
        <p>Normal or undetectable troponin levels indicate no significant ongoing cardiac muscle damage. For acute chest pain, a serial measurement showing consistently low levels (below the 99th percentile) can effectively rule out acute myocardial infarction.</p>
        <ul>
            <li><strong>Absence of Cardiac Injury.</strong></li>
            <li><strong>Effective Rule-Out of AMI:</strong> In emergency settings, serial low troponin values within a few hours are used to confidently exclude an acute heart attack.</li>
        </ul>
        <p>Extremely low levels are desirable, indicating a healthy heart or no current cardiac event.</p>

        <h3>Additional Information:</h3>
        <p>High-sensitivity troponin assays have revolutionized the diagnosis of AMI, allowing for earlier and more accurate detection. However, their high sensitivity means they can detect minor myocardial injury from a variety of causes, requiring careful clinical interpretation.</p>
        <p>Troponins are often measured in conjunction with:</p>
        <ul>
            <li>**BNP/NT-proBNP:** To assess for heart failure.</li>
            <li>**CK-MB:** An older cardiac marker, less specific than troponin but sometimes still used.</li>
            <li>**ECG (Electrocardiogram):** To look for electrical changes in the heart.</li>
            <li>**Imaging Studies:** (e.g., echocardiogram, cardiac MRI) to assess heart function and structure.</li>
        </ul>
    `,
    relatedBiomarkers: ['ck-mb', 'bnp', 'nt-probnp'] // Explicitly included NT-proBNP as it's often used interchangeably with BNP.
},
{
    id: 'bnp',
    name: 'BNP/NT-proBNP',
    description: 'Hormones released by the heart in response to stretching from heart failure.',
    type: 'Cardiac Marker',
    responsibleFor: 'Indicating cardiac stretch and dysfunction, particularly in heart failure.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Brain Natriuretic Peptide (BNP) and N-terminal pro-B-type Natriuretic Peptide (NT-proBNP) are **neurohormones** primarily produced and secreted by the cardiac ventricles in response to increased wall stress and volume overload, commonly seen in heart failure. They are critical **Cardiac Markers** used for the diagnosis, prognosis, and management of heart failure.</p>

        <h3>Role and Function:</h3>
        <p>BNP and NT-proBNP are part of the natriuretic peptide system, which helps regulate fluid and blood pressure. When the heart muscle cells (myocytes) are stretched, they release a precursor molecule, proBNP. ProBNP is then cleaved into two fragments: active BNP and inactive NT-proBNP. Both are released into the circulation, but NT-proBNP has a longer half-life and higher plasma concentration, making it a more stable and often preferred marker.</p>
        <p>Their main clinical utilities are:</p>
        <ul>
            <li><strong>Diagnosis of Heart Failure:</strong> Elevated levels are highly suggestive of heart failure, helping to differentiate cardiac shortness of breath from non-cardiac causes (e.g., lung disease).</li>
            <li><strong>Prognosis and Risk Stratification:</strong> Higher levels correlate with worse prognosis and increased risk of adverse events in heart failure patients.</li>
            <li><strong>Monitoring Treatment Effectiveness:</strong> Decreasing levels can indicate a positive response to heart failure therapy.</li>
        </ul>
        <p>These hormones promote natriuresis (sodium excretion), diuresis (water excretion), and vasodilation, working to reduce cardiac workload and blood volume.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pg/mL (picogram per milliliter) or ng/L (nanogram per liter)</li>
            <li><em>Note: pg/mL and ng/L are numerically equivalent.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>The cut-off values for BNP and NT-proBNP for diagnosing heart failure are often age-dependent, as levels naturally increase with age.</p>
        <ul>
            <li><strong>BNP:</strong>
                <ul>
                    <li>Generally, < 100 pg/mL is considered normal and helps rule out acute heart failure.</li>
                </ul>
            </li>
            <li><strong>NT-proBNP (Age-dependent considerations):</strong>
                <ul>
                    <li><strong>Under 75 years:</strong> < 125 pg/mL (helps rule out acute heart failure).</li>
                    <li><strong>75 years and older:</strong> < 450 pg/mL (helps rule out acute heart failure).</li>
                </ul>
            </li>
            <li><em>Cut-off values for diagnosing chronic heart failure are often lower. Laboratories may have slightly different reference ranges.</em></li>
        </ul>

        <h3>High BNP/NT-proBNP:</h3>
        <p>Elevated levels indicate increased cardiac stress and stretching of the heart muscle, most commonly due to heart failure.</p>
        <ul>
            <li><strong>Heart Failure (Acute or Chronic):</strong> The most common cause. Levels correlate with the severity of heart failure.</li>
            <li><strong>Other Cardiac Conditions causing Strain:</strong>
                <ul>
                    <li><strong>Acute Coronary Syndrome / Myocardial Infarction:</strong> Cardiac muscle damage can cause release.</li>
                    <li><strong>Valvular Heart Disease.</strong></li>
                    <li><strong>Atrial Fibrillation.</strong></li>
                    <li><strong>Cardiomyopathy.</strong></li>
                    <li><strong>Pulmonary Hypertension / Pulmonary Embolism:</strong> Causes right heart strain.</li>
                </ul>
            </li>
            <li><strong>Non-Cardiac Conditions:</strong>
                <ul>
                    <li><strong>Kidney Failure:</strong> Reduced clearance of the peptides, leading to higher levels.</li>
                    <li><strong>Sepsis.</strong></li>
                    <li><strong>Severe Lung Disease (e.g., COPD exacerbation, severe pneumonia).</strong></li>
                    <li><strong>Advanced Age:</strong> Levels naturally increase with age.</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms are typically those of heart failure, such as shortness of breath (dyspnea), swelling in legs (edema), and fatigue.</p>

        <h3>Low BNP/NT-proBNP:</h3>
        <p>Normal or low BNP/NT-proBNP levels indicate minimal cardiac stretch or dysfunction, making heart failure highly unlikely as a cause for symptoms like shortness of breath.</p>
        <ul>
            <li><strong>Absence of Heart Failure.</strong></li>
            <li><strong>Other Causes of Symptoms:</strong> If a patient has symptoms like shortness of breath but low BNP/NT-proBNP, it suggests a non-cardiac cause (e.g., lung disease, anxiety).</li>
        </ul>
        <p>Low levels are generally desirable, indicating healthy cardiac function.</p>

        <h3>Additional Information:</h3>
        <p>BNP and NT-proBNP are invaluable tools in the emergency department for ruling out heart failure in patients presenting with dyspnea, and in chronic care for monitoring heart failure progression and response to therapy. They are often used in conjunction with:</p>
        <ul>
            <li>**Troponins:** To assess for myocardial injury (heart attack).</li>
            <li>**Echocardiogram:** Imaging to assess heart structure and function (ejection fraction).</li>
            <li>**ECG (Electrocardiogram):** To look for electrical abnormalities.</li>
            <li>**Chest X-ray:** To assess for fluid in the lungs (pulmonary edema).</li>
        </ul>
        <p>Interpreting BNP/NT-proBNP requires consideration of age, kidney function, and other co-existing medical conditions.</p>
    `,
    relatedBiomarkers: ['troponins', 'echocardiogram'] // Added echocardiogram as it's directly related to heart function assessment.
},
{
    id: 'homocysteine',
    name: 'Homocysteine',
    description: 'An amino acid. High levels are a risk factor for cardiovascular disease and stroke.',
    type: 'Cardiovascular Risk Marker',
    responsibleFor: 'An intermediate amino acid in methionine metabolism. High levels are associated with increased cardiovascular risk.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Homocysteine is a **sulfur-containing amino acid** that is an intermediate product in the metabolism of methionine, an essential amino acid. It is not incorporated into proteins. Elevated levels of homocysteine in the blood are recognized as an independent **Cardiovascular Risk Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Homocysteine is formed when methionine loses its methyl group. It can then either be re-methylated back to methionine (requiring folate and vitamin B12) or converted into other sulfur-containing compounds (like cysteine, requiring vitamin B6). These metabolic pathways are crucial for cell function and detoxification.</p>
        <p>When these pathways are impaired, typically due to deficiencies in the necessary B vitamins (folate, B12, B6) or certain genetic defects, homocysteine can accumulate. High levels are thought to be damaging to the inner lining of blood vessels (endothelium), promoting inflammation, oxidative stress, and dysfunction, thereby contributing to atherosclerosis and thrombotic events.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/L (milligram per liter)</li>
            <li><em>Note: To convert µmol/L to mg/L, multiply by 0.1357. To convert mg/L to µmol/L, divide by 0.1357. For example, 15 µmol/L is approximately 2.04 mg/L.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Homocysteine levels are typically measured in a fasting state.</p>
        <ul>
            <li><strong>Adults (Fasting):</strong> 5 - 15 µmol/L (0.5 - 1.5 mg/L)</li>
            <li><em>Optimal levels may be considered below 10 µmol/L for cardiovascular health. Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High Homocysteine (Hyperhomocysteinemia):</h3>
        <p>Elevated homocysteine levels are associated with an increased risk of various cardiovascular and neurological conditions.</p>
        <ul>
            <li><strong>Nutritional Deficiencies:</strong> The most common cause.
                <ul>
                    <li><strong>Folate (Vitamin B9) Deficiency.</strong></li>
                    <li><strong>Vitamin B12 Deficiency.</strong></li>
                    <li><strong>Vitamin B6 Deficiency (less common).</strong></li>
                </ul>
            </li>
            <li><strong>Kidney Disease:</strong> Impaired renal clearance of homocysteine.</li>
            <li><strong>Genetic Disorders:</strong> (e.g., MTHFR gene mutations, homocystinuria - rare but severe defect in homocysteine metabolism leading to very high levels and severe vascular disease).</li>
            <li><strong>Hypothyroidism.</strong></li>
            <li><strong>Certain Medications:</strong> (e.g., methotrexate, nitrous oxide, fibrates, niacin).</li>
            <li><strong>Smoking and Alcohol Consumption.</strong></li>
        </ul>
        <p>Elevated homocysteine is a risk factor for:</p>
        <ul>
            <li><strong>Atherosclerosis and Coronary Artery Disease (CAD).</strong></li>
            <li><strong>Stroke (Ischemic).</strong></li>
            <li><strong>Peripheral Artery Disease.</strong></li>
            <li><strong>Venous Thromboembolism (Blood Clots).</strong></li>
            <li><strong>Cognitive Impairment and Dementia (including Alzheimer's disease).</strong></li>
            <li><strong>Neural Tube Defects (in pregnancy).</strong></li>
        </ul>
        <p>Symptoms are often non-specific or related to the underlying vascular complications.</p>

        <h3>Low Homocysteine:</h3>
        <p>Low homocysteine levels are generally not clinically significant and are considered desirable.</p>
        <ul>
            <li><strong>Optimal Nutritional Status regarding B vitamins.</strong></li>
        </ul>
        <p>No known adverse health effects are associated with low homocysteine.</p>

        <h3>Additional Information:</h3>
        <p>Homocysteine testing is typically recommended for individuals with a personal or family history of premature cardiovascular disease, stroke, or unexplained blood clots, especially if traditional risk factors are absent. It is also often part of a workup for B vitamin deficiencies.</p>
        <p>Monitoring homocysteine levels can help guide supplementation with **Folate, Vitamin B12, and Vitamin B6** to lower levels and potentially reduce cardiovascular risk, although the clinical benefits of such supplementation for reducing cardiovascular events are still debated and require further research.</p>
        <p>It is interpreted in the context of other cardiovascular risk factors like **Cholesterol (LDL, HDL), Triglycerides, and hs-CRP**.</p>
    `,
    relatedBiomarkers: ['cholesterol', 'vitamin-b12', 'folic-acid', 'vitamin-b6', 'hs-crp'] // Added Vitamin B6 and hs-CRP.
},
{
    id: 'lpa',
    name: 'Lipoprotein(a) - Lp(a)',
    description: 'A type of LDL cholesterol, genetically determined. High levels are an independent risk factor for heart disease.',
    type: 'Cardiovascular Risk Marker',
    responsibleFor: 'Genetically determined lipoprotein, an independent risk factor for atherosclerosis and thrombotic events.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Lipoprotein(a) [Lp(a)] is a unique and complex **lipoprotein** particle structurally similar to low-density lipoprotein (LDL) but with an additional protein called apolipoprotein(a) [apo(a)] covalently attached to apoB-100. Levels of Lp(a) in the blood are largely **genetically determined** and remain relatively stable throughout an individual's life. It is recognized as an independent **Cardiovascular Risk Marker**.</p>

        <h3>Role and Function:</h3>
        <p>The precise physiological function of Lp(a) is not fully understood. However, its structural similarity to plasminogen (a key protein in fibrinolysis, the breakdown of blood clots) and LDL-cholesterol suggests a dual role in both atherosclerosis and thrombosis.</p>
        <p>In pathology, high Lp(a) is considered:</p>
        <ul>
            <li><strong>Pro-atherogenic:</strong> Like LDL, Lp(a) can contribute to the formation of atherosclerotic plaques in arterial walls. Its ability to oxidize and accumulate in the vessel wall contributes to inflammation and foam cell formation.</li>
            <li><strong>Pro-thrombotic / Anti-fibrinolytic:</strong> Due to apo(a)'s homology with plasminogen, Lp(a) can interfere with the body's natural ability to dissolve blood clots, increasing the risk of thrombosis.</li>
        </ul>
        <p>Unlike other lipoproteins, Lp(a) levels are largely unresponsive to lifestyle interventions (diet, exercise) or most lipid-lowering medications (statins usually have minimal effect).</p>

        <h3>Units of Measurement:</h3>
        <p>Lp(a) can be measured by mass (mg/dL) or by molar concentration (nmol/L). Molar concentration (nmol/L) is often preferred as it accounts for the size variability of the apo(a) component.</p>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional Units:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Note: Conversion factor varies due to size heterogeneity of apo(a). A common approximate conversion is 1 mg/dL $\approx$ 2.4 nmol/L.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>There is no universally agreed-upon "normal" range for Lp(a), but risk thresholds are used.</p>
        <ul>
            <li><strong>Adults:</strong> < 75 nmol/L (or < 30 mg/dL) is generally considered low risk.</li>
            <li><em>Levels are largely genetically determined and are not significantly affected by lifestyle changes.</em></li>
            <li><em>Higher levels (e.g., > 125 nmol/L or > 50 mg/dL) are associated with significantly increased cardiovascular risk.</em></li>
        </ul>

        <h3>High Lp(a) (Elevated Lipoprotein(a)):</h3>
        <p>Elevated Lp(a) indicates a higher genetic predisposition to various cardiovascular events, even in individuals with otherwise optimal cholesterol levels.</p>
        <ul>
            <li><strong>Increased Risk of Atherosclerotic Cardiovascular Disease (ASCVD):</strong> Including coronary artery disease (CAD), myocardial infarction (heart attack), and stroke.</li>
            <li><strong>Aortic Stenosis:</strong> Lp(a) contributes to calcification and narrowing of the aortic valve.</li>
            <li><strong>Increased Risk of Thrombotic Events:</strong> Blood clots.</li>
            <li><strong>Familial Hypercholesterolemia:</strong> Often co-occurs with elevated Lp(a).</li>
            <li><strong>Kidney Disease:</strong> Levels can increase in chronic kidney disease.</li>
            <li><strong>Hypothyroidism.</strong></li>
        </ul>
        <p>High Lp(a) often does not cause direct symptoms but increases the risk of cardiovascular events, leading to symptoms like chest pain (angina), shortness of breath, or symptoms of stroke.</p>

        <h3>Low Lp(a) (Normal/Desirable Lipoprotein(a)):</h3>
        <p>Low Lp(a) levels are desirable and indicate a lower genetic cardiovascular risk from this specific marker.</p>
        <ul>
            <li><strong>Lower Genetic Predisposition to Lp(a)-Related Cardiovascular Disease.</strong></li>
        </ul>
        <p>No known adverse effects are associated with low Lp(a).</p>

        <h3>Additional Information:</h3>
        <p>Lp(a) testing is typically recommended for individuals with:</p>
        <ul>
            <li>**Family history of premature cardiovascular disease.**</li>
            <li>**Personal history of ASCVD despite optimal traditional risk factors.**</li>
            <li>**Recurrent cardiovascular events despite aggressive therapy.**</li>
            <li>**Familial hypercholesterolemia.**</li>
        </ul>
        <p>Management of elevated Lp(a) often focuses on aggressive control of other traditional cardiovascular risk factors (LDL-C, hypertension, diabetes) and, increasingly, newer medications specifically targeting Lp(a) are being developed. Lp(a) is considered alongside overall **Cholesterol Panel (Total Cholesterol, LDL-C, HDL-C, Triglycerides)** to assess comprehensive lipid risk.</p>
    `,
    relatedBiomarkers: ['cholesterol', 'ldl-cholesterol', 'hdl-cholesterol', 'triglycerides'] // Explicitly listed components of a lipid panel.
},
{
    id: 'psa',
    name: 'Prostate-Specific Antigen (PSA) - Total & Free',
    description: 'A protein produced by the prostate gland. Used for prostate cancer screening.',
    type: 'Tumor Marker',
    responsibleFor: 'A glycoprotein produced by prostate cells; elevated in prostate cancer and benign prostate conditions.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Prostate-Specific Antigen (PSA) is a **glycoprotein** produced almost exclusively by the epithelial cells of the prostate gland. It functions as a serine protease that helps to liquefy seminal fluid. PSA is the most widely used **Tumor Marker** for prostate cancer screening, diagnosis, and monitoring.</p>
        <p>PSA exists in two main forms in the blood: **Total PSA** (the sum of free and bound PSA) and **Free PSA** (unbound PSA).</p>

        <h3>Role and Function:</h3>
        <p>While PSA is associated with prostate cancer, it is not specific to cancer. Any condition that disrupts the prostate gland's architecture, allowing PSA to leak into the bloodstream, can elevate PSA levels. This includes benign conditions as well as cancer.</p>
        <p>The measurement of PSA is used for:</p>
        <ul>
            <li><strong>Prostate Cancer Screening:</strong> To detect potential prostate cancer in asymptomatic men (controversial due to risk of overdiagnosis and overtreatment).</li>
            <li><strong>Diagnosis Aid:</strong> When a man has symptoms suggestive of prostate disease or an abnormal digital rectal exam (DRE).</li>
            <li><strong>Monitoring Prostate Cancer:</strong> To track response to treatment and detect recurrence after surgery or radiation.</li>
            <li><strong>Monitoring Benign Prostatic Hyperplasia (BPH):</strong> To track prostate growth over time.</li>
        </ul>
        <p>The **Free PSA to Total PSA ratio** helps differentiate between benign prostate conditions and prostate cancer, especially when the total PSA is in the "grey zone" (e.g., 4-10 ng/mL).</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> ng/mL (nanogram per milliliter)</li>
            <li><strong>Conventional Units:</strong> ng/mL (nanogram per milliliter), sometimes U/mL (units per milliliter)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>PSA levels generally increase with age and prostate size. No single "normal" value applies to all men.</p>
        <ul>
            <li><strong>Total PSA:</strong> < 4.0 ng/mL (Traditionally considered the upper limit, but age-specific cutoffs are often used, with lower values for younger men and slightly higher for older men).</li>
            <li><strong>Free PSA Ratio (Free PSA / Total PSA):</strong> Important for interpretation in the "grey zone" (Total PSA 4-10 ng/mL):
                <ul>
                    <li><strong>Higher Free PSA Ratio (e.g., > 25%):</strong> Generally suggests a higher likelihood of benign prostatic hyperplasia (BPH) rather than cancer.</li>
                    <li><strong>Lower Free PSA Ratio (e.g., < 10%):</strong> Suggests a higher risk of prostate cancer.</li>
                </ul>
            </li>
            <li><em>These cutoffs are guidelines, and individual risk assessment is crucial.</em></li>
        </ul>

        <h3>High Total PSA:</h3>
        <p>Elevated Total PSA indicates an issue with the prostate gland, which could be benign or malignant.</p>
        <ul>
            <li><strong>Prostate Cancer:</strong> The primary concern, but not diagnostic on its own. Higher PSA levels generally correlate with a higher likelihood of cancer, but even very high levels can be benign.</li>
            <li><strong>Benign Prostatic Hyperplasia (BPH):</strong> Non-cancerous enlargement of the prostate, a very common cause of elevated PSA in older men.</li>
            <li><strong>Prostatitis:</strong> Inflammation or infection of the prostate gland, which can cause a significant and often rapid increase in PSA.</li>
            <li><strong>Recent Ejaculation:</strong> Can cause transient PSA elevation (advise abstaining 2-3 days before test).</li>
            <li><strong>Prostate Manipulation:</strong> (e.g., digital rectal exam (DRE), prostate biopsy, cystoscopy, catheterization) can cause temporary PSA elevation.</li>
            <li><strong>Age:</strong> PSA naturally increases with age, even in healthy men.</li>
        </ul>
        <p>Symptoms may include urinary difficulties (frequency, urgency, weak stream), blood in urine or semen, or bone pain (if cancer has spread).</p>

        <h3>Low Total PSA:</h3>
        <p>Normal or low Total PSA levels are generally desirable, indicating a lower likelihood of significant prostate disease.</p>
        <ul>
            <li><strong>No Significant Prostate Issues.</strong></li>
            <li><strong>Successful Prostate Cancer Treatment:</strong> After radical prostatectomy, PSA should drop to undetectable levels. Any detectable PSA afterward indicates recurrence. After radiation, it should drop to a nadir.</li>
            <li><strong>Limitations:</strong> A low PSA does not definitively rule out prostate cancer, especially in aggressive but non-PSA-producing tumors, or very early-stage cancers.</li>
        </ul>
        <p>No symptoms are associated with low PSA.</p>

        <h3>Additional Information:</h3>
        <p>PSA testing is a complex topic due to the potential for overdiagnosis and overtreatment of clinically insignificant prostate cancers. Shared decision-making between patient and doctor is crucial, considering age, family history, ethnicity, and individual risk factors.</p>
        <p>Other prostate cancer markers are being researched and sometimes used, including:</p>
        <ul>
            <li>**Prostate Health Index (PHI):** Combines total PSA, free PSA, and a third form of PSA ([-2]proPSA) to improve prostate cancer detection.</li>
            <li>**4Kscore Test:** Combines total PSA, free PSA, intact PSA, and human kallikrein 2 (hK2) with clinical factors to predict the risk of high-grade prostate cancer.</li>
            <li>**Prostate Cancer Antigen 3 (PCA3):** A non-coding RNA marker found in urine after DRE, more specific for prostate cancer than PSA.</li>
            <li>**MRI of the Prostate:** Used to visualize suspicious areas for targeted biopsy.</li>
        </ul>
        <p>PSA testing is often part of a broader discussion about men's health and cancer screening.</p>
    `,
    relatedBiomarkers: ['phi', '4kscore', 'pca3'] // Added these specific prostate cancer markers.
},
{
    id: 'ca-125',
    name: 'CA-125',
    description: 'A protein marker primarily used for monitoring ovarian cancer treatment and recurrence.',
    type: 'Tumor Marker',
    responsibleFor: 'A glycoprotein associated with various cancers, particularly ovarian cancer.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>CA-125 (Cancer Antigen 125 or Carbohydrate Antigen 125) is a **glycoprotein** found on the surface of many ovarian cancer cells and, to a lesser extent, on other normal and cancerous cells. It is released into the bloodstream and can be measured as a **Tumor Marker**, primarily used in the management of ovarian cancer.</p>

        <h3>Role and Function:</h3>
        <p>While CA-125 is most closely associated with ovarian cancer, its expression is not exclusive to malignant cells. It can be found on normal cells of the peritoneum, pleura, pericardium, and reproductive organs (fallopian tubes, uterus, cervix). Any irritation or inflammation of these tissues can cause an elevation in CA-125 levels.</p>
        <p>The primary clinical utilities of CA-125 are:</p>
        <ul>
            <li><strong>Monitoring Ovarian Cancer Treatment:</strong> To assess the effectiveness of chemotherapy and surgery. Declining levels usually indicate a positive response.</li>
            <li><strong>Detecting Ovarian Cancer Recurrence:</strong> Rising levels after treatment can signal disease recurrence.</li>
            <li><strong>Risk Assessment for Ovarian Cancer:</strong> Used in algorithms (e.g., Risk of Ovarian Malignancy Algorithm [ROMA] or Risk of Malignancy Index [RMI]) that combine CA-125 with other markers (like HE4) and menopausal status to estimate the probability of malignancy in women with pelvic masses.</li>
            <li><strong>NOT for General Population Screening:</strong> Due to its low specificity (elevation in many benign conditions and lack of elevation in early-stage cancers), CA-125 is NOT recommended for general screening of asymptomatic women.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/mL (units per milliliter) or IU/mL (international units per milliliter)</li>
            <li><em>Note: U/mL and IU/mL are often used interchangeably.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>The reference value is a threshold above which levels are considered elevated, although this does not automatically indicate cancer.</p>
        <ul>
            <li><strong>Adult Female:</strong> < 35 U/mL (or IU/mL)</li>
            <li><em>The upper limit of normal can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High CA-125 (Elevated CA-125):</h3>
        <p>Elevated CA-125 levels can indicate ovarian cancer, but are also commonly seen in many non-cancerous conditions, which is why it is not suitable for population screening.</p>
        <ul>
            <li><strong>Ovarian Cancer:</strong> Especially epithelial ovarian cancer (90% of advanced cases, but only ~50% of early-stage cases show elevation). Useful for monitoring.</li>
            <li><strong>Other Cancers:</strong> (e.g., pancreatic cancer, lung cancer, breast cancer, colorectal cancer, uterine cancer, fallopian tube cancer).</li>
            <li><strong>Benign Gynecological Conditions:</strong>
                <ul>
                    <li><strong>Endometriosis:</strong> A common cause of elevated CA-125.</li>
                    <li><strong>Uterine Fibroids.</strong></li>
                    <li><strong>Pelvic Inflammatory Disease (PID).</strong></li>
                    <li><strong>Ovarian Cysts (non-cancerous).</strong></li>
                </ul>
            </li>
            <li><strong>Physiological Conditions:</strong>
                <ul>
                    <li><strong>Menstruation.</strong></li>
                    <li><strong>Pregnancy (especially first trimester).</strong></li>
                </ul>
            </li>
            <li><strong>Other Inflammatory Conditions:</strong> (e.g., peritonitis, pleuritis, pancreatitis, liver cirrhosis).</li>
            <li><strong>Any condition causing irritation of the peritoneum or pleural cavity.</strong></li>
        </ul>
        <p>Symptoms are dependent on the underlying condition. In ovarian cancer, these can be vague (bloating, abdominal pain, changes in bowel habits).</p>

        <h3>Low CA-125 (Normal/Desirable CA-125):</h3>
        <p>Normal or low CA-125 levels are desirable but do not rule out cancer, especially in early stages.</p>
        <ul>
            <li><strong>No Significant CA-125-Associated Disease.</strong></li>
            <li><strong>Successful Treatment Response:</strong> A significant drop or normalization of CA-125 levels after ovarian cancer treatment suggests effective therapy.</li>
            <li><strong>Limitations:</strong> A normal CA-125 does not exclude ovarian cancer, particularly in early stages, or in certain types of ovarian cancer that do not produce CA-125.</li>
        </ul>
        <p>No symptoms are associated with low CA-125.</p>

        <h3>Additional Information:</h3>
        <p>Due to its lack of specificity, CA-125 is most valuable when used in a serial fashion to monitor known ovarian cancer or in combination with other markers for risk assessment of a pelvic mass.</p>
        <p>Related biomarkers often used in conjunction with CA-125 include:</p>
        <ul>
            <li>**HE4 (Human Epididymis Protein 4):** Often elevated in ovarian cancer and has higher specificity than CA-125 in differentiating benign from malignant pelvic masses. It is a key component of the ROMA algorithm.</li>
            <li>**ROMA (Risk of Ovarian Malignancy Algorithm):** An algorithm that combines CA-125, HE4, and menopausal status to calculate a score indicating the risk of ovarian cancer.</li>
            <li>**Ultrasound or other imaging studies:** Essential for evaluating pelvic masses.</li>
        </ul>
        <p>Genetic testing (e.g., BRCA1/2) may also be considered for women with a family history of ovarian or breast cancer.</p>
    `,
    relatedBiomarkers: ['he4', 'roma'] 
    },
    {
    id: 'cea',
    name: 'Carcinoembryonic Antigen (CEA)',
    description: 'A protein marker associated with various cancers, especially colorectal cancer.',
    type: 'Tumor Marker',
    responsibleFor: 'A glycoprotein found in certain cancers, used primarily for monitoring recurrence and treatment response.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Carcinoembryonic Antigen (CEA) is a **glycoprotein** normally produced during fetal development. Production usually stops before birth. In adults, elevated levels of CEA can be associated with various types of cancer, particularly **colorectal cancer**, and also with some non-cancerous conditions. It is primarily used as a **Tumor Marker** for monitoring, rather than screening.</p>

        <h3>Role and Function:</h3>
        <p>The exact physiological function of CEA in adults is not fully understood, but it is thought to play a role in cell adhesion. In cancer, CEA is overexpressed and shed into the bloodstream, making it a detectable marker.</p>
        <p>The primary clinical utilities of CEA measurement are:</p>
        <ul>
            <li><strong>Monitoring Colorectal Cancer:</strong> After surgical removal of colorectal cancer, serial CEA measurements are used to detect recurrence and to monitor the effectiveness of chemotherapy. A rising CEA level can indicate recurrence even before symptoms appear.</li>
            <li><strong>Prognosis:</strong> Pre-operative CEA levels can provide prognostic information in colorectal cancer; higher levels are generally associated with a more advanced stage and poorer prognosis.</li>
            <li><strong>Other Cancers:</strong> May be elevated in other cancers, including lung, breast, pancreatic, gastric, and ovarian cancers, and can be used for monitoring these in selected cases.</li>
            <li><strong>NOT for Screening:</strong> Due to its low specificity and sensitivity for early-stage cancer, CEA is generally not recommended for screening the general population for cancer.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> ng/mL (nanogram per milliliter)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference values for CEA vary, particularly with smoking status.</p>
        <ul>
            <li><strong>Non-smokers:</strong> < 3.0 ng/mL</li>
            <li><strong>Smokers:</strong> < 5.0 ng/mL</li>
            <li><em>Reference ranges can vary slightly between laboratories.</em></li>
        </ul>

        <h3>High CEA (Elevated Carcinoembryonic Antigen):</h3>
        <p>Elevated CEA levels are often seen in malignancy but can also occur in benign conditions.</p>
        <ul>
            <li><strong>Cancers (Malignant Conditions):</strong>
                <ul>
                    <li><strong>Colorectal Cancer:</strong> Most commonly associated with CEA, particularly in advanced or recurrent disease.</li>
                    <li><strong>Lung Cancer.</strong></li>
                    <li><strong>Breast Cancer.</strong></li>
                    <li><strong>Pancreatic Cancer.</strong></li>
                    <li><strong>Gastric (Stomach) Cancer.</strong></li>
                    <li><strong>Ovarian Cancer.</strong></li>
                    <li><strong>Medullary Thyroid Carcinoma.</strong></li>
                </ul>
            </li>
            <li><strong>Non-Cancerous Conditions (Benign Conditions):</strong>
                <ul>
                    <li><strong>Smoking:</strong> Chronic smokers often have moderately elevated CEA levels (typically < 10 ng/mL) that normalize after quitting.</li>
                    <li><strong>Inflammatory Bowel Disease (IBD):</strong> (e.g., Crohn's disease, ulcerative colitis).</li>
                    <li><strong>Liver Disease:</strong> (e.g., cirrhosis, hepatitis).</li>
                    <li><strong>Pancreatitis.</strong></li>
                    <li><strong>Cholecystitis (gallbladder inflammation).</strong></li>
                    <li><strong>Benign Breast Disease.</strong></li>
                    <li><strong>Peptic Ulcer Disease.</strong></li>
                </ul>
            </li>
        </ul>
        <p>Symptoms are dependent on the underlying condition (e.g., changes in bowel habits, abdominal pain, weight loss in colorectal cancer; respiratory symptoms in lung cancer).</p>

        <h3>Low CEA (Normal/Desirable Carcinoembryonic Antigen):</h3>
        <p>Normal or low CEA levels are desirable, indicating a lower likelihood of cancer, but do not rule out malignancy, especially in early stages.</p>
        <ul>
            <li><strong>No Significant CEA-Associated Disease.</strong></li>
            <li><strong>Successful Cancer Treatment:</strong> A significant drop or normalization of CEA after cancer treatment (e.g., surgery for colorectal cancer) indicates effective therapy.</li>
            <li><strong>Limitations:</strong> Some cancers do not produce CEA, and early-stage cancers may have normal CEA levels. Therefore, a low CEA does not exclude cancer.</li>
        </ul>
        <p>No symptoms are associated with low CEA.</p>

        <h3>Additional Information:</h3>
        <p>CEA should always be interpreted in the clinical context of the patient's symptoms, history, and other diagnostic tests. Serial measurements are more informative than a single value, particularly for monitoring.</p>
        <p>Related biomarkers vary depending on the suspected cancer type:</p>
        <ul>
            <li>**CA 19-9:** For pancreatic and gastric cancers.</li>
            <li>**CA 125:** For ovarian cancer.</li>
            <li>**CA 15-3:** For breast cancer.</li>
            <li>**AFP (Alpha-Fetoprotein):** For liver and germ cell tumors.</li>
            <li>**Imaging Studies:** (e.g., CT scans, MRI, PET scans) are essential for staging and detecting recurrence.</li>
            <li>**Biopsy:** Definitive diagnosis of cancer.</li>
        </ul>
    `,
    relatedBiomarkers: ['ca-19-9', 'ca-125', 'ca-15-3', 'afp'] // Broadened related markers to other common tumor markers.
},
{
    id: 'afp',
    name: 'Alpha-Fetoprotein (AFP)',
    description: 'A protein produced by the fetal liver and yolk sac. Used as a tumor marker and in prenatal screening.',
    type: 'Tumor Marker / Prenatal Marker',
    responsibleFor: 'A protein produced by the developing fetus. In adults, elevated levels are tumor markers.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Alpha-Fetoprotein (AFP) is a **glycoprotein** that is normally produced in large quantities by the fetal liver and yolk sac during embryonic development. Its levels significantly decrease after birth. In adults, elevated AFP levels are typically associated with certain types of cancer or severe liver disease. It serves a dual role as a **Tumor Marker** and a **Prenatal Marker**.</p>

        <h3>Role and Function:</h3>
        <p>During fetal development, AFP is the major plasma protein, thought to function as a fetal albumin, binding and transporting various substances. After birth, AFP levels drop rapidly, reaching adult levels by about 1 year of age.</p>
        <p>In clinical practice, AFP is used for:</p>
        <ul>
            <li><strong>Tumor Marker:</strong>
                <ul>
                    <li><strong>Hepatocellular Carcinoma (HCC - Liver Cancer):</strong> AFP is the primary tumor marker used for screening high-risk individuals (e.g., those with cirrhosis) and for monitoring treatment response and recurrence.</li>
                    <li><strong>Germ Cell Tumors:</strong> Elevated in some germ cell tumors, particularly non-seminomatous testicular cancer and ovarian germ cell tumors. Useful for diagnosis, staging, and monitoring.</li>
                </ul>
            </li>
            <li><strong>Prenatal Screening:</strong> Measured in maternal serum (Maternal Serum AFP or MSAFP) as part of prenatal screening tests during the second trimester of pregnancy (around weeks 15-20) to assess the risk of certain birth defects and chromosomal abnormalities.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> ng/mL (nanogram per milliliter)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference values differ significantly between non-pregnant adults and pregnant individuals.</p>
        <ul>
            <li><strong>Adults (Non-pregnant):</strong> < 10 ng/mL (or < 10 µg/L, which is equivalent)</li>
            <li><strong>Pregnant Individuals:</strong> Levels are significantly higher and vary by gestational age. Interpretation in pregnancy uses multiples of the median (MoM) adjusted for gestational age, maternal weight, and other factors.</li>
            <li><em>Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High AFP (Elevated Alpha-Fetoprotein):</h3>
        <p>The interpretation of high AFP depends heavily on the clinical context (adult vs. pregnancy).</p>
        <ul>
            <li><strong>In Adults (Non-pregnant):</strong>
                <ul>
                    <li><strong>Hepatocellular Carcinoma (Liver Cancer):</strong> A significant elevation is highly suggestive of HCC, especially in high-risk patients.</li>
                    <li><strong>Germ Cell Tumors:</strong> (e.g., non-seminomatous testicular tumors, yolk sac tumors of the ovary). Often elevated along with hCG.</li>
                    <li><strong>Metastatic Liver Cancer:</strong> Some non-liver cancers that have spread to the liver can also cause mild AFP elevation.</li>
                    <li><strong>Severe Liver Disease (Non-cancerous):</strong> (e.g., acute and chronic hepatitis, cirrhosis, liver necrosis). Regenerative processes in the liver can lead to modest AFP elevation, usually < 500 ng/mL.</li>
                </ul>
            </li>
            <li><strong>In Pregnancy (Maternal Serum AFP):</strong>
                <ul>
                    <li><strong>High Levels:</strong> Can suggest neural tube defects (e.g., spina bifida, anencephaly), abdominal wall defects, multiple gestation (twins, triplets), or miscalculation of gestational age.</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms are dependent on the underlying condition (e.g., abdominal pain, jaundice, weight loss in liver cancer; symptoms related to pregnancy complications).</p>

        <h3>Low AFP (Normal/Desirable Alpha-Fetoprotein):</h3>
        <p>In adults, a low AFP is desirable. In pregnancy, abnormally low levels can be significant.</p>
        <ul>
            <li><strong>Adults (Non-pregnant):</strong> Normal or negative result; desirable, indicating no significant AFP-producing tumor or severe liver disease. Does not rule out all cancers, as many cancers do not produce AFP.</li>
            <li><strong>In Pregnancy (Maternal Serum AFP):</strong>
                <ul>
                    <li><strong>Low Levels:</strong> Can suggest an increased risk for Down syndrome (Trisomy 21) or other chromosomal abnormalities. Often interpreted as part of a quad screen or other prenatal screening panels alongside hCG, unconjugated estriol, and inhibin A.</li>
                </ul>
            </li>
        </ul>
        <p>No symptoms are associated with low AFP in adults. In pregnancy, it suggests a need for further diagnostic testing.</p>

        <h3>Additional Information:</h3>
        <p>AFP testing for tumor monitoring is often performed in conjunction with imaging studies (ultrasound, CT, MRI) for diagnosis and staging. For prenatal screening, AFP is part of a panel and requires careful interpretation and follow-up with genetic counseling and further diagnostic tests (e.g., amniocentesis, detailed ultrasound) if abnormal.</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**hCG (Human Chorionic Gonadotropin):** Often elevated with AFP in germ cell tumors; also a key marker in prenatal screening.</li>
            <li>**LDH (Lactate Dehydrogenase):** Another marker that can be elevated in germ cell tumors.</li>
            <li>**CA 19-9 and CEA:** Other GI-related tumor markers that might be assessed in liver cancer workup.</li>
            <li>**Unconjugated Estriol and Inhibin A:** Other components of the prenatal quad screen.</li>
        </ul>
    `,
    relatedBiomarkers: ['hcg', 'ldh', 'ca-19-9', 'cea', 'unconjugated-estriol', 'inhibin-a'] // Added LDH and the other quad screen components.
},
{
    id: 'ca-19-9',
    name: 'CA 19-9',
    description: 'A tumor marker primarily used for pancreatic cancer, also elevated in bile duct and gastric cancers.',
    type: 'Tumor Marker',
    responsibleFor: 'A carbohydrate antigen associated with pancreatic, biliary tract, and gastrointestinal cancers.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>CA 19-9 (Carbohydrate Antigen 19-9) is a **glycoprotein** related to the Lewis blood group antigen. It is found on the surface of some cancer cells, particularly those of the gastrointestinal tract, and can be shed into the bloodstream. It is primarily used as a **Tumor Marker** for pancreatic cancer, and also in bile duct and gastric cancers.</p>

        <h3>Role and Function:</h3>
        <p>While CA 19-9 is often elevated in certain cancers, it is not specific to cancer and can be elevated in various benign conditions involving the gastrointestinal and biliary systems. Its primary utility is in monitoring known malignancies rather than screening.</p>
        <p>Clinical uses of CA 19-9 include:</p>
        <ul>
            <li><strong>Monitoring Pancreatic Cancer:</strong> Used to assess response to treatment (chemotherapy, surgery) and to detect recurrence after surgery. Declining levels suggest a positive response, while rising levels may indicate progression or recurrence.</li>
            <li><strong>Prognosis in Pancreatic Cancer:</strong> High pre-treatment levels often correlate with more advanced disease and poorer prognosis.</li>
            <li><strong>Differentiation:</strong> Can sometimes help differentiate pancreatic cancer from other benign pancreatic or biliary conditions, especially in conjunction with imaging, though its diagnostic accuracy is limited.</li>
            <li><strong>Other Cancers:</strong> May also be elevated in cancers of the bile duct (cholangiocarcinoma), stomach (gastric), colon (colorectal), and sometimes liver or ovarian cancer.</li>
            <li><strong>NOT for Screening:</strong> CA 19-9 is not recommended for routine screening of the general population due to its low sensitivity for early-stage cancer and low specificity (false positives).</li>
        </ul>
        <p><em>Note: Individuals who are Lewis antigen negative (approximately 5-10% of the population) cannot produce CA 19-9, even if they have one of these cancers. In such cases, the marker is unreliable.</em></p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/mL (units per milliliter) or IU/mL (international units per milliliter)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>The generally accepted upper limit of normal for CA 19-9 is 37 U/mL.</p>
        <ul>
            <li><strong>Adults:</strong> < 37 U/mL (or IU/mL)</li>
            <li><em>Reference ranges can vary slightly between laboratories.</em></li>
        </ul>

        <h3>High CA 19-9 (Elevated CA 19-9):</h3>
        <p>Elevated CA 19-9 levels can be due to cancerous or non-cancerous conditions, especially those affecting the pancreas, liver, and biliary system.</p>
        <ul>
            <li><strong>Cancers (Malignant Conditions):</strong>
                <ul>
                    <li><strong>Pancreatic Cancer:</strong> The most common and significant association. Higher levels are often seen in advanced or metastatic disease.</li>
                    <li><strong>Bile Duct Cancer (Cholangiocarcinoma).</strong></li>
                    <li><strong>Colorectal Cancer.</strong></li>
                    <li><strong>Gastric (Stomach) Cancer.</strong></li>
                    <li><strong>Liver Cancer (Hepatocellular Carcinoma, though AFP is primary).</strong></li>
                    <li><strong>Ovarian Cancer.</strong></li>
                </ul>
            </li>
            <li><strong>Non-Cancerous Conditions (Benign Conditions):</strong>
                <ul>
                    <li><strong>Pancreatitis (acute or chronic):</strong> Inflammation of the pancreas.</li>
                    <li><strong>Cholangitis:</strong> Inflammation of the bile ducts.</li>
                    <li><strong>Gallstones / Biliary Obstruction.</strong></li>
                    <li><strong>Cirrhosis and other chronic liver diseases.</strong></li>
                    <li><strong>Cystic Fibrosis.</strong></li>
                    <li><strong>Thyroid Disease.</strong></li>
                </ul>
            </li>
        </ul>
        <p>Symptoms depend on the underlying condition (e.g., abdominal pain, jaundice, weight loss in pancreatic/biliary cancers; abdominal pain, nausea in pancreatitis/gallstones).</p>

        <h3>Low CA 19-9 (Normal/Desirable CA 19-9):</h3>
        <p>Normal or low CA 19-9 levels are desirable but do not rule out cancer, especially in early stages.</p>
        <ul>
            <li><strong>No Significant CA 19-9-Associated Disease.</strong></li>
            <li><strong>Successful Cancer Treatment:</strong> A significant drop or normalization of CA 19-9 after cancer treatment (e.g., surgery) indicates effective therapy.</li>
            <li><strong>Limitations:</strong> Some cancers (including pancreatic cancer) may not produce CA 19-9. Early-stage cancers may have normal levels. Individuals who are Lewis antigen negative will always have low/undetectable CA 19-9 even with cancer.</li>
        </ul>
        <p>No symptoms are associated with low CA 19-9.</p>

        <h3>Additional Information:</h3>
        <p>CA 19-9 should always be interpreted in conjunction with imaging studies (CT, MRI, endoscopic ultrasound) and biopsy results for diagnosis and staging of pancreatic or biliary cancers. Serial measurements are most useful for monitoring disease progression or treatment response.</p>
        <p>Related biomarkers that may be assessed alongside CA 19-9 include:</p>
        <ul>
            <li>**CEA (Carcinoembryonic Antigen):** Another general tumor marker, sometimes elevated in GI cancers.</li>
            <li>**AFP (Alpha-Fetoprotein):** Primary marker for liver cancer.</li>
            <li>**Bilirubin, Alkaline Phosphatase, GGT:** Liver function tests often elevated in biliary obstruction.</li>
        </ul>
    `,
    relatedBiomarkers: ['cea', 'afp', 'bilirubin', 'alkaline-phosphatase', 'ggt'] // Added liver function tests for relevance to biliary issues.
},
{
    id: 'ca-15-3',
    name: 'CA 15-3',
    description: 'A tumor marker primarily used for monitoring breast cancer treatment and recurrence.',
    type: 'Tumor Marker',
    responsibleFor: 'A mucin-like glycoprotein used primarily to monitor breast cancer patients.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>CA 15-3 (Cancer Antigen 15-3) is a **mucin-like glycoprotein** (MUC1) expressed on the surface of some cancer cells. It is shed into the bloodstream and serves as a **Tumor Marker**, predominantly used for monitoring patients with **breast cancer**.</p>

        <h3>Role and Function:</h3>
        <p>CA 15-3 is not specific enough for breast cancer screening or initial diagnosis, as it can be elevated in other cancers and in benign conditions. Its main utility is in established cases of breast cancer.</p>
        <p>The primary clinical uses of CA 15-3 include:</p>
        <ul>
            <li><strong>Monitoring Metastatic Breast Cancer:</strong> Used to track the effectiveness of treatment for advanced or metastatic breast cancer and to detect disease progression or recurrence. Rising levels often indicate disease progression, while falling levels suggest a positive response to therapy.</li>
            <li><strong>Detecting Recurrence:</strong> Can be used to monitor for breast cancer recurrence, particularly in patients with advanced disease.</li>
            <li><strong>Prognosis:</strong> Higher pre-treatment levels can be associated with a larger tumor burden and poorer prognosis in metastatic breast cancer.</li>
            <li><strong>NOT for Screening:</strong> CA 15-3 is not recommended for routine screening of asymptomatic women for breast cancer because it lacks sufficient sensitivity for early-stage disease and specificity (can be elevated in benign conditions).</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/mL (units per milliliter) or IU/mL (international units per milliliter)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>The generally accepted upper limit of normal for CA 15-3 is 30 U/mL.</p>
        <ul>
            <li><strong>Adults:</strong> < 30 U/mL (or IU/mL)</li>
            <li><em>Reference ranges can vary slightly between laboratories.</em></li>
        </ul>

        <h3>High CA 15-3 (Elevated CA 15-3):</h3>
        <p>Elevated CA 15-3 levels are most commonly associated with breast cancer, particularly when metastatic, but can also be elevated in other conditions.</p>
        <ul>
            <li><strong>Breast Cancer:</strong>
                <ul>
                    <li><strong>Metastatic Breast Cancer:</strong> Elevated in about 70-80% of patients with metastatic breast cancer, but less often in early-stage or localized disease.</li>
                    <li><strong>Recurrent Breast Cancer.</strong></li>
                </ul>
            </li>
            <li><strong>Other Cancers:</strong> (e.g., lung cancer, ovarian cancer, colon cancer, liver cancer, pancreatic cancer).</li>
            <li><strong>Benign Conditions:</strong>
                <ul>
                    <li><strong>Liver Disease:</strong> (e.g., hepatitis, cirrhosis).</li>
                    <li><strong>Benign Breast Conditions:</strong> (e.g., fibrocystic breast disease).</li>
                    <li><strong>Inflammatory Conditions.</strong></li>
                    <li><strong>Ovarian Cysts.</strong></li>
                </ul>
            </li>
        </ul>
        <p>Symptoms are dependent on the underlying condition. In metastatic breast cancer, symptoms relate to the site of metastases (e.g., bone pain, shortness of breath, neurological symptoms).</p>

        <h3>Low CA 15-3 (Normal/Desirable CA 15-3):</h3>
        <p>Normal or low CA 15-3 levels are desirable but do not rule out breast cancer, especially in early stages.</p>
        <ul>
            <li><strong>No Significant CA 15-3-Associated Disease.</strong></li>
            <li><strong>Successful Cancer Treatment:</strong> A significant drop or normalization of CA 15-3 after breast cancer treatment suggests effective therapy.</li>
            <li><strong>Limitations:</strong> Not all breast cancers produce CA 15-3. Early-stage localized breast cancer often has normal CA 15-3 levels. Therefore, a low level does not rule out the disease.</li>
        </ul>
        <p>No symptoms are associated with low CA 15-3.</p>

        <h3>Additional Information:</h3>
        <p>CA 15-3 is a tool to be used in conjunction with clinical assessment, physical examination, and imaging studies (mammograms, MRI, CT, PET scans) for breast cancer management. It is often part of a broader panel of markers or imaging for patients with breast cancer.</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**CA 27-29:** Another tumor marker structurally similar to CA 15-3, also used for monitoring breast cancer.</li>
            <li>**CEA (Carcinoembryonic Antigen):** Can sometimes be elevated in breast cancer, especially with metastatic disease.</li>
            <li>**Estrogen Receptor (ER), Progesterone Receptor (PR), HER2:** Biomarkers from tumor tissue, crucial for guiding breast cancer treatment.</li>
            <li>**Imaging Studies:** Such as mammography, ultrasound, MRI, CT scans, and PET scans are fundamental for diagnosis, staging, and monitoring breast cancer.</li>
        </ul>
    `,
    relatedBiomarkers: ['ca-27-29', 'cea', 'er-status', 'pr-status', 'her2-status'] // Added other relevant breast cancer markers and receptor statuses.
},
{
    id: 'hcg',
    name: 'Human Chorionic Gonadotropin (hCG)',
    description: 'A hormone produced during pregnancy. Also used as a tumor marker for certain cancers.',
    type: 'Pregnancy Hormone / Tumor Marker',
    responsibleFor: 'Maintaining pregnancy and used as a marker for germ cell tumors and gestational trophoblastic disease.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Human Chorionic Gonadotropin (hCG) is a **glycoprotein hormone** produced primarily by the trophoblast cells of the placenta during pregnancy. It is detectable in blood and urine very early in pregnancy, serving as the basis for most pregnancy tests. In non-pregnant individuals, elevated hCG can be a significant **Tumor Marker** for certain germ cell tumors and gestational trophoblastic disease.</p>

        <h3>Role and Function:</h3>
        <p>In pregnancy, hCG plays a crucial role in maintaining the corpus luteum, which in turn produces progesterone to support the uterine lining and early pregnancy. hCG levels rise rapidly in early pregnancy, typically doubling every 48-72 hours until a peak around 8-11 weeks, then gradually declining.</p>
        <p>In the context of tumor markers, certain cancers, particularly germ cell tumors originating from reproductive cells, can produce hCG. Its clinical uses include:</p>
        <ul>
            <li><strong>Pregnancy Testing and Monitoring:</strong> Qualitative (urine) and quantitative (blood) tests for pregnancy confirmation, dating, and monitoring for complications like ectopic pregnancy or miscarriage.</li>
            <li><strong>Tumor Marker:</strong>
                <ul>
                    <li><strong>Germ Cell Tumors:</strong> Elevated in some testicular cancers (non-seminomatous types), ovarian germ cell tumors, and extragonadal germ cell tumors. Useful for diagnosis, staging, and monitoring treatment response and recurrence.</li>
                    <li><strong>Gestational Trophoblastic Disease (GTD):</strong> A group of rare tumors that arise from placental tissue (e.g., hydatidiform mole, choriocarcinoma). hCG is the primary and highly sensitive marker for diagnosis and monitoring of GTD.</li>
                    <li><strong>Other Rare Cancers:</strong> Less commonly, elevated in some gastrointestinal, lung, or breast cancers.</li>
                </ul>
            </li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> U/L (units per liter) or mIU/mL (milli-international units per milliliter)</li>
            <li><strong>Conventional:</strong> kIU/L (kilo-international units per liter) - sometimes used for very high levels.</li>
            <li><em>Note: 1 mIU/mL = 1 IU/L.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference values are highly dependent on pregnancy status and sex.</p>
        <ul>
            <li><strong>Non-pregnant Female:</strong> < 5 mIU/mL</li>
            <li><strong>Adult Male:</strong> < 5 mIU/mL</li>
            <li><strong>Pregnant Individuals:</strong> Levels rise significantly and vary widely depending on gestational week (e.g., typically > 100 mIU/mL by 4-5 weeks, peaking in tens or hundreds of thousands).</li>
            <li><em>Reference ranges can vary slightly by laboratory.</em></li>
        </ul>

        <h3>High hCG (Elevated Human Chorionic Gonadotropin):</h3>
        <p>The interpretation of high hCG is highly context-dependent.</p>
        <ul>
            <li><strong>Pregnancy:</strong> The most common cause of elevated hCG. Levels rise rapidly in early pregnancy.</li>
            <li><strong>Pregnancy Complications (Abnormally High Levels for Gestational Age):</strong>
                <ul>
                    <li><strong>Multiple Gestation (Twins, Triplets).</strong></li>
                    <li><strong>Gestational Trophoblastic Disease (GTD):</strong> (e.g., hydatidiform mole, choriocarcinoma) - often very high, rapidly rising levels.</li>
                </ul>
            </li>
            <li><strong>In Non-pregnant Individuals (Males and Females):</strong>
                <ul>
                    <li><strong>Germ Cell Tumors:</strong> (e.g., testicular cancer (choriocarcinoma, mixed germ cell tumors), ovarian germ cell tumors, mediastinal germ cell tumors).</li>
                    <li><strong>Gestational Trophoblastic Disease (in non-pregnant women or persistent disease after pregnancy).</strong></li>
                    <li><strong>Other Rare Cancers:</strong> (e.g., some bladder, pancreatic, stomach, lung, or breast cancers can rarely produce hCG).</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms in cancer context depend on the tumor location (e.g., testicular mass, abnormal vaginal bleeding in GTD). In pregnancy, symptoms are typical pregnancy symptoms or those of complications.</p>

        <h3>Low hCG (Normal/Undetectable Human Chorionic Gonadotropin):</h3>
        <p>In non-pregnant individuals, low hCG is normal and desirable. In pregnancy, abnormally low or falling levels can indicate issues.</p>
        <ul>
            <li><strong>Non-pregnant Individuals:</strong> Normal levels (< 5 mIU/mL) indicate no hCG-producing tumor.</li>
            <li><strong>In Early Pregnancy:</strong>
                <ul>
                    <li><strong>Miscarriage or Threatened Miscarriage:</strong> Levels that are lower than expected for gestational age or that are falling.</li>
                    <li><strong>Ectopic Pregnancy:</strong> Levels that are rising slower than expected or are abnormally low.</li>
                    <li><strong>Miscalculated Gestational Age.</strong></li>
                </ul>
            </li>
            <li><strong>After GTD Treatment:</strong> hCG levels should fall to undetectable after successful treatment. Persistent levels indicate residual or recurrent disease.</li>
        </ul>
        <p>Symptoms in pregnancy include vaginal bleeding, abdominal pain; in non-pregnant individuals, no symptoms are associated with low hCG.</p>

        <h3>Additional Information:</h3>
        <p>hCG testing is crucial in reproductive medicine and oncology. For tumor marker use, it is typically interpreted alongside other tumor markers and imaging studies.</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**AFP (Alpha-Fetoprotein):** Often co-elevated with hCG in germ cell tumors, particularly non-seminomatous testicular cancer.</li>
            <li>**LDH (Lactate Dehydrogenase):** Another non-specific tumor marker sometimes elevated in germ cell tumors.</li>
            <li>**Ultrasound:** Essential for evaluating pregnancy complications or tumors.</li>
        </ul>
    `,
    relatedBiomarkers: ['afp', 'ldh'] // Explicitly added LDH.
},
{
    id: 'pt',
    name: 'Prothrombin Time (PT)',
    description: 'Measures how long it takes for blood to clot. Evaluates the extrinsic and common coagulation pathways.',
    type: 'Coagulation Marker',
    responsibleFor: 'Assessing the integrity of the extrinsic and common pathways of coagulation.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Prothrombin Time (PT) is a laboratory test that measures the time it takes for a blood clot to form in a plasma sample after the addition of tissue factor (thromboplastin) and calcium. It specifically evaluates the integrity and function of the **extrinsic and common pathways** of the coagulation cascade. PT is a fundamental **Coagulation Marker**.</p>

        <h3>Role and Function:</h3>
        <p>The coagulation cascade is a complex series of enzymatic reactions involving various clotting factors (proteins) that ultimately lead to the formation of a fibrin clot, which stops bleeding. The extrinsic pathway is initiated by tissue factor, released from damaged blood vessels, and involves Factor VII. The common pathway involves Factors X, V, II (prothrombin), and I (fibrinogen).</p>
        <p>PT is primarily used to:</p>
        <ul>
            <li><strong>Monitor Oral Anticoagulant Therapy:</strong> Primarily Warfarin (Coumadin), which inhibits Vitamin K-dependent clotting factors (II, VII, IX, X). PT is highly sensitive to Factor VII, which has a short half-life, making PT a good measure of warfarin's acute effect.</li>
            <li><strong>Assess Liver Function:</strong> The liver produces most clotting factors (including II, V, VII, X, fibrinogen). Liver disease often leads to impaired synthesis of these factors, resulting in a prolonged PT.</li>
            <li><strong>Screen for Bleeding Disorders:</strong> Helps identify deficiencies in factors of the extrinsic or common pathways.</li>
            <li><strong>Assess Vitamin K Status:</strong> Vitamin K is essential for the synthesis of Factors II, VII, IX, and X.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> s (seconds)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges can vary slightly between laboratories due to different reagents and instruments.</p>
        <ul>
            <li><strong>Adults (Not on anticoagulants):</strong> 10 - 13 seconds</li>
            <li><em>For standardization and better comparability between labs, PT results are often reported along with the **International Normalized Ratio (INR)**.</em></li>
        </ul>

        <h3>High PT (Prolonged Prothrombin Time):</h3>
        <p>A prolonged PT indicates that blood is taking longer than normal to clot, suggesting impaired coagulation and an increased risk of bleeding.</p>
        <ul>
            <li><strong>Warfarin (Coumadin) Therapy:</strong> Intentionally prolonged to prevent blood clots. The degree of prolongation is monitored by INR.</li>
            <li><strong>Vitamin K Deficiency:</strong> Due to malabsorption, poor diet, or certain antibiotics.</li>
            <li><strong>Liver Disease:</strong> (e.g., cirrhosis, hepatitis, acute liver failure). The most common cause of a prolonged PT not related to warfarin, as the liver synthesizes most clotting factors.</li>
            <li><strong>Deficiencies in Clotting Factors:</strong> Specifically Factor VII, Factor X, Factor V, Factor II (prothrombin), or Factor I (fibrinogen). These can be inherited (rare) or acquired.</li>
            <li><strong>Disseminated Intravascular Coagulation (DIC):</strong> A severe condition where widespread clotting consumes clotting factors, leading to bleeding.</li>
            <li><strong>Presence of Inhibitors:</strong> Rarely, antibodies (inhibitors) against clotting factors can prolong PT.</li>
        </ul>
        <p>Symptoms of prolonged PT (if not therapeutically induced) include easy bruising, prolonged bleeding from minor cuts, nosebleeds, or internal bleeding.</p>

        <h3>Low PT (Shortened Prothrombin Time):</h3>
        <p>A shortened PT (blood clots faster than normal) is less common and usually not clinically significant on its own for bleeding risk, but can indicate a pro-thrombotic state.</p>
        <ul>
            <li><strong>Vitamin K Overdose:</strong> (Rare).</li>
            <li><strong>Hypercoagulable States:</strong> (Rarely used diagnostically for this).</li>
            <li><strong>Acute Phase Reaction:</strong> Due to elevated levels of some clotting factors.</li>
            <li><strong>Sample Issues:</strong> Inadequate anticoagulation of the blood sample.</li>
        </ul>
        <p>Symptoms are typically absent, but in some cases, it may suggest an increased risk for blood clot formation.</p>

        <h3>Additional Information:</h3>
        <p>PT is almost always ordered along with **INR** for monitoring warfarin. It is also often part of a **Coagulogram** (coagulation panel) which includes:</p>
        <ul>
            <li>**APTT (Activated Partial Thromboplastin Time):** Evaluates the intrinsic and common pathways; used to monitor heparin.</li>
            <li>**Fibrinogen:** Measures the concentration of clotting factor I.</li>
            <li>**Platelet Count:** Assesses the number of platelets (involved in primary hemostasis).</li>
            <li>**D-Dimer:** To assess for clot formation and breakdown (fibrinolysis).</li>
        </ul>
        <p>Interpreting PT requires considering the patient's medications, liver function, and overall clinical picture.</p>
    `,
    relatedBiomarkers: ['inr', 'aptt', 'fibrinogen', 'platelet-count', 'd-dimer'] // Expanded for full coag panel.
},
{
    id: 'inr',
    name: 'International Normalized Ratio (INR)',
    description: 'Standardized measure derived from PT, used to monitor warfarin therapy.',
    type: 'Coagulation Marker',
    responsibleFor: 'Standardizing prothrombin time results, primarily to monitor oral anticoagulant therapy (e.g., warfarin).',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>The International Normalized Ratio (INR) is a calculation that **standardizes the results of the Prothrombin Time (PT)**. It was developed to account for variations in reagents and equipment among different laboratories, ensuring that PT results are comparable worldwide. INR is a crucial **Coagulation Marker**, primarily used for monitoring oral anticoagulant therapy, especially with **warfarin (Coumadin)**.</p>

        <h3>Role and Function:</h3>
        <p>Warfarin is an anticoagulant that works by inhibiting Vitamin K-dependent clotting factors (Factors II, VII, IX, X). The PT test is highly sensitive to these factors. However, different batches of thromboplastin reagent used in PT tests can yield different results. To standardize this, the INR is calculated using the following formula:</p>
        <p>$$INR = (PT_{patient} / PT_{normal})^{ISI}$$</p>
        <p>Where:</p>
        <ul>
            <li>$PT_{patient}$ is the patient's prothrombin time in seconds.</li>
            <li>$PT_{normal}$ is the geometric mean of the normal PT range for the lab.</li>
            <li>$ISI$ (International Sensitivity Index) is a value assigned to each batch of thromboplastin reagent, indicating its sensitivity relative to an international reference standard.</li>
        </ul>
        <p>The INR is designed to ensure that a target level of anticoagulation is achieved consistently, regardless of where the test is performed. It allows clinicians to adjust warfarin dosage accurately to prevent both excessive bleeding and dangerous clotting.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> Dimensionless ratio</li>
            <li><em>INR is a pure number, without units.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges are dependent on whether the individual is on anticoagulant therapy.</p>
        <ul>
            <li><strong>Not on anticoagulants (Normal):</strong> 0.8 - 1.2</li>
            <li><strong>On warfarin (Therapeutic Range):</strong>
                <ul>
                    <li><strong>Typical target for DVT/PE prevention, atrial fibrillation:</strong> 2.0 - 3.0</li>
                    <li><strong>Higher targets for specific conditions (e.g., mechanical heart valves):</strong> 2.5 - 3.5 or sometimes higher.</li>
                </ul>
            </li>
            <li><em>The specific target range is determined by the patient's medical condition and should be provided by the treating physician.</em></li>
        </ul>

        <h3>High INR (Prolonged Clotting Time / Increased Bleeding Risk):</h3>
        <p>A high INR indicates that the blood is taking longer to clot than desired, meaning it is "thinner."</p>
        <ul>
            <li><strong>Over-anticoagulation with Warfarin:</strong> The most common cause. An INR significantly above the therapeutic range indicates a high risk of bleeding.</li>
            <li><strong>Liver Disease:</strong> Impaired synthesis of clotting factors.</li>
            <li><strong>Vitamin K Deficiency:</strong> Due to malnutrition, malabsorption, or certain antibiotics.</li>
            <li><strong>Disseminated Intravascular Coagulation (DIC).</strong></li>
            <li><strong>Drug Interactions:</strong> Many medications can interact with warfarin, increasing its effect (e.g., certain antibiotics, antifungals, NSAIDs, amiodarone).</li>
        </ul>
        <p>Symptoms include easy bruising, prolonged bleeding from cuts, nosebleeds, gum bleeding, blood in urine or stool, or severe internal bleeding (e.g., gastrointestinal, intracranial) in severe cases.</p>

        <h3>Low INR (Faster Clotting Time / Increased Clotting Risk):</h3>
        <p>A low INR indicates that the blood is clotting faster than desired, meaning it is "thicker."</p>
        <ul>
            <li><strong>Under-anticoagulation with Warfarin:</strong> The most common cause in patients on warfarin. This increases the risk of developing blood clots (e.g., DVT, PE, stroke).</li>
            <li><strong>Missed Warfarin Doses or Poor Adherence.</strong></li>
            <li><strong>Vitamin K Rich Diet:</strong> Sudden increase in intake of Vitamin K-rich foods (e.g., leafy greens) can counteract warfarin's effect.</li>
            <li><strong>Drug Interactions:</strong> Medications that decrease warfarin's effect (e.g., certain anticonvulsants, rifampin).</li>
            <li><strong>Initial Stages of DIC:</strong> (Rarely clinically significant as a standalone marker for this).</li>
        </ul>
        <p>Symptoms for patients on warfarin include signs of thrombosis (e.g., leg pain/swelling for DVT, chest pain/shortness of breath for PE, neurological symptoms for stroke).</p>

        <h3>Additional Information:</h3>
        <p>Regular INR monitoring is essential for patients on long-term warfarin therapy. The frequency of testing depends on the stability of the INR. Patients are usually educated on dietary considerations (consistent Vitamin K intake) and potential drug interactions.</p>
        <p>INR is directly derived from **PT (Prothrombin Time)**. Other related coagulation markers that might be assessed in a full **Coagulogram** include:</p>
        <ul>
            <li>**APTT (Activated Partial Thromboplastin Time):** To assess intrinsic pathway, used for heparin monitoring.</li>
            <li>**Platelet Count and Function Tests.**</li>
            <li>**Fibrinogen and D-Dimer.**</li>
        </ul>
    `,
    relatedBiomarkers: ['pt', 'aptt', 'platelet-count', 'fibrinogen', 'd-dimer'] // Expanded for full coag panel.
},
{
    id: 'aptt',
    name: 'Activated Partial Thromboplastin Time (APTT)',
    description: 'Measures how long it takes for blood to clot. Evaluates the intrinsic and common coagulation pathways.',
    type: 'Coagulation Marker',
    responsibleFor: 'Assessing the integrity of the intrinsic and common pathways of coagulation, and monitoring heparin therapy.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Activated Partial Thromboplastin Time (APTT), sometimes referred to as PTT, is a laboratory test that measures the time it takes for a blood clot to form in a plasma sample after the addition of a contact activator (e.g., silica) and a phospholipid (partial thromboplastin), followed by calcium. It specifically evaluates the integrity and function of the **intrinsic and common pathways** of the coagulation cascade. APTT is a crucial **Coagulation Marker**.</p>

        <h3>Role and Function:</h3>
        <p>The intrinsic pathway of coagulation is activated by contact with negatively charged surfaces (e.g., exposed collagen in damaged blood vessels) and involves Factors XII, XI, IX, and VIII. The common pathway (shared with the extrinsic pathway) involves Factors X, V, II (prothrombin), and I (fibrinogen).</p>
        <p>APTT is primarily used to:</p>
        <ul>
            <li><strong>Monitor Unfractionated Heparin (UFH) Therapy:</strong> Heparin works by enhancing the activity of antithrombin, which inhibits several clotting factors in the intrinsic and common pathways (e.g., Factor Xa and thrombin/Factor IIa). APTT is highly sensitive to these effects.</li>
            <li><strong>Screen for Bleeding Disorders:</strong> Helps identify deficiencies in clotting factors in the intrinsic (e.g., Hemophilia A (Factor VIII deficiency), Hemophilia B (Factor IX deficiency)) or common pathways.</li>
            <li><strong>Detect Specific Inhibitors:</strong> Can detect the presence of lupus anticoagulants or other specific factor inhibitors.</li>
            <li><strong>Assess Liver Function:</strong> Like PT, can be prolonged in severe liver disease affecting these factors.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> s (seconds)</li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges can vary slightly between laboratories due to different reagents and instruments.</p>
        <ul>
            <li><strong>Adults (Not on anticoagulants):</strong> 25 - 35 seconds</li>
            <li><em>For patients on unfractionated heparin, the therapeutic range is typically 1.5 to 2.5 times the upper limit of the normal range (e.g., 50-70 seconds, but depends on the laboratory's specific therapeutic range).</em></li>
        </ul>

        <h3>High APTT (Prolonged Activated Partial Thromboplastin Time):</h3>
        <p>A prolonged APTT indicates that blood is taking longer than normal to clot, suggesting impaired coagulation and an increased risk of bleeding.</p>
        <ul>
            <li><strong>Unfractionated Heparin Therapy:</strong> The most common cause when intentionally prolonged for therapeutic purposes.</li>
            <li><strong>Deficiencies in Clotting Factors:</strong>
                <ul>
                    <li><strong>Hemophilia A (Factor VIII deficiency).</strong></li>
                    <li><strong>Hemophilia B (Factor IX deficiency).</strong></li>
                    <li><strong>Deficiencies of Factors XI, XII, V, X, or II.</strong></li>
                </ul>
            </li>
            <li><strong>Liver Disease:</strong> Impaired synthesis of clotting factors.</li>
            <li><strong>Disseminated Intravascular Coagulation (DIC):</strong> Consumption of clotting factors.</li>
            <li><strong>Von Willebrand Disease (Severe forms):</strong> Can lead to low Factor VIII levels.</li>
            <li><strong>Presence of Inhibitors:</strong>
                <ul>
                    <li><strong>Lupus Anticoagulant (antiphospholipid antibody):</strong> Can paradoxically prolong APTT in vitro, but is associated with a hypercoagulable (clotting) state in vivo.</li>
                    <li><strong>Specific Factor Inhibitors:</strong> (e.g., acquired hemophilia).</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms of prolonged APTT (if not therapeutically induced) include easy bruising, prolonged bleeding from minor cuts, nosebleeds, joint bleeding (in hemophilia), or excessive bleeding after surgery.</p>

        <h3>Low APTT (Shortened Activated Partial Thromboplastin Time):</h3>
        <p>A shortened APTT (blood clots faster than normal) is less common and usually not clinically significant on its own for bleeding risk, but can indicate a pro-thrombotic state.</p>
        <ul>
            <li><strong>Acute Phase Reaction:</strong> Elevated levels of certain acute phase proteins (e.g., Factor VIII).</li>
            <li><strong>Early Disseminated Intravascular Coagulation (DIC):</strong> In early stages, can reflect hypercoagulability before consumption of factors.</li>
            <li><strong>Certain Cancers.</strong></li>
            <li><strong>Sample Issues:</strong> Difficult blood draw, partial clotting in the sample.</li>
        </ul>
        <p>Symptoms are typically absent, but in some cases, it may suggest an increased risk for blood clot formation.</p>

        <h3>Additional Information:</h3>
        <p>APTT is a key component of a **Coagulogram** (coagulation panel) and is often ordered alongside **PT (Prothrombin Time)** to assess both the intrinsic/common and extrinsic/common pathways. The results of PT and APTT help localize where a defect in the coagulation cascade might be occurring.</p>
        <p>Other related biomarkers include:</p>
        <ul>
            <li>**PT/INR:** For the extrinsic pathway and warfarin monitoring.</li>
            <li>**Fibrinogen:** To measure the concentration of Factor I.</li>
            <li>**Platelet Count:** Assesses platelet number.</li>
            <li>**D-Dimer:** To assess for active clot formation and breakdown.</li>
            <li>**Specific Factor Assays:** If a factor deficiency is suspected (e.g., Factor VIII, Factor IX).</li>
        </ul>
    `,
    relatedBiomarkers: ['pt', 'inr', 'fibrinogen', 'd-dimer', 'platelet-count', 'factor-viii-assay', 'factor-ix-assay'] // Expanded for full coag panel and specific factor assays.
    },
    {
    id: 'fibrinogen',
    name: 'Fibrinogen',
    description: 'A protein essential for blood clot formation. An acute phase reactant.',
    type: 'Coagulation Factor / Inflammation Marker',
    responsibleFor: 'A key coagulation factor that converts to fibrin, forming the meshwork of a blood clot.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Fibrinogen (Factor I) is a **soluble plasma glycoprotein** synthesized in the liver. It is a critical component of the coagulation cascade, serving as the precursor to fibrin, which forms the structural meshwork of a blood clot. Fibrinogen is also an **acute phase reactant**, meaning its levels increase in response to inflammation, infection, and tissue injury.</p>

        <h3>Role and Function:</h3>
        <p>In the final step of the coagulation cascade, thrombin (Factor IIa) converts fibrinogen into insoluble fibrin monomers. These monomers spontaneously polymerize to form a stable fibrin clot, which effectively stops bleeding. Fibrinogen also plays a role in platelet aggregation and endothelial repair.</p>
        <p>Clinically, fibrinogen levels are measured to:</p>
        <ul>
            <li><strong>Assess Clotting Ability:</strong> To evaluate a patient's capacity to form a stable blood clot.</li>
            <li><strong>Diagnose Bleeding Disorders:</strong> To identify inherited (e.g., afibrinogenemia, hypofibrinogenemia, dysfibrinogenemia) or acquired deficiencies.</li>
            <li><strong>Monitor DIC (Disseminated Intravascular Coagulation):</strong> Fibrinogen levels often decrease significantly in DIC due to excessive consumption.</li>
            <li><strong>Assess Inflammation and Cardiovascular Risk:</strong> As an acute phase reactant, elevated fibrinogen can indicate underlying inflammation and is considered an independent risk factor for cardiovascular disease and stroke.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> g/L (gram per liter)</li>
            <li><strong>Conventional:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Conversion: 1 g/L = 100 mg/dL</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for fibrinogen can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 2.0 - 4.0 g/L (200 - 400 mg/dL)</li>
            <li><em>Levels can be higher in pregnancy.</em></li>
        </ul>

        <h3>High Fibrinogen (Elevated Fibrinogen):</h3>
        <p>Elevated fibrinogen levels are typically a non-specific response to inflammation, stress, or tissue damage, or can indicate an increased risk of thrombosis.</p>
        <ul>
            <li><strong>Acute Phase Reaction:</strong>
                <ul>
                    <li><strong>Infection (bacterial, viral).</strong></li>
                    <li><strong>Inflammation:</strong> (e.g., rheumatoid arthritis, inflammatory bowel disease).</li>
                    <li><strong>Trauma or Injury.</strong></li>
                    <li><strong>Surgery.</strong></li>
                </ul>
            </li>
            <li><strong>Cardiovascular Disease Risk Factors:</strong>
                <ul>
                    <li><strong>Smoking.</strong></li>
                    <li><strong>Obesity.</strong></li>
                    <li><strong>Diabetes.</strong></li>
                    <li><strong>High Cholesterol.</strong></li>
                </ul>
            </li>
            <li><strong>Pregnancy:</strong> Levels naturally increase.</li>
            <li><strong>Malignancy:</strong> Some cancers can cause elevated fibrinogen.</li>
            <li><strong>Kidney Disease (Nephrotic Syndrome):</strong> Due to increased liver synthesis.</li>
        </ul>
        <p>Symptoms are usually related to the underlying condition (e.g., fever, pain, symptoms of cardiovascular disease). High fibrinogen can increase the risk of blood clot formation (thrombosis).</p>

        <h3>Low Fibrinogen (Reduced Fibrinogen):</h3>
        <p>Low fibrinogen levels indicate impaired clotting ability and an increased risk of bleeding.</p>
        <ul>
            <li><strong>Disseminated Intravascular Coagulation (DIC):</strong> A life-threatening condition where widespread clotting consumes fibrinogen, leading to severe bleeding.</li>
            <li><strong>Severe Liver Disease:</strong> Impaired synthesis of fibrinogen by the damaged liver.</li>
            <li><strong>Inherited Fibrinogen Disorders:</strong>
                <ul>
                    <li><strong>Afibrinogenemia:</strong> Complete absence of fibrinogen (very rare, severe bleeding).</li>
                    <li><strong>Hypofibrinogenemia:</strong> Reduced levels.</li>
                    <li><strong>Dysfibrinogenemia:</strong> Normal levels but abnormal function.</li>
                </ul>
            </li>
            <li><strong>Excessive Fibrinolysis:</strong> Overactive breakdown of clots.</li>
            <li><strong>Acute Bleeding:</strong> Consumption of fibrinogen during massive hemorrhage.</li>
        </ul>
        <p>Symptoms include easy bruising, prolonged bleeding from cuts, nosebleeds, gum bleeding, excessive menstrual bleeding, or severe internal bleeding.</p>

        <h3>Additional Information:</h3>
        <p>Fibrinogen is often measured as part of a **Coagulogram** (coagulation panel) to assess overall clotting function, especially in bleeding disorders, liver disease, or before surgery. Its role as an inflammatory marker is also recognized.</p>
        <p>Related biomarkers in a coagulation panel include:</p>
        <ul>
            <li>**PT (Prothrombin Time):** Evaluates extrinsic and common pathways.</li>
            <li>**APTT (Activated Partial Thromboplastin Time):** Evaluates intrinsic and common pathways.</li>
            <li>**D-Dimer:** Indicates fibrin breakdown; often elevated when clots are forming and breaking down.</li>
            <li>**Platelet Count:** Assesses platelet number, which is crucial for primary hemostasis.</li>
        </ul>
    `,
    relatedBiomarkers: ['pt', 'aptt', 'd-dimer', 'platelet-count'] // Expanded to include D-dimer and Platelet Count as key coagulation panel components.
},
{
    id: 'd-dimer',
    name: 'D-dimer',
    description: 'A protein fragment produced when a blood clot dissolves. Indicates recent clotting activity.',
    type: 'Coagulation Marker',
    responsibleFor: 'Indicating the breakdown products of fibrin, suggesting recent or ongoing clot formation and lysis.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>D-dimer is a **protein fragment** (a specific fibrin degradation product) that is produced when a blood clot, composed of fibrin, is broken down by the body's fibrinolytic system. The presence of D-dimer in the blood indicates that clot formation and subsequent clot breakdown (fibrinolysis) have occurred recently or are currently ongoing. It is an important **Coagulation Marker**.</p>

        <h3>Role and Function:</h3>
        <p>When an injury occurs, fibrinogen is converted to fibrin, which polymerizes to form a stable clot. As the body heals, a process called fibrinolysis breaks down this fibrin clot. D-dimer is a specific byproduct of this process, released when cross-linked fibrin is degraded by plasmin.</p>
        <p>D-dimer is primarily used in clinical practice for:</p>
        <ul>
            <li><strong>Ruling Out Thrombosis:</strong> Its most critical use is to *rule out* conditions like Deep Vein Thrombosis (DVT) or Pulmonary Embolism (PE) in patients with a low or intermediate pre-test probability of having these conditions. A negative D-dimer result in such cases effectively excludes DVT or PE.</li>
            <li><strong>Diagnosis and Monitoring of DIC:</strong> D-dimer levels are typically very high in Disseminated Intravascular Coagulation (DIC), where there is widespread activation of both clotting and fibrinolysis.</li>
            <li><strong>Monitoring Anticoagulation:</strong> Sometimes used to monitor the effectiveness of anticoagulant therapy in certain situations.</li>
            <li><strong>Risk Stratification:</strong> Elevated D-dimer can be a marker of increased risk for thrombotic events or adverse outcomes in various conditions, including COVID-19 and certain cancers.</li>
        </ul>
        <p><em>It's important to note that a positive D-dimer result is not diagnostic of a specific condition, as many conditions can cause elevated D-dimer (it has low specificity).</em></p>

        <h3>Units of Measurement:</h3>
        <p>D-dimer units can be confusing due to different reporting conventions (FEU vs. DDU).</p>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> ng/mL (nanogram per milliliter) or µg/L (microgram per liter) of Fibrinogen Equivalent Units (FEU).</li>
            <li><strong>Conventional:</strong> µg FEU/mL (microgram fibrinogen-equivalent units per milliliter) or µg DDU/mL (microgram D-dimer units per milliliter).</li>
            <li><em>Conversion: 1 µg/mL FEU = 0.5 µg/mL DDU. Most labs report in FEU.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference values vary by assay and laboratory. The most common cutoff is for Fibrinogen Equivalent Units (FEU).</p>
        <ul>
            <li><strong>Adults (Standard Cutoff):</strong> < 250 ng/mL FEU (or < 0.5 µg/mL FEU)</li>
            <li><strong>Age-Adjusted Cutoff:</strong> For patients over 50 years, some guidelines use an age-adjusted cutoff: Age x 10 ng/mL FEU (e.g., for a 70-year-old, < 700 ng/mL FEU).</li>
            <li><em>Always refer to the specific laboratory's reference range.</em></li>
        </ul>

        <h3>High D-dimer (Elevated D-dimer):</h3>
        <p>Elevated D-dimer indicates recent or ongoing clot formation and breakdown. It is a sensitive but not specific marker for thrombotic events.</p>
        <ul>
            <li><strong>Venous Thromboembolism (VTE):</strong>
                <ul>
                    <li><strong>Deep Vein Thrombosis (DVT):</strong> Blood clot in a deep vein, usually in the leg.</li>
                    <li><strong>Pulmonary Embolism (PE):</strong> Blood clot that travels to the lungs.</li>
                </ul>
            </li>
            <li><strong>Disseminated Intravascular Coagulation (DIC):</strong> A severe condition involving widespread clotting and bleeding.</li>
            <li><strong>Severe Infection / Sepsis:</strong> Systemic inflammation can activate coagulation.</li>
            <li><strong>Recent Surgery or Trauma.</strong></li>
            <li><strong>Pregnancy:</strong> D-dimer levels naturally increase throughout pregnancy and can remain elevated postpartum.</li>
            <li><strong>Malignancy (Cancer):</strong> Many cancers are associated with a hypercoagulable state and elevated D-dimer.</li>
            <li><strong>Heart Attack (Myocardial Infarction) or Stroke.</strong></li>
            <li><strong>Liver Disease.</strong></li>
            <li><strong>Large Hematoma.</strong></li>
            <li><strong>Advanced Age:</strong> D-dimer levels tend to increase with age.</li>
            <li><strong>COVID-19 Infection:</strong> Often significantly elevated, correlating with disease severity and thrombotic risk.</li>
        </ul>
        <p>Symptoms are dependent on the underlying condition (e.g., leg pain/swelling for DVT, shortness of breath/chest pain for PE, fever/fatigue for infection).</p>

        <h3>Low D-dimer (Normal/Undetectable D-dimer):</h3>
        <p>A normal or low D-dimer result is highly effective at ruling out acute thrombotic events in patients with low to intermediate clinical probability.</p>
        <ul>
            <li><strong>Absence of Significant Recent Clotting:</strong> In patients without known active clotting, a low D-dimer is reassuring.</li>
            <li><strong>Rules Out DVT/PE:</strong> In clinical settings, a negative D-dimer (below the cutoff) in a low-risk patient effectively rules out DVT or PE, potentially avoiding the need for further imaging tests.</li>
        </ul>
        <p>No symptoms are associated with low D-dimer.</p>

        <h3>Additional Information:</h3>
        <p>D-dimer should always be interpreted in conjunction with a clinical assessment of the patient's probability of having a thrombotic event (e.g., Wells' criteria for DVT/PE). It is not useful for screening asymptomatic individuals due to its low specificity. While a negative D-dimer is very powerful for ruling out, a positive D-dimer requires further investigation.</p>
        <p>Related biomarkers in coagulation include:</p>
        <ul>
            <li>**PT (Prothrombin Time) and APTT (Activated Partial Thromboplastin Time):** To assess global clotting pathways.</li>
            <li>**Fibrinogen:** A precursor to fibrin; often consumed in DIC.</li>
            <li>**Platelet Count:** Essential for clot formation.</li>
        </ul>
    `,
    relatedBiomarkers: ['pt', 'aptt', 'fibrinogen', 'platelet-count'] // Changed 'plt' to 'platelet-count' for consistency and expanded.
},
{
    id: 'serum-iron',
    name: 'Serum Iron',
    description: 'Measures the amount of iron circulating in the blood.',
    type: 'Mineral / Nutritional Marker',
    responsibleFor: 'Assessing iron status, involved in oxygen transport, enzyme function, and DNA synthesis.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Serum Iron measures the amount of iron that is currently bound to transferrin (a transport protein) and circulating in the blood. It is an important **Mineral / Nutritional Marker** used to assess a patient's iron status.</p>

        <h3>Role and Function:</h3>
        <p>Iron is an essential trace mineral vital for numerous bodily functions:</p>
        <ul>
            <li><strong>Oxygen Transport:</strong> It is a crucial component of hemoglobin in red blood cells, enabling oxygen transport from the lungs to tissues.</li>
            <li><strong>Energy Production:</strong> Involved in enzymes necessary for cellular energy production.</li>
            <li><strong>DNA Synthesis:</strong> Required for DNA synthesis and cell growth.</li>
            <li><strong>Immune Function:</strong> Plays a role in immune system function.</li>
        </ul>
        <p>Serum iron is a snapshot of circulating iron but does not fully reflect total body iron stores (which are better indicated by ferritin). Levels can fluctuate significantly throughout the day (diurnal variation) and are affected by recent iron intake or inflammation.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Conversion: 1 µg/dL ≈ 0.179 µmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for serum iron vary slightly by sex and laboratory.</p>
        <ul>
            <li><strong>Adult Male:</strong> 11 - 32 µmol/L (65 - 180 µg/dL)</li>
            <li><strong>Adult Female:</strong> 7 - 27 µmol/L (40 - 150 µg/dL)</li>
            <li><em>Levels are typically highest in the morning and lowest in the evening. Fasting samples are often preferred for consistency.</em></li>
        </ul>

        <h3>High Serum Iron (Elevated Serum Iron):</h3>
        <p>High serum iron levels can indicate excessive iron in the body or acute conditions affecting iron release.</p>
        <ul>
            <li><strong>Iron Overload Conditions:</strong>
                <ul>
                    <li><strong>Hemochromatosis:</strong> A genetic disorder causing excessive iron absorption and accumulation in organs.</li>
                    <li><strong>Hemosiderosis:</strong> Iron accumulation without tissue damage.</li>
                </ul>
            </li>
            <li><strong>Frequent Blood Transfusions:</strong> Leading to iron accumulation.</li>
            <li><strong>Acute Liver Damage:</strong> Iron can be released from damaged liver cells.</li>
            <li><strong>Excessive Iron Supplementation:</strong> Acute overdose.</li>
            <li><strong>Hemolytic Anemia:</strong> Rapid breakdown of red blood cells releases iron.</li>
            <li><strong>Lead Poisoning.</strong></li>
            <li><strong>Some types of poisoning (e.g., iron poisoning).</strong></li>
        </ul>
        <p>Symptoms of chronic iron overload include fatigue, joint pain, abdominal pain, and symptoms related to organ damage (e.g., liver disease, heart problems).</p>

        <h3>Low Serum Iron (Reduced Serum Iron):</h3>
        <p>Low serum iron levels indicate insufficient iron circulating in the blood, often a sign of iron deficiency.</p>
        <ul>
            <li><strong>Iron Deficiency Anemia (IDA):</strong> The most common cause. The body does not have enough iron to produce adequate red blood cells.</li>
            <li><strong>Chronic Blood Loss:</strong> (e.g., gastrointestinal bleeding, heavy menstrual periods).</li>
            <li><strong>Inadequate Dietary Iron Intake.</strong></li>
            <li><strong>Malabsorption Syndromes:</strong> (e.g., celiac disease, gastric bypass surgery).</li>
            <li><strong>Anemia of Chronic Disease/Inflammation:</strong> Iron is sequestered and less available, even if body stores are adequate or high.</li>
            <li><strong>Late Pregnancy:</strong> Increased demand for iron.</li>
        </ul>
        <p>Symptoms of low serum iron or iron deficiency anemia include fatigue, weakness, pallor, shortness of breath, pica (craving non-food items), restless legs syndrome, and brittle nails.</p>

        <h3>Additional Information:</h3>
        <p>Serum iron is typically interpreted as part of a comprehensive **Iron Panel** (or iron studies), which includes:</p>
        <ul>
            <li>**Ferritin:** The most reliable indicator of total body iron stores.</li>
            <li>**TIBC (Total Iron-Binding Capacity):** Measures the capacity of transferrin to bind iron.</li>
            <li>**Transferrin Saturation:** Calculated from serum iron and TIBC, indicating the percentage of transferrin that is saturated with iron.</li>
            <li>**CBC (Complete Blood Count):** Especially Hemoglobin, Hematocrit, and MCV (Mean Corpuscular Volume), to assess for anemia.</li>
        </ul>
    `,
    relatedBiomarkers: ['ferritin', 'tibc', 'transferrin-saturation', 'hemoglobin', 'hematocrit', 'mcv'] // Expanded to include Transferrin Saturation and CBC components.
},
{
    id: 'tibc',
    name: 'Total Iron-Binding Capacity (TIBC)',
    description: 'Measures the blood\'s capacity to bind iron to transferrin. Used with serum iron and ferritin for iron status.',
    type: 'Mineral / Nutritional Marker',
    responsibleFor: 'Reflecting the amount of transferrin available to bind iron; indicates the blood\'s capacity to transport iron.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Total Iron-Binding Capacity (TIBC) is a laboratory test that measures the total amount of iron that can be bound by proteins in the blood, primarily **transferrin**. Transferrin is the main protein responsible for transporting iron throughout the body. TIBC is an indirect measure of the amount of transferrin available to bind iron and is a key component of a comprehensive **Iron Panel** for assessing iron status.</p>

        <h3>Role and Function:</h3>
        <p>Transferrin is synthesized in the liver and acts like a shuttle, carrying iron from absorption sites (intestine) and storage sites (ferritin in liver, bone marrow) to cells that need it (e.g., red blood cell precursors in bone marrow). Each transferrin molecule can bind two iron atoms.</p>
        <p>TIBC directly reflects the amount of transferrin in the blood: if there's more transferrin, there's a higher capacity to bind iron, and thus a higher TIBC. If there's less transferrin, TIBC is lower.</p>
        <p>TIBC is used to:</p>
        <ul>
            <li><strong>Differentiate Types of Anemia:</strong> Particularly useful in distinguishing iron deficiency anemia from other anemias (e.g., anemia of chronic disease).</li>
            <li><strong>Assess Iron Status:</strong> Interpreted in conjunction with serum iron and ferritin to get a complete picture of iron stores and transport.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Conversion: 1 µg/dL ≈ 0.179 µmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for TIBC can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 45 - 81 µmol/L (250 - 450 µg/dL)</li>
            <li><em>Levels can be higher in pregnancy.</em></li>
        </ul>

        <h3>High TIBC (Elevated Total Iron-Binding Capacity):</h3>
        <p>A high TIBC indicates that there is a large amount of unbound transferrin in the blood, meaning the body is trying to maximize its ability to acquire and transport iron.</p>
        <ul>
            <li><strong>Iron Deficiency Anemia (IDA):</strong> The most common cause. When iron stores are low, the liver increases transferrin production in an attempt to capture more iron.</li>
            <li><strong>Pregnancy:</strong> Physiologically increased due to higher iron demand.</li>
            <li><strong>Oral Contraceptive Use.</strong></li>
        </ul>
        <p>Symptoms are those of iron deficiency (fatigue, pallor, weakness, shortness of breath).</p>

        <h3>Low TIBC (Reduced Total Iron-Binding Capacity):</h3>
        <p>A low TIBC indicates a reduced capacity to bind iron, suggesting either sufficient iron, reduced protein synthesis, or chronic inflammation.</p>
        <ul>
            <li><strong>Anemia of Chronic Disease/Inflammation:</strong> The liver reduces transferrin synthesis in chronic inflammatory states as a protective mechanism (to "hide" iron from pathogens).</li>
            <li><strong>Hemochromatosis:</strong> In iron overload conditions, the body senses excess iron, and transferrin levels may be low.</li>
            <li><strong>Liver Disease:</strong> Reduced production of transferrin by a damaged liver.</li>
            <li><strong>Malnutrition / Protein Deficiency:</strong> Insufficient protein for transferrin synthesis.</li>
            <li><strong>Kidney Disease (Nephrotic Syndrome):</strong> Loss of protein (including transferrin) in urine.</li>
        </ul>
        <p>Symptoms are dependent on the underlying condition (e.g., fatigue in chronic disease, symptoms of liver or kidney dysfunction).</p>

        <h3>Additional Information:</h3>
        <p>TIBC is almost always interpreted as part of a complete **Iron Panel** for an accurate assessment of iron status. Transferrin saturation is a calculated value ($Transferrin\,Saturation = (\text{Serum Iron} / \text{TIBC}) \times 100\%$) that is often more informative than TIBC alone.</p>
        <p>Related biomarkers in iron studies include:</p>
        <ul>
            <li>**Serum Iron:** Measures circulating iron.</li>
            <li>**Ferritin:** Best indicator of iron stores.</li>
            <li>**Transferrin Saturation:** Indicates how much of the transferrin is bound with iron.</li>
            <li>**CBC (Complete Blood Count):** Especially Hemoglobin, Hematocrit, and MCV, to assess for anemia and red blood cell characteristics.</li>
        </ul>
    `,
    relatedBiomarkers: ['serum-iron', 'ferritin', 'transferrin-saturation', 'hemoglobin', 'hematocrit', 'mcv'] // Expanded for full iron panel and CBC components.
},
{
    id: 'vitamin-b12',
    name: 'Vitamin B12 (Cobalamin)',
    description: 'A vitamin essential for nerve function, red blood cell formation, and DNA synthesis.',
    type: 'Vitamin',
    responsibleFor: 'Red blood cell production, neurological function, and DNA synthesis.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Vitamin B12, also known as Cobalamin, is a **water-soluble vitamin** essential for numerous metabolic processes. It cannot be synthesized by the human body and must be obtained from the diet, primarily from animal products. It is a crucial **Vitamin / Nutritional Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Vitamin B12 plays vital roles in:</p>
        <ul>
            <li><strong>Red Blood Cell Formation:</strong> It is necessary for DNA synthesis and proper maturation of red blood cells in the bone marrow. Deficiency leads to megaloblastic anemia.</li>
            <li><strong>Nervous System Function:</strong> Essential for the synthesis of myelin (the protective sheath around nerves) and neurotransmitters. Deficiency can cause irreversible neurological damage.</li>
            <li><strong>DNA Synthesis and Cell Metabolism:</strong> Involved in the metabolism of every cell in the body, particularly important for rapidly dividing cells.</li>
            <li><strong>Homocysteine Metabolism:</strong> B12 (along with folate and B6) is critical for converting homocysteine to methionine. Elevated homocysteine is a risk factor for cardiovascular disease.</li>
        </ul>
        <p>Absorption of dietary B12 is complex, requiring intrinsic factor (produced by stomach parietal cells) and an intact ileum.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> pmol/L (picomole per liter)</li>
            <li><strong>Conventional:</strong> pg/mL (picogram per milliliter)</li>
            <li><em>Conversion: 1 pg/mL ≈ 0.738 pmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for Vitamin B12 can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 148 - 619 pmol/L (200 - 835 pg/mL)</li>
            <li><em>Some labs may use slightly different cutoffs for "low" or "borderline" deficiency, as symptoms can occur even within the lower end of the normal range.</em></li>
        </ul>

        <h3>High Vitamin B12 (Elevated Vitamin B12):</h3>
        <p>High vitamin B12 levels are less common than low levels and are rarely due to excessive dietary intake. They usually indicate an underlying medical condition or supplementation.</p>
        <ul>
            <li><strong>Excessive Supplementation:</strong> Oral or injected B12 supplements.</li>
            <li><strong>Liver Disease:</strong> (e.g., acute hepatitis, cirrhosis) as the liver stores large amounts of B12 and can release it when damaged.</li>
            <li><strong>Myeloproliferative Disorders:</strong> (e.g., chronic myeloid leukemia, polycythemia vera) where there is overproduction of certain blood cells and B12-binding proteins.</li>
            <li><strong>Some Cancers:</strong> (e.g., hepatocellular carcinoma, metastatic cancer).</li>
            <li><strong>Renal Failure.</strong></li>
        </ul>
        <p>High B12 levels are usually asymptomatic themselves, but the underlying conditions causing them may have symptoms.</p>

        <h3>Low Vitamin B12 (Reduced Vitamin B12):</h3>
        <p>Low vitamin B12 levels indicate a deficiency, which can lead to significant hematological and neurological problems.</p>
        <ul>
            <li><strong>Malabsorption:</strong> The most common cause, due to:
                <ul>
                    <li><strong>Pernicious Anemia:</strong> Autoimmune condition leading to lack of intrinsic factor.</li>
                    <li><strong>Gastric Surgery:</strong> (e.g., gastrectomy, bariatric surgery) affecting intrinsic factor production or gastric acid.</li>
                    <li><strong>Crohn's Disease or other small intestinal disorders:</strong> Affecting ileal absorption.</li>
                    <li><strong>Chronic Pancreatitis.</strong></li>
                    <li><strong>Certain Medications:</strong> (e.g., proton pump inhibitors, H2 blockers, metformin).</li>
                </ul>
            </li>
            <li><strong>Inadequate Dietary Intake:</strong> Primarily seen in strict vegans or vegetarians who do not supplement.</li>
            <li><strong>Alcoholism.</strong></li>
            <li><strong>Parasitic Infections:</strong> (e.g., Diphyllobothrium latum, fish tapeworm).</li>
        </ul>
        <p>Symptoms of B12 deficiency can include:</p>
        <ul>
            <li><strong>Hematological:</strong> Megaloblastic anemia (fatigue, weakness, pallor, shortness of breath, dizziness).</li>
            <li><strong>Neurological:</strong> Numbness, tingling (paresthesias), difficulty walking, memory loss, cognitive impairment, depression, irritability (can be irreversible if prolonged).</li>
            <li><strong>Gastrointestinal:</strong> Sore tongue (glossitis), appetite loss.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>When B12 deficiency is suspected, additional tests are often performed to determine the cause:</p>
        <ul>
            <li>**Folic Acid (Folate):** Often checked simultaneously as their deficiencies can cause similar anemia and interact.</li>
            <li>**MCV (Mean Corpuscular Volume):** Typically elevated in megaloblastic anemia.</li>
            <li>**Homocysteine and Methylmalonic Acid (MMA):** These are functional markers; elevated levels indicate intracellular B12 deficiency, even if serum B12 is borderline.</li>
            <li>**Intrinsic Factor Blocking Antibody / Parietal Cell Antibody:** For pernicious anemia diagnosis.</li>
        </ul>
    `,
    relatedBiomarkers: ['folic-acid', 'mcv', 'homocysteine', 'methylmalonic-acid', 'intrinsic-factor-antibody', 'parietal-cell-antibody'] // Expanded with MMA and antibody tests for cause.
},
{
    id: 'folic-acid',
    name: 'Folic Acid (Folate)',
    description: 'A B vitamin essential for DNA synthesis and red blood cell production.',
    type: 'Vitamin',
    responsibleFor: 'DNA synthesis, red blood cell formation, and amino acid metabolism.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Folic Acid, or Folate (its natural form), is a **water-soluble B vitamin (Vitamin B9)** essential for various cellular processes, particularly those involving DNA synthesis and repair. It is crucial for rapidly dividing cells, such as those in the bone marrow. It is an important **Vitamin / Nutritional Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Folate plays a critical role in:</p>
        <ul>
            <li><strong>DNA Synthesis and Repair:</strong> Essential for the production of nucleotides, the building blocks of DNA and RNA.</li>
            <li><strong>Red Blood Cell Production:</strong> Critical for the maturation of red blood cells in the bone marrow. Deficiency leads to megaloblastic anemia, similar to Vitamin B12 deficiency.</li>
            <li><strong>Amino Acid Metabolism:</strong> Involved in the metabolism of several amino acids, including the conversion of homocysteine to methionine.</li>
            <li><strong>Neural Tube Development:</strong> Adequate folate intake before and during early pregnancy is vital for preventing neural tube defects (NTDs) in the fetus.</li>
        </ul>
        <p>Folate is found in leafy green vegetables, fruits, legumes, and fortified grains. It is absorbed in the small intestine.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional:</strong> ng/mL (nanogram per milliliter)</li>
            <li><em>Conversion: 1 ng/mL ≈ 2.266 nmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for Folic Acid can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 7 - 46 nmol/L (3.1 - 20.5 ng/mL)</li>
            <li><em>Some labs may use slightly different cutoffs. Optimal levels, especially for women of childbearing age, may be higher.</em></li>
        </ul>

        <h3>High Folic Acid (Elevated Folic Acid):</h3>
        <p>High folic acid levels are most commonly due to excessive supplementation and are generally not associated with direct toxicity. However, high folate can mask a significant underlying issue.</p>
        <ul>
            <li><strong>Excessive Supplementation:</strong> Especially from fortified foods or high-dose supplements.</li>
            <li><strong>Masking Vitamin B12 Deficiency:</strong> This is the most significant concern. High folate can correct the anemia of B12 deficiency (megaloblastic anemia) but will *not* prevent or halt the progressive and potentially irreversible neurological damage caused by B12 deficiency. Therefore, B12 and folate should always be checked together if megaloblastic anemia is suspected.</li>
        </ul>
        <p>High folate levels themselves are usually asymptomatic.</p>

        <h3>Low Folic Acid (Reduced Folic Acid):</h3>
        <p>Low folic acid levels indicate a deficiency, which can lead to anemia and developmental issues, particularly in pregnancy.</p>
        <ul>
            <li><strong>Inadequate Dietary Intake:</strong> Common in individuals with poor nutrition, elderly, or those with limited access to fresh produce.</li>
            <li><strong>Alcoholism:</strong> Alcohol interferes with folate absorption and metabolism.</li>
            <li><strong>Malabsorption Syndromes:</strong> (e.g., celiac disease, inflammatory bowel disease, gastric bypass surgery) affecting small intestinal absorption.</li>
            <li><strong>Increased Demand:</strong>
                <ul>
                    <li><strong>Pregnancy:</strong> Significantly increased demand for rapid cell division and fetal development.</li>
                    <li><strong>Lactation.</strong></li>
                    <li><strong>Chronic Hemolytic Anemia:</strong> (e.g., sickle cell anemia) due to increased red blood cell turnover.</li>
                    <li><strong>Dialysis.</strong></li>
                </ul>
            </li>
            <li><strong>Certain Medications:</strong> (e.g., methotrexate, trimethoprim, some anti-epileptic drugs) that interfere with folate metabolism.</li>
        </ul>
        <p>Symptoms of folate deficiency can include:</p>
        <ul>
            <li><strong>Hematological:</strong> Megaloblastic anemia (fatigue, weakness, pallor, shortness of breath, dizziness).</li>
            <li><strong>Gastrointestinal:</strong> Sore tongue (glossitis), diarrhea.</li>
            <li><strong>Developmental (in fetus):</strong> Neural tube defects (e.g., spina bifida, anencephaly).</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Folate status is often assessed in conjunction with Vitamin B12, especially when investigating anemia or neurological symptoms. For women of childbearing age, adequate folate intake (through diet and/or supplementation) is strongly recommended to prevent neural tube defects.</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**Vitamin B12 (Cobalamin):** Essential co-factor, checked alongside folate.</li>
            <li>**MCV (Mean Corpuscular Volume):** Typically elevated in megaloblastic anemia due to large red blood cells.</li>
            <li>**Homocysteine:** Elevated in both folate and B12 deficiency.</li>
        </ul>
    `,
    relatedBiomarkers: ['vitamin-b12', 'mcv', 'homocysteine']
},
{
    id: 'vitamin-d',
    name: '25-OH Vitamin D (Calcidiol)',
    description: 'Measures the main circulating form of Vitamin D, indicating overall Vitamin D status.',
    type: 'Vitamin',
    responsibleFor: 'Calcium and phosphorus absorption, bone health, immune function, and cell growth.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>25-Hydroxyvitamin D (25-OH Vitamin D), also known as calcidiol or calcifediol, is the major circulating form of Vitamin D in the blood and is considered the best indicator of overall Vitamin D status (from both sun exposure and dietary intake). It is a **fat-soluble vitamin**, which acts as a prohormone. It is a critical **Vitamin / Nutritional Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Vitamin D is essential for maintaining calcium and phosphate homeostasis, which are crucial for bone health. It also plays broader roles in various other physiological processes:</p>
        <ul>
            <li><strong>Bone Health:</strong> Promotes calcium and phosphorus absorption from the gut, facilitating proper bone mineralization. Deficiency leads to rickets in children and osteomalacia/osteoporosis in adults.</li>
            <li><strong>Immune System:</strong> Modulates the immune response, potentially reducing the risk of autoimmune diseases and infections.</li>
            <li><strong>Cell Growth and Differentiation:</strong> Involved in cell growth, differentiation, and apoptosis, with potential roles in cancer prevention.</li>
            <li><strong>Muscle Function:</strong> Contributes to muscle strength.</li>
            <li><strong>Cardiovascular Health:</strong> Emerging evidence suggests a role in cardiovascular health and blood pressure regulation.</li>
        </ul>
        <p>Vitamin D can be synthesized in the skin upon exposure to UVB sunlight or obtained from fortified foods and supplements.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional:</strong> ng/mL (nanogram per milliliter)</li>
            <li><em>Conversion: 1 ng/mL = 2.5 nmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Optimal Vitamin D levels are debated, but general guidelines are:</p>
        <ul>
            <li><strong>Deficient:</strong> < 25 nmol/L (< 10 ng/mL)</li>
            <li><strong>Insufficient:</strong> 25 - 75 nmol/L (10 - 30 ng/mL)</li>
            <li><strong>Sufficient:</strong> 75 - 200 nmol/L (30 - 80 ng/mL)</li>
            <li><strong>Potentially Harmful:</strong> > 250 nmol/L (> 100 ng/mL)</li>
            <li><em>The Endocrine Society recommends levels > 75 nmol/L for optimal bone health and overall health.</em></li>
        </ul>

        <h3>High Vitamin D (Elevated 25-OH Vitamin D):</h3>
        <p>High levels of 25-OH Vitamin D are almost exclusively caused by excessive supplementation and can lead to toxicity, although it is rare to reach toxic levels from diet or sun exposure alone.</p>
        <ul>
            <li><strong>Excessive Vitamin D Supplementation:</strong> Leading to accumulation.</li>
        </ul>
        <p>Symptoms of Vitamin D toxicity (hypervitaminosis D) are primarily due to hypercalcemia (high blood calcium) and can include:</p>
        <ul>
            <li>Nausea, vomiting, constipation, abdominal pain.</li>
            <li>Increased thirst and urination.</li>
            <li>Weakness, confusion.</li>
            <li>Kidney damage (kidney stones, calcification).</li>
        </ul>

        <h3>Low Vitamin D (Reduced 25-OH Vitamin D):</h3>
        <p>Low Vitamin D levels (deficiency or insufficiency) are very common globally and can have significant health consequences.</p>
        <ul>
            <li><strong>Insufficient Sun Exposure:</strong> Most common cause, especially in northern latitudes, during winter months, or due to extensive use of sunscreen/clothing.</li>
            <li><strong>Inadequate Dietary Intake:</strong> Low intake of vitamin D-rich foods or fortified products.</li>
            <li><strong>Malabsorption Syndromes:</strong> (e.g., celiac disease, Crohn's disease, cystic fibrosis, bariatric surgery) as it is a fat-soluble vitamin.</li>
            <li><strong>Obesity:</strong> Vitamin D is sequestered in fat tissue, reducing its bioavailability.</li>
            <li><strong>Kidney Disease:</strong> Impaired conversion of 25-OH Vitamin D to its active form (1,25-OH Vitamin D).</li>
            <li><strong>Liver Disease:</strong> Impaired hydroxylation of Vitamin D.</li>
            <li><strong>Certain Medications:</strong> (e.g., anticonvulsants, glucocorticoids).</li>
        </ul>
        <p>Symptoms of Vitamin D deficiency can include:</p>
        <ul>
            <li><strong>Bone Pain and Muscle Weakness.</strong></li>
            <li><strong>Osteoporosis/Osteomalacia (adults) or Rickets (children):</strong> Softening and weakening of bones.</li>
            <li><strong>Fatigue.</strong></li>
            <li><strong>Increased susceptibility to infections.</strong></li>
            <li><strong>Mood changes.</strong></li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Vitamin D status is often assessed in individuals with bone disorders, chronic diseases, or those at high risk of deficiency. Monitoring involves both 25-OH Vitamin D and sometimes calcium, phosphorus, and PTH levels.</p>
        <p>Related biomarkers in calcium and bone metabolism include:</p>
        <ul>
            <li>**Calcium (Total and Ionized):** Main mineral regulated by Vitamin D.</li>
            <li>**Phosphorus:** Another mineral influenced by Vitamin D.</li>
            <li>**PTH (Parathyroid Hormone):** Regulates calcium, phosphorus, and Vitamin D activation.</li>
            <li>**Alkaline Phosphatase (ALP):** Can be elevated in bone disorders.</li>
        </ul>
    `,
    relatedBiomarkers: ['calcium', 'phosphorus', 'pth', 'alkaline-phosphatase'] // Added ALP.
},
{
    id: 'zinc',
    name: 'Zinc',
    description: 'An essential trace element vital for immune function, wound healing, and growth.',
    type: 'Trace Element',
    responsibleFor: 'Enzyme activity, immune function, protein synthesis, wound healing, and cell division.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Zinc is an **essential trace element** vital for numerous biological processes, acting as a cofactor for over 300 enzymes involved in metabolism, DNA replication, and protein synthesis. It is an important **Trace Element / Nutritional Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Zinc plays a crucial role in:</p>
        <ul>
            <li><strong>Immune Function:</strong> Essential for the development and function of immune cells. Zinc deficiency significantly impairs immune responses.</li>
            <li><strong>Wound Healing:</strong> Critical for skin integrity and cellular repair.</li>
            <li><strong>Growth and Development:</strong> Required for normal growth and development, especially in children and during pregnancy.</li>
            <li><strong>Sensory Function:</strong> Involved in taste and smell perception.</li>
            <li><strong>Protein and DNA Synthesis:</strong> Necessary for the activity of enzymes involved in these processes.</li>
            <li><strong>Antioxidant Defense:</strong> Part of antioxidant enzymes that protect cells from damage.</li>
        </ul>
        <p>The body has no specialized zinc storage system, so a regular dietary intake is necessary.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Conversion: 1 µg/dL ≈ 0.153 µmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for zinc can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 10.7 - 19.9 µmol/L (70 - 130 µg/dL)</li>
            <li><em>Levels can be influenced by diurnal variation and fasting status. Fasting morning samples are often preferred.</em></li>
        </ul>

        <h3>High Zinc (Elevated Zinc):</h3>
        <p>High zinc levels are uncommon and usually a result of excessive supplementation. Chronically high levels can lead to adverse effects.</p>
        <ul>
            <li><strong>Excessive Zinc Supplementation:</strong> Acute or chronic overdose.</li>
            <li><strong>Industrial Exposure:</strong> (Less common).</li>
        </ul>
        <p>Symptoms of zinc toxicity can include:</p>
        <ul>
            <li>Nausea, vomiting, diarrhea, abdominal cramps.</li>
            <li>**Copper Deficiency Anemia:** High zinc interferes with copper absorption, leading to copper deficiency.</li>
            <li>Impaired immune function (paradoxically).</li>
            <li>Neurological issues.</li>
        </ul>

        <h3>Low Zinc (Reduced Zinc):</h3>
        <p>Low zinc levels (deficiency) are relatively common globally, particularly in populations with limited access to zinc-rich foods or with malabsorption issues.</p>
        <ul>
            <li><strong>Inadequate Dietary Intake:</strong> Common in vegetarians/vegans (plant zinc is less bioavailable), or those with limited access to meat/seafood.</li>
            <li><strong>Malabsorption Syndromes:</strong> (e.g., Crohn's disease, ulcerative colitis, celiac disease, short bowel syndrome, bariatric surgery).</li>
            <li><strong>Alcoholism:</strong> Interferes with zinc absorption and increases excretion.</li>
            <li><strong>Chronic Kidney Disease.</strong></li>
            <li><strong>Liver Disease (especially cirrhosis).</strong></li>
            <li><strong>Increased Demand:</strong> (e.g., rapid growth in children, pregnancy, lactation).</li>
            <li><strong>Certain Medications:</strong> (e.g., diuretics).</li>
        </ul>
        <p>Symptoms of zinc deficiency can include:</p>
        <ul>
            <li><strong>Impaired Immune Function:</strong> Increased susceptibility to infections.</li>
            <li><strong>Hair Loss (Alopecia).</strong></li>
            <li><strong>Poor Wound Healing.</strong></li>
            <li><strong>Altered Taste (Dysgeusia) or Smell (Hyposmia/Anosmia).</strong></li>
            <li><strong>Skin Rashes (Acrodermatitis enteropathica - severe inherited form).</strong></li>
            <li><strong>Growth Retardation in Children.</strong></li>
            <li><strong>Diarrhea.</strong></li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Zinc levels are often assessed in individuals with unexplained immune dysfunction, chronic diarrhea, malabsorption, or poor wound healing. Interpretation requires considering dietary intake and other trace element levels, particularly copper.</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**Copper:** Zinc and copper metabolism are closely linked; high zinc can cause copper deficiency, and vice versa.</li>
            <li>**Alkaline Phosphatase (ALP):** Zinc is a cofactor for ALP; severe zinc deficiency can lead to low ALP.</li>
        </ul>
    `,
    relatedBiomarkers: ['copper', 'alkaline-phosphatase'] // Added ALP.
},
{
    id: 'copper',
    name: 'Copper',
    description: 'An essential trace element involved in iron metabolism, energy production, and nerve function.',
    type: 'Trace Element',
    responsibleFor: 'Iron metabolism, enzyme activity, energy production, nerve function, and connective tissue formation.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Copper is an **essential trace element** vital for the function of numerous enzymes (cuproenzymes) involved in critical biological processes. It is primarily transported in the blood bound to ceruloplasmin. It is an important **Trace Element / Nutritional Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Copper plays diverse roles in the body, including:</p>
        <ul>
            <li><strong>Iron Metabolism:</strong> Essential for iron absorption and mobilization from storage. Copper deficiency can lead to anemia resembling iron deficiency.</li>
            <li><strong>Energy Production:</strong> Component of enzymes in the electron transport chain (e.g., cytochrome c oxidase).</li>
            <li><strong>Connective Tissue Formation:</strong> Required for the synthesis of collagen and elastin, crucial for healthy skin, bones, and blood vessels.</li>
            <li><strong>Nerve Function:</strong> Involved in myelin formation and neurotransmitter synthesis.</li>
            <li><strong>Antioxidant Defense:</strong> Part of antioxidant enzymes (e.g., superoxide dismutase).</li>
            <li><strong>Immune Function.</strong></li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Conversion: 1 µg/dL ≈ 0.157 µmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for copper can vary slightly between laboratories and are often higher in women, especially those on oral contraceptives or pregnant.</p>
        <ul>
            <li><strong>Adults:</strong> 11.8 - 23.6 µmol/L (75 - 150 µg/dL)</li>
            <li><em>Levels can be affected by inflammation.</em></li>
        </ul>

        <h3>High Copper (Elevated Copper):</h3>
        <p>High copper levels can indicate genetic disorders of copper metabolism or other conditions. Excess copper can be toxic.</p>
        <ul>
            <li><strong>Wilson's Disease:</strong> A genetic disorder causing impaired copper excretion, leading to copper accumulation in the liver, brain, and other organs. Typically, serum copper is low in Wilson's disease because ceruloplasmin is low, but *free* copper is high. A high total copper is less common.</li>
            <li><strong>Liver Disease (Non-Wilsonian):</strong> (e.g., chronic active hepatitis, cirrhosis) where copper accumulates due to impaired excretion.</li>
            <li><strong>Chronic Inflammation / Infection:</strong> Copper is an acute phase reactant.</li>
            <li><strong>Oral Contraceptive Use / Pregnancy:</strong> Physiologically elevated.</li>
            <li><strong>Excessive Supplementation or Exposure:</strong> (Rare).</li>
        </ul>
        <p>Symptoms of copper toxicity can include nausea, vomiting, abdominal pain, diarrhea, and in chronic cases, liver damage, neurological symptoms, and psychiatric issues.</p>

        <h3>Low Copper (Reduced Copper):</h3>
        <p>Low copper levels (deficiency) are rare but can lead to significant clinical manifestations.</p>
        <ul>
            <li><strong>Malnutrition / Malabsorption:</strong> (e.g., celiac disease, chronic diarrhea, bariatric surgery).</li>
            <li><strong>Excessive Zinc Intake:</strong> Zinc supplementation is a common cause of acquired copper deficiency, as high zinc interferes with copper absorption.</li>
            <li><strong>Menkes Disease:</strong> A rare, inherited disorder of copper transport characterized by severe copper deficiency and neurodegeneration.</li>
            <li><strong>Certain Medications.</strong></li>
        </ul>
        <p>Symptoms of copper deficiency can include:</p>
        <ul>
            <li><strong>Anemia:</strong> Microcytic, hypochromic anemia that does not respond to iron supplementation (due to impaired iron metabolism).</li>
            <li><strong>Neurological Issues:</strong> Ataxia (poor coordination), myelopathy (spinal cord disease), peripheral neuropathy.</li>
            <li><strong>Impaired Immune Function:</strong> Increased susceptibility to infections.</li>
            <li><strong>Hair and Skin Pigmentation Changes.</strong></li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Copper levels are often assessed in the context of liver disease, neurological symptoms, or unexplained anemia. Ceruloplasmin levels are often measured alongside copper, especially when Wilson's disease is suspected.</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**Zinc:** Closely related in metabolism; imbalances can affect each other.</li>
            <li>**Ceruloplasmin:** The main copper-transport protein; typically low in Wilson's disease.</li>
            <li>**24-hour Urinary Copper:** Used in the diagnosis of Wilson's disease.</li>
            <li>**Liver Biopsy:** For definitive diagnosis of copper accumulation in Wilson's disease or other liver conditions.</li>
        </ul>
    `,
    relatedBiomarkers: ['zinc', 'ceruloplasmin', '24h-urinary-copper'] // Added ceruloplasmin and 24h urinary copper for Wilson's disease.
},
{
    id: 'selenium',
    name: 'Selenium',
    description: 'An essential trace element with antioxidant properties, important for thyroid function and immunity.',
    type: 'Trace Element',
    responsibleFor: 'Antioxidant defense, thyroid hormone metabolism, and immune function.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Selenium is an **essential trace element** that is incorporated into proteins to form selenoproteins, which play diverse and critical roles in human health. It is an important **Trace Element / Nutritional Marker**.</p>

        <h3>Role and Function:</h3>
        <p>Selenium functions primarily through selenoproteins, which include:</p>
        <ul>
            <li><strong>Antioxidant Defense:</strong> Selenoproteins like glutathione peroxidases protect cells from oxidative damage caused by free radicals.</li>
            <li><strong>Thyroid Hormone Metabolism:</strong> Iodothyronine deiodinases, which are selenoproteins, are crucial for the activation and deactivation of thyroid hormones.</li>
            <li><strong>Immune Function:</strong> Plays a role in modulating immune responses and protecting against infections.</li>
            <li><strong>Reproduction:</strong> Involved in male and female fertility.</li>
            <li><strong>DNA Synthesis.</strong></li>
        </ul>
        <p>Dietary sources include nuts (especially Brazil nuts), seafood, meat, and grains, with content varying by soil selenium levels.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional:</strong> µg/L (microgram per liter)</li>
            <li><em>Conversion: 1 µg/L ≈ 0.0126 µmol/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for selenium can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 0.89 - 1.80 µmol/L (70 - 140 µg/L)</li>
        </ul>

        <h3>High Selenium (Elevated Selenium):</h3>
        <p>High selenium levels are almost always due to excessive supplementation and can lead to toxicity, known as selenosis.</p>
        <ul>
            <li><strong>Excessive Selenium Supplementation:</strong> Common cause of selenosis.</li>
            <li><strong>Occupational Exposure:</strong> (Rare).</li>
        </ul>
        <p>Symptoms of selenosis can include:</p>
        <ul>
            <li><strong>Hair Loss (Alopecia).</strong></li>
            <li><strong>Brittle Nails or Nail Changes.</strong></li>
            <li><strong>Garlic-like Odor on Breath and Sweat.</strong></li>
            <li>Fatigue, irritability.</li>
            <li>Neurological symptoms (tremors, numbness).</li>
            <li>Gastrointestinal upset (nausea, diarrhea).</li>
        </ul>

        <h3>Low Selenium (Reduced Selenium):</h3>
        <p>Low selenium levels (deficiency) can occur in regions with selenium-poor soil or in individuals with malabsorption.</p>
        <ul>
            <li><strong>Inadequate Dietary Intake:</strong> From living in selenium-deficient geographical areas or having a diet low in selenium-rich foods.</li>
            <li><strong>Malabsorption Syndromes:</strong> (e.g., Crohn's disease, short bowel syndrome).</li>
            <li><strong>Total Parenteral Nutrition (TPN) without adequate selenium.</strong></li>
            <li><strong>Chronic Kidney Disease (dialysis patients).</strong></li>
            <li><strong>HIV infection.</strong></li>
        </ul>
        <p>Symptoms of selenium deficiency are often subtle but can include:</p>
        <ul>
            <li><strong>Impaired Immune Function:</strong> Increased susceptibility to infections.</li>
            <li><strong>Thyroid Dysfunction:</strong> Can exacerbate iodine deficiency.</li>
            <li><strong>Cardiomyopathy (Keshan Disease):</strong> A severe form of selenium deficiency, observed in endemic areas.</li>
            <li>Muscle weakness and pain.</li>
        </ul>

        <h3>Additional Information:</h3>
        <p>Selenium levels are typically assessed when deficiency or toxicity is suspected. Its role in thyroid function often leads to co-evaluation with thyroid hormones.</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**TSH (Thyroid Stimulating Hormone), Free T3, Free T4:** To assess thyroid function.</li>
            <li>**Iodine:** Closely related to thyroid health.</li>
            <li>**Glutathione Peroxidase:** An enzyme whose activity reflects selenium status.</li>
        </ul>
    `,
    relatedBiomarkers: ['tsh', 'free-t3', 'free-t4', 'iodine', 'glutathione-peroxidase'] // Added more comprehensive thyroid markers and functional marker.
},
{
    id: 'hba1c',
    name: 'Glycated Hemoglobin (HbA1c)',
    description: 'Shows the average blood sugar level over the last 2-3 months. Key for diabetes management.',
    type: 'Diabetes Marker',
    responsibleFor: 'Reflecting average blood glucose concentration over the preceding 2-3 months by measuring glucose attached to hemoglobin.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Glycated Hemoglobin (HbA1c or A1c) is a form of hemoglobin (the oxygen-carrying protein in red blood cells) that is chemically linked to glucose. This irreversible attachment (glycation) occurs in direct proportion to the amount of glucose in the bloodstream. Since red blood cells live for approximately 2-3 months, HbA1c provides an average measure of blood glucose control over that period. It is the primary **Diabetes Marker** for diagnosis and long-term monitoring.</p>

        <h3>Role and Function:</h3>
        <p>HbA1c is a highly stable and reliable marker that reflects chronic hyperglycemia. Unlike a single fasting glucose or random glucose measurement, which can fluctuate hourly, HbA1c gives a broader picture of glucose control.</p>
        <p>It is used for:</p>
        <ul>
            <li><strong>Diagnosis of Diabetes and Prediabetes:</strong> Along with fasting plasma glucose and oral glucose tolerance test.</li>
            <li><strong>Monitoring Diabetes Management:</strong> To assess the effectiveness of diet, exercise, and medication in people with diagnosed diabetes. A reduction in HbA1c indicates improved glucose control.</li>
            <li><strong>Predicting Risk of Complications:</strong> Higher HbA1c levels correlate with an increased risk of long-term diabetic complications (e.g., retinopathy, nephropathy, neuropathy, cardiovascular disease).</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> % (percentage) or mmol/mol (millimole per mole) - NGSP/IFCC units respectively.</li>
            <li><em>Both units are commonly reported. For example, 6.5% is equivalent to 48 mmol/mol.</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>The diagnostic and target ranges for HbA1c are well-established by organizations like the American Diabetes Association (ADA).</p>
        <ul>
            <li><strong>Normal:</strong> < 5.7% (or < 39 mmol/mol)</li>
            <li><strong>Prediabetes:</strong> 5.7% - 6.4% (39 - 47 mmol/mol)</li>
            <li><strong>Diabetes:</strong> ≥ 6.5% (≥ 48 mmol/mol)</li>
            <li><strong>Target for most people with diagnosed diabetes:</strong> < 7.0% (or < 53 mmol/mol) – individualized targets may vary.</li>
        </ul>

        <h3>High HbA1c (Elevated Glycated Hemoglobin):</h3>
        <p>A high HbA1c indicates persistently elevated blood sugar levels over the past 2-3 months.</p>
        <ul>
            <li><strong>Poorly Controlled Diabetes:</strong> The most common cause, indicating a need for adjustments in treatment plan.</li>
            <li><strong>Undiagnosed Diabetes:</strong> Or individuals at high risk (prediabetes progressing to diabetes).</li>
            <li><strong>Factors increasing HbA1c:</strong> Iron deficiency anemia (due to longer red blood cell lifespan).</li>
        </ul>
        <p>Symptoms of high HbA1c are typically the symptoms of hyperglycemia and uncontrolled diabetes, such as increased thirst, frequent urination, fatigue, blurred vision, unintended weight loss, and recurrent infections.</p>

        <h3>Low HbA1c (Reduced Glycated Hemoglobin):</h3>
        <p>A low HbA1c (below normal range) is less common and usually not clinically significant in terms of immediate health risk, but can indicate specific underlying conditions that affect red blood cell lifespan.</p>
        <ul>
            <li><strong>Conditions that Shorten Red Blood Cell Lifespan:</strong> (This leads to less time for glucose to bind to hemoglobin, thus falsely lowering the HbA1c result even if blood sugar is high).
                <ul>
                    <li><strong>Hemolytic Anemia:</strong> (e.g., sickle cell anemia, thalassemia, G6PD deficiency).</li>
                    <li><strong>Significant Blood Loss.</strong></li>
                    <li><strong>Chronic Kidney Disease (some forms).</strong></li>
                    <li><strong>Pregnancy (late stages).</strong></li>
                </ul>
            </li>
            <li><strong>Successful Diabetes Management:</strong> An HbA1c within or below the target range for a diabetic patient indicates good control.</li>
        </ul>
        <p>Symptoms are usually those of the underlying condition causing the shortened red blood cell lifespan (e.g., fatigue, pallor from anemia).</p>

        <h3>Additional Information:</h3>
        <p>HbA1c testing does not require fasting and can be performed at any time. It complements other glucose tests (fasting glucose, oral glucose tolerance test, random glucose) to provide a comprehensive picture of glucose control. It is less affected by acute stress or recent meals than other glucose tests.</p>
        <p>Related biomarkers in diabetes management include:</p>
        <ul>
            <li>**Fasting Plasma Glucose:** Measures blood sugar after an overnight fast.</li>
            <li>**Random Plasma Glucose:** Measures blood sugar at any time.</li>
            <li>**Oral Glucose Tolerance Test (OGTT):** Measures glucose response to a sugary drink.</li>
            <li>**Insulin and C-peptide:** To assess insulin production.</li>
            <li>**Fructosamine:** Reflects average glucose over a shorter period (2-3 weeks).</li>
        </ul>
    `,
    relatedBiomarkers: ['glucose', 'insulin', 'fructosamine', 'c-peptide'] // Expanded with Fructosamine and C-peptide.
},
{
    id: 'lactate',
    name: 'Lactate (Lactic Acid)',
    description: 'A byproduct of anaerobic metabolism. Elevated levels can indicate tissue hypoxia or metabolic distress.',
    type: 'Metabolic Marker',
    responsibleFor: 'Indicating cellular oxygen deprivation or increased metabolic demand when oxygen supply is insufficient.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Lactate, also known as lactic acid, is a byproduct of anaerobic metabolism, meaning it is produced when cells generate energy without sufficient oxygen. It is a critical **Metabolic Marker** used to assess tissue perfusion, oxygenation, and overall metabolic state, especially in critically ill patients.</p>

        <h3>Role and Function:</h3>
        <p>Under normal conditions, cells primarily use aerobic metabolism (with oxygen) to produce energy. When oxygen supply is inadequate (hypoxia) or metabolic demand is excessively high, cells switch to anaerobic metabolism, producing lactate as a byproduct. The liver typically clears lactate, converting it back to glucose (Cori cycle).</p>
        <p>Elevated lactate levels (lactic acidosis) can result from two main mechanisms:</p>
        <ul>
            <li><strong>Type A Lactic Acidosis:</strong> Due to tissue hypoperfusion or hypoxia (insufficient oxygen delivery), such as in shock, severe heart failure, or severe anemia.</li>
            <li><strong>Type B Lactic Acidosis:</strong> Due to impaired lactate clearance or increased lactate production without clear tissue hypoxia, such as in sepsis, liver failure, certain medications (e.g., metformin), toxins, or metabolic disorders.</li>
        </ul>
        <p>Lactate measurements are critical for:</p>
        <ul>
            <li><strong>Assessing Severity of Illness:</strong> Particularly in sepsis, shock, and trauma. Higher lactate often correlates with poorer prognosis.</li>
            <li><strong>Guiding Resuscitation:</strong> Serial lactate measurements can indicate whether interventions (e.g., fluid resuscitation, oxygen therapy) are improving tissue perfusion.</li>
            <li><strong>Diagnosing Lactic Acidosis:</strong> Identifying the cause of metabolic acidosis.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mmol/L (millimole per liter)</li>
            <li><strong>Conventional:</strong> mg/dL (milligram per deciliter)</li>
            <li><em>Conversion: 1 mmol/L ≈ 9.008 mg/dL</em></li>
        </ul>

        <h3>Reference Values (Venous):</h3>
        <p>Reference ranges for lactate can vary slightly between laboratories and whether the sample is arterial or venous.</p>
        <ul>
            <li><strong>Adults (Venous):</strong> 0.5 - 2.2 mmol/L (4.5 - 20 mg/dL)</li>
            <li><em>Levels can transiently rise after strenuous exercise.</em></li>
        </ul>

        <h3>High Lactate (Elevated Lactate / Lactic Acidosis):</h3>
        <p>Elevated lactate indicates a critical metabolic imbalance, often signaling cellular distress and potentially life-threatening conditions.</p>
        <ul>
            <li><strong>Shock:</strong> Any type of shock (septic, cardiogenic, hypovolemic, obstructive) causing widespread tissue hypoperfusion.</li>
            <li><strong>Sepsis / Severe Infection:</strong> Even without overt shock, systemic inflammation can impair oxygen utilization and increase lactate production.</li>
            <li><strong>Severe Heart Failure:</strong> Insufficient blood flow to tissues.</li>
            <li><strong>Severe Anemia / Carbon Monoxide Poisoning:</strong> Reduced oxygen-carrying capacity.</li>
            <li><strong>Organ Failure:</strong> (e.g., liver failure impairs lactate clearance).</li>
            <li><strong>Extreme Physical Exertion.</strong></li>
            <li><strong>Certain Medications / Toxins:</strong> (e.g., metformin overdose, cyanide, salicylates).</li>
            <li><strong>Metabolic Disorders:</strong> (e.g., inherited mitochondrial disorders, severe hypoglycemia).</li>
            <li><strong>Diabetic Ketoacidosis (DKA):</strong> Although lactate is not the primary acidosis.</li>
            <li><strong>Seizures.</strong></li>
        </ul>
        <p>Symptoms of lactic acidosis are often non-specific and severe, related to the underlying cause: rapid breathing (compensatory hyperventilation), altered mental status, nausea, vomiting, abdominal pain, and overall signs of shock.</p>

        <h3>Low Lactate (Normal/Reduced Lactate):</h3>
        <p>Low lactate levels are not clinically significant and simply indicate normal cellular metabolism and oxygenation.</p>
        <ul>
            <li><strong>Normal Metabolic State.</strong></li>
            <li><strong>Effective Treatment:</strong> Falling lactate levels in a critically ill patient indicate improvement in tissue perfusion and oxygen delivery.</li>
        </ul>
        <p>No symptoms are associated with low lactate.</p>

        <h3>Additional Information:</h3>
        <p>Lactate samples require careful handling (e.g., immediate transport on ice, prompt processing) to prevent falsely elevated levels due to glycolysis in the blood sample itself. Serial lactate measurements are often more valuable than a single reading for monitoring patient response to treatment.</p>
        <p>Related biomarkers that help in interpreting lactate levels include:</p>
        <ul>
            <li>**Blood Gases (pH, pCO2, HCO3-):** To assess the severity and type of metabolic acidosis.</li>
            <li>**Creatinine and BUN:** To assess kidney function.</li>
            <li>**Liver Enzymes (ALT, AST, Bilirubin):** To assess liver function.</li>
            <li>**CBC (Complete Blood Count):** To assess for anemia or infection.</li>
            <li>**Cardiac Markers (Troponin, BNP):** If heart failure or myocardial infarction is suspected.</li>
        </ul>
    `,
    relatedBiomarkers: ['blood-gases', 'creatinine', 'bun', 'alt', 'ast', 'bilirubin', 'cbc', 'troponin', 'bnp'] // Expanded to include markers for assessing underlying causes of lactic acidosis.
},
{
    id: 'ammonia',
    name: 'Ammonia',
    description: 'A toxic byproduct of protein metabolism, primarily detoxified by the liver. Elevated in severe liver disease.',
    type: 'Liver Function Marker',
    responsibleFor: 'A neurotoxic byproduct of protein metabolism. Elevated levels indicate impaired liver detoxification or certain genetic disorders.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Ammonia (NH3) is a toxic byproduct produced primarily from the breakdown of proteins by bacteria in the gut and from amino acid metabolism in tissues. It is transported to the liver, where it is converted into urea (a non-toxic compound) via the urea cycle and then excreted by the kidneys. Ammonia is a critical **Liver Function Marker**, as its elevation often signifies severe impairment of the liver's detoxification capacity.</p>

        <h3>Role and Function:</h3>
        <p>The liver is the primary organ responsible for detoxifying ammonia. When liver function is severely compromised, ammonia accumulates in the bloodstream. Elevated ammonia is neurotoxic and is the main culprit in the pathogenesis of **hepatic encephalopathy (HE)**, a spectrum of neurological and psychiatric abnormalities seen in patients with liver failure.</p>
        <p>Ammonia testing is primarily used to:</p>
        <ul>
            <li><strong>Diagnose Hepatic Encephalopathy:</strong> In patients with known liver disease and altered mental status. While elevated ammonia supports the diagnosis, the level does not perfectly correlate with the severity of HE.</li>
            <li><strong>Evaluate Suspected Urea Cycle Disorders:</strong> In infants or children with unexplained neurological symptoms or metabolic acidosis.</li>
            <li><strong>Diagnose Reye's Syndrome:</strong> A rare, severe condition affecting children, often after a viral infection and aspirin use, causing liver damage and brain swelling.</li>
        </ul>
        <p><em>Note: Ammonia levels are very sensitive and require careful sample collection and handling to ensure accurate results.</em></p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Conversion: 1 µmol/L ≈ 1.703 µg/dL</em></li>
        </ul>

        <h3>Reference Values (Plasma):</h3>
        <p>Reference ranges for plasma ammonia can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 11 - 32 µmol/L (15 - 45 µg/dL)</li>
            <li><em>Values are typically higher in infants and children. Strict sample handling protocols are essential.</em></li>
        </ul>

        <h3>High Ammonia (Elevated Ammonia):</h3>
        <p>High ammonia levels are a serious finding, indicating impaired detoxification and potential neurotoxicity.</p>
        <ul>
            <li><strong>Severe Liver Disease / Hepatic Failure:</strong> (e.g., cirrhosis, acute liver failure). The most common cause in adults, leading to hepatic encephalopathy.</li>
            <li><strong>Urea Cycle Disorders (Inherited):</strong> Genetic defects in enzymes of the urea cycle, leading to ammonia accumulation from birth or early childhood.</li>
            <li><strong>Reye's Syndrome:</strong> Acute encephalopathy with fatty liver.</li>
            <li><strong>Gastrointestinal Bleeding:</strong> Increased protein load from blood in the gut, leading to increased ammonia production.</li>
            <li><strong>Urinary Tract Infection with Urea-Splitting Bacteria:</strong> (Rare, usually in patients with urinary diversion).</li>
            <li><strong>Certain Medications or Toxins.</strong></li>
            <li><strong>High Protein Diet (in susceptible individuals with liver compromise).</strong></li>
        </ul>
        <p>Symptoms of high ammonia are primarily neurological and can range from mild (confusion, impaired concentration, altered sleep patterns) to severe (disorientation, asterixis/flapping tremor, stupor, coma, seizures) in hepatic encephalopathy.</p>

        <h3>Low Ammonia (Normal/Reduced Ammonia):</h3>
        <p>Low ammonia levels are not clinically significant.</p>
        <ul>
            <li><strong>Normal Metabolic State and Liver Function.</strong></li>
        </ul>
        <p>No symptoms are associated with low ammonia.</p>

        <h3>Additional Information:</h3>
        <p>Ammonia testing is best done on arterial or free-flowing venous blood samples drawn with minimal tourniquet time, placed immediately on ice, and processed rapidly to prevent in vitro increases. Ammonia levels should always be interpreted in the context of the patient's clinical presentation, especially their mental status, and other liver function tests.</p>
        <p>Related biomarkers and diagnostic approaches for liver disease include:</p>
        <ul>
            <li>**Liver Enzymes (ALT, AST, ALP, GGT):** To assess liver cell damage and bile duct obstruction.</li>
            <li>**Bilirubin (Total and Direct):** To assess liver's ability to process bilirubin.</li>
            <li>**Albumin:** To assess liver's synthetic function (long-term).</li>
            <li>**PT/INR:** To assess liver's synthetic function (short-term clotting factor production).</li>
            <li>**Imaging Studies:** (e.g., ultrasound, CT, MRI) to evaluate liver structure.</li>
        </ul>
    `,
    relatedBiomarkers: ['bilirubin', 'alt', 'ast', 'alp', 'ggt', 'albumin', 'pt', 'inr'] // Expanded to include a more comprehensive set of liver function tests.
},
{
    id: 'erythropoietin',
    name: 'Erythropoietin (EPO)',
    description: 'A hormone produced by the kidneys that stimulates red blood cell production.',
    type: 'Kidney Hormone',
    responsibleFor: 'Regulating red blood cell production (erythropoiesis) in response to tissue hypoxia.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Erythropoietin (EPO) is a **glycoprotein hormone** primarily produced by the kidneys (90%), with a small amount produced by the liver (10%). It is the principal regulator of red blood cell (RBC) production (erythropoiesis) in the bone marrow. EPO is a key **Kidney Hormone** and a central player in the body's response to oxygen demand.</p>

        <h3>Role and Function:</h3>
        <p>The kidneys sense oxygen levels in the blood. When tissue oxygenation is reduced (hypoxia), the kidneys increase EPO production. EPO then travels to the bone marrow, where it stimulates the proliferation, differentiation, and maturation of red blood cell precursors, leading to increased RBC production and, consequently, increased oxygen-carrying capacity of the blood.</p>
        <p>EPO testing is used to:</p>
        <ul>
            <li><strong>Investigate Anemia:</strong> To help determine the cause of anemia, particularly to differentiate between anemias caused by kidney disease (low EPO) and those caused by other factors (high EPO).</li>
            <li><strong>Investigate Polycythemia:</strong> To help differentiate between primary polycythemia (Polycythemia Vera, low EPO) and secondary polycythemia (high EPO).</li>
            <li><strong>Monitor Chronic Kidney Disease (CKD):</strong> In CKD, the kidneys lose their ability to produce sufficient EPO, leading to anemia of CKD.</li>
            <li><strong>Monitor EPO Therapy:</strong> In patients receiving recombinant human EPO for anemia.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> mIU/mL (milli-international units per milliliter) or U/L (units per liter)</li>
            <li><em>Note: 1 mIU/mL = 1 U/L</em></li>
        </ul>

        <h3>Reference Values:</h3>
        <p>Reference ranges for EPO can vary slightly between laboratories.</p>
        <ul>
            <li><strong>Adults:</strong> 2.6 - 34.0 mIU/mL (or U/L)</li>
            <li><em>Values can be affected by altitude, smoking, and certain conditions.</em></li>
        </ul>

        <h3>High Erythropoietin (Elevated EPO):</h3>
        <p>High EPO levels typically indicate the body is trying to compensate for low oxygen levels or is overproducing EPO due to a tumor.</p>
        <ul>
            <li><strong>Anemia (Most Causes Except CKD):</strong>
                <ul>
                    <li><strong>Iron Deficiency Anemia.</strong></li>
                    <li><strong>Vitamin B12/Folate Deficiency Anemia.</strong></li>
                    <li><strong>Hemolytic Anemia.</strong></li>
                    <li><strong>Blood Loss.</strong></li>
                    <li><strong>Aplastic Anemia.</strong></li>
                </ul>
                <p>In these cases, the kidneys sense low oxygen due to fewer or dysfunctional red blood cells and appropriately increase EPO production.</p>
            </li>
            <li><strong>Chronic Hypoxia:</strong>
                <ul>
                    <li><strong>Chronic Lung Disease (e.g., COPD).</strong></li>
                    <li><strong>High Altitude.</strong></li>
                    <li><strong>Cyanotic Heart Disease.</strong></li>
                    <li><strong>Sleep Apnea.</strong></li>
                </ul>
            </li>
            <li><strong>EPO-Producing Tumors:</strong>
                <ul>
                    <li><strong>Renal Cell Carcinoma (kidney cancer).</strong></li>
                    <li><strong>Hepatocellular Carcinoma (liver cancer).</strong></li>
                    <li>Less commonly, uterine fibroids, adrenal adenoma, cerebellar hemangioblastoma.</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms are those of the underlying condition (e.g., fatigue, shortness of breath, pallor in anemia; symptoms related to organ involvement in tumors).</p>

        <h3>Low Erythropoietin (Reduced EPO):</h3>
        <p>Low EPO levels indicate that the kidneys are not producing enough EPO or that the bone marrow is overproducing red blood cells independently of EPO stimulation.</p>
        <ul>
            <li><strong>Anemia of Chronic Kidney Disease (CKD):</strong> The most common cause of inappropriately low EPO levels in anemia, as damaged kidneys cannot produce sufficient EPO.</li>
            <li><strong>Polycythemia Vera (PV):</strong> A myeloproliferative neoplasm where the bone marrow produces too many red blood cells (and often white blood cells and platelets) independently of EPO. The high RBC count then suppresses the normal EPO production by the kidneys, resulting in low EPO levels.</li>
        <li><strong>Aplastic Anemia (some cases, though can be high initially).</strong></li>
        </ul>
        <p>Symptoms are those of anemia (fatigue, weakness) in CKD, or symptoms of hyperviscosity (headache, dizziness, blurred vision, itching) in polycythemia vera.</p>

        <h3>Additional Information:</h3>
        <p>EPO levels are typically interpreted alongside a complete blood count (CBC), particularly red blood cell parameters (RBC, Hgb, Hct, MCV), and kidney function tests (Creatinine, GFR).</p>
        <p>Related biomarkers include:</p>
        <ul>
            <li>**RBC, Hgb, Hct:** Directly affected by EPO production.</li>
            <li>**Creatinine, eGFR:** To assess kidney function.</li>
            <li>**Iron Panel (Ferritin, Serum Iron, TIBC):** To rule out iron deficiency as a cause of anemia.</li>
            <li>**Vitamin B12 and Folate:** To rule out megaloblastic anemia.</li>
            <li>**JAK2 V617F Mutation:** For diagnosing Polycythemia Vera.</li>
        </ul>
    `,
    relatedBiomarkers: ['rbc', 'hgb', 'hct', 'creatinine', 'egfr', 'ferritin', 'serum-iron', 'tibc', 'vitamin-b12', 'folic-acid', 'jak2-v617f'] // Expanded for full workup of anemia/polycythemia.
},
{
    id: 'lead',
    name: 'Lead',
    description: 'A toxic heavy metal. Lead levels in blood indicate exposure.',
    type: 'Toxicology Marker',
    responsibleFor: 'Assessing exposure to lead, a neurotoxin that affects various body systems.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Lead is a **toxic heavy metal** that has no known physiological role in the human body. It is an environmental contaminant that, upon exposure, can accumulate in the body and cause widespread toxicity. Blood Lead Level (BLL) is the primary **Toxicology Marker** used to assess recent or ongoing lead exposure.</p>

        <h3>Role and Function:</h3>
        <p>Lead exposure can occur through various routes, including ingestion (e.g., lead-based paint chips, contaminated water/food), inhalation (e.g., lead dust, industrial emissions), or, less commonly, dermal absorption. Once absorbed, lead circulates in the blood, where it has a short half-life (a few weeks), before being distributed to soft tissues (e.g., liver, kidneys, brain) and eventually stored in bones (where it has a half-life of decades).</p>
        <p>Lead interferes with numerous enzymatic and cellular processes, affecting virtually every organ system, especially the developing nervous system in children.</p>
        <p>Blood lead level testing is used to:</p>
        <ul>
            <li><strong>Diagnose Lead Poisoning:</strong> In individuals suspected of exposure, especially children.</li>
            <li><strong>Monitor Lead Exposure:</strong> In individuals with known exposure sources (e.g., occupational, environmental).</li>
            <li><strong>Screen High-Risk Populations:</strong> Children living in older homes (pre-1978 lead paint), or those in communities with lead contamination.</li>
        </ul>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> µmol/L (micromole per liter)</li>
            <li><strong>Conventional:</strong> µg/dL (microgram per deciliter)</li>
            <li><em>Conversion: 1 µg/dL ≈ 0.048 µmol/L</em></li>
        </ul>

        <h3>Reference Values (Blood Lead Level):</h3>
        <p>There is **no known safe level of lead in blood**, particularly for children. The Centers for Disease Control and Prevention (CDC) have defined a Blood Lead Reference Value (BLRV) to identify children with BLLs that are higher than most children in the U.S.</p>
        <ul>
            <li><strong>Children:</strong> CDC recommends public health action for levels ≥ 3.5 µg/dL.</li>
            <li><strong>Adults (General Population):</strong> < 5 µg/dL (lower is better, no safe level established).</li>
            <li><strong>Adults (Occupational Exposure):</strong> Specific occupational exposure limits exist, typically higher than for the general population, but still aim for lowest possible.</li>
            <li><em>Any detectable lead level should prompt investigation into the source of exposure.</em></li>
        </ul>

        <h3>High Lead (Elevated Lead):</h3>
        <p>High blood lead levels indicate lead poisoning (plumbism), which can cause a wide range of debilitating effects depending on the level and duration of exposure.</p>
        <ul>
            <li><strong>Environmental Exposure:</strong>
                <ul>
                    <li><strong>Lead-based Paint:</strong> Especially in older homes (dust, chips).</li>
                    <li><strong>Contaminated Soil or Water.</strong></li>
                    <li><strong>Traditional Remedies or Cosmetics:</strong> (e.g., Ayurvedic medicines, kohl).</li>
                    <li><strong>Lead-glazed Pottery or Cookware.</strong></li>
                </ul>
            </li>
            <li><strong>Occupational Exposure:</strong> (e.g., battery manufacturing, lead smelting, construction, plumbing, firing ranges).</li>
        </ul>
        <p>Symptoms of lead poisoning are varied and non-specific, making diagnosis challenging. They are often more severe and irreversible in children.</p>
        <ul>
            <li><strong>In Children:</strong> Developmental delays, learning difficulties, behavioral problems, decreased IQ, hearing problems, seizures, abdominal pain, constipation, anemia.</li>
            <li><strong>In Adults:</strong> Fatigue, headache, joint/muscle pain, abdominal pain, constipation, memory loss, concentration problems, irritability, kidney damage, high blood pressure, reproductive issues (reduced sperm count, miscarriage risk), anemia, peripheral neuropathy (wrist/foot drop).</li>
            <li><strong>Acute High Exposure:</strong> Can lead to severe encephalopathy (brain swelling), coma, and death.</li>
        </ul>

        <h3>Low Lead (Normal/Desired Lead):</h3>
        <p>Low or undetectable lead levels are desirable, indicating minimal or no significant lead exposure and minimal risk of lead toxicity.</p>
        <ul>
            <li><strong>Minimal or No Lead Exposure.</strong></li>
            <li><strong>Successful Remediation:</strong> Falling levels after removal from exposure.</li>
        </ul>
        <p>No symptoms are associated with low lead levels.</p>

        <h3>Additional Information:</h3>
        <p>Management of lead poisoning involves identifying and removing the source of exposure, and for very high levels, chelation therapy to remove lead from the body. Follow-up testing is essential to ensure levels decline.</p>
        <p>Related biomarkers/tests that might be used in the context of lead exposure include:</p>
        <ul>
            <li>**CBC (Complete Blood Count):** Lead can cause microcytic hypochromic anemia with basophilic stippling.</li>
            <li>**Erythrocyte Protoporphyrin (EP) / Zinc Protoporphyrin (ZPP):** These are elevated in lead poisoning and iron deficiency; they reflect lead's interference with heme synthesis.</li>
            <li>**Kidney Function Tests (Creatinine, BUN):** To assess lead's impact on kidneys.</li>
            <li>**Neurodevelopmental Assessments:** Especially in children.</li>
        </ul>
    `,
    relatedBiomarkers: ['cbc', 'erythrocyte-protoporphyrin', 'zinc-protoporphyrin', 'creatinine', 'bun'] // Expanded with other relevant tests for lead poisoning.
},
{
    id: 'cyclosporine',
    name: 'Cyclosporine (Drug Level)',
    description: 'An immunosuppressant drug used to prevent organ transplant rejection and treat autoimmune diseases. Monitored for therapeutic levels.',
    type: 'Therapeutic Drug Monitoring',
    responsibleFor: 'Suppressing the immune system to prevent organ rejection or treat autoimmune conditions. Levels must be closely monitored to ensure efficacy and prevent toxicity.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Cyclosporine (also spelled ciclosporin) is a **calcineurin inhibitor (CNI)**, a potent immunosuppressant medication. It works by inhibiting the activation of T-lymphocytes, thereby suppressing the immune response. It is a critical **Therapeutic Drug Monitoring (TDM)** marker, meaning its blood levels are closely measured to ensure efficacy while minimizing toxicity.</p>

        <h3>Role and Function:</h3>
        <p>Cyclosporine is widely used in:</p>
        <ul>
            <li><strong>Organ Transplant:</strong> To prevent rejection of transplanted organs (e.g., kidney, liver, heart, lung). It is often used in combination with other immunosuppressants.</li>
            <li><strong>Autoimmune Diseases:</strong> To treat severe autoimmune conditions that are unresponsive to other therapies (e.g., rheumatoid arthritis, psoriasis, severe Crohn's disease, aplastic anemia).</li>
        </ul>
        <p>Due to its narrow therapeutic window (the range between effective and toxic concentrations) and significant inter-individual variability in absorption and metabolism, routine therapeutic drug monitoring of cyclosporine levels is essential. Levels are typically measured as **trough levels**, meaning the sample is drawn just before the next scheduled dose, to ensure the lowest effective concentration is maintained.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional:</strong> ng/mL (nanogram per milliliter)</li>
            <li><em>Conversion: 1 ng/mL ≈ 0.833 nmol/L</em></li>
        </ul>

        <h3>Reference Values (Therapeutic Range):</h3>
        <p>The therapeutic range for cyclosporine varies significantly based on several factors, including the type of organ transplanted, the time since transplant, concurrent medications, and individual patient response. These ranges are guidelines and are individualized by the transplant team or physician.</p>
        <ul>
            <li><strong>Post-transplant (initial, typically first few months):</strong> 200 - 400 ng/mL (trough levels)</li>
            <li><strong>Post-transplant (maintenance, later months/years):</strong> 100 - 250 ng/mL (trough levels)</li>
            <li><strong>Autoimmune diseases:</strong> Often lower ranges, typically 50-200 ng/mL.</li>
            <li><em>These are illustrative ranges; always refer to the specific clinical protocol.</em></li>
        </ul>

        <h3>High Cyclosporine (Elevated Cyclosporine Levels):</h3>
        <p>High cyclosporine levels indicate drug toxicity, which can lead to severe side effects.</p>
        <ul>
            <li><strong>Causes:</strong> Overdosing, drug interactions (e.g., with certain antifungals, macrolide antibiotics, calcium channel blockers, grapefruit juice), impaired metabolism (e.g., liver dysfunction).</li>
            <li><strong>Symptoms/Complications of Toxicity:</strong>
                <ul>
                    <li><strong>Nephrotoxicity (Kidney Damage):</strong> The most common and serious side effect, leading to elevated creatinine and reduced kidney function.</li>
                    <li><strong>Hepatotoxicity (Liver Dysfunction):</strong> Elevated liver enzymes.</li>
                    <li><strong>Neurotoxicity:</strong> Tremor, headache, seizures, paresthesias.</li>
                    <li><strong>Hypertension (High Blood Pressure).</strong></li>
                    <li><strong>Hyperkalemia (High Potassium).</strong></li>
                    <li><strong>Gingival Hyperplasia (Gum Overgrowth).</strong></li>
                    <li><strong>Hirsutism (Excessive Hair Growth).</strong></li>
                    <li><strong>Increased Risk of Infection:</strong> Due to immune suppression.</li>
                    <li><strong>Increased Risk of Malignancy:</strong> Particularly skin cancer and post-transplant lymphoproliferative disorder (PTLD).</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms are varied depending on the affected organ system.</p>

        <h3>Low Cyclosporine (Reduced Cyclosporine Levels):</h3>
        <p>Low cyclosporine levels indicate sub-therapeutic concentrations, increasing the risk of the body's immune system attacking the transplanted organ.</p>
        <ul>
            <li><strong>Causes:</strong> Underdosing, missed doses, poor adherence, malabsorption, drug interactions (e.g., with rifampin, anticonvulsants, St. John's Wort).</li>
            <li><strong>Complications:</strong>
                <ul>
                    <li><strong>Organ Rejection:</strong> The most significant risk in transplant patients.</li>
                    <li><strong>Worsening of Autoimmune Disease:</strong> In patients treated for these conditions.</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms of low cyclosporine are those of organ rejection (e.g., fever, tenderness over transplant site, rising creatinine in kidney transplant) or exacerbation of autoimmune disease symptoms.</p>

        <h3>Additional Information:</h3>
        <p>Therapeutic drug monitoring of cyclosporine is crucial for patient safety and long-term graft survival. It requires a multidisciplinary approach involving transplant specialists, pharmacists, and laboratory personnel. Consistent timing of blood draws (trough levels) is paramount for accurate interpretation.</p>
        <p>Related biomarkers often monitored alongside cyclosporine include:</p>
        <ul>
            <li>**Tacrolimus:** Another calcineurin inhibitor, often used interchangeably or in combination with cyclosporine.</li>
            <li>**Creatinine and BUN:** To monitor kidney function (major toxicity target).</li>
            <li>**ALT, AST, Bilirubin:** To monitor liver function.</li>
            <li>**Electrolytes (Potassium, Magnesium):** Affected by cyclosporine.</li>
            <li>**White Blood Cell Count (WBC):** To monitor for infection (due to immunosuppression).</li>
            <li>**Organ-specific Function Tests:** (e.g., liver function tests for liver transplant, cardiac enzymes for heart transplant).</li>
        </ul>
    `,
    relatedBiomarkers: ['tacrolimus', 'creatinine', 'bun', 'alt', 'ast', 'bilirubin', 'potassium', 'magnesium', 'wbc'] // Expanded for more comprehensive monitoring.
},
{
    id: 'tacrolimus',
    name: 'Tacrolimus (Drug Level)',
    description: 'Another immunosuppressant drug used to prevent organ transplant rejection. Monitored for therapeutic levels.',
    type: 'Therapeutic Drug Monitoring',
    responsibleFor: 'Suppressing the immune system to prevent organ rejection. Levels must be closely monitored to ensure efficacy and prevent toxicity.',
    detailedInfo: `
        <h3>Biomarker Type:</h3>
        <p>Tacrolimus is a **calcineurin inhibitor (CNI)**, similar to cyclosporine, and one of the most widely used immunosuppressant medications globally. It potently suppresses the immune system by inhibiting T-lymphocyte activation. Tacrolimus is a critical **Therapeutic Drug Monitoring (TDM)** marker, requiring precise blood level measurements to balance efficacy and minimize significant side effects.</p>

        <h3>Role and Function:</h3>
        <p>Tacrolimus is primarily used in:</p>
        <ul>
            <li><strong>Organ Transplant:</strong> The cornerstone of immunosuppression to prevent rejection of transplanted organs (e.g., kidney, liver, heart, lung, pancreas). It is often used in combination with other immunosuppressants.</li>
            <li><strong>Autoimmune Diseases:</strong> Increasingly used for severe autoimmune conditions, particularly those affecting the skin or kidneys.</li>
        </ul>
        <p>Like cyclosporine, tacrolimus has a narrow therapeutic index and significant variability in its absorption and metabolism between individuals. Therefore, routine blood level monitoring is essential. Levels are typically measured as **trough levels**, meaning the sample is drawn just before the next scheduled dose, to ensure the lowest effective concentration is maintained in the body.</p>

        <h3>Units of Measurement:</h3>
        <ul>
            <li><strong>International System of Units (SI)/Recommended:</strong> nmol/L (nanomole per liter)</li>
            <li><strong>Conventional:</strong> ng/mL (nanogram per milliliter)</li>
            <li><em>Conversion: 1 ng/mL ≈ 1.25 nmol/L</em></li>
        </ul>

        <h3>Reference Values (Therapeutic Range):</h3>
        <p>The therapeutic range for tacrolimus is highly individualized and depends on the type of organ transplanted, the time since transplant, concurrent medications, and the patient's clinical response. These ranges are strict guidelines set by transplant centers.</p>
        <ul>
            <li><strong>Post-transplant (initial, typically first few months):</strong> 5 - 20 ng/mL (trough levels)</li>
            <li><strong>Post-transplant (maintenance, later months/years):</strong> 3 - 10 ng/mL (trough levels)</li>
            <li><em>These are illustrative ranges; actual target levels are determined by the transplant team. Tacrolimus levels are typically much lower than cyclosporine levels due to its higher potency.</em></li>
        </ul>

        <h3>High Tacrolimus (Elevated Tacrolimus Levels):</h3>
        <p>High tacrolimus levels indicate drug toxicity, which can lead to severe and potentially irreversible side effects.</p>
        <ul>
            <li><strong>Causes:</strong> Overdosing, drug interactions (e.g., with certain antifungals (azoles), macrolide antibiotics, calcium channel blockers, grapefruit juice), impaired metabolism (e.g., liver dysfunction).</li>
            <li><strong>Symptoms/Complications of Toxicity:</strong>
                <ul>
                    <li><strong>Nephrotoxicity (Kidney Damage):</strong> A very common and serious side effect, leading to elevated creatinine and reduced kidney function.</li>
                    <li><strong>Neurotoxicity:</strong> Tremor, headache, seizures, altered mental status, paresthesias.</li>
                    <li><strong>Hyperglycemia (New-onset Diabetes After Transplant - NODAT):</strong> Can induce insulin resistance and pancreatic beta-cell dysfunction.</li>
                    <li><strong>Hypertension (High Blood Pressure).</strong></li>
                    <li><strong>Hyperkalemia (High Potassium).</strong></li>
                    <li><strong>Gastrointestinal Issues:</strong> Nausea, vomiting, diarrhea.</li>
                    <li><strong>Increased Risk of Infection:</strong> Due to profound immune suppression.</li>
                    <li><strong>Increased Risk of Malignancy:</strong> Particularly skin cancer and post-transplant lymphoproliferative disorder (PTLD).</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms are varied depending on the affected organ system and can be severe.</p>

        <h3>Low Tacrolimus (Reduced Tacrolimus Levels):</h3>
        <p>Low tacrolimus levels indicate sub-therapeutic concentrations, increasing the risk of the body's immune system rejecting the transplanted organ.</p>
        <ul>
            <li><strong>Causes:</strong> Underdosing, missed doses, poor adherence, malabsorption, drug interactions (e.g., with rifampin, anticonvulsants, St. John's Wort, antacids containing aluminum/magnesium).</li>
            <li><strong>Complications:</strong>
                <ul>
                    <li><strong>Organ Rejection:</strong> The most significant risk in transplant patients.</li>
                </ul>
            </li>
        </ul>
        <p>Symptoms of low tacrolimus are those of organ rejection (e.g., fever, pain/tenderness over transplant site, rising creatinine in kidney transplant, elevated liver enzymes in liver transplant).</p>

        <h3>Additional Information:</h3>
        <p>Therapeutic drug monitoring of tacrolimus is essential for optimizing outcomes in transplant patients. Consistency in sample collection (trough levels) and careful consideration of all concurrent medications and clinical factors are crucial for accurate interpretation and dose adjustments.</p>
        <p>Related biomarkers often monitored alongside tacrolimus include:</p>
        <ul>
            <li>**Cyclosporine:** The other main calcineurin inhibitor, though usually only one is used at a time.</li>
            <li>**Creatinine and BUN:** To monitor kidney function (major toxicity target).</li>
            <li>**ALT, AST, Bilirubin:** To monitor liver function.</li>
            <li>**Blood Glucose / HbA1c:** To monitor for new-onset diabetes.</li>
            <li>**Electrolytes (Potassium):** Affected by tacrolimus.</li>
            <li>**White Blood Cell Count (WBC):** To monitor for infection (due to immunosuppression).</li>
            <li>**Organ-specific Function Tests:** To assess graft health.</li>
        </ul>
    `,
    relatedBiomarkers: ['cyclosporine', 'creatinine', 'bun', 'alt', 'ast', 'bilirubin', 'glucose', 'hba1c', 'potassium', 'wbc'] // Expanded for more comprehensive monitoring.
}
];

export default biomarkersData;