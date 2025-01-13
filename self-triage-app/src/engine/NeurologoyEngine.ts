import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";
export default class NeurologyEngine extends BaseEngine {
  constructor(gender: EGender, age: number) {
    super("Teadvus, minestamine, neuroloogia", gender, age, [
      {
        contentEst:
          "Pikema perioodi vältel esinenud teadvusekaotuse, kuid mitte viimase 24 tunni jooksul",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "Kooma (inimene hingab aga ei ole äratatav",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "Veresuhkru langusest tingitud teadvusetus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "rase, tugev vaginaalne veritsus või kõhuvalu",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "valu rindkeres",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "trauma järgne teadvushäire",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "krambid",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "krambihoo järgne segasusseisund",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "minestanud patsient rütmihäirega",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "alajahtumine",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "ülekuumenemine",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "lühiaegne teadvusekaotus/minestamine viimase 24h jooksul",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "äkki tekkinud halvatus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "ühe keha poole nõrkus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "jäsemete tudnlikuse muutus/nõrkus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "kõnetakistus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "suunurga alla vaiumine",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "äkki tekkinud tasakaaluhäire/peapööritus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
    ]);
  }
}
