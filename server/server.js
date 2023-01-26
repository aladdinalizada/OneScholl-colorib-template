const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const teachers = [
  {
    id: 1,
    img: "https://preview.colorlib.com/theme/oneschool/images/person_1.jpg.webp",
    name: "Benjamin Stone",
    title: "Physics Teacher",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.",
    age: 30,
  },
  {
    id: 2,
    img: "https://preview.colorlib.com/theme/oneschool/images/person_2.jpg.webp",
    name: "Katleen Stone",
    title: "Physics Teacher",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.",
    age: 30,
  },
  {
    id: 3,
    img: "https://preview.colorlib.com/theme/oneschool/images/person_3.jpg.webp",
    name: "Sadie White",
    title: "Physics Teacher",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.",
    age: 30,
  },
];
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send(teachers));
// post request
app.post("/", (req, res) => {
  const teacher = {
    id: teachers.length + 1,
    img: req.body.img,
    name: req.body.name,
    title: req.body.title,
    desc: req.body.desc,
    age: req.body.age,
  };
  teachers.push(teacher);
  res.send(teachers);
});
// delete request
app.delete("/:id", (req, res) => {
  const teacher = teachers.find((c) => c.id === parseInt(req.params.id));
  if (!teacher)
    res.status(404).send("The teacher with the given ID was not found.");
  const index = teachers.indexOf(teacher);
  teachers.splice(index, 1);
  res.send(teachers);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
