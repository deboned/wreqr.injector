module.exports = {
  release: [
    'release-it'
  ],
  build: [
    'jshint',
    'jscs',
    'umd',
    'concat',
    'uglify'
  ],
  default: ['build']
};
