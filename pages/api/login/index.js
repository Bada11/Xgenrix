import connectDB from "@/libs/mongoose";
import Register from "@/models/register";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    if (req.method === "POST") {
      connectDB();

      const { email, userpassword } = req.body;

      const login = await Register.findOne({ email: email }).then((user) => {
        if (user) {
          if (user.userpassword === userpassword) {
            res.json("Success!");
          } else {
            res.json("Something went wrong!");
          }
        } else {
          res.json("User does not exist!");
        }
      });

      const tokenData = {
        id: login._id,
        name: login.name,
        email: login.email,
      };

      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });

      const response = res.status(201).json(login);

      response.cookies.set("token", token, {
        httpOnly: true,
      });

      return response;
    }
  } catch (error) {
    console.log(error);
    return res.status(405).end();
  }
}
