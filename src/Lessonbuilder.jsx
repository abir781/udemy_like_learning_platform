import React, { useState, useEffect } from "react";

const Lessonbuilder = ({ chapters, onnext }) => {
  const [lessonTitle, setLessonTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [activeChapter, setActiveChapter] = useState("");

  useEffect(() => {
    if (chapters.length > 0 && !activeChapter) {
      setActiveChapter(chapters[0].id);
    }
  }, [chapters]);

  const addLesson = () => {
    if (!lessonTitle.trim() || !videoUrl.trim() || !activeChapter) return;

    const updatedChapters = chapters.map(ch => {
      if (ch.id === activeChapter) {
        return {
          ...ch,
          lessons: [
            ...ch.lessons,
            { id: "l" + (ch.lessons.length + 1), title: lessonTitle, videoUrl }
          ]
        };
      }
      return ch;
    });

    onnext(updatedChapters);
    setLessonTitle("");
    setVideoUrl("");
  };

  return (
    <div>
      <h2>Lesson Builder</h2>

      <select value={activeChapter} onChange={e => setActiveChapter(e.target.value)}>
        {chapters.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
      </select>

      <input
        type="text"
        placeholder="Lesson title"
        value={lessonTitle}
        onChange={e => setLessonTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Video URL"
        value={videoUrl}
        onChange={e => setVideoUrl(e.target.value)}
      />

      <button onClick={addLesson}>Add Lesson</button>
      <button onClick={() => onnext(chapters)}>Next</button>

      <h3>Preview:</h3>
      {chapters.map(c => (
        <div key={c.id}>
          <h4>{c.title}</h4>
          <ul>
            {c.lessons.map(l => <li key={l.id}>{l.title} – {l.videoUrl}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Lessonbuilder;
