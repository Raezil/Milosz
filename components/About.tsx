
import React from 'react';

const About = () => {
  return (
    <section id="o-mnie" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Profesjonalna opieka oparta na wiedzy i doświadczeniu
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nazywam się Miłosz Szczucki i jestem magistrem fizjoterapii z pasją do pomagania pacjentom w powrocie do pełnej sprawności.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200/60">
            <h3 className="text-xl font-bold text-cyan-700">Kwalifikacje</h3>
            <p className="mt-4 text-gray-700">
              Jestem magistrem fizjoterapii, a mój numer Prawa Wykonywania Zawodu Fizjoterapeuty to <span className="font-semibold">78308</span>.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200/60">
            <h3 className="text-xl font-bold text-cyan-700">Doświadczenie</h3>
            <p className="mt-4 text-gray-700">
              Doświadczenie zawodowe zdobywałem m.in. w Städtisches Klinikum Görlitz GmbH w Niemczech, w firmie Epione oraz w ambulatorium Dobra Praktyka Medyczna.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200/60 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-cyan-700">Specjalizacje</h3>
            <p className="mt-4 text-gray-700">
              Specjalizuję się w rehabilitacji odcinka lędźwiowego kręgosłupa, wykorzystując techniki manualne i osteopatyczne, a także w rehabilitacji ortopedycznej.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
