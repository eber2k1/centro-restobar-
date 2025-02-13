document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("bebidas.html")) {
        let  birthYear = prompt("Ingresa tu año de nacimiento:");
        let age = new Date().getFullYear() - birthYear;

        if (age >= 18) {
            alert("Puedes escoger también las bebidas con alcohol.");
        } else {
            alert("No puedes escoger bebidas con alcohol.");
        }
    }
});