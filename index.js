const { urlencoded } = require("express");
const express = require ("express")
const app = express()

const port = 8000;



app.set("view engine", "hbs") // set view engin hbs

app.use("/public", express.static(__dirname + "/public")) //static folder

app.use(express.urlencoded({extended: false}))




app.get("/", function (request, response){
    response.render("index")
})

app.get("/add-project", function(request, response){


    response.render("project")
})

app.post("/add-project", function(request, response){
    let data = request.body

    let name = data.inputProject
    let startDate = data.inputStart
    let endDate = data.inputEnd
    let message = data.inputMassage
    let node = data.inputode
    let angular = data.inputAngular
    let react = data.inputReact
    let golang = data.inputGolang

    console.log(name);
    console.log(startDate);
    console.log(endDate);
    console.log(message);
    console.log(node);
    console.log(angular);
    console.log(react);
    console.log(golang);


    response.redirect("/")
})

app.get("/detail-project", function (request, response){
    response.render("detail-project")
})

app.get("/contact-me", function(request, response){
    response.render("contact-me")
})


















app.listen(port, function(){
    console.log(`server berjalan pada port : ${port}`);
})