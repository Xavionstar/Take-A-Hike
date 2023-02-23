const express = require("express");
const app = express();
const PORT = process.env.PORT || 1234;

const Hike = require("./routes/Hike");
const sequelize = require("./config/connection");

const handlebars = require("express-handlebars");

const hbs = handlebars.create();
const session = require('express-session');

app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine("handlebars", hbs.engine);


app.use("/Hike", Hike);


app.use(express.static("styles"));
app.use(session);
app.use(express.json());





app.get("/", async (req, res) => {
  let postData = await BlogPosts.findAll();
  postData = postData.map((singlePostData) =>
    singlePostData.get({ plain: true })
  );

 
  res.render("homepage", {
    style: "homepage.css",
    posts: postData

  });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
