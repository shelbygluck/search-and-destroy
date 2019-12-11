'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
let t=linkedlist.head;
let h=linkedlist.head;
let looped=true;

do{
  t=t.next;
  h=h.next.next;
  if(h===null||h.next===null){
    looped=false;
    break;
  }
} while(t.value!==h.value)

if (looped) {
    t = linkedlist.head
    let originalH = h.value
    let beginningCycle = null
    do {
        do {
            if (t.value === h.value) {beginningCycle = t; break;}
            h = h.next
        } while (h.value != originalH)
        t = t.next
    } while (beginningCycle === null)
    console.log(beginningCycle.next.value)
}


return looped;


};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
