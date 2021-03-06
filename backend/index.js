const express = require("express");
//to access environment variables
const dotenv = require("dotenv");
dotenv.config();
require("./db");
const userRouter = require("./router/user");
const authRouter = require("./router/auth");
const companyRouter = require("./router/company");
const app = express();
const port = process.env.PORT || 5000;

//setup middlewares
//Enable CORS for the App
const cors = require("cors");
app.use(cors());
//Parse incoming requests with JSON payloads
app.use(express.json());
app.use(userRouter);
app.use(authRouter);
app.use(companyRouter);

//run this method to insert sample company data in database.
// const addCompany = require("./addCompanyScript");
// addCompany();

app.listen(port, () => console.log(`server listening on port:${port}`));
