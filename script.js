
let continuar;
do{
let bienvenido = "Bienvenido a Calculador de IVA"
let desc = "Con este calculador podras averiguar el total de IVA sobre un monto"
alert(bienvenido)
alert(desc)
const iva21 = 1.21
const iva105 = 1.105

let entrada = Number(prompt("Elige el % de IVA a calcular: \n 1 10,5% \n 2 21%"))
if((entrada ==1)){
    alert("Se calculara sobre el 10,5% de IVA")}
    else if((entrada ==2)){
        alert("Se calculara sobre el 21% de IVA")}
        else{
            alert("Haz ingresado un valor invalido, porfavor Presiona F5 y vuelve a intentarlo")
            break;
        }

do{
    var monto = parseInt(window.prompt("Ingrese el monto a calcular", ""));
}while(isNaN(monto) || monto < 1);

if((monto <=1)){
    alert("Usted a ingresado un valor invalido, porfavor presione F5 y vuelva a intentarlo")
break;
}

//Calculo para determinar el monto
const montoCalc105 = (monto / iva105)
const montoCalc21 = (monto / iva21)
const montosIva105 = (monto - montoCalc105)
const montosIva21 = (monto - montoCalc21)


if((entrada ==1)){
    alert("El 10,5% de " + monto + " es $" + montosIva105.toFixed(3) + "\n Tu total sin IVA sería $" + montoCalc105.toFixed(3))}
    else if((entrada ==2)){
        alert("El 21% de " + monto + " es $" + montosIva21.toFixed(3) + "\n Tu total sin IVA sería $" + montoCalc21.toFixed(3))}

  // Preguntamos al usuario si desea continuar
continuar = prompt("¿Deseas continuar? (S/N)").toUpperCase()
        if((continuar == "N")){
            alert("Gracias por usar Calculador de IVA")
            break;
            }
        else if(continuar == "S"){
        }
        else{
            alert("Haz introducido un valor invalido, porfavor, presiona F5 y vuelve a intentarlo")
            break;
        }
    }
    while (continuar === "S")

