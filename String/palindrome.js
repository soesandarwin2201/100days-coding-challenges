// case sensitive 
// remove the white space
// remove the nonalphectic 
// covert into arrray
// reverse

function palinDrome(s){
     let strA = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
     let strB = strA.split('').reverse().join('');
     console.log(strA,strB);
     return strA === strB;
}

console.log(palinDrome("A man, a plan, a canal: Panama"));