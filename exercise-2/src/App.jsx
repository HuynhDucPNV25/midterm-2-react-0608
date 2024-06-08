import React from "react";
import { useState } from "react";
function App() {
  const [currentValue, setCurrentValue] = useState("")
  function handelKey(e){
    const text = e.target.value;
    const value = text.toUpperCase();
    setCurrentValue(value)
  }
  console.log(currentValue);
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={handelKey} />

      <p>
        <label>Here is the text in upper case</label>

        <input disabled value={currentValue}/>
      </p>
    </main>
  );
}

export default App;
