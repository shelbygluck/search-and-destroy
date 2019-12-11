'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
let t=linkedlist.head;
let h=linkedlist.head;
let looped=true;
let a={}
let b={}

do{

  t=t.next;
  h=h.next.next;
  if(h===null||h.next===null){
    looped=false;
    break;
  }
  a[t.value]=1;
  b[h.value]=1;
}while(t.value!==h.value)
console.log(a,b)

return looped;


};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
