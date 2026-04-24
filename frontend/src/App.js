import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SalonsList from './components/SalonsList';
import SalonRegistration from './components/SalonRegistration';
import SalonModal from './components/SalonModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main className="container">
        <SalonsList />
        <SalonRegistration />
      </main>
      <SalonModal />
      <Footer />
    </div>
  );
}

export default App;
