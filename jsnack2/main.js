let N = parseInt(prompt('Inserisci il numero da calcolare'));
console.log(N);

 /*controllo se positivo e se è un numero*/
 while (N <= 0 || isNaN(N)) {
    alert('Non ha inserito un numero');
     N = parseInt(prompt('Inserisci un numero'));
}

numeri = "";

i = 1;
while (i <= N) {
/*Calcolo cubo */

 let cubo = Math.pow (i,3);

 numeri  += `<li>${cubo}</li>`;
 i++;

}

document.getElementById('numeri').innerHTML = numeri;