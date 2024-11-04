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

  const swtichToPrevious = () => {
    const previousQuestion = currentEngine.previousQuestion()
    if (previousQuestion) {
      setCurrentQuestion(previousQuestion)
    }
    
  }

  return (
    <div className="flex flex-col w-full text-center justify-center content-center h-screen">
      {result ? (
        <div>
          <p>{result}</p>
        </div>
      ) : currentQuestion ? (
        <div>
          <p>{currentEngine.getName()}</p>
          <p>{currentQuestion.contentEst}</p>
          <div className='flex flex-row w-full justify-center'>
            <button className='flex text-center bg-green border-4 border-darkerGreen rounded mx-4 p-1 px-8' onClick={() => handleResponse(true)}>Jah</button>
            <button className='flex text-center bg-green border-4 border-darkerGreen rounded mx-4 p-1 px-8' onClick={() => handleResponse(false)}>Ei</button>
            <button className='flex text-center bg-green border-4 border-darkerGreen rounded mx-4 p-1 px-8' onClick={() => swtichToPrevious()}>Eelmine küsimus</button>
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
