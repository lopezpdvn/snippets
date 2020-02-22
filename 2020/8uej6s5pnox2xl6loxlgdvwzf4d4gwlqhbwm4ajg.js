'use strict'; const log = console.log; (async ()=>{

class Trie {

  // where in TrieNode chars are edges
  search(word) {
    const node = this.searchPrefix(word);
    return !!node && node.isEnd;
  };

}

})();
