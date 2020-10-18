import React from "react";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
