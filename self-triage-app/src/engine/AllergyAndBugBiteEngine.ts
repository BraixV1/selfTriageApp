import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";

export default class AllergyAndBugBiteEngine extends BaseEngine {

    constructor(gender: EGender, age: number) {
        super("allergia ja putukahammustus", gender, age, [
            {
                contentEst: "kahvatu, higine, teadvushäire",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "hingamisraskus või takistus keele või kurgu turse (paistetus)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "suutmatus rääkida (ei suuda rääkida või räägib üksikute sõnadega)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "suutmatus neelata",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "turse suus või huultel",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "näo turse",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kähe hääl",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "vilistav hingamine",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kiiresti süvenev lööve",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "hingamisraskus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "valu rinnus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "eelnevalt esinenud tugev allergiline reaktsioon kemikaalile/toidule/putukahammustusele",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "oma adrenaliin epipeni kasutamine",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "palavik või tugev valu",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "tugev sügelus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "villiline lööve kemikaaliga kokkupuute järgselt",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "laialdane lööve üle kogu keha",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "varasem rohkem kui 24h kokkupuutel kemikaaliga tekkinud laialdane lööve",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "üksikud lööbeelemendid nahal ilma palavikuta, mis ei allu ravile",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "astma",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "gripilaadsed sümptomitele on eelnenud puugihammustus 4 nädala vältel",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "puugihammustus koha ümber tekkindu punase äärega ringi kujuline lööve mis on keskelt heledam või sinakas",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "aeglaselt tekkinud laialdane lööve",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "paikne allergiline reaktsioon",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "putukahammustuse järgne põletikuline protsess ka puugihammustus",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "üksikud lööbeelemendid nahal ilma palavikuta",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "allergiline nohu",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
        ])
    }

}