require('babel-polyfill');

function stringToArray(s) {
  const retVal = [];
  
  for (var i = 0; i < s.length; ++i) {
    retVal.push(s[i]);
  }
  
  return retVal;
}

console.log(stringToArray('Robin Hood'));

console.log(stringToArray('Robin Hoווd'));

console.log(stringToArray('Robin H😀😀d'));

const str = 'H😀😀d';

const iterator = str[Symbol.iterator](); // get the iterator from string
iterator.next(); // skip over the 'H'
console.log(iterator.next().value); // Get the first emoji

function stringToArray2(s) {
  const retVal = [];
  
  for (const ch of s) {
    retVal.push(ch);
  }
  
  return retVal;
}

console.log(stringToArray2('Robin H😀😀d'));

console.log(Array.from('Robin H😀😀d').map(ch => ch == '😀' ? '🙃' : ch));
console.log(Array.from('Robin H😀😀d').map(ch => ch == '😀' ? '🙃' : ch).join(''));
