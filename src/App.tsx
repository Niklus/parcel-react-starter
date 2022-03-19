import { useState, useEffect } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./styles.scss";

function App() {
  const [hash, setHash] = useState(window.location.hash);

  const handleHashChange = () => {
    setHash(window.location.hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Header />
      <main>
        {hash === "" && <Home />}
        {hash === "#home" && <Home />}
        {hash === "#about" && <About />}
        {hash === "#contact" && <Contact />}
      </main>
    </>
  );
}

export default App;
