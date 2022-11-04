import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const thirdNum = 0;

  useEffect(() => {}, [firstNum, secondNum]);

  return (
    <div className="App">
      <p>First Number: {firstNum}</p>

      <button onClick={() => setFirstNum(firstNum + 1)}>First Button</button>
      <br></br>
      <p>Second Number: {secondNum}</p>
      <button onClick={() => setSecondNum(secondNum + 1)}>Second Button</button>
      <p>{thirdNum}</p>

      <div>
        {(() => {
          if (firstNum > secondNum) {
            return <p>First score is higher {firstNum}</p>;
          } else if (firstNum == secondNum) {
            return <p>Numbers are same</p>;
          } else {
            return <p>Second score is higher {secondNum}</p>;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
