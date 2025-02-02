//server.js is responsible for database connection and starting the server
import "./config/envLoader.js"
import { app } from "./app.js";
import { dbConnection } from "./db/dbConnection.js";

const port = process.env.PORT;
dbConnection();

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
    console.log("connecting to database...")
});
