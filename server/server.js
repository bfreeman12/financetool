const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/pdfs", express.static("pdfs"));

const pdfList = {
  "DD Form 2875 DEAMS": "0001_DD_Form_2875-DEAMS_v2.1.0.pdf",
  "2231 Direct Deposit Form": "2231 Direct Deposit Form.pdf",
  "DAF 594": "daf594.pdf",
  "DD 1351-2c": "DD 1351-2c.pdf",
  "DD Form 1561": "DD Form 1561.pdf",
  "DD Form 2560 Pay Advance": "DD FORM 2560 pay advance.pdf",
  "Lost Reciept Form": "Lost Receipt Form.pdf",
  "State of Legal Residence - DD Form 2058":
    "State of Legal Residence - DD Form 2058.pdf",
};

app.post("/api/getpdf", (req, res) => {
  const fetchName = req.body.data;
  const fileName = pdfList[fetchName];
  if (!fileName) {
    return res.status(204).send("Sorry, we cannot find that file");
  }
  const filePath = path.join(__dirname, "pdfs", `${fileName}`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log(err);
      res.status(204).send("Sorry, we cannot find that file");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
