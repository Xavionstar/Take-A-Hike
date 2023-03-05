const path = require('path')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4321;
const routes = require('./controllers/index');
const helpers = require('./utils/helpers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const methodOverride = require("method-override")

const sequelize = require("./config/connection");

const handlebars = require("express-handlebars");

const hbs = handlebars.create({helpers});


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(express.json());
app.use(session(sess));

app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine("handlebars", hbs.engine);
app.use(methodOverride('_method'))


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
