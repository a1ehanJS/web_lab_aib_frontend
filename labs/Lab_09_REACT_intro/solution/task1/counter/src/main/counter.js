import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button id = "increase" onClick={increaseCount}>Увеличить</button>
      <button id = "decrease" onClick={decreaseCount}>Уменьшить</button>
    </div>
  );
}

export default Counter;