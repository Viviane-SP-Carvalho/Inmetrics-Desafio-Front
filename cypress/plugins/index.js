const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = async (on) => {
	on('file:preprocessor', cucumber())
}