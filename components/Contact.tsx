import React, { useCallback, useEffect, useState } from 'react';
import { useRateLimiter } from '../hooks/useRateLimiter';

type BlockedAction = 'rezerwacji' | 'telefonu';

const RATE_LIMIT_MAX_ACTIONS = 3;
const RATE_LIMIT_WINDOW_SECONDS = 60;

const Contact = () => {
  const [blockedAction, setBlockedAction] = useState<BlockedAction | null>(null);
  const { attempt, remaining, isRateLimited, timeUntilResetMs } = useRateLimiter({
    limit: RATE_LIMIT_MAX_ACTIONS,
    intervalMs: RATE_LIMIT_WINDOW_SECONDS * 1000,
  });

  useEffect(() => {
    if (!isRateLimited && blockedAction !== null) {
      setBlockedAction(null);
    }
  }, [blockedAction, isRateLimited]);

  const handleContactAction = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, action: BlockedAction) => {
      const result = attempt();

      if (!result.allowed) {
        event.preventDefault();
        setBlockedAction(action);
        return;
      }

      setBlockedAction(null);
    },
    [attempt],
  );

  const secondsUntilReset = Math.max(1, Math.ceil(timeUntilResetMs / 1000));

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
                <a href="tel:791918507" className="text-cyan-600 hover:underline">
                  791 918 507
                </a>
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
              onClick={(event) => handleContactAction(event, 'rezerwacji')}
              className="w-full text-center bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-cyan-700 transition-transform hover:scale-105 shadow-lg"
            >
              Rezerwuj wizytę na Booksy
            </a>
            <a
              href="tel:791918507"
              onClick={(event) => handleContactAction(event, 'telefonu')}
              className="w-full text-center bg-slate-200 text-slate-800 font-bold py-4 px-8 rounded-lg text-lg hover:bg-slate-300 transition-transform hover:scale-105"
            >
              Zadzwoń
            </a>
            <div className="space-y-1 text-center" aria-live="polite">
              {isRateLimited && blockedAction && (
                <p className="text-sm text-red-500">
                  Zbyt wiele prób {blockedAction === 'rezerwacji' ? 'otwarcia strony rezerwacji' : 'połączenia telefonicznego'}. Spróbuj ponownie za {secondsUntilReset} s.
                </p>
              )}
              {!isRateLimited && remaining < RATE_LIMIT_MAX_ACTIONS && (
                <p className="text-xs text-slate-500">
                  Pozostałe próby kontaktu w ciągu {RATE_LIMIT_WINDOW_SECONDS} s: {remaining}
                </p>
              )}
              <p className="text-xs text-slate-500">
                Limit bezpieczeństwa: maksymalnie {RATE_LIMIT_MAX_ACTIONS} działania kontaktowe na {RATE_LIMIT_WINDOW_SECONDS} sekund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
