const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const listRouter = require('./routes/list.router');
const detailsRouter = require('./routes/details.router');
const categoriesRouter = require('./routes/categories.router');
const questRouter = require('./routes/quest.router');
const statusRouter = require('./routes/status.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/list', listRouter);
app.use('/api/details', detailsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/quest', questRouter);
app.use('/api/status', statusRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
