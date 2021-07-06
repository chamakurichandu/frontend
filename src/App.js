import React from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import ButtonColor from "./Components/ButtonColor";
import PageNotFound from './Components/PageNotFount';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
export default function App(props) {
  return (
    <div>
      
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/adduser" component={AddUser}/>
        <Route exact path="/edituser/:id" component={EditUser}/>
        <Route exact path="/buttoncolor" component={ButtonColor}/>
        <Route component={PageNotFound}/>
      </Switch>
      </Router>
    </div>
  )
}
