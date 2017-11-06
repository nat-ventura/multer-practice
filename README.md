# Practice Uploading Files with Multer

Helpful Thread About Auto-adding File Extension
https://github.com/expressjs/multer/issues/170

^ a solution from the thread using the crypto package:

``` javascript
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
var upload = multer({ storage: storage });
```
