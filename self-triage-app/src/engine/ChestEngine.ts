import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";


export default class ChestEngine extends BaseEngine {

    constructor(gender: EGender, age: number) {
        super("Rindkerevalu", gender, age, [
            {
                contentEst: "rindkerevalu koos äkki tekkinud õhupuudusega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "rindkere valu koos ebakorrapärase südamerütmiga (süda jätab lööke vahele)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "valu rinnus kiirgusega kätte/kätesse, abaluude vahele, selga, lõuga, ülakõhtu",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "tugev rõhuv, pigistav, kõreveta rindekerevalu",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "rindkerevalu koos minestusega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "rindkerevalu koos iivelduse, oksendamisega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "terav rindkerevalu hingamisel ja katsudes rindkere valu ei ole",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "trauma järgne rindkerevalu",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "katsudes valulik rindkere",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "rindkere valulikkus liigutades(ilma traumata)",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "torkiva iseloomuga valu rindkeres, mis lokaliseerub kindlasse punkti ning ei süvene koormusega",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },


        ])

    }

}