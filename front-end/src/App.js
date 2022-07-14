import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js"
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Services from "./components/pages/Services.js";
import Rating from "./components/pages/Rating.js";
import Contact from "./components/pages/Contact.js";
import Signup from "./components/pages/Signup.js";
import './App.css';


function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/rating" component={Rating} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;