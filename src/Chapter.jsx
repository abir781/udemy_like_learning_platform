// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';

// const Chapter = () => {

//     const { id , cid} = useParams();

    

//     console.log(id,cid);


//     const [courses,setCourse] = useState(null);
//     const [selectedchapter,setchapter] = useState(null);
//     const [ind, setind]=useState(0);
//     // if(courses!==null){

        

//     // }
    

    



   

//     useEffect(() => {
//         fetch("/Courses.json")
//           .then((res) => res.json())
//           .then((data) => {
//             const singleCourse = data.find((c) => c.id == id);
            
            
//             setCourse(singleCourse);

//             if(singleCourse.chapters.length){
//                 const desiredchapter = singleCourse.chapters.find(cch=>cch.id==cid) || singleCourse.chapters[0];
//                 setchapter(desiredchapter);
//                 console.log(desiredchapter);
                
               
//             }
           
            
//           });
//       }, [id,cid]);

//             if (!courses) {
//     return <p>Loading...</p>;
//   }
//     return (
//         <div className='max-w-11/12 mx-auto '>
          

//             <div className='mt-10'>
//                 <video controls width="1100" height="1400">
//                  <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
//                    Your browser does not support the video tag.
//                </video>
//             </div>
//             {/* <p>{selectedchapter.title}</p> */}


//              <div className=' inline-block ml-5 mt-6 '>

//                      {
               
//                 courses?.chapters?.lessons?.map((hot,index)=>{
//                     return(
//                     //    <Link to={`/coursedetails/${courses.id}/chapter/${hot.id}`} className='font-bold '>{hot.title}</Link>
//                     <button className='bg-amber-400 text-white font-bold px-4 py-2 ml-3 cursor-pointer' onClick={()=>setind(index)}>{hot.title}</button>
//                     )
//                 })
//             }
            
            
            
//             </div>

             

           
            
//         </div>
//     );
// };

// export default Chapter;



// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';

// const Chapter = () => {
//     const { id, cid } = useParams();
//     const [courses, setCourse] = useState(null);
//     const [selectedchapter, setchapter] = useState(null);
//     const [ind, setind] = useState(0);
//     const [titles, setTitles] = useState([]);
// const [isOpen, setIsOpen] = useState(false);
// const [selectedTitle, setSelectedTitle] = useState("");


//   const openModal = (title) => {
//   setSelectedTitle(title);
//   setIsOpen(true);
// };

// const closeModal = () => {
//   setIsOpen(false);
//   setSelectedTitle("");
// };



//     useEffect(() => {
//        fetch("http://localhost:5000/quizes")
//          .then(res => res.json())
//          .then(data => setTitles(data.map(q => q.title)))
//          .catch(err => console.error(err));
//      }, []);

//     useEffect(() => {
//         fetch(`http://localhost:5000/course/${id}`)
//           .then((res) => res.json())
//           .then((data) => {
           
//             setCourse(data);

//             if(data?.chapters?.length){
//                 const desiredchapter = data.chapters.find(cch => cch.id == cid);
                
//                 if(desiredchapter) {
//                     setchapter(desiredchapter);
//                     setind(0); // নতুন chapter এ গেলে প্রথম lesson এ reset করুন
//                 } else {
//                     setchapter(data.chapters[0]);
//                     setind(0);
//                 }
//             }
//           });
//       }, [id, cid]);

//     if (!courses || !selectedchapter) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className='max-w-11/12 mx-auto'>
//             <div className='flex gap-10'>
//                       <div className='mt-10'>
//                 <video 
//                     key={`${selectedchapter.id}-${ind}`} // এই key টি যোগ করুন
//                     controls 
//                     width="1100" 
//                     height="1400"
//                 >
//                     <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>

//                 <h2 className='text-2xl font-bold mt-4 ml-5'>{selectedchapter.title}</h2>
//             </div>

            

//             <div className='mt-10'>

//                  <div className='flex flex-col gap-4 ml-5 mt-6'>
//                     <h3 className='text-xl font-semibold mb-3'>Lessons:</h3>
//                 {selectedchapter.lessons?.map((lesson, index) => (
//                     <button 
//                         key={lesson.id}
//                         className=' text-orange-600 font-bold  cursor-pointer hover:bg-amber-500'
//                         onClick={() => setind(index)}
//                     >
//                         {lesson.title}
//                     </button>
//                 ))}
//             </div>

//             <div className='mt-8 ml-5'>
//                 <h3 className='text-xl font-semibold mb-3'>All Chapters:</h3>
//                 <div className='flex flex-col gap-3'>
//                     {courses.chapters?.map((chapter) => (
//                         <Link 
//                             key={chapter.id}
//                             to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
//                             className={`font-bold px-3 py-2 rounded ${chapter.id === selectedchapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                         >
//                             {chapter.title}
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//             </div>

