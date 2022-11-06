import React from "react";

function Counter() {
  const [Number, setNumber] = React.useState(0);
  const increaseNumber = () => {
    setNumber(Number + 1);
  };
  const decreaseNumber = () => {
    setNumber(Number - 1);
  };
  return (
    <div>
      {Number}
      <p>
        <button onClick={increaseNumber}>Increase +</button>
        <button onClick={decreaseNumber}>Decrease -</button>
      </p>
    </div>
  );
}

export default Counter;
