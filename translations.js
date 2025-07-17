const translations = {
    en: {
        header: {
            title: "Online Blood Test Converter: PDF & Image to Spreadsheets",
            description: "Instantly convert blood test results (PDF, Word, photos) into clear, editable spreadsheets. Easily copy to Excel/Google Sheets or download your data.",
            privacyNote: "Your medical data is private. <strong>No personal data is stored on our servers</strong> after conversion. All file operations are temporary and secure.",
            googleCloudVision: "We use Google Cloud Vision API for image processing, which temporarily accesses data for recognition and does not store it.",
        },
        fileUpload: {
            fileAdded: (fileName) => `File "${fileName}" added!`,
            dragOrClick: "Drag a file here or click to select.",
            releaseToUpload: "Release file to upload!",
            selectFileButton: "Select Blood Test File",
            supportedFormats: "Supported formats: PDF, DOCX, JPG, PNG, WebP"
        },
        loading: "Processing file...",
        error: {
            title: "Error!",
            retryTime: (time) => `Please try again in ${time} seconds.`,
            selectAnotherFile: "Select another file",
            noMedicalData: "No medical analysis data found in the document.",
            unexpectedData: "Unexpected data format received from server.",
            networkError: (message) => `Network error or problem connecting to server: ${message}`
        },
        tableDisplay: {
            imageProcessingResult: "Image Processing Result:",
            imageProcessingNote: "Please note: Image processing may provide a description rather than a structured table if the content is not tabular.",
            copyTable: "Copy Table",
            copySuccess: "Copied Successfully!",
            downloadTable: "Download Table",
            downloadSuccess: "Downloaded!",
            copyError: "Failed to copy table. Please try again.",
            downloadError: "No data available to download."
        },
        howItWorks: {
            title: "How to Convert Blood Tests to a Spreadsheet: Simple Steps",
            step1Title: "Upload your file:",
            step1Desc: "Simply drag and drop your PDF, DOCX, JPG, PNG, or WebP file containing blood test results into the converter area, or click the \"Select Blood Test File\" button to choose a file from your device.",
            step2Title: "Automatic Conversion:",
            step2Desc: "Our intelligent system will instantly process your analysis data and transform it into a clear, structured table. You will see a preview directly on the page.",
            step3Title: "Use the Converted Table:",
            step3Desc: "Once the conversion is complete, you'll have the option to <strong>copy the entire table</strong> with a single click to paste it <strong>directly into Microsoft Excel or Google Sheets</strong>. Alternatively, for your convenience, you can <strong>download the ready-to-use table file</strong> (in CSV or XLSX format) to your computer for offline use."
        },
        whyChooseUs: {
            title: "Why Choose Our Online Blood Test Converter?",
            accuracySpeed: "Maximum Accuracy & Speed: Thanks to advanced algorithms, we ensure fast and reliable conversion of your blood test data into a tabular format without errors.",
            formatSupport: "Wide Format Support: Work with files in PDF, DOCX and popular image formats (JPG, PNG, WebP), making our tool versatile for any medical document.",
            convenientExport: "Convenient Export for Analysis: Get a ready-to-use table that can be easily copied and pasted into Excel, Google Sheets, or directly downloaded. This is ideal for monitoring your health dynamics.",
            dataSecurity: "Guaranteed Data Security: We prioritize your confidentiality. Your medical data is not stored on our servers after processing. All processes are protected.",
            freeOnline: "Completely Free & Online: Use our converter anytime, anywhere without the need for registration, downloads, or software installation."
        },
        faq: {
            title: "Frequently Asked Questions (FAQ)",
            q1: "Is my medical data safe and secure?",
            a1: "Yes, your data security is our highest priority. We do not store your personal medical data on our servers after the conversion process is complete. All file operations are temporary and secure. For detailed information about our security measures and privacy policy, please read <a href=\"/privacy-policy\" class=\"text-indigo-600 hover:underline font-medium\">here</a>.",
            q2: "What types of blood tests can I convert?",
            a2: "Our tool is designed for the effective conversion of a wide range of laboratory blood tests. This includes complete blood count (CBC), blood biochemistry analysis, hormonal indicators, lipid profile, tumor markers, and many other parameters that are presented in table formats, structured text, or images.",
            q3: "In what format will I receive the table after conversion?",
            a3: "After successful conversion, you will see a clear, structured table directly on the page. You'll have several convenient options: you can easily <strong>copy the entire table</strong> with a single click to paste it <strong>directly into Microsoft Excel, Google Sheets, or any other compatible spreadsheet editor</strong>. Additionally, you can <strong>download the ready-to-use table file</strong> to your computer in CSV (Comma Separated Values) or XLSX (for Excel) format.",
            q4: "Do I need to register or install software to use it?",
            a4: "No, absolutely not! Our blood test converter works completely online. You do not need to create an account, register, download, or install any additional software. Simply visit the page, upload your file, and start the conversion!",
            q5: "How often do you update your tool?",
            a5: "We are constantly working to improve our converter, adding support for new formats, increasing recognition accuracy, and expanding functionality. Updates are released regularly to ensure the best experience for our users.",
            q6: "What if my document has multiple tables or mixed content?",
            a6: "Our tool is primarily designed to identify and extract data from a single, prominent table of medical analysis results. If your document contains multiple tables or a mix of structured text and prose, the tool will prioritize what it identifies as the main table. For complex documents, you might need to process sections separately or review the output carefully.",
            q7: "Can I use this tool on my mobile device?",
            a7: "Yes! Our blood test converter is fully responsive and optimized for use on all devices, including smartphones and tablets. You can upload files directly from your mobile device and access your converted tables seamlessly on the go.",
            q8: "Is there a file size limit for uploads?",
            a8: "To ensure optimal performance and prevent abuse, files should not exceed <strong>10MB</strong>. If your file is larger, please try compressing it or splitting it into smaller sections if possible.",
            q9: "What if the conversion result isn't accurate or misses some data?",
            a9: "While our advanced algorithms strive for high accuracy, the quality of the original document (e.g., blurry images, complex layouts, handwritten notes) can affect the conversion. If you notice inaccuracies, you can easily <strong>edit the table directly on the page</strong> before copying or downloading it. If the issue persists, try re-uploading a clearer scan or photo of your document.",
            q10: "How long does the conversion process take?",
            a10: "Most conversions are completed within seconds, especially for well-structured PDF or DOCX files. Image files might take slightly longer due to the optical character recognition (OCR) process. You will see a loading indicator while your file is being processed.",
            q11: "Do you support languages other than English for test results?",
            a11: "Yes, we are committed to global accessibility! Our tool now supports test results and interface languages for the 10 most popular languages worldwide, including <strong>English, Spanish, Mandarin Chinese, Hindi, Arabic, Portuguese, Japanese, German, French, Ukrainian, and Korean</strong>. This comprehensive support ensures that you can accurately convert blood test results regardless of the original document's language, and interact with our tool in your preferred language.",
            q12: "Can I integrate this tool into my own application or website?",
            a12: "This online converter is provided as a standalone web application for direct user use. We do not currently offer an API for third-party integrations."
        },
        languageNames: {
            en: "English", es: "Español", de: "Deutsch", fr: "Français", uk: "Українська",
            ja: "日本語", zh: "简体中文"
        },
        languageSelect: "Language"
    },
    es: {
        header: {
            title: "Convertidor de Análisis de Sangre Online: PDF e Imagen a Hojas de Cálculo",
            description: "Convierta instantáneamente los resultados de análisis de sangre (PDF, Word, fotos) en hojas de cálculo claras y editables. Copie fácilmente a Excel/Google Sheets o descargue sus datos.",
            privacyNote: "Su información médica es privada. <strong>No almacenamos sus datos médicos personales en nuestros servidores</strong> después de completar el proceso de conversión. Todas las operaciones de archivos son temporales y seguras.",
            googleCloudVision: "Utilizamos la API de Google Cloud Vision para el procesamiento de imágenes, que accede temporalmente a los datos solo para el reconocimiento y no los almacena.",
        },
        fileUpload: {
            fileAdded: (fileName) => `¡Archivo "${fileName}" añadido!`,
            dragOrClick: "Arrastre un archivo aquí o haga clic para seleccionar.",
            releaseToUpload: "¡Suelte el archivo para cargar!",
            selectFileButton: "Seleccionar Archivo de Análisis de Sangre",
            supportedFormats: "Formatos soportados: PDF, DOCX, JPG, PNG, WebP"
        },
        loading: "Procesando archivo...",
        error: {
            title: "¡Error!",
            retryTime: (time) => `Por favor, inténtelo de nuevo en ${time} segundos.`,
            selectAnotherFile: "Seleccionar otro archivo",
            noMedicalData: "No se encontraron datos de análisis médicos en el documento.",
            unexpectedData: "Formato de datos inesperado recibido del servidor.",
            networkError: (message) => `Error de red o problema de conexión con el servidor: ${message}`
        },
        tableDisplay: {
            imageProcessingResult: "Resultado del procesamiento de imagen:",
            imageProcessingNote: "Tenga en cuenta: el procesamiento de imágenes puede proporcionar una descripción en lugar de una tabla estructurada si el contenido no es tabular.",
            copyTable: "Copiar Tabla",
            copySuccess: "¡Copiado con Éxito!",
            downloadTable: "Descargar Tabla",
            downloadSuccess: "¡Descargado!",
            copyError: "No se pudo copiar la tabla. Inténtelo de nuevo.",
            downloadError: "No hay datos disponibles para descargar."
        },
        howItWorks: {
            title: "Cómo Convertir Análisis de Sangre a una Hoja de Cálculo: Pasos Simples",
            step1Title: "Suba su archivo:",
            step1Desc: "Simplemente arrastre y suelte su archivo PDF, DOCX, JPG, PNG o WebP que contiene los resultados del análisis de sangre en el área del convertidor, o haga clic en el botón \"Seleccionar Archivo de Análisis de Sangre\" para elegir un archivo de su dispositivo.",
            step2Title: "Conversión Automática:",
            step2Desc: "Nuestro sistema inteligente procesará instantáneamente los datos de su análisis y los transformará en una tabla clara y estructurada. Verá una vista previa directamente en la página.",
            step3Title: "Use la Tabla Convertida:",
            step3Desc: "Una vez completada la conversión, tendrá la opción de <strong>copiar la tabla completa</strong> con un solo clic para pegarla <strong>directamente en Microsoft Excel o Google Sheets</strong>. Alternativamente, para su conveniencia, puede <strong>descargar el archivo de tabla listo para usar</strong> (en formato CSV o XLSX) a su computadora para uso sin conexión."
        },
        whyChooseUs: {
            title: "¿Por qué Elegir Nuestro Convertidor de Análisis de Sangre Online?",
            accuracySpeed: "Máxima Precisión y Velocidad: Gracias a algoritmos avanzados, garantizamos una conversión rápida y confiable de los datos de su análisis de sangre a un formato tabular sin errores.",
            formatSupport: "Amplio Soporte de Formatos: Trabaje con archivos en PDF, DOCX y formatos de imagen populares (JPG, PNG, WebP), lo que hace que nuestra herramienta sea versátil para cualquier documento médico.",
            convenientExport: "Exportación Conveniente para el Análisis: Obtenga una tabla lista para usar que se puede copiar y pegar fácilmente en Excel, Google Sheets o descargar directamente. Esto es ideal para monitorear la dinámica de su salud.",
            dataSecurity: "Seguridad de Datos Garantizada: Priorizamos su confidencialidad. Sus datos médicos no se almacenan en nuestros servidores después del procesamiento. Todos los procesos están protegidos.",
            freeOnline: "Completamente Gratuito y Online: Use nuestro convertidor en cualquier momento y lugar sin necesidad de registro, descargas o instalación de software."
        },
        faq: {
            title: "Preguntas Frecuentes (FAQ)",
            q1: "¿Mis datos médicos están seguros y protegidos?",
            a1: "Sí, la seguridad de sus datos es nuestra máxima prioridad. No almacenamos sus datos médicos personales en nuestros servidores una vez completado el proceso de conversión. Todas las operaciones de archivos son temporales y seguras. Para obtener información detallada sobre nuestras medidas de seguridad y política de privacidad, lea <a href=\"/privacy-policy\" class=\"text-indigo-600 hover:underline font-medium\">aquí</a>.",
            q2: "¿Qué tipos de análisis de sangre puedo convertir?",
            a2: "Nuestra herramienta está diseñada para la conversión eficaz de una amplia gama de análisis de sangre de laboratorio. Esto incluye hemogramas completos (CBC), análisis bioquímicos de sangre, indicadores hormonales, perfil lipídico, marcadores tumorales y muchos otros parámetros que se presentan en formatos de tabla, texto estructurado o imágenes.",
            q3: "¿En qué formato recibiré la tabla después de la conversión?",
            a3: "Después de una conversión exitosa, verá una tabla clara y estructurada directamente en la página. Tendrá varias opciones convenientes: puede <strong>copiar fácilmente la tabla completa</strong> con un solo clic para pegarla <strong>directamente en Microsoft Excel, Google Sheets o cualquier otro editor de hojas de cálculo compatible</strong>. Además, puede <strong>descargar el archivo de tabla listo para usar</strong> a su computadora en formato CSV (valores separados por comas) o XLSX (para Excel).",
            q4: "¿Necesito registrarme o instalar software para usarlo?",
            a4: "¡No, en absoluto! Nuestro convertidor de análisis de sangre funciona completamente en línea. No necesita crear una cuenta, registrarse, descargar ni instalar ningún software adicional. ¡Simplemente visite la página, cargue su archivo y comience la conversión!",
            q5: "¿Con qué frecuencia actualizan su herramienta?",
            a5: "Estamos constantemente trabajando para mejorar nuestro convertidor, agregando soporte para nuevos formatos, aumentando la precisión del reconocimiento y expandiendo la funcionalidad. Las actualizaciones se lanzan regularmente para garantizar la mejor experiencia para nuestros usuarios.",
            q6: "¿Qué pasa si mi documento tiene varias tablas o contenido mixto?",
            a6: "Nuestra herramienta está diseñada principalmente para identificar y extraer datos de una única tabla prominente de resultados de análisis médicos. Si su documento contiene varias tablas o una mezcla de texto estructurado y prosa, la herramienta priorizará lo que identifique como la tabla principal. Para documentos complejos, es posible que deba procesar secciones por separado o revisar cuidadosamente la salida.",
            q7: "¿Puedo usar esta herramienta en mi dispositivo móvil?",
            a7: "¡Sí! Nuestro convertidor de análisis de sangre es totalmente responsivo y está optimizado para su uso en todos los dispositivos, incluidos teléfonos inteligentes y tabletas. Puede cargar archivos directamente desde su dispositivo móvil y acceder a sus tablas convertidas sin problemas sobre la marcha.",
            q8: "¿Hay un límite de tamaño de archivo para las cargas?",
            a8: "Para garantizar un rendimiento óptimo y evitar abusos, los archivos no deben exceder los <strong>10MB</strong>. Si su archivo es más grande, intente comprimirlo o dividirlo en secciones más pequeñas si es posible.",
            q9: "¿Qué pasa si el resultado de la conversión no es preciso o falta algún dato?",
            a9: "Si bien nuestros algoritmos avanzados se esfuerzan por lograr una alta precisión, la calidad del documento original (por ejemplo, imágenes borrosas, diseños complejos, notas escritas a mano) puede afectar la conversión. Si nota imprecisiones, puede <strong>editar fácilmente la tabla directamente en la página</strong> antes de copiarla o descargarla. Si el problema persiste, intente volver a subir un escaneo o una foto más clara de su documento.",
            q10: "¿Cuánto tiempo tarda el proceso de conversión?",
            a10: "La mayoría de las conversiones se completan en segundos, especialmente para archivos PDF o DOCX bien estructurados. Los archivos de imagen pueden tardar un poco más debido al proceso de reconocimiento óptico de caracteres (OCR). Verá un indicador de carga mientras se procesa su archivo.",
            q11: "¿Admiten otros idiomas además del inglés para los resultados de las pruebas?",
            a11: "¡Sí, estamos comprometidos con la accesibilidad global! Nuestra herramienta ahora es compatible con los resultados de las pruebas y los idiomas de la interfaz para los 10 idiomas más populares en todo el mundo, incluidos <strong>inglés, español, chino mandarín, hindi, árabe, portugués, japonés, alemán, francés, ucraniano y coreano</strong>. Este soporte integral garantiza que pueda convertir con precisión los resultados de los análisis de sangre, independientemente del idioma del documento original, e interactuar con nuestra herramienta en su idioma preferido.",
            q12: "¿Puedo integrar esta herramienta en mi propia aplicación o sitio web?",
            a12: "Este convertidor en línea se proporciona como una aplicación web independiente para uso directo del usuario. Actualmente no ofrecemos una API para integraciones de terceros."
        },
        languageNames: {
            en: "English", es: "Español", de: "Deutsch", fr: "Français", uk: "Українська",
            ja: "日本語", zh: "简体中文"
        },
        languageSelect: "Idioma"
    },
    de: {
        header: {
            title: "Online-Bluttestergebnisse-Konverter: PDF & Bild zu Tabellen",
            description: "Konvertieren Sie Bluttestergebnisse (PDF, Word, Fotos) sofort in klare, bearbeitbare Tabellen. Einfach in Excel/Google Sheets kopieren oder Ihre Daten herunterladen.",
            privacyNote: "Ihre medizinischen Daten sind privat. <strong>Nach Abschluss des Konvertierungsvorgangs werden keine persönlichen medizinischen Daten auf unseren Servern gespeichert</strong>. Alle Dateivorgänge sind temporär und sicher.",
            googleCloudVision: "Wir verwenden die Google Cloud Vision API für die Bildverarbeitung, die vorübergehend auf Daten zur Erkennung zugreift und diese nicht speichert.",
        },
        fileUpload: {
            fileAdded: (fileName) => `Datei „${fileName}“ hinzugefügt!`,
            dragOrClick: "Ziehen Sie eine Datei hierher oder klicken Sie, um auszuwählen.",
            releaseToUpload: "Datei zum Hochladen freigeben!",
            selectFileButton: "Bluttest-Datei auswählen",
            supportedFormats: "Unterstützte Formate: PDF, DOCX, JPG, PNG, WebP"
        },
        loading: "Datei wird verarbeitet...",
        error: {
            title: "Fehler!",
            retryTime: (time) => `Bitte versuchen Sie es in ${time} Sekunden erneut.`,
            selectAnotherFile: "Andere Datei auswählen",
            noMedicalData: "Keine medizinischen Analysedaten im Dokument gefunden.",
            unexpectedData: "Unerwartetes Datenformat vom Server empfangen.",
            networkError: (message) => `Netzwerkfehler oder Verbindungsproblem zum Server: ${message}`
        },
        tableDisplay: {
            imageProcessingResult: "Ergebnis der Bildverarbeitung:",
            imageProcessingNote: "Bitte beachten Sie: Die Bildverarbeitung kann eine Beschreibung anstelle einer strukturierten Tabelle liefern, wenn der Inhalt nicht tabellarisch ist.",
            copyTable: "Tabelle kopieren",
            copySuccess: "Erfolgreich kopiert!",
            downloadTable: "Tabelle herunterladen",
            downloadSuccess: "Heruntergeladen!",
            copyError: "Tabelle konnte nicht kopiert werden. Bitte versuchen Sie es erneut.",
            downloadError: "Keine Daten zum Herunterladen verfügbar."
        },
        howItWorks: {
            title: "So konvertieren Sie Bluttestergebnisse in eine Tabelle: Einfache Schritte",
            step1Title: "Laden Sie Ihre Datei hoch:",
            step1Desc: "Ziehen Sie einfach Ihre PDF-, DOCX-, JPG-, PNG- oder WebP-Datei mit Bluttestergebnissen in den Konverterbereich oder klicken Sie auf die Schaltfläche „Bluttest-Datei auswählen“, um eine Datei von Ihrem Gerät auszuwählen.",
            step2Title: "Automatische Konvertierung:",
            step2Desc: "Unser intelligentes System verarbeitet Ihre Analysedaten sofort und wandelt sie in eine klare, strukturierte Tabelle um. Sie sehen eine Vorschau direkt auf der Seite.",
            step3Title: "Verwenden Sie die konvertierte Tabelle:",
            step3Desc: "Nach Abschluss der Konvertierung haben Sie die Möglichkeit, die <strong>gesamte Tabelle</strong> mit einem einzigen Klick zu <strong>kopieren</strong> und sie <strong>direkt in Microsoft Excel oder Google Sheets einzufügen</strong>. Alternativ können Sie die <strong>fertige Tabellendatei</strong> (im CSV- oder XLSX-Format) auf Ihren Computer herunterladen, um sie offline zu verwenden."
        },
        whyChooseUs: {
            title: "Warum unseren Online-Bluttest-Konverter wählen?",
            accuracySpeed: "Maximale Genauigkeit und Geschwindigkeit: Dank fortschrittlicher Algorithmen gewährleisten wir eine schnelle und zuverlässige Konvertierung Ihrer Bluttestdaten in ein tabellarisches Format ohne Fehler.",
            formatSupport: "Breite Formatunterstützung: Arbeiten Sie mit Dateien im PDF-, DOCX- und gängigen Bildformaten (JPG, PNG, WebP), wodurch unser Tool vielseitig für jedes medizinische Dokument ist.",
            convenientExport: "Bequemer Export zur Analyse: Erhalten Sie eine fertige Tabelle, die einfach in Excel, Google Sheets kopiert oder direkt heruntergeladen werden kann. Dies ist ideal zur Überwachung Ihrer Gesundheitsdynamik.",
            dataSecurity: "Garantierte Datensicherheit: Wir legen Wert auf Ihre Vertraulichkeit. Ihre medizinischen Daten werden nach der Verarbeitung nicht auf unseren Servern gespeichert. Alle Prozesse sind geschützt.",
            freeOnline: "Komplett kostenlos und online: Nutzen Sie unseren Konverter jederzeit und überall ohne Registrierung, Downloads oder Softwareinstallation."
        },
        faq: {
            title: "Häufig gestellte Fragen (FAQ)",
            q1: "Sind meine medizinischen Daten sicher und geschützt?",
            a1: "Ja, die Sicherheit Ihrer Daten hat für uns höchste Priorität. Wir speichern Ihre persönlichen medizinischen Daten nach Abschluss des Konvertierungsvorgangs nicht auf unseren Servern. Alle Dateivorgänge sind temporär und sicher. Detaillierte Informationen zu unseren Sicherheitsmaßnahmen und unserer Datenschutzrichtlinie finden Sie <a href=\"/privacy-policy\" class=\"text-indigo-600 hover:underline font-medium\">hier</a>.",
            q2: "Welche Arten von Bluttests kann ich konvertieren?",
            a2: "Unser Tool ist für die effektive Konvertierung einer breiten Palette von Laborbluttests konzipiert. Dazu gehören Blutbilder (CBC), Blutzuckeranalysen, Hormonindikatoren, Lipidprofile, Tumormarker und viele andere Parameter, die in Tabellenformaten, strukturiertem Text oder Bildern vorliegen.",
            q3: "In welchem Format erhalte ich die Tabelle nach der Konvertierung?",
            a3: "Nach erfolgreicher Konvertierung sehen Sie eine klare, strukturierte Tabelle direkt auf der Seite. Sie haben mehrere praktische Optionen: Sie können die <strong>gesamte Tabelle</strong> einfach mit einem Klick <strong>kopieren</strong>, um sie <strong>direkt in Microsoft Excel, Google Sheets oder einen anderen kompatiblen Tabellenkalkulationseditor</strong> einzufügen. Zusätzlich können Sie die <strong>fertige Tabellendatei</strong> (im CSV- oder XLSX-Format) auf Ihren Computer herunterladen, um sie offline zu verwenden.",
            q4: "Muss ich mich registrieren oder Software installieren, um es zu nutzen?",
            a4: "Nein, absolut nicht! Unser Bluttest-Konverter funktioniert vollständig online. Sie müssen kein Konto erstellen, sich registrieren, herunterladen oder zusätzliche Software installieren. Besuchen Sie einfach die Seite, laden Sie Ihre Datei hoch und starten Sie die Konvertierung!",
            q5: "Wie oft aktualisieren Sie Ihr Tool?",
            a5: "Wir arbeiten ständig daran, unseren Konverter zu verbessern, neue Formate zu unterstützen, die Erkennungsgenauigkeit zu erhöhen und die Funktionalität zu erweitern. Updates werden regelmäßig veröffentlicht, um die beste Erfahrung für unsere Benutzer zu gewährleisten.",
            q6: "Was, wenn mein Dokument mehrere Tabellen oder gemischte Inhalte hat?",
            a6: "Unser Tool ist primär darauf ausgelegt, Daten aus einer einzelnen, prominenten Tabelle mit medizinischen Analyseergebnissen zu identifizieren und zu extrahieren. Wenn Ihr Dokument mehrere Tabellen oder eine Mischung aus strukturiertem Text und Prosa enthält, priorisiert das Tool, was es als Haupttabelle identifiziert. Bei komplexen Dokumenten müssen Sie möglicherweise Abschnitte separat verarbeiten oder die Ausgabe sorgfältig überprüfen.",
            q7: "Kann ich dieses Tool auf meinem Mobilgerät verwenden?",
            a7: "Ja! Unser Bluttest-Konverter ist vollständig responsiv und für die Verwendung auf allen Geräten, einschließlich Smartphones und Tablets, optimiert. Sie können Dateien direkt von Ihrem Mobilgerät hochladen und nahtlos auf Ihre konvertierten Tabellen zugreifen, wo immer Sie sind.",
            q8: "Gibt es eine Dateigrößenbeschränkung für Uploads?",
            a8: "Um optimale Leistung zu gewährleisten und Missbrauch zu verhindern, sollten Dateien <strong>10 MB</strong> nicht überschreiten. Wenn Ihre Datei größer ist, versuchen Sie bitte, sie zu komprimieren oder in kleinere Abschnitte aufzuteilen, falls möglich.",
            q9: "Was ist, wenn das Konvertierungsergebnis nicht genau ist oder Daten fehlen?",
            a9: "Obwohl unsere fortschrittlichen Algorithmen eine hohe Genauigkeit anstreben, kann die Qualität des Originaldokuments (z. B. unscharfe Bilder, komplexe Layouts, handschriftliche Notizen) die Konvertierung beeinflussen. Wenn Sie Ungenauigkeiten bemerken, können Sie die <strong>Tabelle einfach direkt auf der Seite bearbeiten</strong>, bevor Sie sie kopieren oder herunterladen. Wenn das Problem weiterhin besteht, versuchen Sie, einen klareren Scan oder ein Foto Ihres Dokuments erneut hochzuladen.",
            q10: "Wie lange dauert der Konvertierungsprozess?",
            a10: "Die meisten Konvertierungen sind innerhalb von Sekunden abgeschlossen, insbesondere bei gut strukturierten PDF- oder DOCX-Dateien. Bilddateien können aufgrund des optischen Zeichenerkennungsprozesses (OCR) etwas länger dauern. Während der Verarbeitung Ihrer Datei wird ein Ladeindikator angezeigt.",
            q11: "Unterstützen Sie andere Sprachen außer Englisch für Testergebnisse?",
            a11: "Ja, wir setzen uns für globale Zugänglichkeit ein! Unser Tool unterstützt jetzt Testergebnisse und Oberflächensprachen für die 10 beliebtesten Sprachen weltweit, darunter <strong>Englisch, Spanisch, Mandarin-Chinesisch, Hindi, Arabisch, Portugiesisch, Japanisch, Deutsch, Französisch, Ukrainisch und Koreanisch</strong>. Diese umfassende Unterstützung stellt sicher, dass Sie Bluttestergebnisse unabhängig von der Originalsprache des Dokuments genau konvertieren und mit unserem Tool in Ihrer bevorzugten Sprache interagieren können.",
            q12: "Kann ich dieses Tool in meine eigene Anwendung oder Website integrieren?",
            a12: "Dieser Online-Konverter wird als eigenständige Webanwendung für die direkte Benutzernutzung bereitgestellt. Wir bieten derzeit keine API für die Integration durch Dritte an."
        },
        languageNames: {
            en: "English", es: "Español", de: "Deutsch", fr: "Français", uk: "Українська",
            ja: "日本語", zh: "简体中文"
        },
        languageSelect: "Sprache"
    },
    fr: {
        header: {
            title: "Convertisseur de Tests Sanguins en Ligne : PDF & Image vers Tableurs",
            description: "Convertissez instantanément les résultats de tests sanguins (PDF, Word, photos) en feuilles de calcul claires et modifiables. Copiez facilement vers Excel/Google Sheets ou téléchargez vos données.",
            privacyNote: "Vos données médicales sont privées. <strong>Aucune donnée médicale personnelle n'est stockée sur nos serveurs</strong> après la conversion. Toutes les opérations de fichiers sont temporaires et sécurisées.",
            googleCloudVision: "Nous utilisons l'API Google Cloud Vision pour le traitement d'images, qui accède temporairement aux données uniquement pour la reconnaissance et ne les stocke pas.",
        },
        fileUpload: {
            fileAdded: (fileName) => `Fichier "${fileName}" ajouté !`,
            dragOrClick: "Faites glisser un fichier ici ou cliquez pour sélectionner.",
            releaseToUpload: "Relâchez le fichier pour télécharger !",
            selectFileButton: "Sélectionner un Fichier de Test Sanguin",
            supportedFormats: "Formats supportés : PDF, DOCX, JPG, PNG, WebP"
        },
        loading: "Traitement du fichier...",
        error: {
            title: "Erreur !",
            retryTime: (time) => `Veuillez réessayer dans ${time} secondes.`,
            selectAnotherFile: "Sélectionner un autre fichier",
            noMedicalData: "Aucune donnée d'analyse médicale trouvée dans le document.",
            unexpectedData: "Format de données inattendu reçu du serveur.",
            networkError: (message) => `Erreur réseau ou problème de connexion au serveur : ${message}`
        },
        tableDisplay: {
            imageProcessingResult: "Résultat du traitement d'image :",
            imageProcessingNote: "Veuillez noter : Le traitement d'image peut fournir une description plutôt qu'un tableau structuré si le contenu n'est pas tabulaire.",
            copyTable: "Copier le tableau",
            copySuccess: "Copié avec succès !",
            downloadTable: "Télécharger le tableau",
            downloadSuccess: "Téléchargé !",
            copyError: "Échec de la copie du tableau. Veuillez réessayer.",
            downloadError: "Aucune donnée disponible à télécharger."
        },
        howItWorks: {
            title: "Comment convertir des tests sanguins en feuille de calcul : Étapes simples",
            step1Title: "Téléchargez votre fichier :",
            step1Desc: "Faites simplement glisser et déposez votre fichier PDF, DOCX, JPG, PNG ou WebP contenant les résultats des tests sanguins dans la zone du convertisseur, ou cliquez sur le bouton \"Sélectionner un fichier de test sanguin\" pour choisir un fichier depuis votre appareil.",
            step2Title: "Conversion automatique :",
            step2Desc: "Notre système intelligent traitera instantanément vos données d'analyse et les transformera en un tableau clair et structuré. Vous verrez un aperçu directement sur la page.",
            step3Title: "Utilisez le tableau converti :",
            step3Desc: "Une fois la conversion terminée, vous aurez la possibilité de <strong>copier l'intégralité du tableau</strong> en un seul clic pour le coller <strong>directement dans Microsoft Excel ou Google Sheets</strong>. Alternativement, pour votre commodité, vous pouvez <strong>télécharger le fichier de tableau prêt à l'emploi</strong> (au format CSV ou XLSX) sur votre ordinateur pour une utilisation hors ligne."
        },
        whyChooseUs: {
            title: "Pourquoi choisir notre convertisseur de tests sanguins en ligne ?",
            accuracySpeed: "Précision et rapidité maximales : Grâce à des algorithmes avancés, nous garantissons une conversion rapide et fiable de vos données de tests sanguins au format tabulaire sans erreurs.",
            formatSupport: "Large prise en charge des formats : Travaillez avec des fichiers aux formats PDF, DOCX et des formats d'image courants (JPG, PNG, WebP), rendant notre outil polyvalent pour tout document médical.",
            convenientExport: "Exportation pratique pour l'analyse : Obtenez un tableau prêt à l'emploi qui peut être facilement copié et collé dans Excel, Google Sheets ou téléchargé directement. C'est idéal pour suivre la dynamique de votre santé.",
            dataSecurity: "Sécurité des données garantie : Nous priorisons votre confidentialité. Vos données médicales ne sont pas stockées sur nos serveurs après le traitement. Tous les processus sont protégés.",
            freeOnline: "Entièrement gratuit et en ligne : Utilisez notre convertisseur à tout moment, n'importe où, sans inscription, téléchargement ou installation de logiciel."
        },
        faq: {
            title: "Foire aux questions (FAQ)",
            q1: "Mes données médicales sont-elles sûres et sécurisées ?",
            a1: "Oui, la sécurité de vos données est notre priorité absolue. Nous ne stockons pas vos données médicales personnelles sur nos serveurs une fois le processus de conversion terminé. Toutes les opérations de fichiers sont temporaires et sécurisées. Pour des informations détaillées sur nos mesures de sécurité et notre politique de confidentialité, veuillez lire <a href=\"/privacy-policy\" class=\"text-indigo-600 hover:underline font-medium\">ici</a>.",
            q2: "Quels types de tests sanguins puis-je convertir ?",
            a2: "Notre outil est conçu pour la conversion efficace d'une large gamme de tests sanguins de laboratoire. Cela inclut la numération formule sanguine (NFS), l'analyse biochimique sanguine, les indicateurs hormonaux, le profil lipidique, les marqueurs tumoraux et de nombreux autres paramètres présentés sous forme de tableaux, de texte structuré ou d'images.",
            q3: "Sous quel format recevrai-je le tableau après la conversion ?",
            a3: "Après une conversion réussie, vous verrez un tableau clair et structuré directement sur la page. Vous aurez plusieurs options pratiques : vous pouvez facilement <strong>copier l'intégralité du tableau</strong> en un seul clic pour le coller <strong>directement dans Microsoft Excel, Google Sheets ou tout autre éditeur de feuille de calcul compatible</strong>. De plus, vous pouvez <strong>télécharger le fichier de tableau prêt à l'emploi</strong> sur votre ordinateur au format CSV (valeurs séparées par des virgules) ou XLSX (pour Excel).",
            q4: "Dois-je m'inscrire ou installer un logiciel pour l'utiliser ?",
            a4: "Non, absolument pas ! Notre convertisseur de tests sanguins fonctionne entièrement en ligne. Vous n'avez pas besoin de créer un compte, de vous inscrire, de télécharger ou d'installer un logiciel supplémentaire. Il suffit de visiter la page, de télécharger votre fichier et de commencer la conversion !",
            q5: "À quelle fréquence mettez-vous à jour votre outil ?",
            a5: "Nous travaillons constamment à l'amélioration de notre convertisseur, en ajoutant la prise en charge de nouveaux formats, en augmentant la précision de la reconnaissance et en étendant les fonctionnalités. Les mises à jour sont publiées régulièrement pour garantir la meilleure expérience à nos utilisateurs.",
            q6: "Que se passe-t-il si mon document contient plusieurs tableaux ou du contenu mixte ?",
            a6: "Notre outil est principalement conçu pour identifier et extraire des données d'un seul tableau proéminent de résultats d'analyses médicales. Si votre document contient plusieurs tableaux ou un mélange de texte structuré et de prose, l'outil priorisera ce qu'il identifie comme le tableau principal. Pour les documents complexes, vous devrez peut-être traiter les sections séparément ou examiner attentivement la sortie.",
            q7: "Puis-je utiliser cet outil sur mon appareil mobile ?",
            a7: "Oui ! Notre convertisseur de tests sanguins est entièrement réactif et optimisé pour une utilisation sur tous les appareils, y compris les smartphones et les tablettes. Vous pouvez télécharger des fichiers directement depuis votre appareil mobile et accéder à vos tableaux convertis de manière transparente lors de vos déplacements.",
            q8: "Y a-t-il une limite de taille de fichier pour les téléchargements ?",
            a8: "Pour garantir des performances optimales et prévenir les abus, les fichiers ne doivent pas dépasser <strong>10 Mo</strong>. Si votre fichier est plus volumineux, veuillez essayer de le compresser ou de le diviser en sections plus petites si possible.",
            q9: "Que se passe-t-il si le résultat de la conversion n'est pas précis ou manque de données ?",
            a9: "Bien que nos algorithmes avancés s'efforcent d'obtenir une grande précision, la qualité du document original (par exemple, des images floues, des mises en page complexes, des notes manuscrites) peut affecter la conversion. Si vous remarquez des inexactitudes, vous pouvez facilement <strong>modifier le tableau directement sur la page</strong> avant de le copier ou de le télécharger. Si le problème persiste, essayez de re-télécharger un scan ou une photo plus claire de votre document.",
            q10: "Combien de temps prend le processus de conversion ?",
            a10: "La plupart des conversions sont effectuées en quelques secondes, en particulier pour les fichiers PDF ou DOCX bien structurés. Les fichiers image peuvent prendre un peu plus de temps en raison du processus de reconnaissance optique de caractères (OCR). Vous verrez un indicateur de chargement pendant le traitement de votre fichier.",
            q11: "Prenez-vous en charge d'autres langues que l'anglais pour les résultats des tests ?",
            a11: "Oui, nous nous engageons à l'accessibilité mondiale ! Notre outil prend désormais en charge les résultats des tests et les langues d'interface pour les 10 langues les plus populaires au monde, notamment <strong>l'anglais, l'espagnol, le chinois mandarin, l'hindi, l'arabe, le portugais, le japonais, l'allemand, le français, l'ukrainien et le coréen</strong>. Cette prise en charge complète garantit que vous pouvez convertir avec précision les résultats des tests sanguins, quelle que soit la langue du document original, et interagir avec notre outil dans votre langue préférée.",
            q12: "Puis-je intégrer cet outil dans ma propre application ou site web ?",
            a12: "Ce convertisseur en ligne est fourni en tant qu'application web autonome pour une utilisation directe par l'utilisateur. Nous n'offrons actuellement pas d'API pour les intégrations tierces."
        },
        languageNames: {
            en: "English", es: "Español", de: "Deutsch", fr: "Français", uk: "Українська",
            ja: "日本語", zh: "简体中文"
        },
        languageSelect: "Langue"
    },
    uk: {
        header: {
            title: "Онлайн-конвертер аналізів крові: PDF та зображення в електронні таблиці",
            description: "Миттєво перетворюйте результати аналізів крові (PDF, Word, фото) на чіткі, редаговані електронні таблиці. Легко копіюйте в Excel/Google Таблиці або завантажуйте свої дані.",
            privacyNote: "Ваші медичні дані конфіденційні. <strong>Ми не зберігаємо ваші особисті медичні дані на наших серверах</strong> після завершення процесу конвертації. Всі операції з файлами тимчасові та безпечні.",
            googleCloudVision: "Ми використовуємо Google Cloud Vision API для обробки зображень, який тимчасово отримує доступ до даних лише для розпізнавання і не зберігає їх.",
        },
        fileUpload: {
            fileAdded: (fileName) => `Файл "${fileName}" додано!`,
            dragOrClick: "Перетягніть файл сюди або натисніть, щоб вибрати.",
            releaseToUpload: "Відпустіть файл для завантаження!",
            selectFileButton: "Вибрати файл аналізу крові",
            supportedFormats: "Підтримувані формати: PDF, DOCX, JPG, PNG, WebP"
        },
        loading: "Обробка файлу...",
        error: {
            title: "Помилка!",
            retryTime: (time) => `Будь ласка, спробуйте ще раз через ${time} секунд.`,
            selectAnotherFile: "Вибрати інший файл",
            noMedicalData: "У документі не знайдено даних медичного аналізу.",
            unexpectedData: "Отримано неочікуваний формат даних від сервера.",
            networkError: (message) => `Помилка мережі або проблема з підключенням до сервера: ${message}`
        },
        tableDisplay: {
            imageProcessingResult: "Результат обробки зображення:",
            imageProcessingNote: "Зверніть увагу: обробка зображень може надати опис, а не структуровану таблицю, якщо вміст не є табличним.",
            copyTable: "Копіювати таблицю",
            copySuccess: "Успішно скопійовано!",
            downloadTable: "Завантажити таблицю",
            downloadSuccess: "Завантажено!",
            copyError: "Не вдалося скопіювати таблицю. Будь ласка, спробуйте ще раз.",
            downloadError: "Немає даних для завантаження."
        },
        howItWorks: {
            title: "Як перетворити аналізи крові в електронну таблицю: Прості кроки",
            step1Title: "Завантажте свій файл:",
            step1Desc: "Просто перетягніть свій файл PDF, DOCX, JPG, PNG або WebP, що містить результати аналізів крові, в область конвертера або натисніть кнопку «Вибрати файл аналізу крові», щоб вибрати файл зі свого пристрою.",
            step2Title: "Автоматична конвертація:",
            step2Desc: "Наша інтелектуальна система миттєво обробить дані вашого аналізу та перетворить їх на чітку, структуровану таблицю. Ви побачите попередній перегляд безпосередньо на сторінці.",
            step3Title: "Використовуйте конвертовану таблицю:",
            step3Desc: "Після завершення конвертації у вас буде можливість <strong>скопіювати всю таблицю</strong> одним натисканням, щоб легко вставити її <strong>безпосередньо в Microsoft Excel або Google Таблиці</strong>. Крім того, для вашої зручності, ви можете <strong>завантажити готовий файл таблиці</strong> (у форматі CSV або XLSX) на свій комп'ютер для використання в автономному режимі."
        },
        whyChooseUs: {
            title: "Чому обрати наш онлайн-конвертер аналізів крові?",
            accuracySpeed: "Максимальна точність і швидкість: Завдяки передовим алгоритмам ми забезпечуємо швидку та надійну конвертацію ваших даних аналізів крові в табличний формат без помилок.",
            formatSupport: "Широка підтримка форматів: Працюйте з файлами у форматах PDF, DOCX та популярних форматах зображень (JPG, PNG, WebP), що робить наш інструмент універсальним для будь-якого медичного документа.",
            convenientExport: "Зручний експорт для аналізу: Отримайте готову до використання таблицю, яку можна легко скопіювати та вставити в Excel, Google Таблиці або завантажити безпосередньо. Це ідеально підходить для моніторингу динаміки вашого здоров'я.",
            dataSecurity: "Гарантована безпека даних: Ми надаємо пріоритет вашій конфіденційності. Ваші медичні дані не зберігаються на наших серверах після обробки. Всі процеси захищені.",
            freeOnline: "Повністю безкоштовно та онлайн: Використовуйте наш конвертер будь-коли та будь-де без необхідності реєстрації, завантажень чи встановлення програмного забезпечення."
        },
        faq: {
            title: "Часті запитання (FAQ)",
            q1: "Чи безпечні мої медичні дані?",
            a1: "Так, безпека ваших даних є нашим найвищим пріоритетом. Ми не зберігаємо ваші особисті медичні дані на наших серверах після завершення процесу конвертації. Всі операції з файлами тимчасові та безпечні. Для детальної інформації про наші заходи безпеки та політику конфіденційності, будь ласка, прочитайте <a href=\"/privacy-policy\" class=\"text-indigo-600 hover:underline font-medium\">тут</a>.",
            q2: "Які типи аналізів крові я можу конвертувати?",
            a2: "Наш інструмент призначений для ефективного перетворення широкого спектру лабораторних аналізів крові. Це включає повний аналіз крові (CBC), біохімічний аналіз крові, гормональні показники, ліпідний профіль, онкомаркери та багато інших параметрів, які представлені в табличному форматі, структурованому тексті або зображеннях.",
            q3: "У якому форматі я отримаю таблицю після конвертації?",
            a3: "Після успішної конвертації ви побачите чітку, структуровану таблицю безпосередньо на сторінці. У вас буде кілька зручних варіантів: ви можете легко <strong>скопіювати всю таблицю</strong> одним натисканням, щоб вставити її <strong>безпосередньо в Microsoft Excel, Google Таблиці або будь-який інший сумісний редактор електронних таблиць</strong>. Крім того, ви можете <strong>завантажити готовий файл таблиці</strong> на свій комп'ютер у форматі CSV (значення, розділені комами) або XLSX (для Excel).",
            q4: "Чи потрібно реєструватися або встановлювати програмне забезпечення для використання?",
            a4: "Ні, абсолютно ні! Наш конвертер аналізів крові працює повністю онлайн. Вам не потрібно створювати обліковий запис, реєструватися, завантажувати або встановлювати додаткове програмне забезпечення. Просто відвідайте сторінку, завантажте свій файл і почніть конвертацію!",
            q5: "Як часто ви оновлюєте свій інструмент?",
            a5: "Ми постійно працюємо над покращенням нашого конвертера, додаючи підтримку нових форматів, підвищуючи точність розпізнавання та розширюючи функціонал. Оновлення випускаються регулярно, щоб забезпечити найкращий досвід для наших користувачів.",
            q6: "Що робити, якщо мій документ містить кілька таблиць або змішаний вміст?",
            a6: "Наш інструмент в основному призначений для ідентифікації та вилучення даних з однієї помітної таблиці результатів медичних аналізів. Якщо ваш документ містить кілька таблиць або суміш структурованого тексту та прози, інструмент надасть пріоритет тому, що він ідентифікує як основну таблицю. Для складних документів вам може знадобитися обробляти розділи окремо або ретельно перевіряти вихідні дані.",
            q7: "Чи можу я використовувати цей інструмент на мобільному пристрої?",
            a7: "Так! Наш конвертер аналізів крові повністю адаптивний і оптимізований для використання на всіх пристроях, включаючи смартфони та планшети. Ви можете завантажувати файли безпосередньо з вашого мобільного пристрою та безперешкодно отримувати доступ до конвертованих таблиць на ходу.",
            q8: "Чи є обмеження на розмір файлів для завантаження?",
            a8: "Щоб забезпечити оптимальну продуктивність і запобігти зловживанню, файли не повинні перевищувати <strong>10 МБ</strong>. Якщо ваш файл більший, спробуйте стиснути його або розділити на менші частини, якщо це можливо.",
            q9: "Що робити, якщо результат конвертації не точний або деякі дані втрачено?",
            a9: "Хоча наші передові алгоритми прагнуть високої точності, якість оригінального документа (наприклад, розмиті зображення, складні макети, рукописні нотатки) може вплинути на конвертацію. Якщо ви помітили неточності, ви можете легко <strong>редагувати таблицю безпосередньо на сторінці</strong> перед копіюванням або завантаженням. Якщо проблема залишається, спробуйте повторно завантажити більш чіткий скан або фотографію вашого документа.",
            q10: "Скільки часу займає процес конвертації?",
            a10: "Більшість конвертацій завершується за лічені секунди, особливо для добре структурованих файлів PDF або DOCX. Зображення можуть займати трохи більше часу через процес оптичного розпізнавання символів (OCR). Під час обробки вашого файлу ви побачите індикатор завантаження.",
            q11: "Чи підтримуєте ви інші мови, крім англійської, для результатів тестів?",
            a11: "Так, ми прагнемо до глобальної доступності! Наш інструмент тепер підтримує результати тестів та мови інтерфейсу для 10 найпопулярніших мов у світі, включаючи <strong>англійську, іспанську, мандаринську китайську, хінді, арабську, португальську, японську, німецьку, французьку, українську та корейську</strong>. Ця всебічна підтримка гарантує, що ви можете точно конвертувати результати аналізів крові незалежно від мови оригінального документа та взаємодіяти з нашим інструментом вашою улюбленою мовою.",
            q12: "Чи можу я інтегрувати цей інструмент у власний додаток або вебсайт?",
            a12: "Цей онлайн-конвертер надається як автономна веб-додаток для прямого використання користувачем. Наразі ми не пропонуємо API для інтеграції з третіми сторонами."
        },
        languageNames: {
            en: "English", es: "Español", de: "Deutsch", fr: "Français", uk: "Українська",
            ja: "日本語", zh: "简体中文"
        },
        languageSelect: "Мова"
    },
    ja: {
        header: {
            title: "オンライン血液検査コンバーター：PDFおよび画像からスプレッドシートへ",
            description: "血液検査結果（PDF、Word、写真）を瞬時に明確で編集可能なスプレッドシートに変換します。ExcelやGoogleスプレッドシートに簡単にコピーしたり、データをダウンロードできます。",
            privacyNote: "あなたの医療データはプライベートです。<strong>変換プロセス完了後、個人データは当社のサーバーに保存されません</strong>。すべてのファイル操作は一時的で安全です。",
            googleCloudVision: "画像処理にはGoogle Cloud Vision APIを使用しており、認識のために一時的にデータにアクセスしますが、保存はしません。",
        },
        fileUpload: {
            fileAdded: (fileName) => `ファイル「${fileName}」が追加されました！`,
            dragOrClick: "ここにファイルをドラッグするか、クリックして選択します。",
            releaseToUpload: "ファイルを離してアップロード！",
            selectFileButton: "血液検査ファイルを選択",
            supportedFormats: "サポートされている形式：PDF、DOCX、JPG、PNG、WebP"
        },
        loading: "ファイル処理中...",
        error: {
            title: "エラー！",
            retryTime: (time) => `${time}秒後に再試行してください。`,
            selectAnotherFile: "別のファイルを選択",
            noMedicalData: "ドキュメントに医療分析データが見つかりませんでした。",
            unexpectedData: "サーバーから予期しないデータ形式が受信されました。",
            networkError: (message) => `ネットワークエラーまたはサーバー接続の問題：${message}`
        },
        tableDisplay: {
            imageProcessingResult: "画像処理結果：",
            imageProcessingNote: "注意：コンテンツが表形式でない場合、画像処理は構造化されたテーブルではなく説明を提供する場合があります。",
            copyTable: "テーブルをコピー",
            copySuccess: "コピー成功！",
            downloadTable: "テーブルをダウンロード",
            downloadSuccess: "ダウンロード完了！",
            copyError: "テーブルのコピーに失敗しました。もう一度お試しください。",
            downloadError: "ダウンロードするデータがありません。"
        },
        howItWorks: {
            title: "血液検査をスプレッドシートに変換する方法：簡単な手順",
            step1Title: "ファイルをアップロード：",
            step1Desc: "血液検査結果を含むPDF、DOCX、JPG、PNG、またはWebPファイルを変換エリアにドラッグ＆ドロップするか、「血液検査ファイルを選択」ボタンをクリックしてデバイスからファイルを選択します。",
            step2Title: "自動変換：",
            step2Desc: "当社のインテリジェントシステムは分析データを即座に処理し、明確で構造化されたテーブルに変換します。ページ上で直接プレビューが表示されます。",
            step3Title: "変換されたテーブルの使用：",
            step3Desc: "変換が完了すると、ワンクリックで<strong>テーブル全体をコピー</strong>して、<strong>Microsoft ExcelやGoogleスプレッドシートに直接貼り付ける</strong>オプションが利用できます。また、便利のために、<strong>すぐに使用できるテーブルファイル</strong>（CSVまたはXLSX形式）をコンピューターにダウンロードしてオフラインで使用できます。"
        },
        whyChooseUs: {
            title: "当社のオンライン血液検査コンバーターを選ぶ理由は？",
            accuracySpeed: "最大の精度と速度：高度なアルゴリズムにより、血液検査データをエラーなく迅速かつ確実に表形式に変換します。",
            formatSupport: "幅広い形式サポート：PDF、DOCX、および一般的な画像形式（JPG、PNG、WebP）で動作し、あらゆる医療ドキュメントに対応する多用途のツールです。",
            convenientExport: "分析に便利なエクスポート：Excel、Googleスプレッドシートに簡単にコピー＆ペーストしたり、直接ダウンロードできるすぐに使用可能なテーブルを取得します。これは健康状態のモニタリングに最適です。",
            dataSecurity: "データセキュリティの保証：私たちはあなたのプライバシーを最優先します。処理後、医療データは当社のサーバーに保存されません。すべてのプロセスは保護されています。",
            freeOnline: "完全無料＆オンライン：登録、ダウンロード、ソフトウェアのインストールなしで、いつでもどこでもコンバーターを使用できます。"
        },
        faq: {
            title: "よくある質問（FAQ）",
            q1: "私の医療データは安全ですか？",
            a1: "はい、データのセキュリティは当社の最優先事項です。変換プロセス完了後、個人医療データは当社のサーバーに保存されません。すべてのファイル操作は一時的で安全です。セキュリティ対策とプライバシーポリシーの詳細については、<a href=\"/privacy-policy\" class=\"text-indigo-600 hover:underline font-medium\">こちら</a>をご覧ください。",
            q2: "どのような種類の血液検査を変換できますか？",
            a2: "当社のツールは、広範囲の臨床血液検査を効率的に変換するように設計されています。これには、全血球計算（CBC）、血液生化学分析、ホルモン指標、脂質プロファイル、腫瘍マーカー、およびテーブル形式、構造化されたテキスト、または画像で提示される他の多くのパラメータが含まれます。",
            q3: "変換後、テーブルはどのような形式で受け取れますか？",
            a3: "変換が成功すると、ページ上に明確で構造化されたテーブルが直接表示されます。いくつかの便利なオプションがあります：ワンクリックで簡単に<strong>テーブル全体をコピー</strong>して、<strong>Microsoft Excel、Googleスプレッドシート、またはその他の互換性のあるスプレッドシートエディタに直接貼り付ける</strong>ことができます。また、<strong>すぐに使用できるテーブルファイル</strong>をCSV（カンマ区切り値）またはXLSX（Excel用）形式でコンピューターにダウンロードできます。",
            q4: "使用するために登録またはソフトウェアをインストールする必要がありますか？",
            a4: "いいえ、まったく必要ありません！当社の血液検査コンバーターは完全にオンラインで動作します。アカウントの作成、登録、追加のソフトウェアのダウンロードやインストールは不要です。ページにアクセスし、ファイルをアップロードして変換を開始するだけです！",
            q5: "ツールの更新頻度はどのくらいですか？",
            a5: "当社はコンバーターの改善に常に取り組んでおり、新しい形式のサポート、認識精度の向上、機能の拡張を追加しています。ユーザーにとって最高の体験を保証するために、定期的に更新がリリースされます。",
            q6: "ドキュメントに複数のテーブルや混合コンテンツがある場合はどうなりますか？",
            a6: "当社のツールは、主に医療分析結果の単一の主要なテーブルからデータを識別し抽出するように設計されています。ドキュメントに複数のテーブルや構造化されたテキストと散文の混合が含まれている場合、ツールは主要なテーブルとして識別するものに優先順位を付けます。複雑なドキュメントの場合、セクションを個別に処理するか、出力を慎重に確認する必要があります。",
            q7: "このツールはモバイルデバイスで使用できますか？",
            a7: "はい！当社の血液検査コンバーターは完全にレスポンシブで、スマートフォンやタブレットを含むすべてのデバイスで使用できるように最適化されています。モバイルデバイスから直接ファイルをアップロードし、外出先でも変換されたテーブルにシームレスにアクセスできます。",
            q8: "アップロードのファイルサイズ制限はありますか？",
            a8: "最適なパフォーマンスを確保し、悪用を防ぐために、ファイルは<strong>10MB</strong>を超えないようにしてください。ファイルが大きい場合は、圧縮するか、可能であれば小さなセクションに分割してみてください。",
            q9: "変換結果が正確でない、または一部のデータが欠落している場合はどうなりますか？",
            a9: "高度なアルゴリズムは高い精度を目指していますが、元のドキュメントの品質（例：ぼやけた画像、複雑なレイアウト、手書きのメモ）が変換に影響を与える可能性があります。不正確な点に気付いた場合、コピーまたはダウンロードする前に<strong>ページ上でテーブルを直接編集</strong>できます。問題が解決しない場合は、より鮮明なスキャンまたは写真を再アップロードしてみてください。",
            q10: "変換プロセスにはどのくらい時間がかかりますか？",
            a10: "ほとんどの変換は数秒以内に完了します。特に、構造化されたPDFまたはDOCXファイルの場合です。画像ファイルは、光学文字認識（OCR）プロセスのため、わずかに時間がかかる場合があります。ファイルが処理されている間、読み込みインジケーターが表示されます。",
            q11: "検査結果について英語以外の言語をサポートしていますか？",
            a11: "はい、グローバルなアクセシビリティに取り組んでいます！当社のツールは、世界で最も人気のある10言語（<strong>英語、スペイン語、標準中国語、ヒンディー語、アラビア語、ポルトガル語、日本語、ドイツ語、フランス語、ウクライナ語、韓国語</strong>）の検査結果およびインターフェース言語をサポートしています。この包括的なサポートにより、元のドキュメントの言語に関係なく、血液検査結果を正確に変換し、希望する言語でツールと対話することができます。",
            q12: "このツールを自分のアプリケーションやウェブサイトに統合できますか？",
            a12: "このオンラインコンバーターは、ユーザーが直接使用するためのスタンドアロンのWebアプリケーションとして提供されています。現在、サードパーティの統合用のAPIは提供していません。"
        },
        languageNames: {
            en: "English", es: "Español", de: "Deutsch", fr: "Français", uk: "Українська",
            ja: "日本語", zh: "简体中文"
        },
        languageSelect: "言語"
    },
zh: {
        header: {
            title: "在线血检转换器：PDF和图片转表格",
            description: "即时将血液检测结果（PDF、Word、照片）转换为清晰、可编辑的电子表格。轻松复制到Excel/Google Sheets或下载您的数据。支持PDF、DOCX、JPG、PNG、WebP。",
            privacyNote: "您的医疗数据是私密的。**转换后，我们的服务器不存储任何个人数据**。所有文件操作都是临时且安全的。",
            googleCloudVision: "我们使用Google Cloud Vision API进行图像处理，该API临时访问数据进行识别，但不存储数据。",
            privacyPolicyLink: "隐私政策"
        },
        fileUpload: {
            fileAdded: (fileName) => `文件“${fileName}”已添加！`,
            dragOrClick: "拖放文件到此处或点击选择。",
            releaseToUpload: "释放文件以上传！",
            selectFileButton: "选择血液检测文件",
            supportedFormats: "支持格式：PDF, DOCX, JPG, PNG, WebP"
        },
        loading: "正在处理文件...",
        error: {
            title: "错误！",
            retryTime: (time) => `请在 ${time} 秒后重试。`,
            selectAnotherFile: "选择另一个文件",
            noMedicalData: "文档中未找到医疗分析数据。",
            unexpectedData: "从服务器接收到意外数据格式。",
            networkError: (message) => `网络错误或连接服务器问题：${message}`
        },
        tableDisplay: {
            imageProcessingResult: "图像处理结果：",
            imageProcessingNote: "请注意：如果内容不是表格形式，图像处理可能会提供描述而不是结构化表格。",
            copyTable: "复制表格",
            copySuccess: "复制成功！",
            downloadTable: "下载表格",
            downloadSuccess: "已下载！",
            copyError: "复制表格失败。请重试。",
            downloadError: "没有可下载的数据。"
        },
        howItWorks: {
            title: "如何将血液检测转换为电子表格：简单步骤",
            step1Title: "上传您的文件：",
            step1Desc: "只需将包含血液检测结果的PDF、DOCX、JPG、PNG或WebP文件拖放到转换区域，或点击“选择血液检测文件”按钮从您的设备中选择文件。",
            step2Title: "自动转换：",
            step2Desc: "我们的智能系统将立即处理您的分析数据，并将其转换为清晰、结构化的表格。您将在页面上直接看到预览。",
            step3Title: "使用转换后的表格：",
            step3Desc: "转换完成后，您可以选择**一键复制整个表格**，并将其**直接粘贴到Microsoft Excel或Google Sheets**。此外，为了您的方便，您可以将**可用的表格文件**（CSV或XLSX格式）下载到您的计算机以供离线使用。"
        },
        whyChooseUs: {
            title: "为什么选择我们的在线血液检测转换器？",
            accuracySpeed: "最高准确性和速度：凭借先进的算法，我们确保快速可靠地将您的血液检测数据无误地转换为表格格式。",
            formatSupport: "广泛的格式支持：支持PDF、DOCX和流行的图像格式（JPG、PNG、WebP）文件，使我们的工具适用于任何医疗文档。",
            convenientExport: "方便的导出分析：获取一个可以轻松复制并粘贴到Excel、Google Sheets或直接下载的现成表格。这对于监测您的健康动态非常理想。",
            dataSecurity: "保证数据安全：我们将您的机密性放在首位。处理后，您的医疗数据不会存储在我们的服务器上。所有过程都受到保护。",
            freeOnline: "完全免费和在线：无需注册、下载或安装软件，随时随地使用我们的转换器。"
        },
        faq: {
            title: "常见问题 (FAQ)",
            q1: "我的医疗数据安全吗？",
            a1: "是的，您的数据安全是我们的首要任务。转换过程完成后，我们不会在服务器上存储您的个人医疗数据。所有文件操作都是临时且安全的。有关我们的安全措施和隐私政策的详细信息，请<a href=\"/privacy-policy\" class=\"text-indigo-600 hover:underline font-medium\">点击此处</a>阅读。",
            q2: "我可以转换哪些类型的血液检测？",
            a2: "我们的工具旨在有效转换各种实验室血液检测。这包括全血细胞计数（CBC）、血液生化分析、激素指标、血脂谱、肿瘤标志物以及许多以表格形式、结构化文本或图像呈现的其他参数。",
            q3: "转换后我将以什么格式接收表格？",
            a3: "成功转换后，您将在页面上直接看到一个清晰、结构化的表格。您将有几种便捷的选择：您可以轻松**一键复制整个表格**，并将其**直接粘贴到Microsoft Excel、Google Sheets或任何其他兼容的电子表格编辑器中**。此外，您可以将**可用的表格文件**下载到您的计算机，格式为CSV（逗号分隔值）或XLSX（适用于Excel）。",
            q4: "我需要注册或安装软件才能使用吗？",
            a4: "不，绝对不需要！我们的血液检测转换器完全在线运行。您无需创建帐户、注册、下载或安装任何额外的软件。只需访问页面，上传您的文件，即可开始转换！",
            q5: "您多久更新一次工具？",
            a5: "我们不断致力于改进转换器，增加对新格式的支持，提高识别准确性，并扩展功能。我们会定期发布更新，以确保为用户提供最佳体验。",
            q6: "如果我的文档有多个表格或混合内容怎么办？",
            a6: "我们的工具主要设计用于识别和提取单个主要医疗分析结果表中的数据。如果您的文档包含多个表格或结构化文本和散文的混合内容，该工具将优先识别主表格。对于复杂文档，您可能需要单独处理部分或仔细检查输出。",
            q7: "我可以在我的移动设备上使用这个工具吗？",
            a7: "可以！我们的血液检测转换器完全响应式，并针对所有设备（包括智能手机和平板电脑）进行了优化。您可以直接从移动设备上传文件，并随时随地无缝访问转换后的表格。",
            q8: "文件上传有大小限制吗？",
            a8: "为了确保最佳性能和防止滥用，文件大小不应超过**20MB**。如果您的文件较大，请尝试压缩或将其分成较小的部分。",
            q9: "如果转换结果不准确或遗漏了一些数据怎么办？",
            a9: "虽然我们的高级算法力求高准确性，但原始文档的质量（例如，模糊图像、复杂布局、手写笔记）可能会影响转换。如果您发现不准确之处，可以在复制或下载之前轻松**直接在页面上编辑表格**。如果问题仍然存在，请尝试重新上传更清晰的文档扫描件或照片。",
            q10: "转换过程需要多长时间？",
            a10: "大多数转换都在几秒钟内完成，特别是对于结构良好的PDF或DOCX文件。图像文件由于光学字符识别（OCR）过程可能需要稍微长一点的时间。在文件处理期间，您将看到加载指示器。",
            q11: "除了英语，您还支持其他语言的检测结果吗？",
            a11: "是的，我们致力于全球可访问性！我们的工具现在支持全球10种最流行语言的检测结果和界面语言，包括**英语、西班牙语、普通话、印地语、阿拉伯语、葡萄牙语、俄语、日语、德语、法语和韩语**。这种全面的支持确保您无论原始文档的语言如何，都可以准确转换血液检测结果，并以您首选的语言与我们的工具进行交互。",
            q12: "我可以将此工具集成到我的应用程序或网站中吗？",
            a12: "此在线转换器作为独立的Web应用程序提供给用户直接使用。我们目前不提供第三方集成的API。"
        },
        languageNames: {
            en: "English", es: "Español", de: "Deutsch", fr: "Français", uk: "Українська",
            ja: "日本語", zh: "简体中文"
        },
        languageSelect: "语言选择"
    }
};

export default translations;