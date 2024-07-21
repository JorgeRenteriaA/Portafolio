
// Función para abrir WhatsApp con el mensaje del formulario
function openWhatsApp() {
    // Obtén el mensaje del textarea
    const mensaje = document.getElementById('mensaje').value;
    
    // Define el número de teléfono y el mensaje
    const phoneNumber = '1234567890'; // Reemplaza con tu número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;
    
    // Abre WhatsApp en una nueva pestaña
    window.open(url, '_blank');
    
    // Previene el envío tradicional del formulario
    return false;
}
