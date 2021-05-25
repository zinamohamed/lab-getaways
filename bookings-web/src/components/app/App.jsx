import React from 'react';
import Getaways from '../../containers/Getaways';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import DetailsPage from '../../containers/DetailsPage'
import './App.css'

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Getaways {...routerProps}/>}
            />

          <Route
            path="/places/:id"
            exact
            render={(routerProps) => <DetailsPage {...routerProps}/>}
          />
        </Switch>
      </Router>
    </div>

  )
}
