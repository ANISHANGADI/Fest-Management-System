require("dotenv").config();
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ name: "Hello Bhuvannn from admin route" });
  } else if (req.method === "POST") {
    const obj = req.body;
    console.log(obj);
    // console.log(process.env.ADMIN_PASS, obj.adminPass);

    if (obj.adminName === "AnishBhuvan") {
      if (obj.adminPass === "test1234") {
        res.json({ log: "Valid User !!", allow: true });
      } else res.json({ log: "Invalid Password..", allow: false });
    } else res.json({ log: "Invalid username !!", allow: false });
  }
}
