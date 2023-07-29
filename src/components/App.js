import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer"; // Import the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer /> {/* Include GifListContainer component */}
    </div>
  );
}

export default App;
