import React, { useState, useEffect } from 'react';

const images = [
  'https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/photos/8b433fe8/8b433fe8-17dc-4252-ac30-dc541491127d_large.jpg',
  'https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/photos/b9c3ab8b/b9c3ab8b-f229-4662-a88a-2d3631053095_large.jpg',
  'https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/photos/cdba3c1a/cdba3c1a-a93a-4ca5-a8ef-c3c2c65d68d5_large.jpg',
  'https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/photos/b0c7789a/b0c7789a-450b-491b-98a6-2aa8285032b5_large.jpg',
];

const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <img 
          src={src} 
          alt="Powiększone zdjęcie z gabinetu" 
          className="rounded-lg shadow-2xl"
        />
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 text-white bg-slate-800 rounded-full p-2 hover:bg-slate-700 transition-colors"
          aria-label="Zamknij"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="galeria" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Galeria Gabinetu
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Zobacz, jak wygląda miejsce, w którym pomagam pacjentom odzyskać sprawność.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelectedImage(src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Zdjęcie z gabinetu ${index + 1}`} 
                  className="w-full h-64 object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedImage && <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  );
};

export default Gallery;
