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
                    home: "Home",
                    emailSetup: "Email Setup",
                    dataRetrieval: "Data Retrieval",
                    scrapedData: "Scraped Data",
                    rulesAutomation: "Rules & Automation",
                    masterData: "Master Data",
                    reports: "Reports",
                    nugget: "Nugget",
                    userManagement: "User Management",
                    accounts: "Accounts",
                    help: "Help and Documentation",
                    contactMailbox: "Contact Mailbox",
                    search: "Search Invoices...",
                    operators: "Operators",
                    settings: "Settings",
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
                    prev: "Previous",
                    next: "Next",
                    finishBtn: "Finish",
                    connectMailbox: "Connect Mailbox",
                    addRule: "Add Rule",
                    steps: {
                        chooseProvider: "Choose Provider",
                        authenticate: "Authenticate",
                        selectFolders: "Select Folders",
                        filters: "Filters",
                        finish: "Finish"
                    }
                },

 statsCards: {
      emailsProcessed: "Emails Processed Today",
      emailsPending: "Emails Pending Today",
      emailsFailed: "Emails Failed Today",
    },
                // StatsCards Component
                // stats: {
                //     emailsProcessed: "Emails Processed Today",
                //     emailsPending: "Emails Pending Today",
                //     emailsFailed: "Emails Failed Today",
                // },

                statusCard: {
                    first: "First",
                    last: "Last",
                    supplierTitle: "Supplier",
                    supplierSubtitle: "Format Sent",
                    emailTitle: "Already Sending via Email",
                    emailSubtitle: "Not Yet Sending via Email"
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
                    title: "Scraped Data (Invoices)",
                    date: "Date",
                    company: "Company",
                    invoice: "Invoice #",
                    amount: "Amount",
                    format: "Format",
                    status: "Status",
                    parsed: "Parsed",
                    pending: "Pending",
                    error: "Error"
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
                // RecentInvoicesTable
                invoicesTable: {
                    title: "Recently Crawled Invoices",
                    company: "Company",
                    amount: "Amount",
                    invoice: "Invoice #",
                    email: "Email Account",
                },
                tableActions: {
  assign: "Assign",
  approve: "Approve",
  export: "Export",
  delete: "Delete"
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
                    reports: "Berichte",
                    nugget: "Nugget",
                    userManagement: "Benutzerverwaltung",
                    accounts: "Konten",
                    help: "Hilfe und Dokumentation",
                    contactMailbox: "Kontakt-Postfach",
                    search: "Rechnungen suchen...",
                    operators: "Operatoren",
                    settings: "Einstellungen",
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

                // Connect Component
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
      order: ["localStorage", "navigator"], // 👈 Pehle localStorage check karega
      caches: ["localStorage"],             // 👈 Save in localStorage
    },

    
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
