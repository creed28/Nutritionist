import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParse from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParse());
app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = 8080;

server.listen(PORT, ()=> {
  console.log(`Server running on PORT ${PORT}`);
});

const MONGO_URL = "mongodb+srv://hristozagorliev:12345@cluster0.g1zw0oy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => { 
  console.log(error);
});
