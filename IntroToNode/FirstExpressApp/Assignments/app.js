var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("hi there, welcome th my assigment!");
});
console.log("server has started...");
app.listen(process.env.PORT || 3000, process.env.IP);
