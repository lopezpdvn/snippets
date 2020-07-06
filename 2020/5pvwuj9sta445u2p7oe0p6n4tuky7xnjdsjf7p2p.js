const log = console.log;

/* A non-empty str containing letters A-Z is
encoded to nums w/ A->1, B->2, ..., Z->26.
Return decodings.

Ex1: '12'  -> 'AB', 'L'
Ex2: '226' -> 'BZ', 'VF' or 'BBF'

decodings :: String -> [String]                 */
const decodings = function* (s) {
  if(s === undefined || s === null)
    throw new Error();
  yield* _g(s.length, s);
};

const _g = function* g(k, s) {
  if(!k) {
    yield '';
    return;
  }

  if(k === 1){
    if(s[0] !== '0')
      yield dict[parseInt(s[0])];
    return;
  }

  if(s[k-1] !== '0') {
    const c_k = dict[parseInt(s[k-1])];
    for(const c of g(k - 1, s))
      yield c + c_k;
  }

  const digit2 = parseInt(s.substr(k-2, k));
  if(26 < digit2 || digit2 < 10)
    return;
  const c_k = dict[digit2];
  for(const c of g(k - 2, s))
    yield c + c_k;
};

const dict = [undefined, 'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z'];

const inputTest = [
  '',
  '1',
  '12',
  '226',
  '111'
];

for(const x of inputTest)
  log([...decodings(x)].sort());
