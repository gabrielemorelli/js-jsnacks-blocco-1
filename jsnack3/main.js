const myarray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
let i = 0; 
let sum = 0;
while (i < myarray.length) {  

    console.log(myarray[i]);
    sum += myarray[i];
    i++; 
}



document.getElementById('somma').innerHTML = sum;

let avg = sum / myarray.length;

document.getElementById('media').innerHTML = avg;
