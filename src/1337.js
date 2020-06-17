/**
 * Takes a string and a mapping definition and
 * returns an encoded string based on the mapping definition.
 * @param {string} str
 * @param {object} map
 * @return {string}
 */
function leetify(str, map) {
  return [...str].map((c) => map[c] ?? c).join('');
}

export default leetify;
