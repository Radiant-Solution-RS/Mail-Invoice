// InvoicesTable.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const InvoicesTable = () => {
  const { t, i18n } = useTranslation();

  const data = [
    { date: "2025-09-15", company: "ACME Corp", id: "1001", amount: "$200", format: "PDF", status: "Parsed" },
    { date: "2025-04-30", company: "XYZ Ltd", id: "1002", amount: "$800", format: "XML", status: "Error" },
    { date: "2025-09-10", company: "GlobalCo", id: "1003", amount: "$100", format: "PDF", status: "Pending" },
    { date: "2025-08-18", company: "SmallBiz", id: "1004", amount: "$500", format: "Scan", status: "Parsed" },
    { date: "2025-08-25", company: "XYZ Ltd", id: "1005", amount: "$300", format: "XML", status: "Error" },
    { date: "2025-07-01", company: "ACME Corp", id: "1006", amount: "$1200", format: "Scan", status: "Pending" },
    { date: "2025-02-15", company: "GlobalCo", id: "1007", amount: "$1100", format: "PDF", status: "Parsed" },
    { date: "2025-09-11", company: "SmallBiz", id: "1008", amount: "$205", format: "XML", status: "Error" },
  ];

  // Helper: agar German ho to translation, warna original text
  const translateIfNeeded = (key, fallback) =>
    i18n.language === "de" ? t(key) : fallback;

  return (
    <div>
      <h2 className="text-xl font-semibold mx-6 my-4">
        {translateIfNeeded("invoicesTable.title", "Scraped Data (Invoices)")}
      </h2>
      <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-3">{translateIfNeeded("invoicesTable.date", "Date")}</th>
              <th className="py-2 px-3">{translateIfNeeded("invoicesTable.company", "Company")}</th>
              <th className="py-2 px-3">{translateIfNeeded("invoicesTable.invoice", "Invoice #")}</th>
              <th className="py-2 px-3">{translateIfNeeded("invoicesTable.amount", "Amount")}</th>
              <th className="py-2 px-3">{translateIfNeeded("invoicesTable.format", "Format")}</th>
              <th className="py-2 px-3">{translateIfNeeded("invoicesTable.status", "Status")}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="py-2 px-3">{row.date}</td>
                <td className="py-2 px-3">{row.company}</td>
                <td className="py-2 px-3">{row.id}</td>
                <td className="py-2 px-3">{row.amount}</td>
                <td className="py-2 px-3">{row.format}</td>
                <td className="py-2 px-3">
                  {translateIfNeeded(`invoicesTable.${row.status.toLowerCase()}`, row.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTable;
