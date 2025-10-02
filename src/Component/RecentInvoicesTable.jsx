// RecentInvoicesTable.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function RecentInvoicesTable() {
  const { t } = useTranslation();

  const recentInvoices = [
    { company: "ABC Company", amount: "$250", invoice: "INV-001", email: "info@abc.com" },
    { company: "XYZ Ltd", amount: "$499", invoice: "INV-002", email: "billing@xyz.com" },
    { company: "GlobalCom", amount: "$750", invoice: "INV-003", email: "finance@global.com" },
    { company: "ACME Corp", amount: "$320", invoice: "INV-004", email: "accounts@acme.com" },
    { company: "XYZ Ltd", amount: "$499", invoice: "INV-005", email: "contact@xyz.com" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold mb-4">{t("invoicesTable.title")}</h3>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">{t("invoicesTable.company")}</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">{t("invoicesTable.amount")}</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">{t("invoicesTable.invoice")}</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">{t("invoicesTable.email")}</th>
          </tr>
        </thead>
        <tbody>
          {recentInvoices.map((invoice, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-800">{invoice.company}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{invoice.amount}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{invoice.invoice}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{invoice.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentInvoicesTable;
