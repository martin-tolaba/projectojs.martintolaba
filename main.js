document.getElementById("repair-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Captura los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const carModel = document.getElementById("car-model").value;
    const serviceType = document.getElementById("service-type").value;
    const message = document.getElementById("message").value;

    // Valida que todos los campos estén completos
    if (name && email && phone && carModel && serviceType && message) {
        // Simula el envío de datos al servidor y muestra un mensaje de confirmación
        document.getElementById("response").innerHTML = `
            <h3>¡Gracias por tu solicitud, ${name}!</h3>
            <p>Hemos recibido tu solicitud para un servicio de <strong>${serviceType}</strong> en tu <strong>${carModel}</strong>.</p>
            <p>Nos pondremos en contacto contigo en breve a través del correo <strong>${email}</strong> o al número <strong>${phone}</strong>.</p>
        `;
        // Resetea el formulario
        document.getElementById("repair-form").reset();
    } else {
        // Muestra un mensaje de error si los campos no están completos
        document.getElementById("response").innerHTML = "<p>Por favor, completa todos los campos del formulario.</p>";
    }
});