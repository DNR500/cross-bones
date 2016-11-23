require('marko/node-require').install();

var template = require('./about.marko');

// make promise
const output = (cb) => template.render({
    name: 'World',
    colors: ["red", "green", "blue"]
  },
  function(err, output) {
    cb(output);
  });

export default output;