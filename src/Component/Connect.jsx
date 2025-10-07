import React from "react";
import { useTranslation } from "react-i18next";

function Connect() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl p-4 lowercase shadow-sm border border-gray-200 flex items-center justify-between mb-2">
      {/* Left Button */}
      <button className="px-4 py-2 text-sm  lowercase text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
        {t("connect.connectMailbox")}
      </button>

      {/* Right Button */}
      <button className="px-4 py-2 text-sm bg-black lowercase  text-white rounded-lg hover:bg-gray-800 transition">
        {t("connect.addRule")}
      </button>
    </div>
  );
}

export default Connect;
