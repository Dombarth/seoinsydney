module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "apple-touch-icon.png" });
  
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

  // Sitemap priority filter
  eleventyConfig.addFilter("sitemapPriority", function(url) {
    if (url === "/") return "1.0";
    if (url.includes("local-seo") || url.includes("web-design") || url.includes("aeo") || url.includes("geo")) return "0.8";
    if (url === "/about/" || url === "/contact/") return "0.7";
    if (url === "/privacy/" || url === "/terms/" || url === "/404.html") return "0.3";
    return "0.6"; // suburbs and other pages
  });

  // Sitemap change frequency filter
  eleventyConfig.addFilter("sitemapChangefreq", function(url) {
    if (url === "/") return "weekly";
    if (url.includes("local-seo") || url.includes("web-design") || url.includes("aeo") || url.includes("geo")) return "monthly";
    if (url === "/privacy/" || url === "/terms/") return "yearly";
    return "monthly";
  });

  // Format date for sitemap
  eleventyConfig.addFilter("sitemapDate", function(date) {
    if (!date) return new Date().toISOString().split('T')[0];
    return date.toISOString().split('T')[0];
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
