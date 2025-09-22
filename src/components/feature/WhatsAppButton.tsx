
export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me interesa información sobre sus servicios de vaciado de locales.");
    window.open(`https://wa.me/34609936590?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </button>
  );
}
