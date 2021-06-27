import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import './App.css';
import Header from './Containers/Header';
import ProductDetail from './Containers/ProductDetail';
import ProductListing from './Containers/ProductListing';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/">
            <ProductListing />
          </Route>
          <Route>
            404 Not Found
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
