function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no\"><meta name=\"description\" content=\"\"><link href=\"https://fonts.googleapis.com/css?family=Rubik\" rel=\"stylesheet\"></head><body><p>hello</p></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
