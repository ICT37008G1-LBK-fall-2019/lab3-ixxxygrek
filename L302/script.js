let p = document.querySelector('.why');
let p2 = document.querySelector('.me');
let str = 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს,';
p.textContent = str;

if (str.length > 15) {
    p2.textContent = str.substr(0,15) + ' ...'
}