const { DateTime } = require("luxon");
module.exports = function (config) {
  config.addWatchTarget("./src/css/")
  config.addPassthroughCopy("./src/css/");

  config.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
}
