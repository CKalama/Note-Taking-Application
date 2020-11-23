
var dbData = require("../db/db.json")
var fs = require("fs");


module.exports = function(app) {
    app.get("/api/notes", (req,res) => {
       fs.readFile('./db/db.json', 'UTF-8', (err, data)=> {
           if(err) {
            console.log("ERROR");
           } else {
               console.log(data);
               res.json(JSON.parse(data))
           }  
       })     
    })

   app.post("/api/notes", (req,res) => {
        var newNote = req.body;
        //console.log(newNote);

        fs.readFile("./db/db.json", "UTF-8", function(err, data) {
            if (err) {
                console.log(err)
            } 
                //console.log(data)
            //Converting into an array
            data = JSON.parse(data);
            //Pushing req.body into new data parameter
            data.push(newNote);
            //console.log(data);
         fs.writeFile("./db/db.json", JSON.stringify(data), function(err) {
             if(err) {
                 console.log(err)
                 return data;
             } else {
                 console.log("Success!!!!");
             }
         })        
        })   
    })

    app.delete("/api/notes/:id", (req, res) => {
        //console.log("Deleted!!!!");
        fs.readFile('./db/db.json', (err, data) => {
            console.log("DELETED ID : ", req.params);
            var deleteData = JSON.parse(data)

            //Need an array
            var newData = [];

            //Loop to fill array (like map in React)
            for (let i =0; i <deleteData.length; i++) {

                if(parseInt(req.params.id) !==deleteData[i].id) {
                    newData.push(deleteData[i])
                }
            }

            console.log("here is the new array", deleteData);
            
        })
        

        
    })
}