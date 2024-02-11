import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutUs from './pages/About-Us';
import ContactUs from './pages/Contact-Us';
import './App.css';

const App = () => {
    return (
      <div className="App">
      <header className="App-header">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
      </header>
    </div>
    );
};

export default App;
