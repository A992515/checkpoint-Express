const { static } = require("express");
const express = require("express");
const app = express();

const logger = (req, res, next) => {
    var d = new Date();
    var n = d.getHours();
    var day = d.getDay();
    if (n >= 9 && n <= 17 && (day != 6 || day != 7)){
   return next();
} 
  return res.sendFile(__dirname + "/Public/Close.html")
};
app.use(logger)
app.get("/", (req, res) => {
 
    res.sendFile(__dirname + "/Public/Home.html");
  
});

app.get("/Contact", (req, res) => {
  
    res.sendFile(__dirname + "/Public/Contact.html");
 
});
app.get("/Services", (req, res) => {
  
    res.sendFile(__dirname + "/Public/Services.html");
  
});
app.get("/Css/style.css", (req, res) => {
  res.sendFile(__dirname + "/Public/Css/style.css");
});

const port = 5100;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
