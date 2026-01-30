import React, { useEffect, useState } from 'react';
import Courseinfoform from './Courseinfoform';
import Learningform from './Learningform';
import Chaptermaker from './Chaptermaker';
import Lessonbuilder from './Lessonbuilder';

const Coursecreate = () => {
  const [step, setstep] = useState(1);
  const [coursedata, setcoursedata] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    image: "",
    duration: "",
    learning: [],
    chapters: []
  });
  const [rock,setrock]=useState(false);

  const sendCourseToServer = async () => {
  const res = await fetch("http://localhost:3000/sendcourse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(coursedata)
  });

  const data = await res.json();

  if (data.success) {

    console.log("✅ Course saved successfully!");
    console.log("Inserted ID:", data.insertedId);
    setrock(true);
  } else {
    console.log("❌ Course save failed");
  }
};

 useEffect(() => {
  if (step === 5) {
    sendCourseToServer();
  }
}, [step]);

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      {step === 1 && (
        <Courseinfoform
          onnext={(info) => {
            setcoursedata(prev => ({ ...prev, ...info }));
            setstep(2);
          }}
        />
      )}

      {step === 2 && (
        <Learningform
          onnext={(learning) => {
            setcoursedata(prev => ({ ...prev, learning }));
            setstep(3);
          }}
        />
      )}

      {step === 3 && (
        <Chaptermaker
          onnext={(chapters) => {
            setcoursedata(prev => ({ ...prev, chapters }));
            setstep(4);
          }}
        />
      )}

      {step === 4 && (
        <Lessonbuilder
          chapters={coursedata.chapters}
          onnext={(chapters) => {
            setcoursedata(prev => ({ ...prev, chapters }));
            setstep(5);
          }}
        />
      )}

      {step === 5 && (
        <div>
          
          {rock ? (
    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-green-800 mb-2">Success!</h3>
      <p className="text-green-700 text-lg">Course Saved Successfully</p>
    </div>
  ) : (
    <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 text-center shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-red-800 mb-2">Error!</h3>
      <p className="text-red-700 text-lg">Wrong output</p>
    </div>
  )}
        </div>
      )}
    </div>
  );
};

export default Coursecreate;
