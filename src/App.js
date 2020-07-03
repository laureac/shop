import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomeScreen from './frontend/HomeScreen';
import ProductsScreen from './frontend/ProductsScreen';
import ProductScreen from './frontend/ProductScreen';
import './App.scss';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
    <div className='App'>
      <div className="grid-container">
        <header className="header">
          <div className="header-links">
            <button onClick={openMenu}>&#9776;</button>
          </div>
          <div className="brand">
              <Link to="/">Swedish Candy Bar</Link>
          </div>
          <ul className="categories">
            <li>
              <Link to="/products/">Shop</Link>
            </li>
          </ul>
        </header>
        <aside className="sidebar">
          <h3>Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/">Sour</Link>
            </li>
            <li>
              <Link to="/">Mix</Link>
            </li>
            <li>
              <Link to="/">Chocolate</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Switch>
              <Route path="/products/:id" component={ProductScreen} />
              <Route path="/products/" component={ProductsScreen} />
              <Route path="/" exact={true} component={HomeScreen}/>
            </Switch>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
