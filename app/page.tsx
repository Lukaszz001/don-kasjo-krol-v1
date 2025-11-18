"use client";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedSpinbara, setCopiedSpinbara] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("KASJO");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySpinbara = () => {
    navigator.clipboard.writeText("KASJO");
    setCopiedSpinbara(true);
    setTimeout(() => setCopiedSpinbara(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#111112] text-white font-sans flex flex-col items-stretch px-0">
      {/* Slimmer, premium header */}
      <header className="w-full sticky top-0 z-30 bg-gradient-to-br from-[#1a1010] to-[#18181b] backdrop-blur border-b border-[#222] flex items-center justify-center px-2 sm:px-8 py-2 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full max-w-5xl mx-auto justify-start sm:justify-center">
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between ">
            <a href="https://kick.com/donkasjo" target="_blank" rel="noopener noreferrer">
              <button className="text-white px-4 py-2 rounded-full font-bold text-xs shadow transition-colors cursor-pointer flex items-center justify-center">
                <Image src="/kick-logo.svg" alt="Kick Logo" width={60} height={24} className="h-6 w-auto" />
              </button>
            </a>
            <span className="text-xs text-green-500 font-bold whitespace-nowrap ml-2 sm:ml-0">● LIVE</span>
          </div>
          <span className="hidden md:inline bg-[#18181b] px-3 py-1 rounded text-xs border border-[#222] text-white/80">STREAMY CODZIENNIE O 20 NA KICKU</span>
        </div>
      </header>

      {/* Hero Section with headline and promo cards */}
      <section className="w-full relative flex flex-col items-center justify-center min-h-[420px] py-12 px-4 bg-gradient-to-br from-[#1a1010] to-[#18181b] overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none" />
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center z-10 relative">
          <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="Logo" width={250} height={250} className="rounded-xl shadow-md" />
        </div>
        {/* Recommended Casinos - stacked wide cards */}
<section className="w-full mb-12">
  <h2 className="text-3xl font-extrabold mb-10 text-center">Polecane <span className="text-theme-red">kasyna</span></h2>
  <div className="flex flex-col gap-8">
{/* PODMIENIONA SEKCJA BANEROWA */}
<div className="w-full flex flex-col gap-8">
  {/* Baner Legiano (fioletowy, teraz TOP1) */}
  <div className="w-full bg-gradient-to-br from-[#7a00a8] via-[#a855f7] to-[#4c007d] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-[#a8002f]/60 relative">
    {/* Naklejka TOP 1 */}
    <div className="absolute -top-3 -left-3 rotate-[-15deg] bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white text-sm font-bold px-6 py-2 rounded-md shadow-lg animate-pulse">
      TOP 1
    </div>
    <div className="flex-shrink-0 flex flex-col items-center w-40">
      <Image src="/legiano.png" alt="Legiano Logo" width={200} height={200} className="mb-2" />
    </div>
    <div className="flex-1 flex flex-col gap-2">
      <div className="bg-[#18181b]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_4px_#a8002fcc]">
        100% BONUS POWITALNY + 200FS
      </div>
      <div className="text-sm text-yellow-300 font-semibold text-center mb-1">
        TOP1 kasyno w listopadzie - wypłacone ponad 270 000 PLN, a to dopiero pierwszy tydzień!
      </div>
      <div className="text-sm text-gray-100 mb-2">
        <span className="font-bold">Największe plusy:</span> 100% bonusu do 2250 PLN, 100% bonusu do 450 PLN na Sport, Możliwość wpłaty BLIK.
        <br /><br />Z kodem KASJO 150% do pierwszej wpłaty!
      </div>
    </div>
    <div className="flex flex-col gap-2 w-40 relative">
      <span className="text-xs text-gray-300 mb-1 text-center">Kliknij, aby skopiować.</span>
      <button
        className="bg-gradient-to-r from-[#7a00a8] via-[#a855f7] to-[#4c007d] cursor-pointer hover:from-[#4c007d] hover:to-[#7a00a8] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#a8002fcc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300"
        type="button"
        onClick={handleCopy}
      >
        {copied ? "Skopiowano" : "KOD: KASJO"}
      </button>
      <a href="https://lgno.monvaki.com/?mid=267041_1574918" className="group" target="_blank">
        <button className="bg-gradient-to-r from-[#7a00a8] via-[#a855f7] to-[#4c007d] cursor-pointer hover:from-[#4c007d] hover:to-[#7a00a8] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#a8002fcc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300 mt-2 w-full">
          Odbierz bonusy →
        </button>
      </a>
    </div>
  </div>

  {/* Baner Spinbara (żółty) */}
  <div className="w-full bg-gradient-to-br from-[#facc15] via-[#eab308] to-[#ca8a04] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-[#facc15]/60 relative">
    <div className="flex-shrink-0 flex flex-col items-center w-40">
      <Image src="/spinbara.png" alt="Spinbara Logo" width={200} height={200} className="mb-2" />
    </div>
    <div className="flex-1 flex flex-col gap-2">
      <div className="bg-[#18181b]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_4px_#ca8a04cc]">
        100% BONUS POWITALNY + 200FS
      </div>
      <div className="text-sm text-gray-100 mb-2">
        <span className="font-bold">Największe plusy:</span> 100% bonusu do 2250 PLN, 100% bonusu do 450 PLN na Sport, Możliwość wpłaty BLIK. 
        <br /><br />Z kodem KASJO 150% do pierwszej wpłaty!
      </div>
    </div>
    <div className="flex flex-col gap-2 w-40 relative">
      <span className="text-xs text-gray-300 mb-1 text-center">Kliknij, aby skopiować.</span>
      <button
        className="bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#ca8a04] cursor-pointer hover:from-[#ca8a04] hover:to-[#facc15] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#ca8a04cc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300"
        type="button"
        onClick={handleCopySpinbara}
      >
        {copiedSpinbara ? "Skopiowano" : "KOD: KASJO"}
      </button>
      <a href="https://spnbr.monvaki.com/?mid=267041_1760614" className="group" target="_blank">
        <button className="bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#ca8a04] cursor-pointer hover:from-[#ca8a04] hover:to-[#facc15] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#ca8a04cc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300 mt-2 w-full">
          Odbierz bonusy →
        </button>
      </a>
    </div>
  </div>

  {/* Baner Allyspin (czerwono-bordowy) */}
  <div className="w-full bg-gradient-to-br from-[#a8002f] via-[#ff0033] to-[#800000] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-[#a8002f]/60">
    <div className="flex-shrink-0 flex flex-col items-center w-40">
      <Image src="/ally.png" alt="Allyspin Logo" width={200} height={200} className="mb-2" />
    </div>
    <div className="flex-1 flex flex-col gap-2">
      <div className="bg-[#18181b]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_4px_#a8002fcc]">
        100% BONUS POWITALNY + 200FS
      </div>
      <div className="text-sm text-gray-100 mb-2">
        <span className="font-bold">Największe plusy:</span> 100% bonusu do 2250 PLN, 100% bonusu do 450 PLN na Sport, Możliwość wpłaty BLIK.
        <br /><br />Z kodem KASJO 150% do pierwszej wpłaty!
      </div>
    </div>
    <div className="flex flex-col gap-2 w-40 relative">
      <span className="text-xs text-gray-300 mb-1 text-center">Kliknij, aby skopiować.</span>
      <button
        className="bg-gradient-to-r from-[#a8002f] via-[#ff0033] to-[#800000] cursor-pointer hover:from-[#800000] hover:to-[#a8002f] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#a8002fcc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300"
        type="button"
        onClick={handleCopy}
      >
        {copied ? "Skopiowano" : "KOD: KASJO"}
      </button>
      <a href="https://all.monvaki.com/?mid=267041_1570551" className="group" target="_blank">
        <button className="bg-gradient-to-r from-[#a8002f] via-[#ff0033] to-[#800000] cursor-pointer hover:from-[#800000] hover:to-[#a8002f] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#a8002fcc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300 mt-2 w-full">
          Odbierz bonusy →
        </button>
      </a>
    </div>
  </div>

</div>
</div>
</section>
 
          <div className="w-full flex justify-center mb-2">
            <div className="w-full max-w-6xl">
              <Image src="/hero-bg.jpg" alt="Stream" width={1200} height={260} className="rounded-2xl object-cover w-full h-[180px] sm:h-[220px] md:h-[260px]" />
            </div>
          </div>
          <div className="w-full text-center text-sm text-gray-400 mt-2">kontakt biznesowy: <a href="mailto:wspolpracadonkasjo@gmail.com">wspolpracadonkasjo@gmail.com</a></div>
        </div>
      </section>

      {/* Main Content Layout - stacked casino cards and instructions */}
      <main className="w-full max-w-6xl mx-auto flex flex-col gap-16 px-4 py-12 flex-1">
         <div className="relative w-full flex justify-center mb-8 mt-4">
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center z-10 relative">
            <div className="flex-1 min-w-[260px] bg-gradient-to-br from-[#3a0a16] via-[#a8002f] to-[#1a1010] rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#a8002f]/60">
                <span className="text-white font-extrabold text-xl mb-2 drop-shadow-[0_1px_4px_#a8002fcc]">DOŁĄCZ DO KANAŁU NADAWCZEGO I ZGARNIJ BLIKA!</span>
                <span className="text-gray-100 mb-4">Na moim kanale regularnie publikuję kody BLIK na wpłaty do polecanych kasyn. Dołącz i korzystaj z okazji!</span>
                <a href="https://www.instagram.com/kingdonkasjo/" className="group" target="_blank">
                  <button className="mt-auto bg-gradient-to-r from-[#a8002f] cursor-pointer via-[#ff0033] to-[#ff0055] hover:from-[#ff0033] hover:to-[#a8002f] text-white border border-white border-opacity-80 border-[1.5px] px-4 py-2 rounded-full font-bold text-sm shadow transition-all duration-300 drop-shadow-[0_1px_4px_#a8002fcc] group-hover:scale-105 group-active:scale-95">
                    Dołącz do kanału
                  </button>
                </a>
              </div>
            <div className="flex-1 min-w-[260px] bg-gradient-to-br from-[#3a0a16] via-[#a8002f] to-[#1a1010] rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#a8002f]/60">
                <span className="text-white font-extrabold text-xl mb-2 drop-shadow-[0_1px_4px_#a8002fcc]">WBIJ NA DISCORDA PO EKSKLUZYWNE KODY I BONUSY!</span>
                <span className="text-gray-100 mb-4">Na serwerze znajdziesz społeczność graczy i losowe kody BLIK do najlepszych kasyn. Nie przegap tego!</span>
                <a href="https://discord.com/invite/juJd2jQQrs" className="group" target="_blank">
                  <button className="mt-auto bg-gradient-to-r from-[#a8002f] cursor-pointer via-[#ff0033] to-[#ff0055] hover:from-[#ff0033] hover:to-[#a8002f] text-white border border-white border-opacity-80 border-[1.5px] px-4 py-2 rounded-full font-bold text-sm shadow transition-all duration-300 drop-shadow-[0_1px_4px_#a8002fcc] group-hover:scale-105 group-active:scale-95">
                    Dołącz do discorda
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* Useful Instructions - row of cards with ribbons */}
        <section className="w-full mb-12">
          <h2 className="text-3xl font-extrabold mb-10 text-center">Przydatne <span className="text-theme-red">Instrukcje</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="/spinbara-wplata" className="relative bg-gradient-to-br from-[#3a0a16] via-[#a8002f] to-[#1a1010] rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#a8002f]/60 transition hover:scale-[1.03]" style={{ textDecoration: 'none' }}>
                <span className="absolute -top-3 left-4 bg-theme-red text-white text-xs font-bold px-3 py-1 rounded-full shadow">PORADNIK</span>
                <span className="text-lg font-extrabold mb-2 text-white drop-shadow-[0_1px_4px_#a8002fcc]">Jak wpłacić pieniądze na kasyno Spinbara?</span>
                <span className="text-gray-100 text-base">Praktyczny poradnik krok po kroku dotyczący wpłaty środków na Spinbara.</span>
              </a>
            <a href="/legiano-wplata" className="relative bg-gradient-to-br from-[#3a0a16] via-[#a8002f] to-[#1a1010] rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#a8002f]/60 transition hover:scale-[1.03]" style={{ textDecoration: 'none' }}>
              <span className="absolute -top-3 left-4 bg-theme-red text-white text-xs font-bold px-3 py-1 rounded-full shadow">PORADNIK</span>
              <span className="text-lg font-extrabold mb-2 text-white drop-shadow-[0_1px_4px_#a8002fcc]">Jak wpłacić pieniądze na kasyno Legiano?</span>
              <span className="text-gray-100 text-base">Praktyczny poradnik krok po kroku dotyczący wpłaty środków na Legiano.</span>
            </a>
          </div>
        </section>
      </main>


     {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto text-center text-xs text-gray-500 py-6 border-t border-[#222] mt-8 px-4">
  <div className="flex justify-center gap-4 mb-3">
    <a
      href="https://kick.com/donkasjo"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1eea5c]/10 hover:bg-[#1eea5c]/30 transition cursor-pointer"
      aria-label="Kick"
    >
      <Image src="/kick-logo.svg" alt="Kick" width={20} height={20} className="w-5 h-5" />
    </a>
    <a
      href="https://www.instagram.com/kingdonkasjo/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#a8002f] to-[#ff0055] hover:opacity-80 transition cursor-pointer"
      aria-label="Instagram"
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect width="18" height="18" x="3" y="3" rx="5" stroke="white" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
        <circle cx="17" cy="7" r="1.2" fill="white"/>
      </svg>
    </a>
    <a
      href="https://x.com/don_kasjo"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#222] hover:bg-[#444] transition cursor-pointer"
      aria-label="X"
    >
      <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
        <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47A.75.75 0 1 0 6.47 7.53L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z"/>
      </svg>
    </a>
    <a
      href="https://www.youtube.com/@DonKasjoKrol"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#ff0000]/20 hover:bg-[#ff0000]/40 transition cursor-pointer"
      aria-label="YouTube"
    >
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="12" rx="4" fill="#ff0000"/>
        <polygon points="10,9 16,12 10,15" fill="white"/>
      </svg>
    </a>
  </div>
  <p>
    Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone wyłącznie dla osób w regionach, gdzie hazard online jest legalny.
    <br />
    Użytkownicy są odpowiedzialni za zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.<br />
    &copy; {new Date().getFullYear()} Don Kasjo
  </p>
</footer>
      {/* Neon green utility classes moved to globals.css */}
    </div>
  );
}
