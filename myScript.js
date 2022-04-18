function myFunction(){
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
    console.log(text);
}

function turnOnLight(){
    document.getElementById("myImage").src =
      "https://i.pinimg.com/originals/1a/ca/61/1aca61ab8b723da396dcede15c92eb43.jpg";
    console.log("Light have turn on");
    console.log(5+9);
}

function turnOffLight(){
    document.getElementById("myImage").src =
      "https://64.media.tumblr.com/ababa0dfa907d20342020fc7c8557af7/tumblr_o6dyl2UUEP1rzo8x9o1_500.gifv";
}

function myVariables() {
    var x;
    var y;
    const pi = 3.14;
    let person = "John";
    let hasDriversLicense = true;
    

    // const pi = 3.14, person = "John", hasDriversLicense = true;

    x = 5;
    y = 7;
    let z = x + y;

    // undefined y re-declare

    var car = "Volvo";
    var car = "Saab";
    
}

function sum() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    window.alert(num1 + num2);
}

let nombres = { nombre: "Juan", apellido: "Perez" }; // Objecto
let nombre = nombres.nombre;
let array = [ "elemento1", "elemento2", "elemento3" ]; // Array array [0]

// Sintaxis de una función con parámetros y retorno

function functionReturn(param1, param2) {
    return param1 * param2;
}

// Sintaxis de if 

/* 
if sencillo

if (condición) {
    bloque que se ejecuta si se cumple
}

if else

if (condición) {
    bloque que se ejecuta si se cumple
} else {
    bloque que se ejecuta si no se cumple
}

if else else if

if (condición) {
    bloque que se ejecuta si cumple
} else if (condición2) {
    bloque que se ejecuta si se cumple condición2
} else {
    bloque que se ejecuta si no se cumple ninguna condición
*/

function getSaludo() {
    const hoy = new Date();
    document.getElementById("saludo").innerHTML = hoy.getHours() + ' ' + greeter(hoy.getHours());
}

function greeter(hora) {
    let saludo = "";
    if (hora < 12) {
        saludo = "Buenos días";
    } else if (hora < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    } 
    return saludo;
}

// Sintaxis de switch

/*
switch (expresión) {
    case valor1:
        bloque código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        bloque código a ejecutar si la expresión es igual a valor2
        break;
    default:
} 
*/

function getDia() {
    let dia = new Date().getDay()
    switch (dia) { // getDay() devuelve el día de la semana con un número de 0 a 6, donde 0 es el día de la semana de Domingo
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
    }
    document.getElementById("diaSemana").innerHTML = dia;
}

// Sintaxis de for

/*
for (inicialización; condición; incremento)

for (let i = 0; i < 5; i++) {
    código que se ejecuta 5 veces
}

for in

for (key in objeto) {
    código que se ejecuta para cada elemento del objeto
}

*/

const persona = {nombre: "John", apellido:"Smith", edad: 45};
let text = "";
for (let x in persona) {
    text = text + persona[x];
} 

function errorHandler() {
    const mensaje = document.getElementById("resultado"); // conseguimos el elemento
    mensaje.innerHTML = "";
    let texto = document.getElementById("testError").value;

    try {
        if (texto == "") throw "No puede estar vacío";
        if (isNaN(texto)) throw "Debe ser un número";
        texto = Number(texto);
        if (texto > 10) throw "Es mayor a 10, número fuera de rango";
        if (texto < 5) throw "Es menor a 5, número fuera de rango";
    } catch (error) {
        mensaje.innerHTML =  "Input " + error;
    } finally {
        document.getElementById("testError").value = "";
    }
}
