import React from "react";

export default function RulesAutomation() {
  const data = [
    { date: "2025-09-15", name: "ACME Corp", trigger: "1001", action: "$200", status: "Parsed" },
    { date: "2025-04-30", name: "XYZ Ltd", trigger: "1002", action: "$300", status: "Error" },
    { date: "2025-09-10", name: "GlobalCo", trigger: "1003", action: "$100", status: "Pending" },
    { date: "2025-08-05", name: "SmallBiz", trigger: "1004", action: "$2000", status: "Parsed" },
    { date: "2024-12-15", name: "XYZ Ltd", trigger: "1005", action: "$3000", status: "Error" },
    { date: "2025-07-01", name: "ACME Corp", trigger: "1006", action: "$1200", status: "Pending" },
    { date: "2025-02-15", name: "GlobalCo", trigger: "1007", action: "$1100", status: "Parsed" },
    { date: "2025-04-30", name: "XYZ Ltd", trigger: "1002", action: "$800", status: "Error" },
    { date: "2025-09-10", name: "GlobalCo", trigger: "1003", action: "$100", status: "Pending" },
    { date: "2023-08-05", name: "SmallBiz", trigger: "1004", action: "$2000", status: "Parsed" },
    { date: "2024-12-15", name: "XYZ Ltd", trigger: "1005", action: "$3000", status: "Error" },
    { date: "2025-07-01", name: "ACME Corp", trigger: "1006", action: "$1200", status: "Pending" },
    { date: "2025-02-15", name: "GlobalCo", trigger: "1007", action: "$1100", status: "Parsed" },
    { date: "2025-09-11", name: "SmallBiz", trigger: "1008", action: "$205", status: "Error" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Parsed":
        return "text-green-600 font-semibold";
      case "Error":
        return "text-red-600 font-semibold";
      case "Pending":
        return "text-yellow-600 font-semibold";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md  m-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl lowercase font-inter font-bold">Rules & Automation</h2>
        <button className="px-4 py-2  lowercase bg-black text-white rounded-lg hover:bg-gray-800">
          Add New Rule
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg ">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Trigger</th>
              <th className="p-3 border-b">Action</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 text-sm">
                <td className="p-3 lowercase border-b">{row.date}</td>
                <td className="p-3 lowercase border-b">{row.name}</td>
                <td className="p-3 lowercase border-b">{row.trigger}</td>
                <td className="p-3 lowercase border-b">{row.action}</td>
                <td className={`p-3 lowercase border-b ${getStatusStyle(row.status)}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
