let numeri = "";
let i = 1;
while ( i  <= 10 ) {
    let numero = parseInt(prompt('Inserisci un numero'));
  
    while (numero <= 0 || isNaN(numero)) {
        alert('Non ha inserito un numero');
         numero = parseInt(prompt('Inserisci un numero'));
    }

    numeri  += `<li>${numero}</li>`;
    console.log(numeri);
  i++
  
}

document.getElementById('numeri').innerHTML = numeri;