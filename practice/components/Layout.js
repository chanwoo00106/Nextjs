import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
