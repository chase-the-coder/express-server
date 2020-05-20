if (process.env.NODE_ENV === 'production') {
	moduel.exports = require('./prod');
} else {
	moduel.exports = require('./dev');
}
