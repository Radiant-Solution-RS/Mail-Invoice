import React, { useState } from "react";
import { ChevronDown, Info, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatusCard = ({ title, subtitle, data }) => {
  const { t } = useTranslation();
  const [sortOrder, setSortOrder] = useState("first");
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (order) => {
    setSortOrder(order);
    console.log(`Sorting by: ${order}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 flex-1">
      {/* Header with Buttons */}
      <div className="flex items-center gap-2 mb-5">
        <button
          onClick={() => handleSort("first")}
          className={`flex items-center  lowercase justify-center gap-2 min-w-[150px] px-6 py-2 rounded-full text-xs font-semibold transition-all ${
            sortOrder === "first"
              ? "bg-black text-white"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {t("statusCard.first")}
          {sortOrder === "first" && (
            <ChevronDown
              size={14}
              strokeWidth={2.5}
              className="text-green-500"
            />
          )}
        </button>

        <button
          onClick={() => handleSort("last")}
          className={`flex items-center justify-center lowercase gap-2 min-w-[150px] px-6 py-2 rounded-full text-xs font-semibold transition-all ${
            sortOrder === "last"
              ? "bg-black text-white"
              : "bg-white text-gray-700 border lowercase border-gray-200 hover:bg-gray-50"
          }`}
        >
          {t("statusCard.last")}
          {sortOrder === "last" && (
            <ArrowUp size={14} strokeWidth={2.5} className="text-red-500" />
          )}
        </button>

        <button className="ml-auto w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
          <Info size={14} strokeWidth={2.5} />
        </button>
      </div>

      {/* Title Section */}
      <div className="mb-4 pb-3 border-b lowercase border-gray-100">
        <h3 className="text-sm font-semibold lowercase text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500 lowercase mt-0.5">{subtitle}</p>
      </div>

      {/* Data List */}
      <div className="space-y-2">
        {sortedData.map((item, idx) => (
          <div key={idx} className="flex items-center lowercase justify-between py-2.5">
            <span className="text-sm text-gray-900 lowercase font-medium">
              {item.name}
            </span>
            <div className="flex gap-1.5">
              {item.badges.map((badge, badgeIdx) => (
                <span
                  key={badgeIdx}
                  className={`px-2.5 py-1 rounded lowercase text-xs font-medium ${badge.color}`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusCardsContainer = () => {
  const { t } = useTranslation();

  const supplierData = [
    { name: "ACME Corp", badges: [{ text: "PDF", color: "bg-yellow-300 text-yellow-900" }] },
    { name: "XYZ Ltd", badges: [{ text: "XML (E-invoice)", color: "bg-green-300 text-green-900" }] },
    { name: "GlobalCo", badges: [{ text: "PDF", color: "bg-yellow-300 text-yellow-900" }, { text: "XML", color: "bg-yellow-300 text-yellow-900" }] },
    { name: "SmallBiz", badges: [{ text: "Scanned Image", color: "bg-green-300 text-green-900" }] },
  ];

  const emailSendingData = [
    { name: "ACME Corp", badges: [{ text: "Vendor One", color: "bg-yellow-300 text-yellow-900" }] },
    { name: "XYZ Ltd", badges: [{ text: "Vendor Two", color: "bg-green-300 text-green-900" }] },
    { name: "GlobalCo", badges: [{ text: "Vendor Three", color: "bg-yellow-300 text-yellow-900" }] },
    { name: "SmallBiz", badges: [{ text: "Vendor Four", color: "bg-green-300 text-green-900" }] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-1 lg:grid-cols-2">
        <StatusCard
          title={t("statusCard.supplierTitle")}
          subtitle={t("statusCard.supplierSubtitle")}
          data={supplierData}
        />
        <StatusCard
          title={t("statusCard.emailTitle")}
          subtitle={t("statusCard.emailSubtitle")}
          data={emailSendingData}
        />
      </div>
    </div>
  );
};

export default StatusCardsContainer;
