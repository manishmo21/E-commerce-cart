import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </div>
    </Router>
  );
}
export default App;
