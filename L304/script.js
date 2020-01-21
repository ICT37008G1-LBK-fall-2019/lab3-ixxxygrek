let number = prompt('რამდენი მომხმარებლის შეყვანა გსურთ?');
let arr = [];
let i = 0;
let saxeli;
while(i < number) {
    saxeli = prompt('სტუდენტის სახელი')
    arr.push(saxeli);
    i++;
}

document.write(arr)