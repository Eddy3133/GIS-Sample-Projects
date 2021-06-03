import React from 'react'
import Landingpage from './pages/Landingpage/Landingpage'
import Dashboard from './pages/Dashboard/Dashboard'
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
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
    </Router>
  )
}

export default App
