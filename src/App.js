import React, { useState, useEffect } from "react";

// import  ParticlesComponent  from "./../Components/Particles";
// Adjust the path as necessary
import ParticlesComponent from "./Components/Particles.jsx";
import Card from "./Components/Card";
import Button from "./Components/Button";
import "./styles.css";
function App() {
  const [advice, setAdvice] = useState({
    slip: {
      id: 0,
      advice: "Click the green dice to generate a new advice",
    },
  });

  useEffect(() => {
    const getAdvice = async () => {
      const adviceFromServer = await fetchAdvice();
      setAdvice(adviceFromServer);
    };

    getAdvice();
  }, []);

  const fetchAdvice = async () => {
    const responseData = await fetch("https://api.adviceslip.com/advice").then(
      (response) => response.json()
    );
    console.log(responseData);
    return responseData;
  };

  const onPress = async () => {
    const adviceFromServer = await fetchAdvice();
    setAdvice(adviceFromServer);
  };

  return (
    <div className="App">
      {/* <ParticlesComponent className="particle" /> */}
      <Card advice={advice.slip.advice} id={advice.slip.id} />
      <Button onPress={onPress} />
    </div>
  );
}

export default App;
