var fs = require('fs');
var path = require('path');

direct = process.argv[2];
ext = process.argv[3];
fs.readdir(direct, function (err, list) {
  for (var i = 0; i < list.length; i++) {
    if ('.' + ext === path.extname(list[i])) {
      console.log(list[i]);
    }
  }
});
