'use client';
import { useState } from 'react';
import NeurologyEngine from '../engine/NeurologoyEngine';
import { BaseEngine } from '@/engine/BaseEngine';
import { EResult } from '@/types/HelperEnums/EResult';
import { EGender } from '@/types/HelperEnums/EGender';
import HeadacheEngine from '../engine/HeadacheEngine';

export default function Home() {
  const [neurologyEngine] = useState(() => new NeurologyEngine(EGender.any, -1));
  const [headacheEngine] = useState(() => new HeadacheEngine(EGender.any, -1))
  const [currentEngine, setCurrentEngine] = useState<BaseEngine | null>();
  const [result, setResult] = useState<EResult | null>(null);
  const [dummyState, setDummyState] = useState(false);
  const [age, setAge] = useState<number | null>(null);
  const [validationError, setValidationError] = useState("");
  const [gender, setGender] = useState<EGender | null>(null);
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

  const switchEngine = (engine: BaseEngine) => {
    setCurrentEngine(engine);
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

  return (
    <div className="flex flex-col w-full text-center justify-center content-center h-screen">
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
            <option value={EGender.any}>Muu</option>
          </select>
          <button type="button" className="border-4 border-darkGreen bg-darkerGreen p-2 mt-4" onClick={validateGender}>
            edasi
          </button>
        </div>
      ) : !currentEngine ? (
        <div>
          <p>Millises piirkonnas on probleemid</p>
          <div className='flex flex-row w-full justify-center space-x-4'>
            <button className='border-4 border-darkGreen bg-darkerGreen text-white'
            onClick={(e) => setCurrentEngine(neurologyEngine)}>Minestamine</button>
            <button className='border-4 border-darkGreen bg-darkerGreen text-white'
            onClick={(e) => setCurrentEngine(headacheEngine)}>Peavalu</button>
          </div>
        </div>
      ) : currentEngine.getCurrentQuestion() ? (
        <div>
          <p>{currentEngine.getName()}</p>
          <p>{currentEngine.getCurrentQuestion()!.contentEst}</p>
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
