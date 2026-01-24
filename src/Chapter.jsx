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



import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const Chapter = () => {
    const { id, cid } = useParams();
    const [courses, setCourse] = useState(null);
    const [selectedchapter, setchapter] = useState(null);
    const [ind, setind] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/course/${id}`)
          .then((res) => res.json())
          .then((data) => {
           
            setCourse(data);

            if(data?.chapters?.length){
                const desiredchapter = data.chapters.find(cch => cch.id == cid);
                
                if(desiredchapter) {
                    setchapter(desiredchapter);
                    setind(0); // নতুন chapter এ গেলে প্রথম lesson এ reset করুন
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
            <div className='mt-10'>
                <video 
                    key={`${selectedchapter.id}-${ind}`} // এই key টি যোগ করুন
                    controls 
                    width="1100" 
                    height="1400"
                >
                    <source src={selectedchapter.lessons[ind].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h2 className='text-2xl font-bold mt-4 ml-5'>{selectedchapter.title}</h2>

            <div className='inline-block ml-5 mt-6'>
                {selectedchapter.lessons?.map((lesson, index) => (
                    <button 
                        key={lesson.id}
                        className='bg-amber-400 text-white font-bold px-4 py-2 ml-3 cursor-pointer hover:bg-amber-500'
                        onClick={() => setind(index)}
                    >
                        {lesson.title}
                    </button>
                ))}
            </div>

            <div className='mt-8 ml-5'>
                <h3 className='text-xl font-semibold mb-3'>All Chapters:</h3>
                <div className='flex flex-wrap gap-3'>
                    {courses.chapters?.map((chapter) => (
                        <Link 
                            key={chapter.id}
                            to={`/coursedetails/${courses._id}/chapter/${chapter.id}`}
                            className={`font-bold px-4 py-2 rounded ${chapter.id === selectedchapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {chapter.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chapter;