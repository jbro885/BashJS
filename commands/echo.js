exports.run = (args) => {
  return encodeHTML(args.join(" "));
}
function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}