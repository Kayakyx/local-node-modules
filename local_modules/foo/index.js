const pkg = require('./package.json')
module.exports = () => console.log(`this is foo. ${pkg.version}`)
