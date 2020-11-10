var path = require ("path");

module.exports = function(app) {

        //Remember, the callback function has to be req,res and not vice versa. Otherwise it wont' work. 
    app.get("/notes", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    app.get("*", (req,res)=> {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })



}