import React, { useState } from "react";

const AutocompleteEditor = ({ value, onChange, options }) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type="text"
      list="autocomplete-options"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default AutocompleteEditor;
