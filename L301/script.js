
let str = 'აკრძალული სიტყვები  საგან შემდგარი რაღაცა ტექსტი';
document.querySelector('p').textContent = str;
let array = ['რეკლამა','ვირუსი','მარკეტინგი']
let brek = [];
                for (var i = 0; i < array.length; i++) {
                    if(str.indexOf(array[i]) != -1) {
                        brek.push(array[i])
                    } else {
                        continue;
                }
            }
 if(brek.length > 0) {
     alert('თქვენ იყენებთ აკრძალულ სიტყვას: ' + brek);
 } else {
     alert('მოგესალმებით')
 }
