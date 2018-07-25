import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Colors from "./pages/colors";
import ColorForm from "./pages/colors/form";

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">Buzzwords</Link>
        </li>
        <li>
          <Link to="starwars">Starwars</Link>
        </li>
        <li>
          <Link to="fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  );
};

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/colors" component={Colors} />
          <Route exact path="colors/new" component={ColorForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
