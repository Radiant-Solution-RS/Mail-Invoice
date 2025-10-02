// TableActions.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const TableActions = () => {
  const { t, i18n } = useTranslation();

  // Helper: German ho to translation use karo, warna fallback original
  const translateIfNeeded = (key, fallback) =>
    i18n.language === "de" ? t(key) : fallback;

  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-xl bg-gray-50 p-4">
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
          {translateIfNeeded("tableActions.assign", "Assign")}
        </button>
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
          {translateIfNeeded("tableActions.approve", "Approve")}
        </button>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
          {translateIfNeeded("tableActions.export", "Export")}
        </button>
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
          {translateIfNeeded("tableActions.delete", "Delete")}
        </button>
      </div>
    </div>
  );
};

export default TableActions;
