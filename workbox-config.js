module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,css,eot,svg,ttf,woff,woff2,otf,txt,less,scss,ico,html,json,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};