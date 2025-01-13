import { EResult } from "@/types/HelperEnums/EResult";
import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";

export default class InflammationEngine extends BaseEngine {
  constructor(gender: EGender, age: number) {
    super("paikne põletik", gender, age, [
      {
        contentEst: "halvalõhnanine eritis rinnanibudest",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.female,
        minAge: 18,
        maxAge: null,
      },
      {
        contentEst: "kuumav, punetav, tihke tükiga rind",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.female,
        minAge: 18,
        maxAge: null,
      },
      {
        contentEst: "hambajuurepõletik näo turse ning suu avamine raksendatud",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "suured mädanikud millega kaasneb valu ja palavik",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "haav koos kiiresti areneva turse(paistetus) ja palavikuga",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "kuumav punetav laik jäsemel või näol palavikuta",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "pehmete kudede põletik(paise mädane muhk jmt)",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst:
          "nahapõletik (lööve -laigud, täpid, sügelus, kipitus, ketendus",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "herpes",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "villiline punane, valulik vööna esinev lööve nahal",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "kroonilised haavandid",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "küünevalli põletik",
        result: EResult.Pharmacy,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
    ]);
  }
}
