/**
 *  Merge object recursively, don't impact the sources
 */
exports = module.exports = function extend(target) {
  var
    sources = [].slice.call(arguments, 1),
    source, k, v, i, typeto, typefrom;

  for (i = 0; i < sources.length; i++) {
    source = sources[i];
    for (k in source) {
      v = source[k];
      // <=IE8, Object.prototype.toString.call(undefined|null) return [object Object|Null]
      typeto = (v === undefined || v === null) ? v : ({}).toString.call(v);
      typefrom = (target[k] === undefined || target[k] === null) ? target[k] : ({}).toString.call(target[k]);
      // Filte `null`
      if (v && ("object" === typeof v)) {
        if (target[k] && ("object" === typeof target[k])) {
          if (typeto === typefrom) {
            extend(target[k], v);
          }
        }
        if (typeto !== typefrom) {
          target[k] = extend((typeto === '[object Array]' ? [] : {}), v);
        }
      } else {
        target[k] = v;
      }
    }
  }
  return target;
}
