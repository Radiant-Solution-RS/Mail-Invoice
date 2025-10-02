import  { useState } from 'react';

function SelectFolder({ defaultFolders = [], customFolders = [], onAddCustom }) {
  const [selectedFolders, setSelectedFolders] = useState([]);

  const toggleFolder = (folderName) => {
    setSelectedFolders(prev =>
      prev.includes(folderName)
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    );
  };

  const FolderButton = ({ name, subtitle }) => {
    const isSelected = selectedFolders.includes(name);
    
    return (
      <button
        onClick={() => toggleFolder(name)}
        className={`px-6 py-3 rounded-xl flex justify-between border-2 transition-all ${
          isSelected
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-white text-gray-900 border-gray-900 hover:bg-gray-50'
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="font-medium">{name}</span>
          {subtitle && (
            <span className={`text-xs mt-0.5 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
              {subtitle}
            </span>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Select Folders</h2>
        <button
          onClick={onAddCustom}
          className="text-sm text-gray-900 hover:text-gray-700 font-medium"
        >
          Add Custom Folder
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-8 justify-between">
        {defaultFolders.map((name, idx) => (
          <FolderButton key={idx} name={name} />
        ))}
      </div>

      {customFolders.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Custom Folders</h3>
          <div className="flex flex-wrap gap-3">
            {customFolders.map((name, idx) => (
              <FolderButton key={idx} name={name} subtitle="Remove Folder" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectFolder;
