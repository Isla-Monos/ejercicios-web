
function calcular(){
	
var montoIni =0;
// var propina =0;
var valorPropina = 0;
var total =0;


montoIni = document.getElementById('totalFacturado').value;
// valorPropina = document.getElementById('importe_propina').value;♥


valorPropina = (montoIni / 10);

document.getElementById('importePropina').value=valorPropina;

total = montoIni + valorPropina;

document.getElementById('total').value=total;
console.log(total);
}






// console.log('acá va la magia')
