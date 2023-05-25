import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.o7fd6ca.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
