import React, { useState } from "react";

// Define a functional component called AdvanceSearch
const AdvanceSearch = () => {
  // Declare state variable searchText and its updater function setSearchText
  const [searchText, setSearchText] = useState(false);

  // Function to toggle the value of searchText
  const toggleSearchText = () => {
    setSearchText(!searchText);
  };

  
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Button to toggle search text visibility */}
      <button
        onClick={toggleSearchText}
        className="h-[40px] w-[180px] bg-[#28a739] rounded-xl mb-[10px] text-white"
      >
        {/* Show different text based on the value of searchText */}
        {searchText ? "Hide Advance Search" : "Show Advance Search"}
      </button>

      {/* Conditionally render the advanced search inputs if searchText is true */}
      {searchText && (
        <div className="flex flex-col gap-5">
          {/* Input for 'Type' */}
          <input
            type="text"
            placeholder="Type"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />
          
          {/* Input for 'Price' */}
          <input
            type="text"
            placeholder="Price"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />

          {/* Input for 'Bedrooms' */}
          <input
            type="text"
            placeholder="Bedrooms"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />

          {/* Input for 'Date Added' */}
          <input
            type="text"
            placeholder="Date Added"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />

          {/* Input for 'Post Code Area' */}
          <input
            type="text"
            placeholder="Post Code Area"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

// Export AdvanceSearch component
export default AdvanceSearch;
