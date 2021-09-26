import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './containers/Home'
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/privateRoute'
import AddProduct from './containers/AddProduct';
import { getProducts, isUserLoggedIn } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import UserHome from './User/Home';
import ProductInfo from './containers/ProductInfo';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    dispatch(getProducts());
    
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/admin" exact component={Home} />
          <PrivateRoute path="/addproduct" component={AddProduct} />
          

          <Route path="/" exact component={UserHome} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Productinfo" component={ProductInfo} />

          
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
