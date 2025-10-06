import React from "react";

export default function ExportTable() {
  const data = [
    { name: "Step Export", format: "CSV", destination: "Local File", status: "Success", nextRun: "-" },
    { name: "Weekly Exp", format: "Excel", destination: "Download", status: "Pending", nextRun: "08 Sept" },
    { name: "API Sync", format: "JSON", destination: "SFTP", status: "Failed", nextRun: "10 Oct" },
    { name: "Step Export", format: "PDF", destination: "Webhook", status: "Success", nextRun: "-" },
    { name: "Weekly Exp", format: "JSON", destination: "API", status: "Pending", nextRun: "10 Oct" },
    { name: "API Sync", format: "Excel", destination: "Webhook", status: "Failed", nextRun: "08 Sept" },
    { name: "Step Export", format: "CSV", destination: "SFTP", status: "Success", nextRun: "10 Oct" },
    { name: "Weekly Exp", format: "Excel", destination: "Download", status: "Pending", nextRun: "08 Sept" },
    { name: "API Sync", format: "JSON", destination: "Local File", status: "Failed", nextRun: "-" },
    { name: "Step Export", format: "PDF", destination: "Download", status: "Success", nextRun: "-" },
    { name: "Weekly Exp", format: "JSON", destination: "SFTP", status: "Pending", nextRun: "10 Oct" },
    { name: "API Sync", format: "Excel", destination: "Webhook", status: "Failed", nextRun: "08 Sept" },
    { name: "Step Export", format: "CSV", destination: "API", status: "Success", nextRun: "-" },
    { name: "Weekly Exp", format: "Excel", destination: "Webhook", status: "Pending", nextRun: "10 Oct" },
    { name: "API Sync", format: "JSON", destination: "SFTP", status: "Failed", nextRun: "08 Sept" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Success":
        return "text-black";
      case "Pending":
        return "text-black";
      case "Failed":
        return "text-black";
      default:
        return "text-black";
    }
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Export</h2>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-sm">
            Add New Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-left text-gray-600">
                <th className="py-3 px-4 font-medium">Name</th>
                <th className="py-3 px-4 font-medium">Format</th>
                <th className="py-3 px-4 font-medium">Destination</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Next Run</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="py-3 px-4 text-gray-800">{row.name}</td>
                  <td className="py-3 px-4 text-black cursor-pointer hover:underline">
                    {row.format}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{row.destination}</td>
                  <td className={`py-3 px-4 font-medium ${getStatusColor(row.status)}`}>
                    {row.status}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.nextRun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}