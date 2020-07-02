const log = console.log;

const str =
  'The quick brown fox jumps over the lazy dog.',
  n = str.length;

log(str.substring( 0, 9));
log(str.substring(-1, 9));
log(str.substring(-3, 9));
log(str.slice    ( 0, 9));
log(str.slice    (-1, 9));
log(str.slice    (-3, 9));

// The quick
// The quick
// The quick
// The quick
//
//
//
