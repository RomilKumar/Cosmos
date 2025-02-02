//server.js is responsible for database connection and starting the server
//It imports the app from app.js and starts the server at port 3000
import { app } from "./app.js"; 
import mongoose from "mongoose";
const MONGO_URL = "mongodb://localhost:27017/cosmosdb";
const port = 3000;

main()
  .then(() => console.log("database Connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.listen(port, () => {
  console.log(`Server running at localhost:${port}/`);
});
