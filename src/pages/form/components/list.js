import React, { useState } from "react";

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

const MultiSelectList = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelection = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div style={{ backgroundColor: "black", width: "100%" }}>
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleSelection(option)}
          style={{
            padding: "10px",
            color: "white",
            cursor: "pointer",
            backgroundColor: selectedOptions.includes(option) ? "grey" : "transparent",
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectList;