import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Hero from "./pages/hero";
import MessageUS from "./pages/message-us";
import Teachers from "./pages/ourTeachers";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>OneScholl-website by colrib</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      <Routes></Routes>
      <Hero />
      <Teachers />
      <MessageUS />
      <Footer />
    </div>
  );
}

export default App;
