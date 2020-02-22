// In below implementation, characters of the
// input string correspond to tree edges,
// not tree nodes.
class TrieNode {
  constructor() {
    this.isEnd = Boolean();
    this.links = new Array(TrieNode.R);
  }

  containsKey(ch) {
    const chIndex = ch.charCodeAt(0) -
                    TrieNode.aCharCode;
    return this.links[chIndex] !== undefined;
  }

  put(ch, node) {
    const chIndex = ch.charCodeAt(0) -
          TrieNode.aCharCode;
    this.links[chIndex] = node;
  }

  get(ch) {
    const chIndex = ch.charCodeAt(0) -
          TrieNode.aCharCode;
    return this.links[chIndex];
  }

  setEnd() {
    this.isEnd = true;
  }
}
