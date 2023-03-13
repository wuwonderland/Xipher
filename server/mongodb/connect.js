import mongoose from "mongoose";

const connectDB = (url) => {
  //TODO: this will be dealt with search functionality later
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error("Fail to connect to MongoDB");
      console.error(err);
    });
};

export default connectDB;
