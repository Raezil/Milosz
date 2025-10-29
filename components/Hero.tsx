import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Miłosz Szczucki
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-cyan-700 font-medium">
              Magister Fizjoterapii
            </p>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Indywidualne podejście i skuteczna terapia w leczeniu bólu kręgosłupa i rehabilitacji ortopedycznej. Odzyskaj sprawność i komfort życia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://booksy.com/pl-pl/177561_fizjoterapia-i-osteopatia-milosz-szczucki_fizjoterapia_13750_wroclaw#ba_s=seo$0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-700 transition-transform hover:scale-105 shadow-lg"
              >
                Rezerwuj na Booksy
              </a>
              <a 
                href="#oferta"
                className="bg-slate-200 text-slate-800 font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-300 transition-transform hover:scale-105"
              >
                Dowiedz się więcej
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/avatar/8e9f3266/8e9f3266-8630-4357-83d3-7e4e028cb24c_medium_square.jpg"
                alt="Miłosz Szczucki - Fizjoterapeuta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;