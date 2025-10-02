
import React, { useState } from "react";
import CustomFolder from "./CustomeFolder";
import SelectFolder from "./SelectFolder";

const StepSelectFolders = () => {
  const [defaultFolders] = useState(["Inbox", "Spam", "Invoices"]);
  const [customFolders, setCustomFolders] = useState([]);

  const [showCustomFolder, setShowCustomFolder] = useState(false);
  const [showSelectFolder, setShowSelectFolder] = useState(false);

  const addCustomFolder = () => setShowCustomFolder(true);
  const addSelectFolder = () => setShowSelectFolder(true);

  const handleSaveCustomFolders = (folders) => {
    setCustomFolders(folders.map(f => f.name)); 
    setShowCustomFolder(false);
    setShowSelectFolder(true); 
  };

  if (showCustomFolder) {
    return <CustomFolder onSave={handleSaveCustomFolders} />;
  }

  if (showSelectFolder) {
    return (
      <SelectFolder
        defaultFolders={defaultFolders}
        customFolders={customFolders}
        onAddCustom={addCustomFolder}
      />
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-black font-inter"> Select Folders</h3>
        <button
          onClick={addCustomFolder}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
        >
          Add Custom Folder
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-6">
        {defaultFolders.map((folder, idx) => (
          <div
            key={idx}
            className="flex text-xl items-center justify-center h-20 border border-gray-300 rounded-lg text-black font-semibold hover:bg-gray-50 cursor-pointer font-inter"
          >
            {folder}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSelectFolders;

