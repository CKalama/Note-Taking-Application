
var dbData = require("../db/db.json")
var fs = require("fs");


module.exports = function(app) {
    app.get("/api/notes", (req,res) => {
        res.json(dbData);
    })

   app.post("/api/notes", (req,res) => {
        var newNote = req.body;
        console.log(newNote);

        fs.readFile("./db/db.json", "UTF-8", function(err, data) {
            if (err) {
                console.log(err)
            } 
                console.log(data)
            //Converting into an array
            data = JSON.parse(data);
            //Pushing req.body into new data parameter
            data.push(newNote);
            console.log(data);
         fs.writeFile("./db/db.json", JSON.stringify(data), function(err) {
             if(err) {
                 console.log(err)
             } else {
                 console.log("Success!!!!");
             }
         })        
        })   
    })
}