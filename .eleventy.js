module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  
  // Add filter for phone formatting
  eleventyConfig.addFilter("phoneLink", function(phone) {
    return phone.replace(/\s/g, '');
  });
  
  // Add filter for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Add filter for JSON-LD safe strings
  eleventyConfig.addFilter("jsonEscape", function(str) {
    if (!str) return '';
    return str.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  });

  // Generate sitemap collection
  eleventyConfig.addCollection("sitemap", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return !item.data.excludeFromSitemap;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
