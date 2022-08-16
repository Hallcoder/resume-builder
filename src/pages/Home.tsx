import React from "react";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Templates from "../components/Templates";
import Reviews from './../components/Review';
function Home() {
  return (
    <div className="w-full border-red-400 ">
      <NavBar />
      <div className="w-full">
        <Intro />
        <Reviews />
        <Templates />
      </div>
    </div>
  );
}

export default Home;
