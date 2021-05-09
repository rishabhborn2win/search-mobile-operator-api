var express = require("express");
var app = express();
var getMobileCircle = require('./function');
var cors = require("cors");

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get('/api/getDetail/:phone', (req, res) => {
    const phoneNumber = req.params.phone;
    var response = getMobileCircle(phoneNumber);
    res.status(200).json({ details : response});
})


//Declaring the servers
var port = process.env.PORT || 500;
app.listen(port, () => console.log(`Server started on ${port}`));
