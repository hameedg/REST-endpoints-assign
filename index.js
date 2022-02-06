import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";


const app =express();
const PORT=5000;

app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/',(req,res)=>res.send('hello this is homepage'));

app.listen(PORT,(req,res) => console.log(`Server is listening on port: http://localhost:${PORT}`));