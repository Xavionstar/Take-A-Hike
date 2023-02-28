const express = require("express");
const app = express();
const PORT = process.env.PORT || 4321;
const routes = require('./controllers/index')


const sequelize = require("./config/connection");
// const cloudinary = require('cloudinary').v2;
// const cloudUpload = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})
// cloudinary.config({
//   cloud_name: "dtiagztwn",
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });
const handlebars = require("express-handlebars");

const hbs = handlebars.create();
//const session = require('express-session');

app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine("handlebars", hbs.engine);

app.use(express.static("styles"));
//app.use(session);
// app.use(express.json());

app.use(routes)


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
