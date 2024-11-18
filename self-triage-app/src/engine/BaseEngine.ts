
import { EGender } from "@/types/HelperEnums/EGender";
import IQuestion from "@/types/IQuestion";

export abstract class BaseEngine {

    protected _questions: IQuestion[];
    protected _name: string;
    protected _currentQuestionIndex: number = 0;
    protected _gender: EGender;
    protected _age: number

    constructor(engineName: string, gender:EGender, age: number, questions: IQuestion[]) {
        this._questions = questions;
        this._name = engineName;
        this._age = age;
        this._gender = gender
    }

    getCurrentQuestion(): IQuestion | null {
        return this._questions[this._currentQuestionIndex] || null
    }

    getName(): string {
        return this._name
    }

    getAge(): number {
        return this._age
    }

    getGender(): EGender {
        return this._gender
    }

    setAge(age: number) {
        this._age = age
    }

    setGender(gender: EGender) {
        this._gender = gender
    }

    nextQuestion(): IQuestion | null {
        const visitedQuestions = new Set<number>();
    
        while (this.canSelectNext()) {
            this._currentQuestionIndex++;
            if (visitedQuestions.has(this._currentQuestionIndex)) {
                return null;
            }
            visitedQuestions.add(this._currentQuestionIndex);
    
            const currentQuestion = this.getCurrentQuestion();
            if (currentQuestion) {
                if (
                    currentQuestion.gender !== this._gender &&
                    currentQuestion.gender !== EGender.any &&
                    (currentQuestion.minAge ?? 0 > this._age)
                ) {
                    continue;
                }
                return currentQuestion;
            }
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