import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date(" jun 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p> count : {count}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div className="step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p> step : {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="date">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}{" "}
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
};

export default App;
