import React from "react";
import { useTranslation } from "react-i18next";

const InvoicesTable = ({ data }) => {
  const { t, i18n } = useTranslation();

  const translateIfNeeded = (key, fallback) =>
    i18n.language === "de" ? t(key) : fallback;

  const getStatusStyle = (status) => {
    switch (status) {
      case "Parsed":
        return "text-green-600 bg-green-50";
      case "Error":
        return "text-red-600 bg-red-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getDotColor = (status) => {
    switch (status) {
      case "Parsed":
        return "bg-green-500";
      case "Error":
        return "bg-red-500";
      case "Pending":
        return "bg-yellow-400";
      default:
        return "bg-gray-400";
    }
  };

  const getFormatStyle = (format) => {
    switch (format) {
      case "PDF":
        return "text-blue-600 bg-blue-50";
      case "XML":
        return "text-purple-600 bg-purple-50";
      case "Scan":
        return "text-teal-600 bg-teal-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

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
            {data.length > 0 ? (
              data.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="py-2 px-3">{row.date}</td>
                  <td className="py-2 px-3">{row.company}</td>
                  <td className="py-2 px-3">{row.id}</td>
                  <td className="py-2 px-3">{row.amount}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getFormatStyle(
                        row.format
                      )}`}
                    >
                      {row.format}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                        row.status
                      )}`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${getDotColor(row.status)}`}></span>
                      {translateIfNeeded(`invoicesTable.${row.status.toLowerCase()}`, row.status)}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  {t("invoicesTable.noResults", "No data found")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTable;
