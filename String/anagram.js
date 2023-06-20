// input = > s,t
// return true if anagram,if not false 


function anagram(s,t){
     const stringA = s.replace(/[^a-z]/gi, '').toLowerCase();
  const stringB = t.replace(/[^a-z]/gi, '').toLowerCase();

  if (stringA.length !== stringB.length) {
    return false;
  }

  const sortedA = stringA.split('').sort().join('');
  const sortedB = stringB.split('').sort().join('');

  return sortedA === sortedB;
}

console.log(anagram('anagram','nagaram'));
