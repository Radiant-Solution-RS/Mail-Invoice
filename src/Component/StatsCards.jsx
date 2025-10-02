import React from "react";
import { useTranslation } from "react-i18next";
import Email1 from "../assets/Email1.png";
import Email2 from "../assets/Email2.png";
import Email3 from "../assets/Email3.png";

const StatsCards = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("statsCards.emailsProcessed"), value: "350", icon: Email1 },
    { label: t("statsCards.emailsPending"), value: "45", icon: Email2 },
    { label: t("statsCards.emailsFailed"), value: "120", icon: Email3 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between"
        >
          <p className="text-lg text-gray-600 mb-4 font-inter">{stat.label}</p>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <div className="p-2 rounded-lg flex items-center justify-center">
              <img src={stat.icon} alt={stat.label} className="w-10 h-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
