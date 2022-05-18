const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/css")
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
}
