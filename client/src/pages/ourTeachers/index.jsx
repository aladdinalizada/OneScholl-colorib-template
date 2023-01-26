import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./index.scss";
const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  //   axios call to get teachers data from the backend
  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => {
      setTeachers(res.data);
    });
  }, []);

  console.log(teachers);
  return (
    <div>
      <div className="teacher">
        <div className="conatiner">
          <div className="head">
            <h2>Our Teachers</h2>
            <p>
              orem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repellat aut neque! Doloribus sunt non aut reiciendis, vel
              recusandae obcaecati hic dicta repudiandae in quas quibusdam
              ullam, illum sed veniam!
            </p>
          </div>
          <div className="body">
            <div className="cards">
              {teachers.map((teacher) => (
                <div className="teacher-card" key={teacher.id}>
                  <div className="image">
                    <img src={teacher.img} alt="teacher" />
                  </div>
                  <div className="content">
                    <h3>{teacher.name}</h3>
                    <h5>{teacher.title}</h5>
                    <p>{teacher.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
