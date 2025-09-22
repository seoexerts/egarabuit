
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg z-40 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </button>
      )}
    </>
  );
}
