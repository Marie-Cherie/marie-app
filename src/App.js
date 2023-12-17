import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import BookTableButton from './BookTableButton';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Main />
      <BookTableButton />
      <Footer />
    </Router>
  );
}

export default App;