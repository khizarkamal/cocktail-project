import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import ReactGA from 'react-ga'
// import components
import Navbar from './components/Navbar'

const TRACKING_ID = 'G-N2T96VGJW4';
ReactGA.initialize(TRACKING_ID)
function App() {
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/about"><About></About></Route>
        <Route path="/cocktail/:id"><SingleCocktail></SingleCocktail></Route>
        <Route path="*"><Error></Error></Route>
      </Switch>
    </Router>
  )
}

export default App;
