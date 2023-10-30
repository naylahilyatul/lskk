import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Slide from "./components/Slide";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import "../src/App.css";
import "../src/Sektion.css";
import "../src/Intro.css";


function App() {
  return (
    <div>
      <Navbar />
    <Intro />
    <AboutMe />
    <Services />
    <Slide />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Slide5 />
    <Slide6 />
    </div>
  );
}

export default App;
