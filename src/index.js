const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const passportMiddleware = require('./middlewares/passport.middleware');
const indexRoutes = require('./routes/index.route');

const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.use(indexRoutes);

// Config
//app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log("Server run on port: ", port);
});