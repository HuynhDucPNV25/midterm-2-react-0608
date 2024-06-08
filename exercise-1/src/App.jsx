import React, { useState } from "react";
function App() {
  const [isRaining, setIsRaining] = useState(true);
  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    return isRaining ? "RAIN TIME" : "SUN TIME";
  }

  function getBackgroundColor() {
    return isRaining ? "rainy" : "sunny";
  }
  console.log(isRaining);
  return (
    <main className={getBackgroundColor}>
      <h1>{getTitle}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}
export default App;
