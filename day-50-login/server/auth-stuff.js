const cookieParser = require('cookie-parser');
const session = require('express-session');
const User = require('./models/User.js');
const passport = require('passport');




function setup(app) {

  app.use(cookieParser());
  app.use(session({
    secret: 'some secret',
    resave: true,
    saveUnitialized: true,
    cookie: { httpOnly: false }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  const LocalStrategy = require('passport-local').Strategy;

  passport.use('login', new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'unknown username' });
        }
        user.checkPassword(password, function(err, isMatch) {
          if (err) { return done(err); }
          if (isMatch) {
            return done(null, user);
          }
          else {
            return done(null, false, { message: 'invalid password' });
          }
        });
      });
    }
  ));





  // app.get('/api/users', function (req, res, next) {
  //   User.find()
  //     .exec(function(err, users) {
  //       if (err) { return next(err); }
  //       res.send(users);
  //     });
  // });

  app.post('/api/signup', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === '') {
      res.status(400);
      return res.send('Username required.');
    }
    else if (password === '') {
      res.status(400);
      return res.send('Password required.');
    }

    console.log('signup attempt, by', username, 'pw:', password);

    User.findOne({ username: username }, function(err, user) {
      if (err) { return next(err); }
      if (user) {
        res.status(400);
        return res.send('Username already in use. Please choose another.');
      }

      const newUser = new User({
        username: username,
        password: password
      });
      newUser.save(next);
    });
  }, passport.authenticate('login'), function(req, res) {
    //Apparently signup worked.
    res.sendStatus(200);
  });

  app.post('/api/login', passport.authenticate('login'), function(req, res) {
    console.log('successful login!');
    //If the user attempts to login and *is successful*, this code will be reached.
    res.sendStatus(200);

    //However, if the login fails, passport will return a 401: Unauthorized
  });

  app.post('/api/logout', (req, res) => {
    req.logout();
    res.sendStatus(204);
  });

  //This middleware enforces authentication.
  //If the user is not authenticated, 401.
  //If the user is, the request continues on.
  app.use((req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    }
    else {
      res.sendStatus(401);
    }
  });

  app.get('/api/authy', function(req, res) {
    //If the user ia authenticated, express will add the user to the request object. Convenient!
    console.log('authy', req.user);

    res.send(req.user);
  });

}




module.exports = setup;
