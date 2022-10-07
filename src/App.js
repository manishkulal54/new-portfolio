import { useState, useEffect } from "react";

import Home from "./component/Home";
import About from "./component/About";
import Language from "./component/Language";
import Skill from "./component/Skill";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import LoadScreen from "./component/LoadScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };
  }, []);

  return isLoading === true ? (
    <LoadScreen />
  ) : (
    <>
      <Home />
      <About />
      <Skill />
      <Language />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
