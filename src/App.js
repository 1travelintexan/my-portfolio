import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Vanilla from "./components/VanillaProjects";
import ReactProjects from "./components/ReactProjects";
import TsProjects from "./components/TsProjects";
import Freelance from "./components/Freelance";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Projects} path="/projects" />
        <Route component={Vanilla} exact path="/project/vanillaJS" />
        <Route component={TsProjects} exact path="/project/TSprojects" />
        <Route component={ReactProjects} path="/project/reactprojects" />
        <Route component={Freelance} path="/project/freelance" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
