const underscore = require('underscore');
function range(a)
{
  return underscore.max(a) - underscore.min(a);
}
module.exports.range = range;
