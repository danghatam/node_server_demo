import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import fs from 'fs';
import users from './controllers/users';
import auth from './controllers/auth';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

//load controllers
app.use('/api/auth', auth);
app.use('/api/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    let message = null;
    if (typeof err === 'string' || err instanceof String) {
      message = err;
      res.status(500);
    } else {
      res.status(err.status || 500);
      message = err.message;
    }
    res.json({
      success: false,
      error: message
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    success: false,
    error: {}
  });
})

module.exports = app;
