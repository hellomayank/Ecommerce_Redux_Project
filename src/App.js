import React from 'react'
import Header from './containers/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
const App = () => {
  return <>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  </>;
}

export default App