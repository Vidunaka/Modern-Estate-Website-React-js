import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";

const App = () => {
  // State to manage the search text
  const [searchText, setSearchText] = useState("");
  // State to manage whether to show favorite properties
  const [showFavorites, setShowFavorites] = useState(false);

  // Function to handle search input changes
  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Function to handle toggling the display of favorite properties
  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header Component */}
      <Header
        onSearch={handleSearch}
        onToggleFavorites={handleToggleFavorites}
      />
      {/* MainLayout Component */}
      <MainLayout searchText={searchText} showFavorite={showFavorites} />
      <Footer />
    </div>
  );
};

export default App;
