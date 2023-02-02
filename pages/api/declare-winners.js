require("dotenv").config();
const { StudentDb } = require("../../Server/models/student");
const { WinnerDb } = require("../../Server/models/winners");
import connectDB from "../../Server/config/dbConnect";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "GET") {
    StudentDb.find({}, function (err, docs) {
      if (err) {
        res.json({ iserr: true, msg: "Failed to load data from database" });
      } else if (docs) {
        WinnerDb.find({}, function (err, winnersData) {
          if (err) {
            res.json({ iserr: true, msg: "Failed to load data from database" });
          } else {
            let ar = docs.map((item) => {
              return item.userUsndb;
            });
            res.json({
              iserr: false,
              usnData: ar.sort(),
              winnerData: winnersData,
            });
          }
        });
      }
    });
  } else if (req.method === "POST") {
    //INSERT WINNERS DETAILS INTO DATABASE
    const { eve, firstWinnerUsn, secondWinnerUsn, thirdWinnerUsn } = req.body;
    let st1, st2, st3;

    StudentDb.findOne({ userUsndb: firstWinnerUsn }, function (err, docs) {
      console.log("THIS IS DOC ! :::::: \n " + docs);

      StudentDb.findOne({ userUsndb: secondWinnerUsn }, function (err, docs2) {
        console.log("THIS IS DOC 2 :::::: \n " + docs2);

        StudentDb.findOne({ userUsndb: thirdWinnerUsn }, function (err, docs3) {
          console.log("THIS IS DOC 3 :::::: \n " + docs3);
          st1 = {
            firstWinnerUsn: firstWinnerUsn,
            firstWinnerName: docs.userNamedb,
            firstWinnerSem: docs.userSemesterdb,
            firstWinnerSec: docs.userSectiondb,
            secondWinnerUsn: secondWinnerUsn,
            secondWinnerName: docs2.userNamedb,
            secondWinnerSem: docs2.userSemesterdb,
            secondWinnerSec: docs2.userSectiondb,
            thirdWinnerUsn: thirdWinnerUsn,
            thirdWinnerName: docs3.userNamedb,
            thirdWinnerSem: docs3.userSemesterdb,
            thirdWinnerSec: docs3.userSectiondb,
          };
          WinnerDb.create({ event: eve, winnerList: st1 }, function (err, re) {
            if (err) {
              console.log(err);
            } else if (re) {
              console.log("Successfull !!");
            }
          });
        });
      });
    });

    //  StudentDb.find(
    //     { userUsndb: { $in: [firstWinnerUsn, secondWinnerUsn, thirdWinnerUsn] } },
    //     function (err, docs) {
    //       if (err) {
    //         console.log(err);
    //       } else if (docs) {
    //         console.log(docs);
    //         const st1 = {
    //           firstWinnerUsn: firstWinnerUsn,
    //           firstWinnerName: docs[0].userNamedb,
    //           firstWinnerSem: docs[0].userSemesterdb,
    //           firstWinnerSec: docs[0].userSectiondb,
    //           eve: eve,
    //         };
    //         const st2 = {
    //           secondWinnerUsn: secondWinnerUsn,
    //           secondWinnerName: docs[1].userNamedb,
    //           secondWinnerSem: docs[1].userSemesterdb,
    //           secondWinnerSec: docs[1].userSectiondb,
    //           eve: eve,
    //         };
    //         const st3 = {
    //           thirdWinnerUsn: thirdWinnerUsn,
    //           thirdWinnerName: docs[2].userNamedb,
    //           thirdWinnerSem: docs[2].userSemesterdb,
    //           thirdWinnerSec: docs[2].userSectiondb,
    //           eve: eve,
    //         };
    //         WinnerDb.insertMany([st1, st2, st3], function (err, doc) {
    //           if (err) {
    //             console.log(err);
    //           } else if (doc) {
    //             console.log(doc);
    //             res.json({ msg: "Successfull !!" });
    //           }
    //         });
    //       }
    //     }
    //   );
  }
}

//Todays task
// 1.declare-winners --done
// 2.Styling for admin home  --done

// //
// 3.Event Filter 
// 4.Stylig of declare winners -- done

// 1. Aikya home page    -- Statically rendererd
// 2. Registration page -- Statically rendererd
// 3. Admin page
//     -> Home page      -- Statically rendererd
//     -> Declare winners    -- Statically rendererd
//     ->View Participants   -- Server side rendered

// 4.Winners   getStaticProps
