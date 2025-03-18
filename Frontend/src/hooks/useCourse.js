import React, { useEffect, useState } from "react";

export const useCourse = () => {
  const [course, setcourse] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const courseData = async () => {
      try {
        setloading(true);
      } catch (error) {
        console.log(error);
        setloading(true);
      } finally {
        setloading(false);
      }
    };
    courseData();
  }, []);
};
