import mongoose from "mongoose";

// Creates model using mongoose
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //tells the mongodb to store creation and update time
);

const User = mongoose.model("User", userSchema);

export default User;
