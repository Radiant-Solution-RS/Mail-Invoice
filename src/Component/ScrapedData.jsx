import React, { useState, useMemo } from "react";
import Filters from "./Filters";
import InvoicesTable from "./InvoicesTable";
import TableActions from "./TableActions";
import Stats from "./Stats";

const ScrapedData = () => {
  // 🔹 Step 1: Manage filters in state
  const [filters, setFilters] = useState({
    date: "All",
    supplier: "All",
    status: "All",
  });

  // 🔹 Step 2: Define your invoices data (you can later move this to InvoicesTable)
  const allData = [
    { date: "2025-09-15", company: "ACME Corp", id: "1001", amount: "$200", format: "PDF", status: "Parsed" },
    { date: "2025-04-30", company: "XYZ Ltd", id: "1002", amount: "$800", format: "XML", status: "Error" },
    { date: "2025-09-10", company: "GlobalCo", id: "1003", amount: "$100", format: "PDF", status: "Pending" },
    { date: "2025-08-18", company: "SmallBiz", id: "1004", amount: "$500", format: "Scan", status: "Parsed" },
    { date: "2025-08-25", company: "XYZ Ltd", id: "1005", amount: "$300", format: "XML", status: "Error" },
    { date: "2025-07-01", company: "ACME Corp", id: "1006", amount: "$1200", format: "Scan", status: "Pending" },
    { date: "2025-02-15", company: "GlobalCo", id: "1007", amount: "$1100", format: "PDF", status: "Parsed" },
    { date: "2025-09-11", company: "SmallBiz", id: "1008", amount: "$205", format: "XML", status: "Error" },
  ];

  // 🔹 Step 3: Filter the data dynamically
  const filteredData = useMemo(() => {
    return allData.filter((item) => {
      const supplierMatch =
        filters.supplier === "All" || item.company === filters.supplier;
      const statusMatch =
        filters.status === "All" || item.status === filters.status;
      return supplierMatch && statusMatch;
    });
  }, [filters, allData]);

  return (
    <>
      {/* Filters Section */}
      <div className="mx-6 my-4">
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      {/* Table Section */}
      <div className="p-6 font-inter text-black space-y-6 border border-gray-200 rounded-2xl bg-white shadow mx-6 mb-4">
        <InvoicesTable data={filteredData} />
        <TableActions />
      </div>

      {/* Stats Section */}
      <div className="mx-6 mb-6">
        <Stats />
      </div>
    </>
  );
};

export default ScrapedData;
