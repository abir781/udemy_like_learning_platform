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
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Add Chapters</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chapter Title
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={e => setinput(e.target.value)}
                placeholder="Enter chapter title"
                onKeyPress={e => e.key === "Enter" && addChapter()}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <button
                onClick={addChapter}
                disabled={!input.trim()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add Chapter
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Press Enter to add quickly</p>
          </div>

          {chapters.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Preview: ({chapters.length} {chapters.length === 1 ? 'Chapter' : 'Chapters'})
              </h3>
              <ul className="space-y-3">
                {chapters.map((c, index) => (
                  <li 
                    key={c.id}
                    className="flex items-center bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <span className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full font-bold text-sm mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 font-medium">{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {chapters.length === 0 && (
            <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-gray-500">No chapters added yet. Start by adding your first chapter above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chaptermaker;