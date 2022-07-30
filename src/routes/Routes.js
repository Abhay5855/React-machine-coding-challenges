


import React from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Container from '../ecommerse/container';
import LandingPage from '../ecommerse/landing/LandingPage';
import Signup from "../ecommerse/signup/Signup"

const Routes = () => {
  return (
    

    <Router>

        <Route exact path='/' component={Signup} />
        <Route exact path='/home' component={Container} />

    </Router>

  )
}

export default Routes