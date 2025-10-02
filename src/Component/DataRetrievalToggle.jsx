import React from "react";
import { useTranslation } from "react-i18next";

const DataRetrievalToggle = ({ setEnabled }) => {
  const { t } = useTranslation();

  return (
    <>
      
      <div className="bg-white rounded-2xl shadow border border-gray-200 max-w-auto mx-auto p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {t("dataRetrieval.statusTitle")}
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => setEnabled(true)}
              className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-800"
            >
              {t("dataRetrieval.enable")}
            </button>
            <button
              onClick={() => setEnabled(false)}
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-100"
            >
              {t("dataRetrieval.disable")}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow border border-gray-200 max-w-auto mx-auto p-6 mt-6 min-h-[400px] flex justify-center items-center">
        <div className="flex flex-col items-center rounded-2xl border border-gray-200 text-center gap-4 p-6 w-[400px] min-h-[250px]">
          <h3 className="text-lg font-bold text-black w-full text-center">
            {t("dataRetrieval.offTitle")}
          </h3>

          <hr className="w-full border-t border-gray-300 " />

          <p className="text-sm text-gray-600 leading-relaxed">
            {t("dataRetrieval.offDescription")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DataRetrievalToggle;
