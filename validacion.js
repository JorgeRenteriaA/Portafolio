document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Obtener valores de los campos
    const nombre = document.getElementsByName('nombre')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const asunto = document.getElementsByName('asunto')[0].value;
    const mensaje = document.getElementById('mensaje').value;

    // Verificar si todos los campos están llenos
    if (!nombre) {
        alert('El campo nombre está vacío.');
    } else if (!email) {
        alert('El campo email está vacío.');
    } else if (!asunto) {
        alert('El campo asunto está vacío.');
    } else if (!mensaje) {
        alert('El campo mensaje está vacío.');
    } else {
        // Validar la longitud de los campos
        if (nombre.length > 50) {
            alert('El nombre no puede tener más de 50 caracteres.');
        } else if (email.length > 50) {
            alert('El email no puede tener más de 50 caracteres.');
        } else if (asunto.length > 50) {
            alert('El asunto no puede tener más de 50 caracteres.');
        } else if (mensaje.length > 300) {
            alert('El mensaje no puede tener más de 300 caracteres.');
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('El correo electrónico no tiene un formato válido.');
        } else {
            // Si todos los campos están llenos y validados, abrir WhatsApp Web y llenar el mensaje
            const mensajeWhatsApp = `Hola, soy ${nombre}.\nMe gustaría ponerme en contacto contigo.\nMi email es ${email} \n${asunto}. \n${mensaje}`;
            const numeroWhatsApp = '+525535099900'; // Número de teléfono de WhatsApp
            const urlWhatsAppWeb = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajeWhatsApp)}`;
            window.open(urlWhatsAppWeb, '_blank');
            alert('Por favor, complete la acción de enviar el mensaje de forma manual en WhatsApp Web.');
        }
    }
});
