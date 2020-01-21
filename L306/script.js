let kitxva = prompt('რამდენი მომხმარებლის შეყვანა გსურთ');
let i = 0;
let Array = [];
while (i < kitxva) {
    let words = prompt('შეიყვანეთ სიტყვა');
    Array.push(words);
    i++;
    
}
let axaliSityva = '';
console.log(Array)
if (kitxva == i) {
    axaliSityva =  prompt('რა სიტყვას ეძებთ?');
}

let lastArray = []
for (var j = 0; j < Array.length; j++) {
    if (Array[j].indexOf(axaliSityva) != -1){
        lastArray.push(Array[j])
    }
}

console.log('?',lastArray);
