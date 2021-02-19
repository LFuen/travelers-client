import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Heading from "../Heading/Heading";
import Private from "../Routes/PrivateRoute";
import Public from "../Routes/PublicRoute";
import Welcome from "../Routes/WelcomeRoute";
import SignUp from "../Routes/SignUpRoute";
import Login from "../Routes/LoginRoute";
import Guides from "../Guides/Guides";
import NewGuide from "../Routes/NewGuideRoute";
import GuideEdit from "../GuideEdit/GuideEdit";
import About from "../About/About";
import NotFound from "../Routes/NotFoundRoute";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import "./App.css";

class App extends Component {
  state = { hasError: false };

  static getDerivedError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    return (
      <div className="App">
        <Heading />
        {hasError && <p>Darn! There seems to have been an error! Try again!</p>}
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Private exact path="/Home" component={Home} />
          <Private exact path="/Guides" component={Guides} />
          <Public exact path="/Login" component={Login} />
          <Route exact path="/About" component={About} />
          <Private exact path="/guides/:id" component={GuideEdit} />
          <Public exact path="/SignUp" component={SignUp} />
          <Route exact path="/NotFound" component={NotFound} />
          <Private exact path="/GuideForm" component={NewGuide} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
