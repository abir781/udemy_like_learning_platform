import React, { useState } from 'react';

const Chaptermaker = ({ onnext }) => {
  const [chapters, setchapters] = useState([]);
  const [input, setinput] = useState("");

  const addChapter = () => {
    const value = input.trim();
    if (!value) return;

    const updatedChapters = [
      ...chapters,
      { id: "c" + (chapters.length + 1), title: value, lessons: [] }
    ];
    setchapters(updatedChapters);
    onnext(updatedChapters);
    setinput("");
  };

  return (
    <div>
      <h2>Add Chapters</h2>
      <input
        type="text"
        value={input}
        onChange={e => setinput(e.target.value)}
        placeholder="Chapter title"
        onKeyPress={e => e.key === "Enter" && addChapter()}
      />
      <button onClick={addChapter}>Add Chapter</button>

      <h3>Preview:</h3>
      <ul>
        {chapters.map(c => <li key={c.id}>{c.title}</li>)}
      </ul>
    </div>
  );
};

export default Chaptermaker;