//               {isOpen && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//     <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//       <h3 className="text-xl font-bold mb-4">{selectedTitle}</h3>
//       <button
//         onClick={closeModal}
//         className="absolute top-2 right-2 text-green-600 hover:text-gray-900"
//       >
//        take quiz for better learning
//       </button>
//     </div>

//     <ul>
//   {titles.map((title, index) => (
//     <li 
//       key={index} 
//       onClick={() => openModal(title)}
//       className="p-2 border-b cursor-pointer hover:bg-gray-100"
//     >
//       {title}
//     </li>
//   ))}
// </ul>
//   </div>
// )}

//             </div>
         

           
//         </div>
//     );
// };

// export default Chapter;



// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';
// import Swal from "sweetalert2";

// const Chapter = () => {
//     const { id, cid } = useParams();
//     const [courses, setCourse] = useState(null);
//     const [selectedchapter, setchapter] = useState(null);
//     const [ind, setind] = useState(0);
//     const [titles, setTitles] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedTitle, setSelectedTitle] = useState("");

   

    
    

//     const [count, setcount] = useState(0);

// const [selectedOption, setSelectedOption] = useState(null);

// const [selectedAnswers, setSelectedAnswers] = useState({});

//  const countz = Object.keys(selectedAnswers).length;


//  useEffect(() => {
//     if (!courses || !selectedchapter) return;

//     // Last chapter er id check
//     const lastChapter = courses.chapters[courses.chapters.length - 1];
    
//     if (selectedchapter.id === lastChapter.id) {
//         console.log("it's working");
//     }
// }, [selectedchapter, courses]);

//     const openModal = (title) => {
//         setSelectedTitle(title);
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//         setSelectedTitle("");
//     };

//        const score = titles.reduce((total, quiz) => {

       
        
        
//         quiz.questions.forEach((q, qIndex) => {
            
            
//             const selected = selectedAnswers[qIndex];
//             if(selected !== undefined){
//                 if(q.options[selected] === q.answer){
//                     total++;
//                 }
//             }
//         });
//         return total;
//     }, 0);

//     const marker=(recieveddata,optionindex,questionindex,answer)=>{
        
        
//         // console.log(recieveddata);
//         // console.log(answer);

//         // console.log(optionindex,questionindex);

       

//          setSelectedAnswers(prev => ({
//         ...prev,
//         [questionindex]: optionindex
//     }));




    

   

//         // setSelectedOption(optionindex);
        
//         // if(recieveddata==answer){
//         //     console.log("you got one number");
//         //     setcount(prev=>prev+1);
//         // }
//     }


//         const handleLastVideoEnd = () => {
//     console.log("All done! Last chapter's last video ended.");
//     alert("Congratulations! You finished the course!");
// };

//     const showscore=()=>{

//         if(countz==5){

//            Swal.fire({
//   title: "Good job!",
//   text: `Your score is ${score}`,
//   icon: "success"
// });

//         }

        
     
        

     
        
//     }

//  useEffect(() => {

//     if(!courses) return; // courses na thakle run korbe na

//     fetch("http://localhost:5000/quizes")
//         .then(res => res.json())
//         .then(data => {
//             const filterdata = data.filter(
//                 dats => dats.title === courses.title
//             );
//             console.log(filterdata);

//             setTitles(filterdata);
//         })
//         .catch(err => console.error(err));

// }, [courses]); 

//     useEffect(() => {
//         fetch(`http://localhost:5000/course/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data.title);
//                 setCourse(data);
//                 if(data?.chapters?.length){
//                     const desiredchapter = data.chapters.find(cch => cch.id == cid);
//                     if(desiredchapter) {
//                         setchapter(desiredchapter);
//                         setind(0);
//                     } else {
//                         setchapter(data.chapters[0]);
//                         setind(0);
//                     }
//                 }
//             });
//     }, [id, cid]);

//     if (!courses || !selectedchapter) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className='max-w-11/12 mx-auto'>
//             <div className='flex gap-10'>
//                 <div className='mt-10'>
//                     <video 
//                         key={`${selectedchapter.id}-${ind}`}
//                         controls 
//                         width="1100" 
//                         height="1400"
//                         onEnded={() => {
//         // Last chapter & last video check
//         const isLastChapter = selectedchapter.id === courses.chapters[courses.chapters.length - 1].id;
//         const isLastVideo = ind === selectedchapter.lessons.length - 1;

