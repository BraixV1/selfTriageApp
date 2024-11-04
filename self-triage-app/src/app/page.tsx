'use client'
import { useState, useEffect } from 'react';
import NeurologyEngine from '../engine/NeurologoyEngine';
import { BaseEngine } from '@/engine/BaseEngine';
import { EResult } from '@/types/EResult';
import IQuestion from '@/types/IQuestion';

export default function Home() {
  const [neurologyEngine] = useState(() => new NeurologyEngine());
  const [currentEngine] = useState<BaseEngine>(neurologyEngine);

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null);
  const [result, setResult] = useState<EResult | null>(null);


useEffect(() => {
  const question = currentEngine.getCurrentQuestion();
  setCurrentQuestion(question);
}, [currentEngine]);

const handleResponse = (response: boolean) => {
  if (response) {
    const givenResult = currentQuestion!.result;
    setResult(givenResult);
  } else {

    const nextQuestion = currentEngine.nextQuestion();
    setCurrentQuestion(nextQuestion);
    
    
  }
};

  return (
    <div className="flex flex-col w-full text-center">
      {result ? (
        <div>
          <h2>Hello world</h2>
          <p>{result}</p>
        </div>
      ) : currentQuestion ? (
        <div>
          <p>{currentQuestion.contentEst}</p>
          <button onClick={() => handleResponse(true)}>Jah</button>
          <button onClick={() => handleResponse(false)}>Ei</button>
        </div>
      ) : (
        <div>
          <p>Loading question...</p>
        </div>
      )}
    </div>
  );
}
