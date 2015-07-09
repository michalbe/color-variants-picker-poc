// require.js looks for the following global when initializing
var require = {
  baseUrl: ".",
  paths: {
      "knockout": "bower_components/knockout/dist/knockout",
      "text":     "bower_components/requirejs-text/text"
  },

  urlArgs: "bust=" + (new Date()).getTime()
};
