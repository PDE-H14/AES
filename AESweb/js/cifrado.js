let cadena = "caracoles";
let password = "Password"; //le mete relleno(padding) la funcion, pues debe ser forzosamente de 16 digitos en java, pero aqui no

//proceso

let cifrar = CryptoJS.AES.encrypt(cadena, password);
let descifrar = CryptoJS.AES.decrypt(cifrar, password);

//obtener los datos

document.getElementById("demo0").innerHTML = cadena;
document.getElementById("demo1").innerHTML = cifrar;
document.getElementById("demo2").innerHTML = descifrar;

document.getElementById("demo3").innerHTML = descifrar.toString(CryptoJS.enc.Utf8);