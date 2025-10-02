import React from "react";
import { useTranslation } from "react-i18next";

const Filters = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-xl bg-white shadow-sm px-4 py-4">
      {/* Left label */}
      <span className="text-md font-medium text-gray-700 font-inter">
        {t("filters.title")}
      </span>

      {/* Right dropdowns */}
      <div className="flex items-center gap-2">
        <select className="bg-black text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none">
          <option>{t("filters.date")}</option>
          <option>{t("filters.today")}</option>
          <option>{t("filters.last7days")}</option>
        </select>

        <select className="border border-gray-300 bg-white text-gray-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none">
          <option>{t("filters.supplier")}</option>
          <option>ACME Corp</option>
          <option>XYZ Ltd</option>
        </select>

        <select className="border border-gray-300 bg-white text-gray-700 rounded-md px-3 py-1.5 text-sm focus:outline-none">
          <option>{t("filters.status")}</option>
          <option>{t("filters.parsed")}</option>
          <option>{t("filters.pending")}</option>
          <option>{t("filters.error")}</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
