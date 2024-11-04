import { EResult } from "@/types/EResult";
import IQuestion from "@/types/IQuestion";

export abstract class BaseEngine {

    protected _questions: IQuestion[];
    protected _currentQuestionIndex: number = 0;

    constructor(questions: IQuestion[]) {
        this._questions = questions
    }

    getCurrentQuestion(): IQuestion | null {
        return this._questions[this._currentQuestionIndex] || null
    }

    getResult(): EResult | null {
        return this._questions[this._currentQuestionIndex].result || null
    }

    nextQuestion(): IQuestion | null {
        if (this._currentQuestionIndex < this._questions.length -1) {
            this._currentQuestionIndex++;
            return this.getCurrentQuestion();
        }
        return null;
    }

    reset(): void{
        this._currentQuestionIndex = 0;
    }

}