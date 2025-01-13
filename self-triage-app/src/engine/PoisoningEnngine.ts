import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";

export default class PoisoningEngine extends BaseEngine {
  constructor(gender: EGender, age: number) {
    super("Mürgistus", gender, age, [
      {
        contentEst: "südamerütmihäire",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "näo turse",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "keele turse",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "teadvushäire",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "psühhikahäire",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "depressioon",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "kõhuvalu",
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
        contentEst: "enesetapukatse",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "keemiline põletus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "rästikuhammustus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "silma sattunud kemikaal",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst:
          "äsja toimunud mürgistus või selle kahtlus, mille puhul võimalikud sümptomid ei ole veel tekkinud",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
    ]);
  }
}
