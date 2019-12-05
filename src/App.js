import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Loginpage";
import About from "./pages/about/About";
import passwordresetform from "./components/passwordreset/passwordresetform";
import Servicepage from "./pages/servicespage/Servicepage";
import Signup from "./pages/signup/signuppage";
import activationform from "./pages/activationemail/activationpage";
import Errorpage from "./pages/errorpage/Errorpage";
import Contact from "./pages/contact/contact";
import Footercontainer from "./components/footer/Footercontainer";
import PublicRoute from "./components/routes/PublicRoute";
import ScrollTop from "./utils/Scrolltop"
// import MyEnhancedForm from './components/contactform'


function App() {
  return (
    <Router>
      <ScrollTop/>
      {" "}
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/services" component={Servicepage} />
          <PublicRoute
            restricted={true}
            exact
            path="/login"
            component={Login}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/passwordresetform"
            component={passwordresetform}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/ActivationForm"
            component={activationform}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/signup"
            component={Signup}
          />
          <Route exact path="/contact" component={Contact} />
          <Route component={Errorpage} />
        </Switch>
         {/*<MyEnhancedForm />*/}
        <Footercontainer />
      </div>
    </Router>
  );
}

export default App;
