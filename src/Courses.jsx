import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Courses = () => {
  const [datas, setdatas] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [query,setquery] = useState("");

  const handlesearch = (e) =>{
    const query = e.target.value.toLowerCase();
    const desireddata= datas.filter(ch=>ch.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredCourses(desireddata);
    
    
  }

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((prodata) => {
        setdatas(prodata);
        setFilteredCourses(prodata);
        console.log(prodata);
      });
  }, []);

  return (

   

              <div className="p-6">
                <div className="flex gap-4 justify-center ">
                      <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>
                      <input type="text" value={query}  onChange={(e) => {
    setquery(e.target.value);
    handlesearch(e); // filter as you type
  }}className="border-2 border-green-500 pb-[16px] w-[300px] h-[50px] h-fit " />

                </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
        {filteredCourses?.map((course) => (
            <Link to={`/coursedetails/${course._id}`}>
          <div
            key={course.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            {/* Placeholder image */}
            <div className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center text-gray-500">
              Image
            </div>

            {/* Course description */}
            <p className="text-gray-700 mb-2 text-center">
              {course.description}
            </p>

            {/* Instructor */}
            <p className="text-sm font-medium text-gray-900">
              Instructor: {course.instructor}
            </p>
          </div>
          </Link>
        ))}
         
    
      </div>
    </div>
   
             
  );
   

};

export default Courses;
