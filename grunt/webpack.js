module.exports = {
  dist: {
    entry: '<%= yeoman.src %>/d3kit-gridmap.js',
    output: {
      filename: 'd3kit-gridmap.js',
      path: '<%= yeoman.dist %>',
      library: 'd3KitGridmap',
      libraryTarget: 'umd',
      umdNamedDefine: false
    },
    externals: {
      'd3': 'd3',
      'd3kit': 'd3Kit'
    }
  }
};