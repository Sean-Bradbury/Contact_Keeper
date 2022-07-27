import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
//Components
import Navbar from './components/layout/Navbar';
// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
// State
import ContactState from './context/contact/ContactState';
// Styling
import './App.css';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
