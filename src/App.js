import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Academy from './components/Academy';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Getstarted from './components/Getstarted';
import Header from './components/Header';
import Home from './components/Home';
import Offer from './components/Offer';
// page 2
import Landlords from './components/Landlords/Landlords';
import Developed from './components/Developed';
import Maximize from './components/Landlords/Maximize';
import Benifits from './components/Landlords/Benifits';
import Reporting from './components/Landlords/Reporting';
// page 3
import GetCredit from './components/Tenant/GetCredit';
import Build from './components/Tenant/Build';
import BenifitsTwo from './components/Tenant/BenifitsTwo';
import OfferTwo from './components/Tenant/OfferTwo';
// page 4
import About from './components/About/About';
import Story from './components/About/Story';
import Comitted from './components/About/Comitted';
import OfferThree from './components/About/OfferThree';
import News from './components/About/News';
import Video from './components/About/Video';
import Contact from './components/Contact/Contact';
import ContactInfo from './components/Contact/ContactInfo';
// Account
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import Preloader from './components/Preloader';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Brands />
                <Developed />
                <Offer />
                <Academy />
                <Getstarted />
              </>
            }
          />
          <Route
            path="/landlords"
            element={
              <>
                <Landlords />
                <Maximize />
                <Benifits />
                <Reporting />
                <Academy />
                <Getstarted />
              </>
            }
          />
          <Route
            path="/tenant"
            element={
              <>
                <GetCredit />
                <Build />
                <BenifitsTwo />
                <OfferTwo />
                <Academy />
                <Getstarted />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Story />
                <Video />
                <News />
                <Comitted />
                <OfferThree />
                <Academy />
                <Getstarted />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <Contact />
                <ContactInfo />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="loading" element={<Preloader />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
