import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // 👈 Add this line
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translation: {
                appName: "Mail Invoices",

                // Sidebar
              sidebar: {
  home: "home",
  emailSetup: "email Setup",
  dataRetrieval: "data Retrieval",
  scrapedData: "scraped Data",
  rulesAutomation: "rules & automation",
  masterData: "master data",
  suppliers: "suppliers",  
  export: "export",        
  userManagement: "user management",
  account: "account",      
  help: "Help and Documentation",
},
                hero: {
  title: "Auto–Collect, Parse & Export Invoices From Email",
  subtitle:
    "Smart Invoice Processing From Your Mailbox. Connect inboxes (Gmail, Outlook, IMAP), auto-detect PDF & XML invoices, clean vendor data, apply rules, and deliver ready-to-use exports to your accounting systems. Save hours on manual entry — audit-ready.",
  button: "Schedule a Demo"
},

                filters: {
                    title: "Filters",
                    date: "Date",
                    today: "Today",
                    last7days: "Last 7 days",
                    supplier: "Supplier",
                    status: "Status",
                    parsed: "Parsed",
                    pending: "Pending",
                    error: "Error"
                },

                // Connect Component
                connect: {
                    title: "Connect New Account",
                    prev: "previous",
                    next: "Next",
                    finishBtn: "Finish",
                    connectMailbox: "connect mailbox",
                    addRule: "add rule",
                    steps: {
                        chooseProvider: "Choose Provider",
                        authenticate: "Authenticate",
                        selectFolders: "Select Folders",
                        filters: "Filters",
                        finish: "Finish"
                    }
                },

 statsCards: {
      emailsProcessed: "emails processed today",
      emailsPending: "emails pending today",
      emailsFailed: "emails failed today",
    },
               

                statusCard: {
                    first: "first",
                    last: "last",
                    supplierTitle: "supplier",
                    supplierSubtitle: "format Sent",
                    emailTitle: "already sending via email",
                    emailSubtitle: "not yet sending via email"
                },
                // ChartsSection
                charts: {
                    invoicesCrawled: "Invoices Crawled by This Tool",
                    invoiceFormats: "Invoice File Formats",
                    crawledTool: "Crawled via Tool",
                    otherTools: "Other Tools",
                    pdf: "PDF",
                    xml: "XML Invoices",
                    xlsx: "XLSX",
                    others: "Others",
                },
                dataRetrieval: {
                    statusTitle: "Data Retrieval Status",
                    enable: "Enable",
                    disable: "Disable",
                    offTitle: "Retrieval Is Currently OFF",
                    offDescription: `[Enable Retrieval] to start fetching invoices.
        Once enabled, you can configure:
        - Schedule (frequency)
        - File types (PDF, XML)
        - View retrieval logs`
                },
                invoicesTable: {
                    title: "scraped data (Invoices)",
                    date: "date",
                    company: "company",
                    invoice: "invoice #",
                    amount: "amount",
                    format: "format",
                    status: "status",
                    parsed: "parsed",
                    pending: "pending",
                    error: "error"
                },
                  dashboard: {
    "title": "Automating Financial",
    "subtitle": "Workflows From Email",
    "description": "Mail Invoices captures PDFs and XML e-invoices from Gmail, Outlook, or IMAP with smart OCR.",
    "feature1": { "title": "Multi-account Intake", "desc": "Track your progress and motivate your efforts everyday." },
    "feature2": { "title": "Smart Invoice Detection", "desc": "Set and track goals with manageable task breakdowns." },
    "feature3": { "title": "Supplier Directory & Dedupe", "desc": "Ensure your daily safety with tighter encryption." },
    "feature4": { "title": "Rules & Automation", "desc": "Meet targets and deadlines that matter most." },
    "learnMore": "Learn More",
    "cta": "View All Features"
  },

   resources: {
    "title": "Practical Tools & Knowledge",
    "description": "Guides, compliance notes (XRechnung, Factur-X, ZUGFeRD), blog updates, and a help center keep your team informed and ready.",
    "cta": "View All Resources",
    "item1": {
      "title": "Insights & Industry Updates",
      "desc": "Auto-detect PDF & XML invoices, clean vendor data, apply rules, and deliver ready-to-use exports to your accounting systems."
    },
    "item2": {
      "title": "Stay Aligned with Standards",
      "desc": "Auto-detect PDF & XML invoices, clean vendor data, apply rules, and deliver ready-to-use exports to your accounting systems."
    }
  },
  pricing: {
  title: "Plans that grow with your needs",
  subtitle:
    "From free mailbox monitoring to enterprise-grade automation with SSO and custom compliance, choose a plan that matches your invoice volume and integration level.",
  tagline: "Simple, Scalable, Transparent",

  plans: {
    free: {
      name: "Free",
      price: "$0",
      button: "Get started for free",
      features: [
        "1 connected mailbox (Gmail/Outlook/IMAP)",
        "Up to 250 invoices per month",
        "PDF + XML detection with OCR",
        "Basic exports (CSV, Excel)",
        "Basic support",
      ],
    },
    pro: {
      name: "Pro",
      price: "$48",
      button: "Sign up now",
      features: [
        "Up to 5 mailboxes",
        "5,000 invoices per month",
        "OCR + XML parsing (Factur-X, XRechnung, ZUGFeRD support)",
        "Advanced exports (CSV, Excel, JSON, PDF)",
        "Supplier directory & dedupe",
        "Rules & automation",
        "Detailed usage analytics",
        "Priority email support",
      ],
    },
    business: {
      name: "Business",
      price: "$199",
      button: "Sign up now",
      features: [
        "Unlimited mailboxes",
        "50,000 invoices per month",
        "200GB storage",
        "Advanced vendor engine (multi-condition & TIN matching)",
        "OCR + AI dedupe with bulk uploads",
        "Advanced exports, SFTP, Webhooks, Accounting integrations",
        "Full audit trail (RBAC, roles-based access)",
        "Data retention & compliance options",
        "Priority support with SLA response",
      ],
    },
  },
  mostPopular: "Most Popular",
},

        

                logs: {
                    title: "Logs",
                    timings: "Timings",
                    provider: "Provider",
                    status: "Status",
                    success: "{{count}} invoices retrieved successfully",
                    parsed: "{{count}} invoices parsed",
                    error: "ERROR - Authentication expired"
                },
                connectedAccounts: {
                    title: "Connected Accounts",
                    connectNew: "Connect New Account",
                    provider: "Provider",
                    email: "Email Address",
                    status: "Status",
                    lastSync: "Last Sync",
                    actions: "Actions",
                    reconnect: "Reconnect",
                    remove: "Remove",
                    statuses: {
                        connected: "Connected",
                        error: "Error",
                        pending: "Pending",
                        reconnect: "Reconnect"
                    }
                },

                schedule: {
                    title: "Data Retrieval Schedule",
                    frequency: "Frequency",
                    every15: "Every 15 minutes",
                    every30: "Every 30 minutes",
                    hourly: "Hourly",
                    nextRun: "Next Run",
                    runNow: "Run Now"
                },
                
                invoicesTable: {
                    title: "recently crawled invoices",
                    company: "company",
                    amount: "amount",
                    invoice: "invoice #",
                    email: "email Account",
                },
                tableActions: {
  assign: "Assign",
  approve: "Approve",
  export: "Export",
  delete: "Delete"
},
 footer: {
            description:
              "Connect inboxes (Gmail, Outlook, IMAP), auto-detect PDF & XML invoices, clean vendor data.",
            quickLinks: "Quick Links",
            about: "About",
            features: "Features",
            resources: "Resources",
            contact: "Contact",
          },

                fileTypes: {
                    title: "File Types to Retrieve",
                    pdf: "PDF",
                    xml: "XML",
                    others: "Others"
                },
                stats: {
  total: "Total",
  parsed: "Parsed",
  errors: "Errors",
  pending: "Pending"
}

            },
        },

        de: {
            translation: {
                appName: "Mail-Rechnungen",

                // Sidebar
               sidebar: {
  home: "Startseite",
  emailSetup: "E-Mail Einrichtung",
  dataRetrieval: "Datenabruf",
  scrapedData: "Gescrapte Daten",
  rulesAutomation: "Regeln & Automatisierung",
  masterData: "Stammdaten",
  suppliers: "Lieferanten", // ✅ lowercase plural
  export: "Export",         // ✅ lowercase
  userManagement: "Benutzerverwaltung",
  account: "Konto",         // ✅ singular lowercase
  help: "Hilfe und Dokumentation",
},
                statusCard: {
                    first: "Erste",
                    last: "Letzte",
                    supplierTitle: "Lieferant",
                    supplierSubtitle: "Gesendetes Format",
                    emailTitle: "Bereits per E-Mail gesendet",
                    emailSubtitle: "Noch nicht per E-Mail gesendet"
                },
                stats: {
  total: "Gesamt",
  parsed: "Analysiert",
  errors: "Fehler",
  pending: "Ausstehend"
},

                dataRetrieval: {
                    statusTitle: "Datenabruf-Status",
                    enable: "Aktivieren",
                    disable: "Deaktivieren",
                    offTitle: "Abruf ist derzeit AUS",
                    offDescription: `[Abruf aktivieren], um mit dem Abrufen von Rechnungen zu beginnen.
Nach der Aktivierung können Sie konfigurieren:
- Zeitplan (Häufigkeit)
- Dateitypen (PDF, XML)
- Abrufprotokolle anzeigen`
                },
                invoicesTable: {
                    title: "Gesammelte Daten (Rechnungen)",
                    date: "Datum",
                    company: "Firma",
                    invoice: "Rechnungsnummer",
                    amount: "Betrag",
                    format: "Format",
                    status: "Status",
                    parsed: "Analysiert",
                    pending: "Ausstehend",
                    error: "Fehler"
                },

                hero: {
  title: "Automatisches Sammeln, Analysieren & Exportieren von Rechnungen aus E-Mails",
  subtitle:
    "Intelligente Rechnungsverarbeitung direkt aus Ihrem Posteingang. Verbinden Sie Postfächer (Gmail, Outlook, IMAP), erkennen Sie automatisch PDF- und XML-Rechnungen, bereinigen Sie Lieferantendaten, wenden Sie Regeln an und exportieren Sie fertige Daten in Ihre Buchhaltungssysteme. Sparen Sie Stunden manueller Arbeit – revisionssicher.",
  button: "Demo vereinbaren"
},
 
   dashboard: {
    "title": "Automatisierung Finanzielle",
    "subtitle": "Arbeitsabläufe aus E-Mails",
    "description": "Mail Invoices erfasst PDF- und XML-E-Rechnungen aus Gmail, Outlook oder IMAP mit intelligenter OCR.",
    "feature1": { "title": "Mehrkonten-Erfassung", "desc": "Verfolgen Sie Ihren Fortschritt und steigern Sie Ihre Motivation jeden Tag." },
    "feature2": { "title": "Intelligente Rechnungserkennung", "desc": "Setzen und verfolgen Sie Ziele mit klaren Aufgabenaufteilungen." },
    "feature3": { "title": "Lieferantenverzeichnis & Dublettenprüfung", "desc": "Sorgen Sie für tägliche Sicherheit durch stärkere Verschlüsselung." },
    "feature4": { "title": "Regeln & Automatisierung", "desc": "Erreichen Sie die wichtigsten Ziele und Fristen mühelos." },
    "learnMore": "Mehr erfahren",
    "cta": "Alle Funktionen anzeigen"
  },
                
                connect: {
                    title: "Neues Konto verbinden",
                    prev: "Zurück",
                    next: "Weiter",
                    finishBtn: "Fertigstellen",
                    connectMailbox: "Postfach verbinden",
                    addRule: "Regel hinzufügen",
                    steps: {
                        chooseProvider: "Anbieter auswählen",
                        authenticate: "Authentifizieren",
                        selectFolders: "Ordner auswählen",
                        filters: "Filter",
                        finish: "Abschließen"
                    }
                },

                connectedAccounts: {
                    title: "Verbundene Konten",
                    connectNew: "Neues Konto verbinden",
                    provider: "Anbieter",
                    email: "E-Mail-Adresse",
                    status: "Status",
                    lastSync: "Letzte Synchronisierung",
                    actions: "Aktionen",
                    reconnect: "Erneut verbinden",
                    remove: "Entfernen",
                    statuses: {
                        connected: "Verbunden",
                        error: "Fehler",
                        pending: "Ausstehend",
                        reconnect: "Erneut verbinden"
                    }
                },
                // StatsCards Component
                 statsCards: {
      emailsProcessed: "Heute verarbeitete E-Mails",
      emailsPending: "Heute ausstehende E-Mails",
      emailsFailed: "Heute fehlgeschlagene E-Mails",
    },
                fileTypes: {
                    title: "Dateitypen zum Abrufen",
                    pdf: "PDF",
                    xml: "XML",
                    others: "Andere"
                },


                // ChartsSection
                charts: {
                    invoicesCrawled: "Von diesem Tool gecrawlte Rechnungen",
                    invoiceFormats: "Rechnungsdateiformate",
                    crawledTool: "Gecrawlt über Tool",
                    otherTools: "Andere Tools",
                    pdf: "PDF",
                    xml: "XML-Rechnungen",
                    xlsx: "XLSX",
                    others: "Andere",
                },

                // RecentInvoicesTable
                invoicesTable: {
                    title: "Kürzlich gecrawlte Rechnungen",
                    company: "Firma",
                    amount: "Betrag",
                    invoice: "Rechnung #",
                    email: "E-Mail-Konto",
                },
                schedule: {
                    title: "Abrufzeitplan",
                    frequency: "Häufigkeit",
                    every15: "Alle 15 Minuten",
                    every30: "Alle 30 Minuten",
                    hourly: "Stündlich",
                    nextRun: "Nächster Lauf",
                    runNow: "Jetzt ausführen"
                },
                 footer: {
            description:
              "Postfächer verbinden (Gmail, Outlook, IMAP), PDF- & XML-Rechnungen automatisch erkennen, Lieferantendaten bereinigen.",
            quickLinks: "Schnellzugriff",
            about: "Über uns",
            features: "Funktionen",
            resources: "Ressourcen",
            contact: "Kontakt",
          },
                logs: {
                    title: "Protokolle",
                    timings: "Zeit",
                    provider: "Anbieter",
                    status: "Status",
                    success: "{{count}} Rechnungen erfolgreich abgerufen",
                    parsed: "{{count}} Rechnungen analysiert",
                    error: "FEHLER - Authentifizierung abgelaufen"
                },
                filters: {
                    title: "Filter",
                    date: "Datum",
                    today: "Heute",
                    last7days: "Letzte 7 Tage",
                    supplier: "Lieferant",
                    status: "Status",
                    parsed: "Analysiert",
                    pending: "Ausstehend",
                    error: "Fehler"
                },
                  pricing: {
  title: "Pläne, die mit Ihren Anforderungen wachsen",
  subtitle:
    "Von kostenlosem Posteingangs-Monitoring bis hin zur Enterprise-Automatisierung mit SSO und Compliance – wählen Sie den Plan, der zu Ihrem Rechnungsvolumen passt.",
  tagline: "Einfach, Skalierbar, Transparent",

  plans: {
    free: {
      name: "Kostenlos",
      price: "$0",
      button: "Kostenlos starten",
      features: [
        "1 verbundenes Postfach (Gmail/Outlook/IMAP)",
        "Bis zu 250 Rechnungen pro Monat",
        "PDF + XML-Erkennung mit OCR",
        "Basis-Exporte (CSV, Excel)",
        "Basis-Support",
      ],
    },
    pro: {
      name: "Pro",
      price: "$48",
      button: "Jetzt registrieren",
      features: [
        "Bis zu 5 Postfächer",
        "5.000 Rechnungen pro Monat",
        "OCR + XML-Parsing (Factur-X, XRechnung, ZUGFeRD-Unterstützung)",
        "Erweiterte Exporte (CSV, Excel, JSON, PDF)",
        "Lieferantenverzeichnis & Dublettenprüfung",
        "Regeln & Automatisierung",
        "Detaillierte Nutzungsanalysen",
        "Priorisierter E-Mail-Support",
      ],
    },
    business: {
      name: "Business",
      price: "$199",
      button: "Jetzt registrieren",
      features: [
        "Unbegrenzte Postfächer",
        "50.000 Rechnungen pro Monat",
        "200 GB Speicherplatz",
        "Erweiterte Lieferanten-Engine (mehrere Bedingungen & TIN-Abgleich)",
        "OCR + KI-Deduplizierung mit Massen-Uploads",
        "Erweiterte Exporte, SFTP, Webhooks, Buchhaltungsintegrationen",
        "Vollständige Prüfprotokolle (RBAC, rollenbasierter Zugriff)",
        "Datenaufbewahrung & Compliance-Optionen",
        "Priorisierter Support mit SLA-Antwortzeit",
      ],
    },
  },
  mostPopular: "Am beliebtesten",
},

        
                
  resources: {
    "title": "Praktische Werkzeuge & Wissen",
    "description": "Leitfäden, Compliance-Hinweise (XRechnung, Factur-X, ZUGFeRD), Blog-Updates und ein Help Center halten Ihr Team informiert und bereit.",
    "cta": "Alle Ressourcen anzeigen",
    "item1": {
      "title": "Einblicke & Branchenneuigkeiten",
      "desc": "Erkennen Sie automatisch PDF- und XML-Rechnungen, bereinigen Sie Lieferantendaten, wenden Sie Regeln an und liefern Sie exportfertige Ergebnisse."
    },
    "item2": {
      "title": "Bleiben Sie mit Standards im Einklang",
      "desc": "Erkennen Sie automatisch PDF- und XML-Rechnungen, bereinigen Sie Lieferantendaten, wenden Sie Regeln an und liefern Sie exportfertige Ergebnisse."
    }
  },
                tableActions: {
  assign: "Zuweisen",
  approve: "Genehmigen",
  export: "Exportieren",
  delete: "Löschen"
}

            },
        },
    },
detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],             
    },

    
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
