import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Card/></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
