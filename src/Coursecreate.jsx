import React, { useState } from 'react';
import Courseinfoform from './Courseinfoform';
import Learningform from './Learningform';
import Chaptermaker from './Chaptermaker';
import Lessonbuilder from './Lessonbuilder';

const Coursecreate = () => {
  const [step, setstep] = useState(1);
  const [coursedata, setcoursedata] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    learning: [],
    chapters: []
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
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
          <h2>Final Course Data</h2>
          <pre>{JSON.stringify(coursedata, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Coursecreate;
