import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FileTypes = () => {
  const [selected, setSelected] = useState([]);
  const { t } = useTranslation();

  const toggle = (type) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
      <h3 className="font-semibold text-lg mb-4">
        {t("fileTypes.title")}
      </h3>
      <div className="space-y-3">
        {["pdf", "xml", "others"].map((type) => (
          <label
            key={type}
            className="flex items-center gap-3 cursor-pointer text-gray-700"
          >
            <input
              type="checkbox"
              checked={selected.includes(type)}
              onChange={() => toggle(type)}
              className="w-4 h-4"
            />
            {t(`fileTypes.${type}`)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FileTypes;
