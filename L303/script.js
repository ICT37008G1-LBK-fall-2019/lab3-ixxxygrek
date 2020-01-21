let lari = prompt('აკრიფეთ რიცხვი');
let h2 = document.querySelector('h2');
let newlari;


if (lari.indexOf('L') === 0) {
    console.log(lari);
     newlari = lari.substr(1,3);
    h2.textContent = newlari / 2.6 + ' ამდენი დოლარი';
} else if (lari.indexOf('$') === 0){
        newlari = lari.substr(1,3);
      h2.textContent = newlari * 2.6 + ' ამდენი ლარია';
    
} else {
    alert('აირჩიე ვალუტა')
}




