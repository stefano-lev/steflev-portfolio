import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';
import './App.css';


function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#e0e0e0",
        backgroundColor: "#121212",
        margin: 0,
        padding: 0,
        lineHeight: 1.6,
      }}
    >
      <Header />
      <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
