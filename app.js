var express = require("express");
var app = express();
var getMobileCircle = require("./function");
var cors = require("cors");

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/api/getDetail/:phone", (req, res) => {
  const phoneNumber = req.params.phone;
  try {
    var response = getMobileCircle(phoneNumber);
    res.status(200).json({ details: response });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({details: {
      error: "Server Error"
    }})
  }
});

//Declaring the servers
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on ${port}`));
