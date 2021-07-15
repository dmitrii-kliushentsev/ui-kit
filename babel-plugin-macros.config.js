const { resolve } = require('path');

module.exports = {
  twin: {
    preset: 'styled-components',
    config: "tailwind.config.js",
    autoCssProp: true,
    hasSuggestions: true,
    includeClassNames: true,
  },
};