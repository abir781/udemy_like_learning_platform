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
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What you'll learn</h2>

        {learndata.length > 0 && (
          <div className="mb-6">
            <ul className="space-y-3">
              {learndata.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4 group hover:bg-blue-100 transition"
                >
                  <span className="text-gray-700 flex-1 mr-3">
                    <span className="text-blue-600 font-semibold mr-2">✓</span>
                    {item}
                  </span>
                  <button
                    onClick={() => removeItem(index)}
                    className="px-3 py-1 text-sm text-red-600 hover:text-white hover:bg-red-600 border border-red-600 rounded transition duration-200"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Learning Outcome
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                placeholder="Enter what students will learn"
                onChange={e => setinput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && submit()}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <button
                onClick={submit}
                disabled={!input.trim()}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Press Enter to add quickly</p>
          </div>

          <div className="pt-4 border-t">
            <button
              onClick={handleNext}
              disabled={learndata.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next →
            </button>
            {learndata.length === 0 && (
              <p className="text-sm text-amber-600 text-center mt-2">
                ⚠ Please add at least one learning item to continue
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learningform;