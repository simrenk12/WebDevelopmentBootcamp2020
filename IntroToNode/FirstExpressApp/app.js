var express = require("express");
var app = express();
app.get("/", function(req,res){
	res.send("hi there!");
});

app.get("/bye", function(req,res){
	res.send("bye!");
});


console.log("server has started...");
app.listen(process.env.PORT || 3000, process.env.IP);
