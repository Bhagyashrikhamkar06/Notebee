import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "user name is required!"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "user email is required!"],
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const UserModel = model('users',userSchema);

export default UserModel