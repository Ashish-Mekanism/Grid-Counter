import React, { useState } from "react";
import "./Keypad.scss";

const Keypad: React.FC = () => {
  const [boxes, setBoxes] = useState<number[]>(Array(9).fill(0));
  const [counter, setCounter] = useState(1);

  const handleClick = (index: number) => {
    if (boxes[index] === 0) {
      boxes[index] = counter;
      setBoxes([...boxes]);
      setCounter(counter + 1);
    }
  };

  const handleClear = () => {
    setBoxes(Array(9).fill(0));
    setCounter(1);
  };

  return (
    <div className="keypad-container">
      <div className="keypad-grid">
        {boxes.map((num, idx) => (
          <div key={idx} className="card" onClick={() => handleClick(idx)}>
            {num || ""}
          </div>
        ))}
      </div>
      <button className="clear-btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default Keypad;
