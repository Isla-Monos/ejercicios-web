function calcular() {
  var montoIni = 0;
  var porcentajePropina = 0;
  var valorPropina = 0;
  var total = 0;

  montoIni = parseInt(document.getElementById("totalFacturado").value);
  porcentajePropina = parseInt(
    document.getElementById("porcentajePropina").value
  );
  var coheficienteDePropina = porcentajePropina / 100;

  valorPropina = montoIni * coheficienteDePropina;

  document.getElementById("importePropina").value = valorPropina;

  total = montoIni + valorPropina;

  document.getElementById("total").value = total;
  console.log(total);
}

// console.log('acá va la magia')
