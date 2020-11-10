const express = require("express");


//Attaching app to express for routing. 
var app = express();

//Initializing port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Exporting Routes, these provide a user with where the browser will "route" to when clicking an element on the browser
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Server fired up at localhost:" + PORT);
})
