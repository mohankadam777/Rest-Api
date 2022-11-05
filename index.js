const  express = require("express");
const connectToMongoose= require("./db");

const app = express();
const port = 9000;
app.use(express.json());

connectToMongoose();

app.use("/", require("./routes/users"));
app.listen(port,()=>{
console.log("server running on port 9000");
})
