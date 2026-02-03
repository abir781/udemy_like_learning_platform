import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Courses = () => {
  const [datas, setDatas] = useState([]); // original data
  const [filteredCourses, setFilteredCourses] = useState([]); // filtered data
  const [query, setQuery] = useState("");

  const handleSearch = (searchTerm) => {
    const desiredData = datas.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(desiredData);
  };

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(prodata => {
        setDatas(prodata);
        setFilteredCourses(prodata);
        console.log(prodata);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="flex gap-4 justify-center ">
        <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch(e.target.value);
          }}
          className="border-2 border-green-500 pb-[16px] w-[300px] h-[50px] h-fit"
          placeholder="Search courses..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses?.map((course) => (
          <Link key={course._id} to={`/coursedetails/${course._id}`}>
            <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center text-gray-500">
                Image
              </div>
              <p className="text-gray-700 mb-2 text-center">{course.title}</p>
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
