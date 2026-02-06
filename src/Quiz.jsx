import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [titles, setTitles] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/quizes")
      .then(res => res.json())
      .then(data => {
        const quizTitles = data.map(quiz => quiz.title);
        setTitles(quizTitles);
      })
      .catch(err => console.error("Error fetching quizzes:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiz Titles</h2>
      <ul>
        {titles.map((title, index) => (
          <li key={index} className="p-2 border-b">{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
