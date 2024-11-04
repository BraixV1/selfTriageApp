import { EResult } from "@/types/EResult";
import { BaseEngine } from "./BaseEngine";

export default class HeadacheEngine extends BaseEngine {
    constructor() {
        super("peavalu", [
            {
                contentEst: "korduv peavalu",
                result: EResult.FamilyDoctor,
                contentEng: undefined
            },
            {
                contentEst: "korduv mõõduka tugevusega peavalu",
                result: EResult.FamilyDoctor,
                contentEng: undefined
            },
            {
                contentEst: "näopiirkonna valu sh hambavalu ilma kõrge palavikuta",
                result: EResult.FamilyDoctor,
                contentEng: undefined
            },
            {
                contentEst: "migreen",
                result: EResult.FamilyDoctor,
                contentEng: undefined
            },
            {
                contentEst: "külmetushaigusest tulenev peavalu",
                result: EResult.FamilyDoctor,
                contentEng: undefined
            },
            {
                contentEst: "peavalu mis allub ravile",
                result: EResult.FamilyDoctor,
                contentEng: undefined
            },
            {
                contentEst: "äkki (sekund, minuti jooksul) tekkinud valu peas",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "peavalu koos minestusega",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "täielik nägemiskaotus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "tugev silmavalu, katsudes on silmamuna kõva",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "verevalumitega nahalööbe",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "peatrauma",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "tugev migreenihoog",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "hiljutine nägemislangus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "korduv oksendamine 24 tunni jooksul",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "palavik on üle 38 kraadi, mis ei allu ravile",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "tugev peavalyu eakal",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
        ])
    }
}