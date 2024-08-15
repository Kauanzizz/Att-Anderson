function somar() {
    const ValorNum1 = parseInt(document.querySelector(".num1").value)
    const ValorNum2 = parseInt(document.querySelector(".num2").value)
    const resultado = (ValorNum1 + ValorNum2);

    console.log(resultado);

    const texto = parseInt(document.getElementById('texto').innerHTML = "Resultado:" + resultado)
}