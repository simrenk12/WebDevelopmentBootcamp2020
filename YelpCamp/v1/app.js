var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
	{name:"Salmon Creek" , image: "https://i.pinimg.com/originals/72/30/76/723076a4c888da23f5bab563aa20d4e8.jpg"},
	{name:"Granite Hill" , image: "https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2018/05/31/favorite-free-camping-apps_s.jpg?itok=_jzf7iRS"},
	{name:"Mountain Rest" , image: "https://az837918.vo.msecnd.net/publishedimages/Listings/1244/en-US/images/1/tunnel-mountain-village-1-campground-L-11.jpg"},
	{name:"River Side Stay" , image: "https://outdoorgearo.com/dev/wp-content/uploads/2018/09/campsite_concierge1.png"}
];

app.get("/", function(req,res){
res.render("landing");
});


app.get("/campgrounds", function(req,res){
	

res.render("campgrounds",{campgrounds:campgrounds});
});


app.get("/campgrounds/new", function(req,res){
	res.render("new.ejs");
});

app.post("/campgrounds", function(req,res){
	res.send("you hit the post route");
	var name = req.body.name;
	var image = req.body.image;
	var newCampgrounds = {name: name, image: image}
	campgrounds.push(newCampgrounds)
	res.redirect("/campgrounds");
});

	app.listen(process.env.PORT || 3000, process.env.IP, function(){
		console.log("The YelpCame Server has Started!");
	});

