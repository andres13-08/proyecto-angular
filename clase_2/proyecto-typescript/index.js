console.log("Hola Typescript");
var nombre = "Coderhouse";
function saludar(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}
var persona = saludar(nombre, "House");
console.log(persona);
