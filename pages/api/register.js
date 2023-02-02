import connectDB from "../../Server/config/dbConnect";
const { StudentDb } = require("../../Server/models/student.js");
export default async function handler(req, res) {
  await connectDB();
  let {
    userUsn,
    userName,
    userEmail,
    userSemester,
    userSection,
    eventRegistered,
  } = req.body;
  if (req.method === "GET") {
    res.status(200).json({ name: "Hello Bhuvannn" });
  } else if (req.method === "POST") {
    console.log(userUsn, userName, userEmail);
    StudentDb.findOne({ userUsndb: userUsn }, function (err, docs) {
      if (err) {
        res.json({
          message: "There was some problem, please try again ",
          type: "error",
          registerBool: false,
        });
      } else if (docs) {
        res.json({
          message: "The student has already registered...",
          registerBool: false,
          type: "error",
        });
      } else {
        StudentDb.create(
          {
            userUsndb: userUsn.toUpperCase(),
            userNamedb: userName,
            userEmaildb: userEmail,
            userSemesterdb: userSemester,
            userSectiondb: userSection,
            eventRegistereddb: eventRegistered,
          },

          function (err, user) {
            console.log(user);

            if (err) {
              res.json({
                registerBool: false,
                message: "There was a problem in registering the user !!",
                type: "error",
              });
              console.log(err);
            } else if (user) {
              console.log(user);
              res.json({
                registerBool: true,
                message:
                  "Congratulations!! You have Successfully registered for Aikya 2023 !!   Stay tuned !!!",
                caption: "Stay tuned !!!",
                type: "success",
              });
            }
          }
        );
      }
    });
  }
}
