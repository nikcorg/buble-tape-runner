// Combines the require/compile hooks from both buble and reify.
// Paraphrased from both sources.

const fs = require('fs');
const path = require('path');
const buble = require('buble');
const reify = require('reify/lib/compiler');
const original = require.extensions['.js'];

require('reify/node/runtime');

require.extensions['.js'] = function (m, filename) {
  if (/node_modules/.test(filename)) return original(m, filename);

  const source = fs.readFileSync(filename, 'utf-8');
  const compiled = reify.compile(buble.transform(source, { transforms: { modules: false } }).code);

  m._compile('"use strict";\n' + compiled, filename);
}
