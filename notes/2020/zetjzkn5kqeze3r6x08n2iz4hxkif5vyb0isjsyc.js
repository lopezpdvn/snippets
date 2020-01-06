'use strict'; const log = console.log; (async ()=>{

class Trie {

  // where in TrieNode chars are edges
  searchPrefix(word) {
    let node = this.root;

    for(const curChar of word) {
      if(node.containsKey(curChar))
        node = node.get(curChar);
      else
        return null;
    }
    return node;
  }

}

// Time: O(m) worse case, where m is words.length
// Space: O(1)

})();
