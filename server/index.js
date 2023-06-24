import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postroutes from "./routes/post.js";
const app = express();
app.use("/posts", postroutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const dbUrl = "mongodb://localhost:27017/Memories";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on the PORT ${PORT}`));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
