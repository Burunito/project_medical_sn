const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

//DB Config
const db = require('./config/keys').mongoURI;

//Connect 
mongoose
  .connect(db, {useNewUrlParser: true})
	.then(()=> console.log('MongoDB Conected...'))
	.catch(err => console.log(err));

//Initializations
const items = require('./routes/api/items');
const auth = require('./routes/api/auth');
const app = express();
//require('./src/passport/local-auth');


// Bodyparser middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
	secret: require('./config/keys').secretsession,
	resave: false,
	saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


//Use Routes
app.use('/api/', auth);
app.use('/api/items', items);
const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server started on port ${port}`));

