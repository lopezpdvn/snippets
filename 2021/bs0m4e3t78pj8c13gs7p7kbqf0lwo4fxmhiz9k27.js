const x = ['cat,dog', 'fish,bird'],

      y = x.flatMap(e => e.split(','));

console.log(y);

// [ 'cat', 'dog', 'fish', 'bird' ]
