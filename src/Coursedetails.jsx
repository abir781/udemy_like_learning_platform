import React, { useContext, useEffect, useState } from "react";

import { Authcontext } from "./Authcontext";
import { Link, useNavigate, useParams } from "react-router";

const Coursedetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  
  const navigate = useNavigate();
  

  // Fetch course from backend
  useEffect(() => {
    fetch(`http://localhost:5000/course/${id}`)
      .then((res) => res.json())
      .then((data) => {
        
        setCourse(data);
        
        

      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!course) {
    return <p className="text-center mt-10">Loading course...</p>;
  }

  // Handle purchase: navigate to payment page with full course info
  const handlepurchase = () => {
    // if (!useremail) return alert("Login first");
    navigate(`/payment/${course._id}`, { state: { course } });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* LEFT SIDE */}
      <div className="md:col-span-2 space-y-4">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-gray-600">{course.description}</p>
        <p className="font-medium">
          Instructor: <span className="text-emerald-600">{course.instructor}</span>
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-2">What you'll learn</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {course.learning?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE (Enroll + Chapters) */}
      <div className="border rounded-lg p-4 space-y-4">
        <p className="text-2xl font-bold text-center">${course.price}</p>

        {/* <button
          className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
          onClick={handlepurchase}
        >
          Purchase / Enroll
        </button> */}

        <div>
          <h3 className="font-semibold mb-2">Course Content</h3>
          {course.chapters?.map((chapter) => (
            <div key={chapter.id} className="mb-2">
              <p className="font-medium">{chapter.title}</p>
              <ul className="pl-4 text-sm text-gray-600">
                {chapter.lessons.map((lesson) => (
                  <li key={lesson.id}>▶ {lesson.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick link to first chapter if exists */}
        {course.chapters?.length > 0 && (
          <div className="flex flex-col items-center mt-2">
            <Link
              to={`/coursedetails/${course._id}/chapter/${course.chapters[0].id}`}
              className="text-blue-600 hover:underline mb-2"
            >
              Go to first lesson
            </Link>
            <button
              className="bg-black px-4 py-2 text-white cursor-pointer rounded-lg"
              onClick={handlepurchase}
            >
              Purchase
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coursedetails;


// import React, { useContext, useEffect, useState } from "react";

// import { Authcontext } from "./Authcontext";
// import { Link, useNavigate, useParams } from "react-router";

// const Coursedetails = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const { useremail } = useContext(Authcontext);
  
//   const navigate = useNavigate();



  

//   // Fetch course from backend
//   useEffect(() => {
//     fetch(`http://localhost:5000/course/${id}`)
//       .then((res) => res.json())
//       .then((data) => setCourse(data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!course) {
//     return <p className="text-center mt-10">Loading course...</p>;
//   }

//   // Handle purchase: navigate to payment page with full course info
//   const handlepurchase = () => {
//     if (!useremail) return alert("Login first");
//     navigate(`/payment/${course._id}`, { state: { course } });
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* LEFT SIDE */}
//       <div className="md:col-span-2 space-y-4">
//         <img
//           src={course.image}
//           alt={course.title}
//           className="w-full h-64 object-cover rounded-lg"
//         />
//         <h1 className="text-3xl font-bold">{course.title}</h1>
//         <p className="text-gray-600">{course.description}</p>
//         <p className="font-medium">
//           Instructor: <span className="text-emerald-600">{course.instructor}</span>
//         </p>

//         <div>
//           <h3 className="text-xl font-semibold mb-2">What you'll learn</h3>
//           <ul className="list-disc pl-5 text-gray-700">
//             {course.learning?.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* RIGHT SIDE (Enroll + Chapters) */}
//       <div className="border rounded-lg p-4 space-y-4">
//         <p className="text-2xl font-bold text-center">${course.price}</p>

//         <button
//           className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
//           onClick={handlepurchase}
//         >
//           Purchase / Enroll
//         </button>

//         <div>
//           <h3 className="font-semibold mb-2">Course Content</h3>
//           {course.chapters?.map((chapter) => (
//             <div key={chapter.id} className="mb-2">
//               <p className="font-medium">{chapter.title}</p>
//               <ul className="pl-4 text-sm text-gray-600">
//                 {chapter.lessons.map((lesson) => (
//                   <li key={lesson.id}>▶ {lesson.title}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Quick link to first chapter if exists */}
//         {course.chapters?.length > 0 && (
//           <div className="flex flex-col items-center mt-2">
//             <Link
//               to={`/coursedetails/${course._id}/chapter/${course.chapters[0].id}`}
//               className="text-blue-600 hover:underline mb-2"
//             >
//               Go to first lesson
//             </Link>
//             <button
//               className="bg-black px-4 py-2 text-white cursor-pointer rounded-lg"
//               onClick={handlepurchase}
//             >
//               Purchase
//             </button>
//           </div>
//         )}
//       </div>
      

//     </div>
//   );
// };

// export default Coursedetails;


// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';

// const Chapter = () => {
//   const { id, cid } = useParams();
//   const [courses, setCourse] = useState(null);
//   const [selectedchapter, setchapter] = useState(null);
//   const [ind, setind] = useState(0);
//   const [titles, setTitles] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedTitle, setSelectedTitle] = useState("");

//   // Modal functions
//   const openModal = (title) => {
//     setSelectedTitle(title);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedTitle("");
//   };

//   // Fetch quiz titles
//   useEffect(() => {
//     fetch("http://localhost:5000/quizes")
//       .then(res => res.json())
//       .then(data => setTitles(data.map(q => q.title)))
//       .catch(err => console.error(err));
//   }, []);

//   // Fetch course and chapter
//   useEffect(() => {
//     fetch(`http://localhost:5000/course/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCourse(data);
//         if (data?.chapters?.length) {
//           const desiredchapter = data.chapters.find(cch => cch.id == cid);
//           if (desiredchapter) {
//             setchapter(desiredchapter);
//             setind(0); // Reset to first lesson
//           } else {
//             setchapter(data.chapters[0]);
//             setind(0);
//           }
//         }
//       });
//   }, [id, cid]);

//   if (!courses || !selectedchapter) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className='max-w-11/12 mx-auto'>
//       <div className='flex gap-10'>
//         <div className='mt-10'>
//           <video
//             key={`${selectedchapter.id}-${ind}`}
//             controls
//             width="1100"
//             height="1400"
//           >
//             <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <h2 className='text-2xl font-bold mt-4 ml-5'>{selectedchapter.title}</h2>
//         </div>

//         <div className='mt-10'>
//           <div className='flex flex-col gap-4 ml-5 mt-6'>
//             <h3 className='text-xl font-semibold mb-3'>Lessons:</h3>
//             {selectedchapter.lessons?.map((lesson, index) => (
//               <button
//                 key={lesson.id}
//                 className=' text-orange-600 font-bold cursor-pointer hover:bg-amber-500'
//                 onClick={() => setind(index)}
//               >
//                 {lesson.title}
//               </button>
//             ))}
//           </div>

//           <div className='mt-8 ml-5'>
//             <h3 className='text-xl font-semibold mb-3'>All Chapters:</h3>
//             <div className='flex flex-col gap-3'>
//               {courses.chapters?.map((chapter) => (
//                 <Link
//                   key={chapter.id}
//                   to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
//                   className={`font-bold px-3 py-2 rounded ${chapter.id === selectedchapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                 >
//                   {chapter.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <h3 className="text-xl font-bold mb-4">{selectedTitle}</h3>

//             <ul className="max-h-60 overflow-y-auto border-t border-b mt-2 mb-4">
//               {titles.map((title, index) => (
//                 <li
//                   key={index}
//                   onClick={() => setSelectedTitle(title)}
//                   className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                 >
//                   {title}
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => alert(`Start quiz: ${selectedTitle}`)}
//               className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//             >
//               Take Quiz for Better Learning
//             </button>

//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chapter;


// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';

// const Chapter = () => {
//   const { id, cid } = useParams();
//   const [courses, setCourse] = useState(null);
//   const [selectedchapter, setchapter] = useState(null);
//   const [ind, setind] = useState(0);
//   const [titles, setTitles] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedTitle, setSelectedTitle] = useState("");

//   // Modal functions
//   const openModal = (title) => {
//     setSelectedTitle(title);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedTitle("");
//   };

//   // Fetch quiz titles
//   useEffect(() => {
//     fetch("http://localhost:5000/quizes")
//       .then(res => res.json())
//       .then(data => setTitles(data.map(q => q.title)))
//       .catch(err => console.error(err));
//   }, []);

//   // Fetch course and chapter
//   useEffect(() => {
//     fetch(`http://localhost:5000/course/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCourse(data);
//         if (data?.chapters?.length) {
//           const desiredchapter = data.chapters.find(cch => cch.id == cid);
//           if (desiredchapter) {
//             setchapter(desiredchapter);
//             setind(0); // Reset to first lesson
//           } else {
//             setchapter(data.chapters[0]);
//             setind(0);
//           }
//         }
//       });
//   }, [id, cid]);

//   if (!courses || !selectedchapter) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className='max-w-11/12 mx-auto'>
//       <div className='flex gap-10'>
//         <div className='mt-10'>
//           <video
//             key={`${selectedchapter.id}-${ind}`}
//             controls
//             width="1100"
//             height="1400"
//           >
//             <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <h2 className='text-2xl font-bold mt-4 ml-5'>{selectedchapter.title}</h2>
//         </div>

//         <div className='mt-10'>
//           <div className='flex flex-col gap-4 ml-5 mt-6'>
//             <h3 className='text-xl font-semibold mb-3'>Lessons:</h3>
//             {selectedchapter.lessons?.map((lesson, index) => (
//               <button
//                 key={lesson.id}
//                 className=' text-orange-600 font-bold cursor-pointer hover:bg-amber-500'
//                 onClick={() => setind(index)}
//               >
//                 {lesson.title}
//               </button>
//             ))}
//           </div>

//           <div className='mt-8 ml-5'>
//             <h3 className='text-xl font-semibold mb-3'>All Chapters:</h3>
//             <div className='flex flex-col gap-3'>
//               {courses.chapters?.map((chapter) => (
//                 <Link
//                   key={chapter.id}
//                   to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
//                   className={`font-bold px-3 py-2 rounded ${chapter.id === selectedchapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                 >
//                   {chapter.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <h3 className="text-xl font-bold mb-4">{selectedTitle}</h3>

//             <ul className="max-h-60 overflow-y-auto border-t border-b mt-2 mb-4">
//               {titles.map((title, index) => (
//                 <li
//                   key={index}
//                   onClick={() => setSelectedTitle(title)}
//                   className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                 >
//                   {title}
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => alert(`Start quiz: ${selectedTitle}`)}
//               className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//             >
//               Take Quiz for Better Learning
//             </button>

//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chapter;


// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';

// const Chapter = () => {
//   const { id, cid } = useParams();
//   const [courses, setCourse] = useState(null);
//   const [selectedchapter, setchapter] = useState(null);
//   const [ind, setind] = useState(0);
//   const [titles, setTitles] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedTitle, setSelectedTitle] = useState("");

//   // Modal functions
//   const openModal = (title) => {
//     setSelectedTitle(title);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedTitle("");
//   };

//   // Fetch quiz titles
//   useEffect(() => {
//     fetch("http://localhost:5000/quizes")
//       .then(res => res.json())
//       .then(data => setTitles(data.map(q => q.title)))
//       .catch(err => console.error(err));
//   }, []);

//   // Fetch course and chapter
//   useEffect(() => {
//     fetch(`http://localhost:5000/course/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCourse(data);
//         if (data?.chapters?.length) {
//           const desiredchapter = data.chapters.find(cch => cch.id == cid);
//           if (desiredchapter) {
//             setchapter(desiredchapter);
//             setind(0); // Reset to first lesson
//           } else {
//             setchapter(data.chapters[0]);
//             setind(0);
//           }
//         }
//       });
//   }, [id, cid]);

//   if (!courses || !selectedchapter) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className='max-w-11/12 mx-auto'>
//       <div className='flex gap-10'>
//         <div className='mt-10'>
//           <video
//             key={`${selectedchapter.id}-${ind}`}
//             controls
//             width="1100"
//             height="1400"
//           >
//             <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <h2 className='text-2xl font-bold mt-4 ml-5'>{selectedchapter.title}</h2>
//         </div>

//         <div className='mt-10'>
//           <div className='flex flex-col gap-4 ml-5 mt-6'>
//             <h3 className='text-xl font-semibold mb-3'>Lessons:</h3>
//             {selectedchapter.lessons?.map((lesson, index) => (
//               <button
//                 key={lesson.id}
//                 className=' text-orange-600 font-bold cursor-pointer hover:bg-amber-500'
//                 onClick={() => setind(index)}
//               >
//                 {lesson.title}
//               </button>
//             ))}
//           </div>

//           <div className='mt-8 ml-5'>
//             <h3 className='text-xl font-semibold mb-3'>All Chapters:</h3>
//             <div className='flex flex-col gap-3'>
//               {courses.chapters?.map((chapter) => (
//                 <Link
//                   key={chapter.id}
//                   to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
//                   className={`font-bold px-3 py-2 rounded ${chapter.id === selectedchapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                 >
//                   {chapter.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <h3 className="text-xl font-bold mb-4">{selectedTitle}</h3>

//             <ul className="max-h-60 overflow-y-auto border-t border-b mt-2 mb-4">
//               {titles.map((title, index) => (
//                 <li
//                   key={index}
//                   onClick={() => setSelectedTitle(title)}
//                   className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                 >
//                   {title}
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => alert(`Start quiz: ${selectedTitle}`)}
//               className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//             >
//               Take Quiz for Better Learning
//             </button>

//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chapter;



