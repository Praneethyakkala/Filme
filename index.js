const express = require('express')
const app = express();
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/wp_data')
    .then(() => {
    console.log("database connected")
    })
    .catch(() => {
    console.log("Failed")
})
app.set('view engine ', 'hbs');
const css_path = path.join(__dirname, '/public');
app.use(express.static(css_path));
app.get("/", (req, res) => {
    res.render("firstpage.hbs");
})
app.get("/news.hbs", (req, res) => {
    res.render("news.hbs");

})
app.get("/signup.hbs", (req, res) => {
    res.render("signup.hbs");

})
app.get("/payment.hbs", (req, res) => {
    res.render("payment.hbs");

})
app.get("/Ticketbooking.hbs", (req, res) => {
    res.render("Ticketbooking.hbs");

})
hbs.registerPartials(__dirname + '/views', '{{nav}}')

app.listen("3000", () => {
    console.log("server is running on port 3000");
})