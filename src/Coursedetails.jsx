import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Coursedetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/Courses.json")
      .then((res) => res.json())
      .then((data) => {
        const singleCourse = data.find((c) => c.id == id);
        setCourse(singleCourse);
      });
  }, [id]);

  if (!course) {
    return <p className="text-center mt-10">Loading course...</p>;
  }

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

        <button className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
          Enroll Now
        </button>

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

        <div className="flex justify-center">
         
           
             {course.chapters?.length > 0 && (
  <div>
    <Link to={`coursedetails/${id}/chapter/${course.chapters[0].id}`}>
      Go to lesson
    </Link>
  </div>
)}
           
           

      
          {/* <Link to={`/course/lesson/${.id}`} className="font-bold text-red-500">Lessons</Link> */}
        </div>
      </div>

    </div>
  );
};

export default Coursedetails;
