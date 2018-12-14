import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// import InternalComponent from './components/InternalComponent/InternalComponent';
import ExternalComponent from '../node_modules/@fabien.branchel/shelby/src/components/ExternalComponent/ExternalComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Router>
          <div>
            <Route exact path='/' component={ExternalComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
