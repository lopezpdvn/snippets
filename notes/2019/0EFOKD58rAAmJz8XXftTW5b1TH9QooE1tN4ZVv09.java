String joinWords(String[] words) {
  String sentence = "";
  for (String w: words) {
    sentence = sentence + w;
  }
  return sentence;
}

String joinWords(String[] words) {
  StringBuilder sentence = new StringBuilder();
  for (String w : words) {
    sentence.append(w);
  }
  return sentence.toString();
}
