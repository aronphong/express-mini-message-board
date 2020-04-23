var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi There!",
    user: "Amando",
    added: new Date()
  }, 
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form')
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.messageText,
    user: req.body.user,
    added: new Date()
  };

  messages.push(newMessage)
  res.redirect('/')
})

module.exports = router;
