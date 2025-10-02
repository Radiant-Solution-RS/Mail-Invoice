// ChartsSection.jsx
import React from "react";
import DonutChart from "./DonutChart";
import { useTranslation } from "react-i18next";

function ChartsSection() {
  const { t } = useTranslation();

  const invoiceData = [
    { type: t("charts.crawledTool"), value: 9101, color: "bg-green-500", strokeColor: "#22c55e" },
    { type: t("charts.otherTools"), value: 900, color: "bg-yellow-500", strokeColor: "#eab308" },
  ];

  const fileFormats = [
    { type: t("charts.pdf"), value: 300, color: "bg-red-500", strokeColor: "#ef4444" },
    { type: t("charts.xml"), value: 250, color: "bg-amber-400", strokeColor: "#fbbf24" },
    { type: t("charts.xlsx"), value: 200, color: "bg-orange-400", strokeColor: "#fb923c" },
    { type: t("charts.others"), value: 250, color: "bg-green-500", strokeColor: "#22c55e" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      {/* Donut Chart */}
      <DonutChart title={t("charts.invoicesCrawled")} data={invoiceData} type="donut" />

      {/* Pie Chart */}
      <DonutChart title={t("charts.invoiceFormats")} data={fileFormats} type="pie" />
    </div>
  );
}

export default ChartsSection;
