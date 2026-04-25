import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-900 text-white overflow-x-hidden">
      {/* === HERO === */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-400 rounded-full blur-[120px] animate-pulse-soft" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-navy-500 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg className="absolute bottom-0 w-full h-32 text-navy-50" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,64 C360,120 720,0 1080,64 C1260,96 1350,80 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-12 pb-20">
          <div className="animate-fade-up">
            <Image
              src="/logo_hisseo.webp"
              alt="Hisséo"
              width={100}
              height={100}
              className="h-20 w-auto sm:h-24 mx-auto brightness-0 invert mb-8 drop-shadow-xl"
              priority
            />
          </div>

          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-white via-navy-100 to-gold bg-clip-text text-transparent">
              Bienvenue
            </span>
            <br />
            <span>à bord</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-lg mx-auto text-base sm:text-lg text-navy-200 leading-relaxed">
            Location de bateaux électriques sans permis au départ de Melun.
            Embarquez pour une expérience unique sur la Seine.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-navy-200">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              Place Praslin, Melun
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-navy-200">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Seine-et-Marne
            </span>
          </div>

          <div className="animate-fade-up-delay-4 mt-10">
            <a
              href="#telechargement"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-navy-900 font-semibold text-sm shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
              Accéder au plan
            </a>
          </div>
        </div>
      </section>

      {/* === PDF CARD === */}
      <section id="telechargement" className="relative z-20 -mt-16 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="animate-fade-up backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl shadow-navy-900/20 border border-white/20 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 shadow-lg shadow-navy-900/20 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-gold">
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-navy-900">
                  Plan du parcours
                </h2>
                <p className="mt-1 text-sm text-navy-400">
                  Téléchargez le plan pour suivre votre itinéraire sur la Seine.
                </p>
              </div>
              <a
                href="/plan_hisseo.pdf"
                download
                className="relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:from-navy-700 hover:to-navy-600 active:scale-[0.97] w-full sm:w-auto justify-center group overflow-hidden"
              >
                <span className="absolute inset-0 animate-shimmer pointer-events-none" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative">
                  <path d="M3 3.5A1.5 1.5 0 014.5 2h1.879a1.5 1.5 0 011.06.44l1.122 1.12A1.5 1.5 0 009.38 4H11A1.5 1.5 0 0112.5 5.5v1A.5.5 0 0112 7h-5a.5.5 0 01-.5-.5v-1A1.5 1.5 0 018 4h.879a.5.5 0 00.353-.146L9.5 3.5z" />
                  <path fillRule="evenodd" d="M6.5 8h7A1.5 1.5 0 0115 9.5v6.27a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25V9.5A1.5 1.5 0 016.5 8z" clipRule="evenodd" />
                </svg>
                <span className="relative">Télécharger</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === SKIPPERS === */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50 to-white" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy-50" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Votre skipper
            </h2>
            <p className="mt-3 text-navy-400 max-w-md mx-auto">
              Un clic suffit pour appeler directement la personne responsable de votre navigation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group relative bg-white rounded-3xl shadow-xl shadow-navy-900/5 border border-navy-100 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-navy-500 to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-400 to-gold p-[3px]">
                    <div className="absolute inset-0 rounded-full bg-white" />
                  </div>
                  <Image
                    src="/killian_profil.jpg"
                    alt="Killian"
                    width={72}
                    height={72}
                    className="relative h-[72px] w-[72px] rounded-full object-cover ring-2 ring-white"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-green-400 border-[3px] border-white shadow-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                    Killian
                  </h3>
                  <p className="text-sm text-navy-400">Skipper</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="tel:+33641970383"
                className="mt-6 relative inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all duration-300 hover:shadow-xl hover:from-navy-700 hover:to-navy-600 active:scale-[0.97] overflow-hidden group/btn"
              >
                <span className="absolute inset-0 animate-shimmer pointer-events-none" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                <span className="relative">06 41 97 03 83</span>
              </a>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-xl shadow-navy-900/5 border border-navy-100 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-navy-500 to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-400 to-gold p-[3px]">
                    <div className="absolute inset-0 rounded-full bg-white" />
                  </div>
                  <Image
                    src="/jackson_profil.jpg"
                    alt="Jackson"
                    width={72}
                    height={72}
                    className="relative h-[72px] w-[72px] rounded-full object-cover ring-2 ring-white"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-green-400 border-[3px] border-white shadow-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                    Jackson
                  </h3>
                  <p className="text-sm text-navy-400">Skipper</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="tel:+33637249976"
                className="mt-6 relative inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all duration-300 hover:shadow-xl hover:from-navy-700 hover:to-navy-600 active:scale-[0.97] overflow-hidden group/btn"
              >
                <span className="absolute inset-0 animate-shimmer pointer-events-none" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                <span className="relative">06 37 24 99 76</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === INFO / FOOTER === */}
      <footer className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,200 C360,50 720,350 1080,200 C1260,125 1350,250 1440,200 L1440,400 L0,400 Z" fill="currentColor" className="text-navy-200" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center sm:text-left">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
                Adresse
              </h3>
              <p className="text-navy-200 text-sm leading-relaxed">
                Place Praslin
                <br />
                77000 Melun
                <br />
                Seine-et-Marne
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
                Contact
              </h3>
              <p className="text-navy-200 text-sm leading-relaxed space-y-1">
                <a href="mailto:bateauxhisseo@gmail.com" className="block hover:text-white transition-colors duration-200">
                  bateauxhisseo@gmail.com
                </a>
                <a href="tel:+33744443667" className="block hover:text-white transition-colors duration-200">
                  07 44 44 36 67
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
                Suivez-nous
              </h3>
              <div className="flex justify-center sm:justify-start gap-3">
                <a
                  href="https://www.instagram.com/hisseo_loisirs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-navy-200 transition-all duration-300 hover:bg-gold hover:text-navy-900 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Hiss%C3%A9o/100089921288390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-navy-200 transition-all duration-300 hover:bg-gold hover:text-navy-900 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-navy-300 italic text-sm">
              « Naviguez en toute liberté sur des eaux paisibles »
            </p>
            <p className="mt-3 text-navy-400 text-xs">
              &copy; {new Date().getFullYear()} Hisséo — Location de bateaux sans permis
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
