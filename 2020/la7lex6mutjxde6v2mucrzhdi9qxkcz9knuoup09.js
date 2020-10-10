class MultiSet extends Map {
  constructor(seq = []) {
    super();
    for(const e of seq)
      this.add(e);
  }

  add(e) {
    let count = this.get(e) || 0;
    this.set(e, ++count);
    return count;
  }

  delete(e) {
    let count = this.get(e) || 0;
    if(count) {
      this.set(e, --count);
      if(!count)
        super.delete(e);
    }
    return count;
  }
}

const y = new MultiSet('abcabcaab');
y.delete('c');
y.delete('c');

for(const [e, count] of y)
  console.log(`${e}: ${count}`);

// a: 4
// b: 3
