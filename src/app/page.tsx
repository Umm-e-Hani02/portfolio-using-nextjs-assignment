import Navbar from "./components/Navbar";
import HomePage from "./components/home/page";
import About from "./components/about/page";
import Skills from "./components/skills/page";
import Projects from "./components/projects/page";
import Contact from "./components/contact/page";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}
