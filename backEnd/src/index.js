import express from "express"
import usersRouter from "./router/users.router";
import cors from "cors"

const port = 3002;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users',usersRouter);


app.listen(port);