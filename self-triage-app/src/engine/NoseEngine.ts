import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";

export default class NoseEngine extends BaseEngine {

    constructor(gender: EGender, age: number) {
        super("Nina probleem", gender, age, [
            {
                contentEst: "suur verejooks ülemistest hingamisteedest (kurgumandlite-, ninaverejooks mida ei suudeta peatada)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ninaluumurd kestva verejooksuga",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "võõrkeha ninaõõnes",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ninaverejookst kõrgest vererõhust",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "korduvad ninaverejooksud",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ninahingamise takistus üle 2 päeva",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "allergiline nohu",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ninaneelu haigus on seotud külmetuse ja/või viirushaigustega",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },


        ])
    }

}