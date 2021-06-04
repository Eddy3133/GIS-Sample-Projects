import React from 'react'
import Landingpage from './pages/Landingpage/Landingpage'
import About from './pages/About/About'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'
import Header from './component/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
       <Header />
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/works" component={Works} />
        </Switch>
    </div>
    </Router>
  )
}

export default App
