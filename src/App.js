import React, { useState, Suspense, useRef } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import AlbumView from "./components/AlbumView";
import ArtistView from "./components/ArtistView";
import Spinner from "./Spinner";
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";
import { createResource as fetchData } from "./helper";

function App() {
  let searchInput = useRef("");
  let [data, setData] = useState(null);
  let [message, setMessage] = useState("Search for Music!");

  const handleSearch = (e, term) => {
    e.preventDefault();
    setData(fetchData(term, "main"));
  };

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

  return (
    <div className="App">
      {message}
      <SearchContext.Provider
        value={{
          term: searchInput,
          handleSearch: handleSearch,
        }}
      >
        <DataContext.Provider value={data}>
              <SearchBar />
          <Routes>
            <Route exact path={"/"} element={renderGallery()} />
            <Route path="/album/:id" element={<AlbumView />} />
            <Route path="/artist/:id" element={<ArtistView />} />
          </Routes>
        </DataContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
