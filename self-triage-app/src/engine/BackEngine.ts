import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";

export default class BackEngine extends BaseEngine {
  constructor(gender: EGender, age: number) {
    super("selg", gender, age, [
      {
        contentEst: "esmakordselt tekkinud, kiiresti tugenev valu seljas",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: 60,
        maxAge: null,
      },
      {
        contentEst:
          "värske seljatrauma, mille järgselt ei suuda inimene liigutada varbaid ning esineb nõrkus ühes või mõlemas alajäsemes",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst:
          "seljavalu koos kontrolli kaotus põie- või sooletegevuse üle",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "selja või traumast tulenev verevalum",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "järsku tekkinud, tugenev valu seljas",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: 60,
      },
      {
        contentEst: "seljavalu koos jalaliikuvuse või jõudluse häirega",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst:
          "seljavalu koos valuliku urineerimise ja kõrge palavik (38.5°C+) ",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst:
          "seljavalu koos kõrge palaviku (38.5°C+), iivelduse ja oksendamisega",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "äge, tugev valu seljas ja tundlikkushäired jäsemetes",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "seljavalu koos progresseeruva jalgade nõrkusega",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst:
          "trauma järgselt (nädala jooksul), süvenev seljavalu või jäsemete tuimus",
        result: EResult.EmergencyRoom,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "korduv seljavalu, mis oluliselt ei takista kõndimist",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "krooniline seljavalu, mis ei allu valuravi skeemile",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "seljavalu, mis takistab kõndimist",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst:
          "seljavalu, mis kiirgub puusa ja/või jalga (radikulaarne valu) ning mis oluliselt takistab kõndimist",
        result: EResult.FamilyDoctor,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
      {
        contentEst: "esmane seljavalu, mis oluliselt ei takista kõndimist",
        result: EResult.Pharmacy,
        contentEng: null,
        gender: EGender.any,
        minAge: null,
        maxAge: null,
      },
    ]);
  }
}
