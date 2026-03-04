// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function() {

    // 1️⃣ Cambiar texto
    document.getElementById("btn1").addEventListener("click", function() {
        document.getElementById("titulo").innerText = "Texto cambiado con JS externo";
    });

    // 2️⃣ Cambiar clase
    document.getElementById("btn2").addEventListener("click", function() {
        document.querySelector(".mensaje").classList.toggle("rojo");
    });

    // 3️⃣ Crear elemento nuevo
    document.getElementById("btn3").addEventListener("click", function() {
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerText = "Nuevo párrafo agregado dinámicamente";
        document.getElementById("contenedor").appendChild(nuevoParrafo);
    });

    // 4️⃣ Modificar atributos y estilos
    document.getElementById("btn4").addEventListener("click", function() {
        let caja = document.getElementById("caja");
        caja.style.backgroundColor = "green";
        caja.setAttribute("title", "Color cambiado correctamente");
    });

    // 5️⃣ Obtener valor de input
    document.getElementById("btn5").addEventListener("click", function() {
        let texto = document.getElementById("inputTexto").value;
        alert("Escribiste: " + texto);
    });

});
