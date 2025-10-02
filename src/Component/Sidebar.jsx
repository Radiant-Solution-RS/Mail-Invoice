import React from "react";
import {
  Home,
  ShoppingBag,
  FileText,
  Users,
  Share2,
  BarChart3,
  ChevronDown,
  Search,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const { t } = useTranslation();

  // Home item
  const homeItem = { key: "home", icon: Home, label: t("sidebar.home") };

  // Operators group
  const operatorsItems = [
    { key: "emailSetup", icon: ShoppingBag, label: t("sidebar.emailSetup") },
    { key: "dataRetrieval", icon: FileText, label: t("sidebar.dataRetrieval") },
    { key: "scrapedData", icon: FileText, label: t("sidebar.scrapedData") },
    { key: "rulesAutomation", icon: Share2, label: t("sidebar.rulesAutomation") },
    { key: "masterData", icon: Users, label: t("sidebar.masterData") },
    { key: "reports", icon: BarChart3, label: t("sidebar.reports") },
    { key: "nugget", icon: Share2, label: t("sidebar.nugget") },
  ];

  // Settings group
  const settingsItems = [
    { key: "userManagement", label: t("sidebar.userManagement") },
    { key: "accounts", label: t("sidebar.accounts") },
    { key: "help", label: t("sidebar.help") },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Scrollable area */}
      <div className="flex-1 overflow-y-scroll hide-scrollbar">
        {/* Header */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-black mb-8 text-center">
            {t("appName")}
          </h1>

          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder={t("sidebar.search")}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 pb-6">
          {/* Home Item */}
          <button
            onClick={() => setActiveMenu(homeItem.key)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 mb-4 rounded-lg transition-colors ${
              activeMenu === homeItem.key
                ? "bg-gray-100 text-black font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <homeItem.icon size={18} />
            <span className="text-sm">{homeItem.label}</span>
          </button>

          <p className="text-xs font-bold text-black uppercase mb-2 px-3">
            {t("sidebar.operators")}
          </p>
          {operatorsItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMenu(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg transition-colors ${
                activeMenu === item.key
                  ? "bg-gray-100 text-black font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon size={18} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs font-bold text-black uppercase mb-2 px-3">
              {t("sidebar.settings")}
            </p>
            {settingsItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMenu(item.key)}
                className={`w-full text-left px-3 py-2.5 mb-1 text-sm rounded-lg transition-colors ${
                  activeMenu === item.key
                    ? "bg-gray-100 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* User Info bottom */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            CM
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">
              {t("sidebar.contactMailbox")}
            </p>
            <p className="text-xs text-gray-500">user@example.com</p>
          </div>
          <ChevronDown size={18} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
