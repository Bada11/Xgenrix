import connectDB from "@/libs/mongoose";
import Register from "@/models/register";

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

      return res.status(201).json(login);
    }
  } catch (error) {
    console.log(error);
    return res.status(405).end();
  }
}