//         if (isLastChapter && isLastVideo) {
//             console.log("This is the last chapter's last video!");
//             // Call your function
//             handleLastVideoEnd();
//         } else {
//             // Optional: automatically next video
//             if (ind < selectedchapter.lessons.length - 1) {
//                 setind(ind + 1);
//             }
//         }
//     }}
//                     >
//                         <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>

//                     <h2 className='text-2xl font-bold mt-4 ml-5'>{selectedchapter.title}</h2>
                    
//                     {/* Quiz Button যোগ করা হলো */}
//                     <button
//                         onClick={() => openModal("Select Quiz")}
//                         className="mt-4 ml-5 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 font-bold"
//                     >
//                         Take Quiz for Better Learning
//                     </button>
//                 </div>

//                 <div className='mt-10'>
//                     <div className='flex flex-col gap-4 ml-5 mt-6'>
//                         <h3 className='text-xl font-semibold mb-3'>Lessons:</h3>
//                         {selectedchapter.lessons?.map((lesson, index) => (
//                             <button 
//                                 key={lesson.id}
//                                 className='text-orange-600 font-bold cursor-pointer hover:bg-amber-500 p-2 rounded'
//                                 onClick={() => setind(index)}
//                             >
//                                 {lesson.title}
//                             </button>
//                         ))}
//                     </div>

//                     <div className='mt-8 ml-5'>
//                         <h3 className='text-xl font-semibold mb-3'>All Chapters:</h3>
//                         <div className='flex flex-col gap-3'>
//                             {courses.chapters?.map((chapter) => (
//                                 <Link 
//                                     key={chapter.id}
//                                     to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
//                                     className={`font-bold px-3 py-2 rounded ${chapter.id === selectedchapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                                 >
//                                     {chapter.title}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal - সঠিক structure এ */}
//             {isOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-[6/12] h-[50%] relative">
//                         <h3 className="text-xl font-bold mb-4">{selectedTitle}</h3>

//                         <ul className="max-h-80 overflow-y-auto border-t border-b mt-2 mb-4">
//                             {titles.map((titleobj, index) => (
                               

//                                 <div className='h-full '>

//                                     <p>{titleobj.title}</p>

//                                     {
//                                         titleobj.questions.map((jon,isr)=>{
//                                             return(
//                                                 <div>
//                                                     <p>{jon.question}</p>
                                                    
//                                                     {
//                                                         jon.options.map((singleoption,inde)=>{
//                                                             return(
//                                                                 <div className='flex gap-3 mb-2'>
//                                                                     <button onClick={()=>marker(singleoption,inde,isr,jon.answer)}  className={`px-3 py-1 rounded-full text-white 
//   ${selectedAnswers[isr] === inde ? 'bg-orange-600' : 'bg-green-500'}`}>{inde+1}</button>
//                                                                     <p>{singleoption}</p>
                                                                    
//                                                                 </div>
//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             )
//                                         })
//                                     }




//                                 </div>
//                             ))}
//                         </ul>

                      

//                         <button
//                             onClick={showscore}
//                             className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//                         >
//                            Check Your Score
//                         </button>

//                         <button
//                             onClick={closeModal}
//                             className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-xl"
//                         >
//                             X
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Chapter;


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";

