require("dotenv").config();
// const jwt = require('jsonwebtoken');
const graphqlHTTP = require("express-graphql");
const { graphQLschema } = require("./graphql-schema.js");

const express = require("express");
const app = express();
// database connection
const mongoose = require("mongoose");
const db = mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// const theSecretKey = process.env.JWT_SECRET;

const {
  courseGetAll,
  courseSearch,
} = require("./controllers/courseController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
const cors = require("cors");
const courseModel = require("./models/courseModel.js");
const teacherModel = require("./models/teacherModel.js");

// expose in the root element the different entry points of the
// graphQL service
const getAllTeachers = () => {};

const getTeacher = () => {};

const TeacherFuctions = {
  getAllTeachers: async () => {
    try {
      const teacher = await teacherModel.find();
      return teacher;
    } catch (error) {
      throw new Error(error);
    }
  },
  getTeacher: async ({ id }) => {
    try {
      const teacher = await teacherModel.findById(id);
      if (!teacher.id) {
        throw new Error("No existe teacher");
      }
      return teacher;
    } catch (error) {
      throw new Error(error);
    }
  },
};

const graphqlResolvers = {
  getAllCourses: courseGetAll,
  searchCourses: (params) => courseSearch(params),
  ...TeacherFuctions,
};

// Middlewares
app.use(bodyParser.json());
// check for cors
app.use(
  cors({
    domains: "*",
    methods: "*",
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLschema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
