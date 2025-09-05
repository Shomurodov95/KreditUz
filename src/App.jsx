import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CalculatorPage from "./pages/CalculatorPage";

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
