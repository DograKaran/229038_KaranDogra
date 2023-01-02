const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send(
        "<h1>SANGAM ELECTRONICS</h1>"
        + "<hr/>"
        + "<h3>World of Computer Electronics Store</h3>"
        + "<br/>"
        + "<ol>"
        + "<li>Mobiles</li>"
        + "<li>PC</li>"
        + "<li>Laptops</li>"
        + "<li>Hard Disk</li>"
        + "<li>Gaming Laptops</li>"
        + "<li>other Boards</li>"
        + "</ol>"            

    )
});


app.get('/about', (req, res) => {
    res.send(
        "<h1>SANGAM ELECTRONICS</h1>"
        + "<hr/>"
        + "<h3>World of Computer Electronics Store</h3>"
        + "<br/>"
        + "<ol>"
        + "<li>Mobiles</li>"
        + "<li>PC</li>"
        + "<li>Laptops</li>"
        + "<li>Hard Disk</li>"
        + "<li>Gaming Laptops</li>"
        + "<li>other Boards</li>"
        + "</ol>"

    );
});


var server = app.listen(9000);
console.log("Server Has Started on Port No:9000");