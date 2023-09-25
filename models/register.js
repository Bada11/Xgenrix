import mongoose from "mongoose";

const Register = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  userpassword: { type: String, required: true },
});

const registerSchema =
  mongoose.models?.Register || mongoose.model("Register", Register);

export default registerSchema;
