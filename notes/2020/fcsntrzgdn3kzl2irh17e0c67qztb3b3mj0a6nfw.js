'use strict'; const log = console.log; (async ()=>{

class Trie {

  // where in TrieNode chars are edges
  insert(word) {
    let node = this.root;
    for(const currChar of word) {
      if(!node.containsKey(currChar))
        node.put(currChar, new TrieNode());
      node = node.get(currChar);
    }
    node.setEnd();
  };

}

// Time:  O(m) average & worse, because is
//        traversal of path of length m
// Space: O(m) worst case,
//        because m nodes are created.

// where m is word length

})();
