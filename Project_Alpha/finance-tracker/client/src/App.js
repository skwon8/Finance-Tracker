import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';

import AllFinances from './components/AllFinances';
import FinanceForm from './components/FinanceForm';
import OneFinanceDetail from './components/OneFinanceDetail';
import EditFinanceForm from './components/EditFinanceForm';
import Home from './components/pages/Home';
import SignIn from './components/SignIn';

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  return (
    <BrowserRouter>
        <Navbar></Navbar>
      <div className="App">
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route exact path="/signup">
            <SignIn></SignIn>
          </Route>
          <Route exact path ="/finances">
            <AllFinances formSubmitted={formSubmitted} selectedType = {selectedType} setSelectedType = {setSelectedType}></AllFinances>
          </Route>
          <Route exact path="/finances/new">
            <FinanceForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></FinanceForm>
          </Route>
          <Route exact path="/finances/:_id">
            <OneFinanceDetail></OneFinanceDetail>
          </Route>
          <Route exact path="/finances/:_id/edit">
            <EditFinanceForm></EditFinanceForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
