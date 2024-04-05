import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/main.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about-me" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/" exact component={AboutMe} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
