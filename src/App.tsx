import { BrowserRouter } from "react-router-dom";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Service from "./component/Service";
import Skills from "./component/Skills";
import Project from "./component/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav /> {/* This will render the Nav component on all pages */}
        <div id="home">
          <Home />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
