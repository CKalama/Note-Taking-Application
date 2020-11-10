var path = require ("path");

module.exports = function(app) {

    app.get("/notes", (res,req) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })



}