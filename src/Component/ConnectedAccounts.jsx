import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ConnectedAccounts = ({ onConnectNew }) => {
  const { t } = useTranslation();
  const [isCompact, setIsCompact] = useState(false);

  const accounts = [
    { provider: "Gmail", email: "finance@acme.com", status: "Connected", lastSync: "09:45 AM" },
    { provider: "Outlook", email: "ap@xyz.com", status: "Error", lastSync: "07:40 PM" },
    { provider: "IMAP", email: "invoices@global.ice", status: "Pending", lastSync: "02:00 AM" },
    { provider: "IMAP", email: "invoices@global.ice", status: "Pending", lastSync: "02:00 AM" },
    { provider: "Outlook", email: "ap@xyz.com", status: "Error", lastSync: "07:40 PM" },
    { provider: "IMAP", email: "invoices@global.ice", status: "Pending", lastSync: "02:00 AM" },
    { provider: "Outlook", email: "ap@xyz.com", status: "Error", lastSync: "07:40 PM" },
    { provider: "IMAP", email: "invoices@global.ice", status: "Pending", lastSync: "02:00 AM" },
    { provider: "IMAP", email: "invoices@global.ice", status: "Pending", lastSync: "02:00 AM" },
    { provider: "Gmail", email: "finance@kmi.com", status: "Reconnect", lastSync: "-" },
    { provider: "Outlook", email: "ap@abc.com", status: "Pending", lastSync: "-" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Connected":
      case "Error":
      case "Pending":
      case "Reconnect":
        return "text-black font-semibold";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="p-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {t("connectedAccounts.title")}
        </h2>
        <button
          onClick={() => {
            setIsCompact(true);
            if (onConnectNew) onConnectNew();
          }}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          {t("connectedAccounts.connectNew")}
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className={`overflow-x-auto ${isCompact ? "max-h-64 overflow-y-auto" : ""}`}>
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-800 text-center">
                  {t("connectedAccounts.provider")}
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-800 text-center">
                  {t("connectedAccounts.email")}
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-800 text-center">
                  {t("connectedAccounts.status")}
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-800 text-center">
                  {t("connectedAccounts.lastSync")}
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-800 text-center">
                  {t("connectedAccounts.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {accounts.map((account, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700 text-center">{account.provider}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center">{account.email}</td>
                  <td className={`px-6 py-4 text-sm text-center ${getStatusColor(account.status)}`}>
                    {t(`connectedAccounts.statuses.${account.status.toLowerCase()}`, account.status)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-center">{account.lastSync}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4 justify-center">
                      <button className="bg-black text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-800">
                        {t("connectedAccounts.reconnect")}
                      </button>
                      <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100">
                        {t("connectedAccounts.remove")}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAccounts;
