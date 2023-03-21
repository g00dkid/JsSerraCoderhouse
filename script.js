
let continuar;
do{
let bienvenido = "Bienvenido a Calculador de IVA"
let desc = "Con este calculador podras averiguar el total de IVA sobre un monto"
alert(bienvenido)
alert(desc)
const iva21 = "21%"
const iva105 = "10,5%"

let entrada = Number(prompt("Elige el % de IVA a calcular: \n 1 "+iva105+" \n 2 "+iva21+""))


if((entrada ==1)){
    alert("Se calculara sobre el 10,5% de IVA")}
    else if((entrada ==2)){
        alert("Se calculara sobre el 21% de IVA")}
        else{
            alert("Ingrese una opción valida y vuelva a intentarlo")
            let entrada = Number(prompt("Elige el % de IVA a calcular: \n 1 "+iva105+" \n 2 "+iva21+""))
        }


let monto = Number(prompt("Ingrese el monto a calcular"))

//Calculo para determinar el monto
const montoCalc105 = (monto / 1.105)
const montoCalc21 = (monto / 1.21)
const montosIva105 = (monto - montoCalc105)
const montosIva21 = (monto - montoCalc21)
if((entrada ==1)){
    alert("El 10,5% de " + monto + " es " + montosIva105 + "\n Tu total sin IVA sería " + montoCalc105)}
    else if((entrada ==2)){
        alert("El 21% de " + monto + " es " + montosIva21 + "\n Tu total sin IVA sería " + montoCalc21)}

  // Preguntamos al usuario si desea continuar
continuar = prompt("¿Deseas continuar? (S/N)").toUpperCase()
if (continuar==="S"){
    }
else {
    alert("Gracias por usar Calculador de IVA")
}
} while (continuar === "S")