// Create header 

import React, { useState } from "react";
import AdvanceSearch from "./AdvanceSearch"; 

const Header = ({ onSearch, onToggleFavorites }) => {
  // State to manage the search text
  const [searchText, setSearchText] = useState("");

  // Event handler for handling changes in the search input

  const handleChange = (event) => {
    // Update the search text state
    setSearchText(event.target.value);
    // Invoke the onSearch callback with the updated search text
    onSearch(event.target.value);
  };

  return (
    <header className="flex items-center px-[30px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <nav className="flex justify-between w-full">
        {/* Logo or site title */}
        <div className="text-2xl font-bold pt-5">Estate Agent</div>

        {/* Search input and AdvanceSearch component */}
        <div className="pt-5 pb-10">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg mb-[20px]"
          />
          {/* AdvanceSearch component */}
          <AdvanceSearch />
        </div>
        
        {/* Button to toggle displaying favorites */}
        <div>
          <button
            className="bg-[#28a739] text-white h-[40px] w-[150px] rounded-lg fixed top-[10px] right-[10px]"
            onClick={onToggleFavorites}
          >
            Show Favorites
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