const Chapter = () => {
  const { id, cid } = useParams();
  const [courses, setCourse] = useState(null);
  const [selectedchapter, setchapter] = useState(null);
  const [ind, setind] = useState(0);
  const [titles, setTitles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [announcements,setannouncements] = useState([]);

  const [modal,setmodal]=useState(false);

  const countz = Object.keys(selectedAnswers).length;

  // =================== FETCH COURSES & CHAPTERS =====================
  useEffect(() => {
    fetch(`http://localhost:5000/course/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.email);
        fetch(`http://localhost:5000/announces?email=${data?.email}`)
    .then(res => res.json())
    .then(announces => {
      console.log(announces);
      setannouncements(announces);
    });
        setCourse(data);
        if (data?.chapters?.length) {
          const desiredchapter = data.chapters.find((cch) => cch.id == cid);
          if (desiredchapter) {
            setchapter(desiredchapter);
            setind(0);
          } else {
            setchapter(data.chapters[0]);
            setind(0);
          }
        }

       
      });
  }, [id, cid]);

  // =================== FETCH QUIZZES =====================
  useEffect(() => {
    if (!courses) return;
    fetch("http://localhost:5000/quizes")
      .then((res) => res.json())
      .then((data) => {
        const filterdata = data.filter((dats) => dats.title === courses.title);
        setTitles(filterdata);
      })
      .catch((err) => console.error(err));
  }, [courses]);

  // =================== MODAL =====================
  const openModal = (title) => {
    setSelectedTitle(title);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedTitle("");
    setmodal(false);
  };

  // =================== QUIZ FUNCTIONS =====================
  const marker = (optionIndex, questionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const score = titles.reduce((total, quiz) => {
    quiz.questions.forEach((q, qIndex) => {
      const selected = selectedAnswers[qIndex];
      if (selected !== undefined) {
        if (q.options[selected] === q.answer) total++;
      }
    });
    return total;
  }, 0);

  const showscore = () => {
    if (countz === 5) {
   Swal.fire({
  title: "Good job!",
  text: `Your score is ${score}`,
  icon: "success",
  
  
}).then((result) => {
  if (result.isConfirmed) {
    // do something when confirmed
    closeModal();
  }
});
    }
  };

  // =================== VIDEO END HANDLER =====================
  const handleLastVideoEnd = () => {
    // console.log("All done! Last chapter's last video ended.");
    // alert("Congratulations! You finished the course!");

    openModal("Measure your progress");
  };

  const handleVideoEnd = () => {
    console.log("jjj");
    if (!selectedchapter || !courses) return;

    const lastChapter = courses.chapters[courses.chapters.length - 1];
    const isLastChapter = selectedchapter.id.toString() === lastChapter.id.toString();
    const isLastVideo = ind === selectedchapter.lessons.length - 1;

    if (isLastChapter && isLastVideo) {
      handleLastVideoEnd();
    } else {
      if (ind < selectedchapter.lessons.length - 1) {
        setind((prev) => prev + 1);
      }
    }
  };

  if (!courses || !selectedchapter) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex gap-10">
        <div className="mt-10">
          {/* Video Player */}
          <video
            key={`${selectedchapter.id}-${ind}`}
            controls
            width="1100"
            height="600"
            onEnded={handleVideoEnd}
          >
            <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2 className="text-2xl font-bold mt-4 ml-5">{selectedchapter.title}</h2>

          {/* <button
            onClick={() => openModal("Select Quiz")}
            className="mt-4 ml-5 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 font-bold"
          >
            Take Quiz for Better Learning
          </button> */}
        </div>

        {/* Lessons & Chapters */}
        <div className="mt-10">
          <div className="flex flex-col gap-4 ml-5 mt-6">
            <h3 className="text-xl font-semibold mb-3">Lessons:</h3>
            {selectedchapter.lessons?.map((lesson, index) => (
              <button
                key={lesson.id}
                className="text-orange-600 font-bold cursor-pointer hover:bg-amber-500 p-2 rounded"
                onClick={() => setind(index)}
              >
                {lesson.title}
              </button>
            ))}
          </div>

          <div className="mt-8 ml-5">
            <h3 className="text-xl font-semibold mb-3">All Chapters:</h3>
            <div className="flex flex-col gap-3">
              {courses.chapters?.map((chapter) => (
                <Link
                  key={chapter.id}
                  to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
                  className={`font-bold px-3 py-2 rounded ${
                    chapter.id === selectedchapter.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {chapter.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 ml-20">
       {
        announcements?.map((abc)=>{
          return(
            <div>
            <p>{abc.announcement} and this is commanded by your course teacher {abc.email}</p>
          </div>

          )
          
        })
       }
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[6/12] h-[50%] relative">
          <div>

            <h3 className="text-xl font-bold mb-4">{selectedTitle}</h3>

          </div>

          <div className={`flex justify-center min-h-[100%] items-center ${modal ? "hidden" : "block"}`}>

             <button onClick={()=>setmodal(true)} className="px-4 py-2 bg-orange-500 text-white">Take quiz</button>

          </div>


        
          
           
         {/* Modal */}
{modal && (
  <div className=" flex items-center justify-center bg-transparent bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-[70%] relative overflow-y-auto">
      {/* Modal Title */}
      

      {/* Quiz List */}
      <ul className="max-h-80 overflow-y-auto border-t border-b mt-2 mb-4">
        {titles.map((titleobj, index) => (
          <div key={index} className="h-full">
            <p className="font-semibold">{titleobj.title}</p>

            {titleobj.questions.map((q, qIndex) => (
              <div key={qIndex} className="mb-4">
                <p className="font-medium">{q.question}</p>

                {q.options.map((opt, optIndex) => (
                  <div key={optIndex} className="flex gap-3 mb-2 items-center">
                    <button
                      onClick={() => marker(optIndex, qIndex)}
                      className={`px-3 py-1 rounded-full text-white ${
                        selectedAnswers[qIndex] === optIndex
                          ? "bg-orange-600"
                          : "bg-green-500"
                      }`}
                    >
                      {optIndex + 1}
                    </button>
                    <p>{opt}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </ul>

      {/* Check Score Button */}
      <button
        onClick={showscore}
        className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Check Your Score
      </button>

      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-xl"
      >
        X
      </button>
    </div>
  </div>
)}

          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter;
