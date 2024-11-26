import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";

export default class EyeEngine extends BaseEngine {
    constructor(gender: EGender, age: number) {
        super("silma probleem", gender, age, [
            {
                contentEst: "nägemiseteravuse järsk langus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "silma on sattunud kemikaal/kemikaale",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "punane valutav silm",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "silma trauma/silmamuna läbistav vigastus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "võõrkeha silmas mida ise ei suuda eemaldada",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "tugev silmavalu, katsudes kõva silmamuna",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "silma piirkonnas valulik + villilinelööve",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "äkki tekkinud ühe silma pimedus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "osaline nägemise kadu",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "sähvatused, välgatused, mustad täpid silma ees",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "silmapõletik (punane kipitav, sügelev, mädane, limane silm/silmad)",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "silma limaskesta (silmavalge) verevalum",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "mõlemad silmad punased + nohu",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kuivad silmad",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
        ])
    }
}