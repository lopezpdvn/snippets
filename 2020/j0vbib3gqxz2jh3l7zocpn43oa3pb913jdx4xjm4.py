from pprint import pprint

def buildTrie(paths, nullNode = '$'):
  path_KEY = '$'
  
  trie = {}
  for path in paths:
    node = trie
    for letter in path:
      node = node.setdefault(letter, {})
    node[path_KEY] = path

  return trie

words = ['oath', 'dig', 'dog', 'dogs'];
print(buildTrie(words))
