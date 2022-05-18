const { DateTime } = require("luxon");
module.exports = function (config) {
  config.addPassthroughCopy("css/style.css");
  config.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}
