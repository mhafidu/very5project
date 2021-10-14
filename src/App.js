import react from 'react';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Profil from './pages/Profil'
import News from './pages/News'
import Hasil from './pages/Hasil'
import Umum from './pages/Umum';
import Apply from './pages/Apply'
import Home from './pages/Home';
import Page from './pages/Page';
import Cv from './pages/Cv'
import Sidebar from './components/Sidebar'
import Perusahaan from './pages/Perusahaan';
import Navbarafter from './components/Navbarafter';
import Navbar from './components/Navbar'


function App() {
  return (    
    <Router>      
      <Switch>
      <Route path="/after" >
          <Navbarafter /> 
          <Page />
        </Route>
      <Route path="/Perusahaan" >
          <Navbarafter /> 
          <Perusahaan />
        </Route>
      <Route path="/sidebar" >
          <Navbarafter />
          <Sidebar />
        </Route>
      <Route path="/Home" >
          <Navbar />
          <Home />
        </Route>
      <Route path="/Umum" >
          <Navbarafter />
          <Umum />
        </Route>
      <Route path="/news" >
          <Navbarafter />
          <News/>
        </Route>
      <Route path="/apply" >
          <Navbarafter /> 
          <Apply />
        </Route>
      <Route path="/Hasil" >
          <Navbarafter />
          <Hasil />
        </Route>
      <Route path="/Profil" >
          <Navbarafter />
          <Profil />
        </Route>
        <Route path="/cv" >
          <Navbarafter />
          <Cv />
        </Route>
        <Route path="/" >
          <Navbar />
          <Page />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
