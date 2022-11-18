import express from "express"
import usersRouter from "./router/users.router";

const port = 3002;

const app = express();

app.use(express.json());
app.use('/users',usersRouter)

app.listen(port);