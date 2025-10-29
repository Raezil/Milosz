
import React from 'react';
import { HeartIcon, ZapIcon, LinkIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  testimonial: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200/60 flex flex-col">
    <div className="flex-shrink-0 w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="mt-6 text-2xl font-bold text-slate-800">{title}</h3>
    <p className="mt-4 text-gray-600 flex-grow">{description}</p>
    <div className="mt-6 pt-6 border-t border-slate-200">
      <p className="text-gray-700 italic">„{testimonial}”</p>
    </div>
  </div>
);

const Services = () => {
  const servicesData: ServiceCardProps[] = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Empatia i komfort',
      description: 'Fundamentem mojej pracy jest słuchanie pacjenta. Dokładnie zbieram wywiad i skrupulatnie dobieram metody, by wizyta była komfortowa, a terapia – skuteczna.',
      testimonial: 'Polecam, bardzo empatyczne podejście. Zrozumienie problemu.',
    },
    {
      icon: <ZapIcon className="w-8 h-8" />,
      title: 'Szybka poprawa i efekty',
      description: 'Dzięki mojej terapii wielu pacjentów odczuło ulgę już bardzo szybko — niezależnie od przyczyny bólu, urazu czy kontuzji sportowej.',
      testimonial: 'Po jednej wizycie już jest poprawa!',
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: 'Kompleksowa opieka',
      description: 'Nie boję się pracy wymagającej dłuższego czasu. Plan terapii opracowuję wspólnie z pacjentem, dostosowując metody i tempo do jego możliwości i celu.',
      testimonial: 'Po trzech miesiącach współpracy... ból oraz trudności ustąpiły.',
    },
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Jak pomagam moim pacjentom
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            W moim gabinecie stawiam na indywidualne podejście, rzetelną diagnostykę i efekty widoczne już po pierwszych wizytach.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
