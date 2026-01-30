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
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Lesson Builder</h2>

        <div className="space-y-6">
          {/* Add Lesson Form */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Lesson</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Chapter
                </label>
                <select 
                  value={activeChapter} 
                  onChange={e => setActiveChapter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  {chapters.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lesson Title
                </label>
                <input
                  type="text"
                  placeholder="Enter lesson title"
                  value={lessonTitle}
                  onChange={e => setLessonTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/video.mp4"
                  value={videoUrl}
                  onChange={e => setVideoUrl(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              <button
                onClick={addLesson}
                disabled={!lessonTitle.trim() || !videoUrl.trim() || !activeChapter}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add Lesson
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Course Preview
              </h3>
              <button
                onClick={() => onnext(chapters)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Next →
              </button>
            </div>

            <div className="space-y-4">
              {chapters.map((c, chapterIndex) => (
                <div 
                  key={c.id}
                  className="border border-gray-300 rounded-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3">
                    <h4 className="text-lg font-semibold flex items-center">
                      <span className="bg-white text-purple-600 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-3">
                        {chapterIndex + 1}
                      </span>
                      {c.title}
                      <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full">
                        {c.lessons.length} {c.lessons.length === 1 ? 'lesson' : 'lessons'}
                      </span>
                    </h4>
                  </div>
                  
                  {c.lessons.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {c.lessons.map((l, lessonIndex) => (
                        <li 
                          key={l.id}
                          className="px-5 py-4 hover:bg-gray-50 transition"
                        >
                          <div className="flex items-start">
                            <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded text-xs font-semibold mr-3 mt-0.5">
                              {lessonIndex + 1}
                            </span>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">{l.title}</p>
                              <p className="text-sm text-gray-500 mt-1 break-all">
                                🎥 {l.videoUrl}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-5 py-8 text-center text-gray-500 bg-gray-50">
                      No lessons added yet. Add your first lesson above!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessonbuilder;