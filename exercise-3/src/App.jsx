import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [sum, setSum] = useState();
  const [warning, setWarning] = useState("A and B shall be numbers!");
  /* You will need some function to handle the key pressed and button events */
  const onAChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setA(value);
    }
  };
  const onBChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setB(value);
    }
  };
  const computeSum = () => {
    setSum(a + b);
    validateInputs();
  };
  const validateInputs = () => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    if (isNaN(numA) || isNaN(numB)) {
      setWarning("A and B shall be numbers!");
      setSum(null);
    } else {
      setWarning("");
      setSum(numA + numB);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={a} onChange={onAChange} />

      <label>B =</label>
      <input value={b} onChange={onBChange} />

      <label>A + B =</label>
      <input type="text" value={sum?sum:warning} style={{color:warning?"red":"white"}} disabled />

      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;