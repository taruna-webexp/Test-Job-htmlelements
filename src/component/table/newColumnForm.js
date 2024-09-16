// component/NewColumnDialog/NewColumnDialog.js

import React, { useState } from "react";

// Define custom options for the select input
const typeOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const NewColumnDialog = ({ isOpen, onClose, onSave }) => {
  const [columnData, setColumnData] = useState({
    name: "",
    customType: "option1", // Default value or however you want to initialize
  });

  const handleSave = () => {
    // Pass the new column data to the parent component
    onSave(columnData);
    onClose();
  };

  return (
    <div className={`dialog ${isOpen ? "open" : "closed"}`}>
      <h2>New Column</h2>
      <form>
        <div>
          <label htmlFor="columnName">Name</label>
          <input
            id="columnName"
            type="text"
            value={columnData.name}
            onChange={(e) =>
              setColumnData({ ...columnData, name: e.target.value })
            }
          />
        </div>
        {/* Hide the default type field */}
        {/* <div>
          <label htmlFor="columnType">Type</label>
          <input
            id="columnType"
            type="text"
            value={columnData.type}
            onChange={(e) => setColumnData({ ...columnData, type: e.target.value })}
          />
        </div> */}
        {/* Add the custom type field */}
        <div>
          <label htmlFor="customType">Custom Type</label>
          <select
            id="customType"
            dataSource={typeOptions}
            value={columnData.customType}
            onChange={(e) =>
              setColumnData({ ...columnData, customType: e.detail.value })
            }
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewColumnDialog;
