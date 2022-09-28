module.exports = config => {
  return {
		templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist'
		}
	};
};