var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'uploads/')
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});

var upload = multer({ storage: storage }).single('dogPhoto');

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log('an error occurred when uploading');
      return
    }
    res.json({
      success: true,
      message: 'image uploaded :)'
    });
  })
});

module.exports = router;
