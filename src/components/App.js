import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".dropDown", {
      delay: 500,
      duration: 950,
      distance: "30px",
      origin: "top",
    });

    ScrollReveal().reveal(".leftReveal", {
      delay: 600,
      duration: 950,
      distance: "30px",
      origin: "left",
    });

    ScrollReveal().reveal(".rightReveal", {
      delay: 600,
      duration: 950,
      distance: "30px",
      origin: "right",
    });

    ScrollReveal().reveal(".bottomReveal", {
      delay: 600,
      duration: 950,
      distance: "10px",
      origin: "bottom",
    });
  }, []);

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
