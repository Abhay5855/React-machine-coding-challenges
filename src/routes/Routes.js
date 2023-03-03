


import React from 'react'
import {BrowserRouter as Router , Route} from "react-router-dom";
import Time from '../challenge_6';
import Container from '../ecommerse/container';
import Signup from "../ecommerse/signup/Signup"
import JobListing from '../react-practice/job-listing-challenge/JobListing';
import NestedMap from '../react-practice/nested_map/NestedMap';
import Netflix from '../react-practice/netflix-ui/Netflix';
import SlotMachine from '../slot_machine/SlotMachine';

const Routes = () => {
  return (
    

    <Router>

        <Route exact path='/' component={Signup} />
        <Route exact path='/home' component={Container} />
        <Route exact path='/nested' component={NestedMap} />
        <Route exact path='/joblisting' component={JobListing} />
        <Route exact path='/netflix' component={Netflix} />
        <Route exact path='/slot' component={SlotMachine} />
        <Route exact path='/time' component={Time} />


    </Router>

  )
}

export default Routes