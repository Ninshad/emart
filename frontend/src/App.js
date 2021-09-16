import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './containers/Home'
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/privateRoute'
import AddProduct from './containers/AddProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/addproduct" component={AddProduct} />
          

          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
