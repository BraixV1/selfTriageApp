
import { BaseEngine } from './BaseEngine';
import { EResult } from '@/types/EResult';
export default class NeurologyEngine extends BaseEngine{

    constructor(){
        super("Teadvushäire, minestamine, neuroloogia", [
            {
                contentEst: "Pikema perioodi vältel esinenud teadvusekaotuse, kuid mitte viimase 24 tunni jooksul",
                result: EResult.FamilyDoctor,
                contentEng: undefined
            },
            {
                contentEst: "Kooma (inimene hingab aga ei ole äratatav",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "Veresuhkru langusest tingitud teadvusetus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "rase, tugev vaginaalne veritsus või kõhuvalu",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "valu rindkeres",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "trauma järgne teadvushäire",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "krambid",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "krambihoo järgne segasusseisund",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "minestanud patsient rütmihäirega",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "alajahtumine",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "ülekuumenemine",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "lühiaegne teadvusekaotus/minestamine viimase 24h jooksul",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "äkki tekkinud halvatus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "ühe keha poole nõrkus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "jäsemete tudnlikuse muutus/nõrkus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "kõnetakistus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "suunurga alla vaiumine",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
            {
                contentEst: "äkki tekkinud tasakaaluhäire/peapööritus",
                result: EResult.EmergencyRoom,
                contentEng: undefined
            },
        ])
    }

}