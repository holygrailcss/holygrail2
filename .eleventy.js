// .eleventy.js
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "_includes", // Asegúrate que esta carpeta existe dentro de src

      output: "guia"
    }
  };
};