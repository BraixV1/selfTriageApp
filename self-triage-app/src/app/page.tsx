'use client';
import { useState } from 'react';
import { BaseEngine } from '@/engine/BaseEngine';
import { EResult } from '@/types/HelperEnums/EResult';
import { EGender } from '@/types/HelperEnums/EGender';
import { Engines } from '@/engine/Engines';

export default function Home() {
  const [engineList] = useState(() => new Engines());
  const [currentEngine, setCurrentEngine] = useState<BaseEngine | null>();
  const [result, setResult] = useState<EResult | null>(null);
  const [dummyState, setDummyState] = useState(false);
  const [age, setAge] = useState<number | null>(null);
  const [validationError, setValidationError] = useState("");
  const [gender, setGender] = useState<EGender | null>(EGender.male);
  const [ageFlag, setAgeFlag] = useState(false);
  const [genderFlag, setGenderFlag] = useState(false);
  const [showEmergency, setShowEmergency] = useState(true);
  const [isEmergencyExpanded, setIsEmergencyExpanded] = useState(true);

 
  const handleResponse = (response: boolean) => {
    if (response) {
      if (currentEngine?.getCurrentQuestion()) {
        setResult(currentEngine.getCurrentQuestion()!.result);
      }
    } else {
      if (currentEngine) {
        currentEngine.nextQuestion();
        setDummyState(!dummyState);
      }
    }
  };

  const switchToPrevious = () => {
    if (currentEngine) {
      currentEngine.previousQuestion();
      setDummyState(!dummyState);
    }
  };

  const switchEngine = async (engine: BaseEngine) => {
    if (age) engine.setAge(age);
    if (gender) engine.setGender(gender);
    setShowEmergency(false);
    await new Promise(r => setTimeout(r, 500));
    setCurrentEngine(engine);
  };

  const resetEngine = () => {
    setCurrentEngine(null);
    setShowEmergency(true);
  };

  const validateAge = () => {
    if (age === null || isNaN(age)) {
      setValidationError("Vanus peab olema number.");
      return;
    }
    if (age < 0 || age > 120) {
      setValidationError("Vanus peab olema 0 ja 120 vahel.");
    } else {
      setValidationError("");
      setAgeFlag(true);
    }
  };

  const validateGender = () => {
    if (gender === null) {
      setValidationError("Palun vali sugu.");
      return;
    }
    setGenderFlag(true);
  };

  const toggleEmergency = () => {
    setIsEmergencyExpanded(!isEmergencyExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#2D5A27] via-[#8FCA5B] to-[#C5E063] text-white p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Emergency Warning Section */}
        {showEmergency && (
          <div 
            className={`transition-all duration-500 ease-in-out transform ${
              isEmergencyExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-0 h-0 overflow-hidden'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 transition-transform duration-300 hover:scale-[1.01]">
              <button 
                onClick={toggleEmergency}
                className="w-full flex justify-between items-center"
              >
                <h1 className="text-2xl md:text-3xl font-bold">
                  Kui teil on järgnevad sümptomid, palun helistage 112:
                </h1>
                <span className={`transform transition-transform duration-300 ${isEmergencyExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {isEmergencyExpanded && (
                <ul className="space-y-3 text-sm md:text-lg mt-6 animate-fadeIn">
                  {[
                    'südame infarkti tunnused - valu rinnus, tugev rõhuvpigistav, kõrvetav rindkerevalu, surve, raskustunne, pigistustunne rindkeres.',
                    'insuldi tunnused -nägu vajub viltu, üks suunurk alla, ei suuda mõlemat kätt tõsta, rääkimisraskused, ühe keha poole nõrkus.',
                    'äkiline segasus (deliirium)-segadusseisund, inimene ei oska öelda oma nime, vanust.',
                    'enesetapukatse -enese vigastus,suurtes kogustes ravimite või muude kemikaalide tarvitamise kahtlus.',
                    'tõsine hingamisraskus -suutmatus sõnu välja öelda, lämbub või ahmib õhku',
                    'suur verejooks -pritsiv, joana voolav veri, et tekiks lomp',
                    'rasked vigastused -pärast tõsist õnnetust',
                    'krambihoog (kramp) -värisemine või tõmblemine või teadvuseta (ei saa äratada)',
                    'allergiline reaktsiooni - kiiresti tekkiv huulte-, suu-, kõri- või keeleturse',
                    'sünnitus -lootevee puhkemine, sagedasemad kui 5 minutit intensiivsed tuhude esinemine (kontraktsioonid), vastsündinu'
                  ].map((symptom, index) => (
                    <li 
                      key={index} 
                      className="flex items-start transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-3 bg-[#C5E063] rounded-full flex-shrink-0" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Main Interface Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
          {result ? (
            <div className="text-xl md:text-2xl font-semibold animate-fadeIn">
              <p>{result}</p>
            </div>
          ) : !ageFlag ? (
            <div className="space-y-4 animate-fadeIn">
              {validationError && (
                <p className="text-red-300 animate-shake">{validationError}</p>
              )}
              <p className="text-xl font-semibold">Kui vana sa oled?</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <input
                  type="number"
                  value={age ?? ""}
                  onChange={(e) => {
                    const newAge = e.target.valueAsNumber;
                    setAge(!isNaN(newAge) ? newAge : null);
                    setValidationError("");
                  }}
                  className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#C5E063] text-white placeholder-white/60 transition-all duration-300 hover:bg-white/30"
                />
                <button
                  onClick={validateAge}
                  className="px-6 py-2 bg-gradient-to-r from-[#2D5A27] to-[#8FCA5B] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  Edasi
                </button>
              </div>
            </div>
          ) : !genderFlag ? (
            <div className="space-y-4 animate-fadeIn">
              <p className="text-xl font-semibold">Palun vali oma sugu:</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <select
                  value={gender ?? EGender.male}
                  onChange={(e) => setGender(e.target.value as unknown as EGender)}
                  className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#C5E063] text-white transition-all duration-300 hover:bg-white/30"
                >
                  <option value={EGender.male}>Mees</option>
                  <option value={EGender.female}>Naine</option>
                </select>
                <button
                  onClick={validateGender}
                  className="px-6 py-2 bg-gradient-to-r from-[#2D5A27] to-[#8FCA5B] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  Edasi
                </button>
              </div>
            </div>
          ) : !currentEngine ? (
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-2xl md:text-3xl font-bold">
                Vali valulik piirkond või sümptom:
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {engineList.engines.map((engine, i) => (
                  <button
                    key={i}
                    onClick={() => switchEngine(engine)}
                    className="p-4 bg-gradient-to-r from-[#2D5A27] to-[#8FCA5B] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 font-semibold"
                  >
                    {engine.getName()}
                  </button>
                ))}
              </div>
            </div>
          ) : currentEngine.getCurrentQuestion() ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <p className="text-xl font-semibold">{currentEngine.getName()}</p>
                <p className="text-xl">Kas teil on ilmnenud järgnev sümptom?</p>
                <p className="text-xl font-bold">{currentEngine.getCurrentQuestion()!.contentEst}</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { text: "Jah", onClick: () => handleResponse(true) },
                  { text: "Ei", onClick: () => handleResponse(false) },
                  { text: "Eelmine küsimus", onClick: switchToPrevious },
                  { text: "Muuda probleemi piirkonda", onClick: resetEngine }
                ].map((button, index) => (
                  <button
                    key={index}
                    onClick={button.onClick}
                    className="px-6 py-2 bg-gradient-to-r from-[#2D5A27] to-[#8FCA5B] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center animate-pulse">
              <p className="text-xl">Loading question...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
