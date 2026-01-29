import React, { useState } from 'react';

const Learningform = ({ onnext }) => {
  const [learndata, setlearndata] = useState([]);
  const [input, setinput] = useState("");

  const submit = () => {
    const value = input.trim();
    if (!value) return;
    setlearndata(prev => [...prev, value]);
    setinput("");
  };

  const handleNext = () => {
    if (input.trim()) {
      const confirm = window.confirm(
        "You have unsaved text. Add it first or it will be lost. Continue anyway?"
      );
      if (!confirm) return;
    }
    if (learndata.length === 0) {
      alert("Please add at least one learning item!");
      return;
    }
    onnext(learndata);
  };

  const removeItem = (index) => {
    setlearndata(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>What you'll learn</h2>

      {learndata.length > 0 && (
        <ul>
          {learndata.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <input
        type="text"
        value={input}
        placeholder="Enter what students will learn"
        onChange={e => setinput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && submit()}
      />
      <button onClick={submit} disabled={!input.trim()}>Add</button>

      <button onClick={handleNext} disabled={learndata.length === 0}>Next</button>
    </div>
  );
};

export default Learningform;
