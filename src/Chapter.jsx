import React, { useEffect, useState } from 'react';

const Chapter = () => {

    const { id , chapter.id} = useParams();

    console.log(chapter.id);


    const {course,setCourse} = useState()

    useEffect(() => {
        fetch("/Courses.json")
          .then((res) => res.json())
          .then((data) => {
            const singleCourse = data.find((c) => c.id == id);
            setCourse(singleCourse);
          });
      }, [id]);
    return (
        <div>
            
        </div>
    );
};

export default Chapter;