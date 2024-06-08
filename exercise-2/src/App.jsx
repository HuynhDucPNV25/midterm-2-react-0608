import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [currentValue, setCurrentValue] = useState("")
  /* You will need a function to handle a key pressed on the first input and update the state*/
  // Hàm xử lý khi người dùng nhấn phím
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

        {/* This input will need to display the text entered in lower case */}
        <input disabled value={currentValue}/>
      </p>
    </main>
  );
}

export default App;
