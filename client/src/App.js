import React from 'react';
import Intro from './components/intro/intro';
import About from './components/about/about';
import PortfolioList from './components/portfolioList/portfolioList';
import Contact from './components/contact/contact';

const App = () => (
  <div>
    <p><Intro /></p>
    <p><About /></p>
    <PortfolioList/>
    <Contact/>
  </div>
);

export default App;