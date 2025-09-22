
import { useState, useEffect } from 'react';
import Button from '../base/Button';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias. 
            Si continúa navegando, consideramos que acepta su uso.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={rejectCookies}>
            Rechazar
          </Button>
          <Button variant="primary" size="sm" onClick={acceptCookies}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
}
