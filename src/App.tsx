import { VFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Globalnavi } from "./components/Globalnavi";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Post } from "./components/Post";
import { NotFound } from "./components/NotFound";
import "./styles/App.scss";

const App: VFC = () => {
  return (
    <div className="App">
      <header>
        <div className="inner">
          <h1>Reacr Router</h1>
        </div>
      </header>
      <main>
        <Router>
          <Globalnavi />
          <div className="inner">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/post" component={Post} />
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </div>
  );
};

export default App;
