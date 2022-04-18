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