'use client';
import { useState } from 'react';
import { BaseEngine } from '@/engine/BaseEngine';
import { EResult } from '@/types/HelperEnums/EResult';
import { EGender } from '@/types/HelperEnums/EGender';
import { Engines } from '@/engine/Engines';

export default function Home() {
  const [engineList] = useState(() => new Engines())
  const [currentEngine, setCurrentEngine] = useState<BaseEngine | null>();
  const [result, setResult] = useState<EResult | null>(null);
  const [dummyState, setDummyState] = useState(false);
  const [age, setAge] = useState<number | null>(null);
  const [validationError, setValidationError] = useState("");
  const [gender, setGender] = useState<EGender | null>(EGender.male);
  const [ageFlag, setAgeFlag] = useState(false);
  const [genderFlag, setGenderFlag] = useState(false);

  const handleResponse = (response: boolean) => {
    if (response) {
      if (currentEngine) {
        if (currentEngine.getCurrentQuestion()) {
          setResult(currentEngine.getCurrentQuestion()!.result);
        }
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
    if (age) {
      engine.setAge(age)
    }
    if (gender) {
      engine.setGender(gender)
    }
    await new Promise(r => setTimeout(r, 500))
    setCurrentEngine(engine);
  };

  const resetEngine = () => {
    setCurrentEngine(null)
  }

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

  return (
    <div className="flex flex-col w-full text-center mt-14 content-center h-screen">
      <h1 className='text-2xl'>Kui teil on järgnevad sümptomid, palun helistage 112: </h1>
      <br/>
      <ul className='space-y-2 text-xl text-justify px-40'>
        <li>südame infarkti tunnused - valu rinnus, tugev rõhuvpigistav, kõrvetav rindkerevalu, surve, raskustunne, pigistustunne rindkeres.</li>
        <li>insuldi tunnused -nägu vajub viltu, üks suunurk alla, ei suuda mõlemat kätt tõsta, rääkimisraskused, ühe keha poole nõrkus.</li>
        <li>äkiline segasus (deliirium)-segadusseisund, inimene ei oska öelda oma nime, vanust.</li>
        <li>enesetapukatse -enese vigastus,suurtes kogustes ravimite või muude kemikaalide tarvitamise kahtlus.</li>
        <li>tõsine hingamisraskus -suutmatus sõnu välja öelda, lämbub või ahmib õhku</li>
        <li>suur verejooks -pritsiv, joana voolav veri, et tekiks lomp</li>
        <li>rasked vigastused -pärast tõsist õnnetust</li>
        <li>krambihoog (kramp) -värisemine või tõmblemine või teadvuseta (ei saa äratada)</li>
        <li>allergiline reaksioon - kiiresti tekkiv huulte-, suu-, kõri- või keeleturse</li>
        <li>sünnitus -lootevee puhkemine, sagedasemad kui 5 minutit intensiivsed tuhude esinemine (kontraktsioonid),  vastsündinu</li>
      </ul>
      <br/>
      {result ? (
        <div>
          <p>{result}</p>
        </div>
      ) : !ageFlag ? (
        <div>
          <p className="text-red-700">{validationError}</p>
          <p>Kui vana sa oled?</p>
          <div className="flex flex-row space-x-4 w-full justify-center">
            <input
              type="number"
              value={age ?? ""}
              onChange={(e) => {
                const newAge = e.target.valueAsNumber;
                console.log(newAge)
                setAge(!isNaN(newAge) ? newAge : null);
                setValidationError("");
              }}
            />
            <button type="button" className="border-4 border-darkGreen bg-darkerGreen p-2" onClick={validateAge}>
              edasi
            </button>
          </div>
        </div>
      ) : !genderFlag ? (
        <div>
          <p>Palun vali oma sugu:</p>
          <select
            value={gender ?? EGender.male} 
            onChange={(e) => setGender(e.target.value as unknown as EGender)} 
            className="border-2 p-2 rounded"
          >
            <option value={EGender.male}>Mees</option>
            <option value={EGender.female}>Naine</option>
          </select>
          <button type="button" className="border-4 border-darkGreen bg-darkerGreen p-2 mt-4" onClick={validateGender}>
            edasi
          </button>
        </div>
      ) : !currentEngine ? (
        <div>
          <h1 className='text-4xl'>Vali valulik piirkond või sümptom:</h1>
          <br/>
          <div className='grid grid-flow-row grid-cols-3 mx-40 gap-3'>
            {engineList.engines.map((engine, i) => (
              <button key={i} className='border-4 hover:scale-105 duration-200 focus:animate-jump-out animate-duration-500 animate-delay-200 animate-ease-out border-darkGreen bg-darkerGreen text-white py-3 '
              onClick={() => switchEngine(engine)}>{engine.getName()}</button>
            ))}
            </div>
        </div>
      ) : currentEngine.getCurrentQuestion() ? (
        <div>
          <p className='text-2xl'>{currentEngine.getName()}</p>
          <p className='text-2xl'>Kas teil on ilmnenud järgnev sümptom?</p>
          <br />
          <p className='text-2xl'>{currentEngine.getCurrentQuestion()!.contentEst}</p>
          <br />
          <div className="flex flex-row w-full justify-center">
            <button
              className="flex text-center bg-green border-4 border-darkerGreen rounded mx-4 p-1 px-8"
              onClick={() => handleResponse(true)}
            >
              Jah
            </button>
            <button
              className="flex text-center bg-green border-4 border-darkerGreen rounded mx-4 p-1 px-8"
              onClick={() => handleResponse(false)}
            >
              Ei
            </button>
            <button
              className="flex text-center bg-green border-4 border-darkerGreen rounded mx-4 p-1 px-8"
              onClick={switchToPrevious}
            >
              Eelmine küsimus
            </button>
            <button
              className="flex text-center bg-green border-4 border-darkerGreen rounded mx-4 p-1 px-8"
              onClick={resetEngine}
            >
              Muuda probleemi piirkonda
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading question...</p>
        </div>
      )}
    </div>
  );
}
