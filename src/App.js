import React from 'react';
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/'
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"
function App() {
  return (
    <>
   <CssBaseline/>
   <Route exact path="/" component={Home}></Route>
   <Route path="/resume" component={Resume}></Route>
   <Route path="/portfolio" component={Portfolio}></Route>
   <Route path="/contacts" component={Contacts}></Route>

</>
  );
}

export default App;
