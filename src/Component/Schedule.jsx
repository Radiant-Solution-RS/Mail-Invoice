// Schedule.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Schedule = () => {
  const { t } = useTranslation();
  const [frequency, setFrequency] = useState("every30"); 

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
      <h3 className="font-semibold lowercase text-lg mb-4">
        {t("schedule.title")}
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block lowercase text-sm text-gray-600 mb-1">
            {t("schedule.frequency")}
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full lowercase border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="every15">{t("schedule.every15")}</option>
            <option value="every30">{t("schedule.every30")}</option>
            <option value="hourly">{t("schedule.hourly")}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            {t("schedule.nextRun")}
          </label>
          <input
            type="time"
            defaultValue="10:15"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <button className="px-4 py-2 bg-black lowercase  text-white rounded-lg hover:bg-gray-800">
          {t("schedule.runNow")}
        </button>
      </div>
    </div>
  );
};

export default Schedule;
