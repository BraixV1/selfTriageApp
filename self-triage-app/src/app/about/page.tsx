import React from "react";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#2D5A27] via-[#8FCA5B] to-[#C5E063] text-white">
      <Header />

      <main className="p-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
            <h1 className="text-3xl font-bold mb-8">Meist</h1>

            <div className="space-y-8 animate-fadeIn">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#4e5e17]">
                  Meie Missioon
                </h2>
                <p className="text-lg">
                  Meie eesmärk on pakkuda usaldusväärset ja kergesti
                  ligipääsetavat esmast meditsiinilist nõu. Soovime aidata
                  inimestel teha teadlikke otsuseid oma tervise osas ja suunata
                  neid õigeaegselt professionaalse arstiabi poole.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#4e5e17]">
                  Kuidas Me Töötame
                </h2>
                <p className="text-lg">
                  Meie süsteem põhineb põhjalikul meditsiinilisel
                  teadmistebaasil ja algoritmidel, mis aitavad tuvastada
                  võimalikke tervisemuresid läbi sihipäraste küsimuste. Meie
                  lahendus ei asenda arsti konsultatsiooni, vaid aitab teil
                  paremini mõista oma sümptomeid ja otsustada edasise tegevuse
                  üle.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#4e5e17]">
                  Oluline Teada
                </h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {[
                      "Meie teenus ei asenda professionaalset meditsiinilist abi",
                      "Erakorraliste sümptomite korral helistage alati 112",
                      "Konsulteerige alati oma arstiga täpsema diagnoosi saamiseks",
                      "Kogu teie sisestatud info on konfidentsiaalne",
                    ].map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 mt-2 mr-3 bg-[#C5E063] rounded-full flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#4e5e17]">
                  Võta Meiega Ühendust
                </h2>
                <p className="text-lg">
                  Kui teil on küsimusi või tagasisidet meie teenuse kohta, siis
                  võtke meiega julgelt ühendust:
                </p>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p>Email: brajankukk1@gmail.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
