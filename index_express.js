const Express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const models = require('./models');
const app = Express();
const router = require('./router');
const cookieParser = require('cookie-parser');

app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);
const passport = require('./lib/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.set('view engine', 'ejs');
app.use(Express.static(__dirname + '/public'));

app.use(router);

models.sequelize
  .authenticate()
  .then(() => {
    app.listen(4001, () => {
      console.log('listening port 4001');
    });
  })
  .catch(console.log);
