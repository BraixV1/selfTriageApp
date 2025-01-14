import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";

export default class ToothEngine extends BaseEngine {


    constructor(gender: EGender, age: number) {
        super("Hambatrauma", gender, age, [
            {
                contentEst: "Hambal tuli tükk välja",
                result: EResult.ToothPieceLoss,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "Hammas tuli koos juurega välja. \n Ära tulnud hamba võib hambaarst tagasi panna.",
                result: EResult.ToothCompleteLoss,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
        ])
    }

}