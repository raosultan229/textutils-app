import logo from './logo.svg';  
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";

// Routing 

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

    const[mode,setMode]= useState("light");
    const[alert,setAlert]= useState(null);

    let showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type:type
      });
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }

    const toggleMode=()=>{
      if (mode==='light')
      {
        setMode("dark");
        document.body.style.backgroundColor=('#042743')
        showAlert("Dark Mode has been enabled!","success")
      }
      else
      {
        setMode("light");
        document.body.style.backgroundColor=('white')
        showAlert("Light Mode has been enabled!","success");

      }
    }

  return (
   <>

   <Router>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About mode={mode}/>
          {/* </Route>
          <Route path="/contact">
            <Contact/> */}
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>

          </Route>
        
      {/* <Navbar/> */}
      {/* <Contact/> */}
      {/* <About /> */}
      </Switch>
      </div>
      </Router>
   </>
   
  );
}

export default App;
