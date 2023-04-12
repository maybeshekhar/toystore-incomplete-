import React from "react";
import NavBar from "./NavBar";
import AboutUs from "./components/AboutUs";
import Address from "./components/Address";
import ArrivalHero from "./components/ArrivalHero";
import BlogPage from "./components/BlogPage";
import Collections from "./components/Collections";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogoClouds from "./components/LogoClouds";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList";
import ProductOverview from "./components/ProductOverview";
import ProductPage from "./components/ProductPage";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";


function App() {
  return (
    <div className="App">
    {/* <HeroSection />
    <Collections />
    <Features />
    <LogoClouds />
    <Testimonial />
    <Team />
  
    <AboutUs /> */}

   {/*  <FilterSection />
    <AboutUs /> */}
  {/* <ArrivalHero />
  <ProductList />
  <Pagination /> */}
 {/*  <ProductPage /> */}
 <Router>
  <Routes>
     <Route exact path="/" element={<HomePage />} />
     <Route exact path="/products" element={<ProductPage />} />
     <Route exact path="/blogs" element={<BlogPage />} />
  </Routes>
 </Router>
    </div>
  );
}

export default App;
