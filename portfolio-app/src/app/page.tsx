import Hero from "./components/hero";
import Work from "./components/work";
import Courses from "./components/coursework";
import Projects from "./components/project";

function Home() {
  return (
      <>
          <Hero />
          <Work />
          <Courses />
          <Projects />
      </>
  );
}

export default Home;
