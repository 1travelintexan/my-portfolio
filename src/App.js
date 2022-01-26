import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Vanilla from "./components/Vanilla";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Projects} path="/projects" />
        <Route component={Vanilla} path="/project/vanillaJS" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
