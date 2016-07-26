var express = require("express");

var app = express();

app.use(express.static("public")); //to automatically get files under public/ anyother folder
app.set("view engine","ejs");   // to exclude extention of "ejs" files

//creating a route for homepage
app.get("/", function(req, res){
//   res.send("Hi There"); 
res.render("index");
});


//create a route for undefined
app.get("*", function(req, res) {
    res.send("Page is undefined!!!");
});

//lister code
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server Started"); 
});
