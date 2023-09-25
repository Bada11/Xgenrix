import connectDB from "@/libs/mongoose";
import Register from "@/models/register";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    if (req.method === "POST") {
      connectDB();
      const { name, email, userpassword } = req.body;

      //const hashedPassword = await bcrypt.hash(userpassword, 12);

      const register = await Register.create({
        name,
        userpassword,
        email,
      });

      console.log(register);

      return res.status(201).json(register);
    }
  } catch (error) {
    console.log(error);
    return res.status(405).end();
  }
}
