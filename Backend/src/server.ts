import app from "./app";
import env from "./utils/validateEnv";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";

app.use(cors({
  credentials: true,
}));

const server = http.createServer(app);
const PORT = env.PORT;

server.listen(PORT, ()=> {
  console.log(`Server running on PORT ${PORT}`);
});

mongoose.Promise = Promise;
mongoose.connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected');
});
mongoose.connection.on("error", (error: Error) => { 
  console.log(error);
});
