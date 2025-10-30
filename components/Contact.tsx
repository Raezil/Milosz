
import React from 'react';

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 md:py-28 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Gotowy na powrót do sprawności?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Skontaktuj się ze mną, aby umówić wizytę w gabinecie lub w domu. Razem znajdziemy rozwiązanie Twojego problemu.
          </p>
        </div>
        <div className="mt-12 bg-white text-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-cyan-700">Dane kontaktowe</h3>
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold">Adres gabinetu:</h4>
                <p>ul. Kosmonautów 208B, Wrocław</p>
              </div>
              <div>
                <h4 className="font-semibold">Rehabilitacja z dojazdem:</h4>
                <p>W promieniu 8 km od gabinetu</p>
              </div>
              <div>
                <h4 className="font-semibold">Telefon:</h4>
                <a href="tel:791918507" className="text-cyan-600 hover:underline">791 918 507</a>
              </div>
              <div>
                <h4 className="font-semibold">NIP:</h4>
                <p>7123471580</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a 
              href="https://booksy.com/pl-pl/177561_fizjoterapia-i-osteopatia-milosz-szczucki_fizjoterapia_13750_wroclaw#ba_s=seo$0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-cyan-700 transition-transform hover:scale-105 shadow-lg"
            >
              Rezerwuj wizytę na Booksy
            </a>
            <a 
              href="tel:791918507" 
              className="w-full text-center bg-slate-200 text-slate-800 font-bold py-4 px-8 rounded-lg text-lg hover:bg-slate-300 transition-transform hover:scale-105"
            >
              Zadzwoń
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;