// ScrapedData.jsx
import React from "react";
import Filters from "./Filters";
import InvoicesTable from "./InvoicesTable";
import TableActions from "./TableActions";
import Stats from "./Stats";

const ScrapedData = () => {
  return (
    <>
      {/* Filters Section */}
      <div className="mx-6 my-4">
        <Filters />
      </div>

      {/* Table Section */}
      <div className="p-6 font-inter text-black space-y-6 border border-gray-200 rounded-2xl bg-white shadow mx-6 mb-4">
        <InvoicesTable />
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
