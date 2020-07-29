const fs = require('fs')

// TODO: add code to prune DOCTYPE, head

fs.readFile('../src/index.html', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  // Remove all new line characters
  data = data.replace(/(\r\n|\n|\r)/gm, "");

  // Remove all spaces of length 2 or more
  data = data.replace(/(\s{2,})/gm, "");

  fs.writeFile('out/index.html', data, function (err, data) { 
    if (err) {
      return console.log(err);
    }
  })

  console.log('Done!');
});