require("dotenv").config();
const { StudentDb } = require("../../Server/models/student");
import connectDB from "../../Server/config/dbConnect";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "GET") {
    StudentDb.find({}, function (err, docs) {
      if (err) {
        console.log(err);
        res.json({
          iserr: true,
          message:
            "There was some problem in fetching the user!! , please try again ...",
        });
      } else if (docs) {
        res
          .status(200)
          .json({ dataFromServer: docs, iserr: false, message: "Success !!" });
      }
    });
  }
}
