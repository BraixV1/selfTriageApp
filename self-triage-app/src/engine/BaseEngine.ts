
import IQuestion from "@/types/IQuestion";

export abstract class BaseEngine {

    protected _questions: IQuestion[];
    protected _name: string;
    protected _currentQuestionIndex: number = 0;

    constructor(engineName: string, questions: IQuestion[]) {
        this._questions = questions;
        this._name = engineName
    }

    getCurrentQuestion(): IQuestion | null {
        return this._questions[this._currentQuestionIndex] || null
    }

    getName(): string {
        return this._name
    }


    nextQuestion(): IQuestion | null {
        if (this.canSelectNext()) {
            this._currentQuestionIndex++;
            return this.getCurrentQuestion();
        }
        return null;
    }

    previousQuestion(): IQuestion | null {
        if (this.canSelectPrevius()) {
            this._currentQuestionIndex--;
            return this.getCurrentQuestion();
        }
        return null
    }

    reset(): void{
        this._currentQuestionIndex = 0;
    }

    canSelectNext(): boolean {
        return this._currentQuestionIndex < this._questions.length -1
    }

    canSelectPrevius(): boolean{
        return this._currentQuestionIndex > 0
    }

    

}