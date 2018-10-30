'use strict';

/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');

/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index);

  // TODO: Add Authentication.
  // Write actions in the controller.
  app.route('/events')
    .get((req, res) => {
      console.log("Test Get Events");
      // TODO: Returns list of events for the specific user.
    })
    .post((req, res) => {
      console.log("Test Post Events");
      console.log(req);
      // TODO: Store the specific event created.
    })
    .put((req, res) => {
      console.log("Test Put Events");
      // TODO: Edit the specific event.
    });

  app.route('/events/:eventCode/questions')
    .get((req, res) => {
      // TODO: Returns list of questions for the specific event.
    })
    .post((req, res) => {
      // TODO: Create a question.
    })
    .put((req, res) => {
      // TODO: Update a question.
    });

  app.post(':eventCode/questions/:questionId/answer', (req, res) => {
    // TODO: Posting of answers for a specific question.
  });

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    // TODO: Add proper redirections.
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
