require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnect");
const cors = require("cors");
const corsOptions = require("./config/corOptions.js");
const app = express();
const { people } = require("./usersDB.js");

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", require("./routes/root"));
app.use("/users", require("./routes/userRoute"));
app.use("/register", require("./routes/registerRoute"));
app.use("/performance", require("./routes/performanceRoute"));
app.use("/workout-register", require("./routes/workRegRoute"));
app.use("/workout-users", require("./routes/workUserRoute.js"));
app.use("/workout-auth", require("./routes/workoutAuthRoute.js"));

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log(`listeining on port ${PORT}`));
});

// mongoose.connection.on("error", (error) => {

// })
