const path = require("path");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("@csstools/postcss-global-data")({
      files: [path.resolve(__dirname, "./skele/variables/_media.pcss")],
    }),
    require("postcss-custom-media")(),
    require("postcss-nested"),
    require("postcss-each"),
    require("autoprefixer"),
  ],
};
