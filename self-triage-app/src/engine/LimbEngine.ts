import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";


export default class LimbEngine extends BaseEngine {

    constructor(gender: EGender, age: number) {
        super("jäsemeprobleemid", gender, age, [
            {
                contentEst: "jäsemest verejooks mida ei suuda ise peatada",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ühe/kahe päevaga tekkinud jäseme turse ilma traumata",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jäseme nahk kahvatu/valge, jahe, sinine/lilla võrreldes teise jäsemega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "tugev terav jalavalu, mille tõttu ei ole võimalik liikuda",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jäsemevalu koos veriköha või hingeldusega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jäsemeturse koos veriköha või hingeldusega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jäseme turse koos kõrge palavikuga (38.5°C+)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "sääre, reie või hüppeliigese piirkonnas punetus ja kuumus koos kõrge palavikuga (38.5°C+)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jala tuimus võrrelde teise jalaga",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "selja valu koos jalaliikuvuse või jõudluse häirega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "sissekasvanud küüs",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "diabeetiline jalg",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "labajala valu (podagraga seotud vaevused)",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jäseme või liigese turse/valulikkus traumata",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "sääre, reie või hüppeliigese piirkonnas punetus ja kuumus ilma palavikuta",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jäsemevalu, mis taandub rahusolekul",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jalataldade ja -labade ebamugavustunne (vatised jalad + sipelgate jooksmine)",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "valu, suremistunne ning tuimus randmes ja labakäes ja/või küünar- või õlavarres",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "aeglaselt tekkinud tuimus, põletav valu jäsemes",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "küüneseen ja käsimüügiravim ei aita",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "jäsemete liigesvalud",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kroonilised haavandid jalgadel",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "põletikuline vill",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "küüneseen",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },

        ])
    }

}