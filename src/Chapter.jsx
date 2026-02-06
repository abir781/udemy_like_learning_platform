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



import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const Chapter = () => {
    const { id, cid } = useParams();
    const [courses, setCourse] = useState(null);
    const [selectedchapter, setchapter] = useState(null);
    const [ind, setind] = useState(0);
    const [titles, setTitles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("");

    const openModal = (title) => {
        setSelectedTitle(title);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedTitle("");
    };

    useEffect(() => {
        fetch("http://localhost:5000/quizes")
            .then(res => res.json())
            .then(data => setTitles(data.map(q => q.title)))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/course/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCourse(data);
                if(data?.chapters?.length){
                    const desiredchapter = data.chapters.find(cch => cch.id == cid);
                    if(desiredchapter) {
                        setchapter(desiredchapter);
                        setind(0);
                    } else {
                        setchapter(data.chapters[0]);
                        setind(0);
                    }
                }
            });
    }, [id, cid]);

    if (!courses || !selectedchapter) {
        return <p>Loading...</p>;
    }

    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='flex gap-10'>
                <div className='mt-10'>
                    <video 
                        key={`${selectedchapter.id}-${ind}`}
                        controls 
                        width="1100" 
                        height="1400"
                    >
                        <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <h2 className='text-2xl font-bold mt-4 ml-5'>{selectedchapter.title}</h2>
                    
                    {/* Quiz Button যোগ করা হলো */}
                    <button
                        onClick={() => openModal("Select Quiz")}
                        className="mt-4 ml-5 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 font-bold"
                    >
                        Take Quiz for Better Learning
                    </button>
                </div>

                <div className='mt-10'>
                    <div className='flex flex-col gap-4 ml-5 mt-6'>
                        <h3 className='text-xl font-semibold mb-3'>Lessons:</h3>
                        {selectedchapter.lessons?.map((lesson, index) => (
                            <button 
                                key={lesson.id}
                                className='text-orange-600 font-bold cursor-pointer hover:bg-amber-500 p-2 rounded'
                                onClick={() => setind(index)}
                            >
                                {lesson.title}
                            </button>
                        ))}
                    </div>

                    <div className='mt-8 ml-5'>
                        <h3 className='text-xl font-semibold mb-3'>All Chapters:</h3>
                        <div className='flex flex-col gap-3'>
                            {courses.chapters?.map((chapter) => (
                                <Link 
                                    key={chapter.id}
                                    to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
                                    className={`font-bold px-3 py-2 rounded ${chapter.id === selectedchapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    {chapter.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal - সঠিক structure এ */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                        <h3 className="text-xl font-bold mb-4">{selectedTitle}</h3>

                        <ul className="max-h-60 overflow-y-auto border-t border-b mt-2 mb-4">
                            {titles.map((title, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => setSelectedTitle(title)}
                                    className="p-2 border-b cursor-pointer hover:bg-gray-100"
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => alert(`Start quiz: ${selectedTitle}`)}
                            className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        >
                            Take Quiz for Better Learning
                        </button>

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
    );
};

export default Chapter;