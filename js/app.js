// let cardNumber = prompt('Enter the cards number');
// cardNumber = cardNumber.split(' ').join('').split('');

/**------------------------------------------------------------*/

let cardNumber = '4916552653981949'.split('');

/**-------------------------------------------------------------*/

let arr = [];
let temp;
let res = 0;
for (let i = 0; i < cardNumber.length; i++) {
    if (i % 2) {
        arr.push(+cardNumber[i]);
    } else {
        temp = +cardNumber[i]*2;
        if (temp > 9) {
            temp -= 9;
        }
        arr.push(temp)
    }
    res += arr[i];
}
res % 10?console.log(`${res} - NO`):console.log(`${res} - YES`);
