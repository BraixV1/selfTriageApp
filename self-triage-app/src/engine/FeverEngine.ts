import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";

export default class feverEngine extends BaseEngine {

    constructor(gender: EGender, age: number) {
        super("Palavik", gender, age, [
            {
                contentEst: "ravile allumatu kõrge palavik (38.5°C+)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "palavik + hingeldus, kahvatus, külm higi",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "suu avamise häire koos näo- ja kaela tursega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "vedelikupuudusega koos oksendamise ja/või kõhulahtisusega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "peavalu, valguskartus, lõuga  ei saa rinnale panna (kuklakangestus)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "hiljutine reis (2 nädalat) epidemiloogilise infektsioonhaiguse riskiga riiki",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "immuunpuudulikkus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kõrge palavik(38.5°C+) koos hingeldusega mis ei allu ravile",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "viis või enam päeva kestnud väike palavik",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "valulik köha",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "palavik + korduv, mõõduka tugevusega peavalu, mis ei allu ravimitele",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ülemiste hingamisteede külmetushaigused, mis on kestnud enam kui viis päeva",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "palavik koos ülemiste hingamisteede külmetushaigusega",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
        ])
    }

}