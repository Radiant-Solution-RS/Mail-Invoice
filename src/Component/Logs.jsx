import React from "react";
import { useTranslation } from "react-i18next";

const Logs = () => {
  const { t } = useTranslation();

  const logs = [
    { time: "09:45 AM", provider: "Gmail", status: t("logs.success", { count: 50 }) },
    { time: "02:00 AM", provider: "Outlook", status: t("logs.error") },
    { time: "08:15 PM", provider: "IMAP", status: t("logs.parsed", { count: 12 }) },
    { time: "08:30 AM", provider: "Gmail", status: t("logs.success", { count: 50 }) },
  ];

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
      <h3 className="font-semibold text-lg mb-4">{t("logs.title")}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-3">{t("logs.timings")}</th>
              <th className="py-2 px-3">{t("logs.provider")}</th>
              <th className="py-2 px-3">{t("logs.status")}</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="py-2 px-3">{log.time}</td>
                <td className="py-2 px-3">{log.provider}</td>
                <td className="py-2 px-3 text-gray-700">{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logs;
