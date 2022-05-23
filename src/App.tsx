import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import flights from "./data/flights.json";
import Form from "./components/Form/Form";
import LightBox from "./components/LightBox/LightBox";
import { useSelector } from "react-redux";

function App() {
  let isLightBox = useSelector((state: any) => state.openLightBox);
  return (
    <div className="App">
      <Navbar data={flights} />
      <Form />
      {isLightBox ? (
        <LightBox
          message="Tu información fue enviada con éxito, estaremos en contacto 
contigo"
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
