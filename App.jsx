import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const maxLimit = 20; // threshold for message

  const increment = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increase</button>
      <button onClick={decrement}>Decrease</button>

      {/* Conditional message when threshold is hit */}
      {count === maxLimit && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          You've reached the limit!
        </p>
      )}
    </div>
  );
}

export default App;
