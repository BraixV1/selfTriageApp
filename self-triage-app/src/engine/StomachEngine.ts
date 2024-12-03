import { EGender } from "@/types/HelperEnums/EGender";
import { BaseEngine } from "./BaseEngine";
import { EResult } from "@/types/HelperEnums/EResult";


export default class StomachEngine extends BaseEngine {

    constructor(gender: EGender, age: number) {
        super("kõht (seede- ja suguelundkond)", gender, age, [
            {
                contentEst: "kõhuvalu + kahvatud, higine, segasusseisund või suur nõrkustunne",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "äkki tekkinud ebamäärane ülakõhuvalu",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kõhuvalu koos minestamisega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "tugevkõhuvalu, mis on kestnud üle 1 tunni",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kõht katsudes pinges(kõva)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "vere oksendamine",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "äkki tekkinud tugev kõhuvalu, kiirgub selga või jalgadesse",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: 60,
                maxAge: null
            },
            {
                contentEst: "kõhuvalu koos vedelikupuudusega(rohkem kui 24h jooksul korduv oksendamine, kõhulahitsus)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "valu paremal pool alakõhus koos isutuse, iivelduse- oksendamise või palavikuga",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "kiiresti tugevnev kõhuvalu",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "gaaside peetus ägeda valuga",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "tugev iiveldus ja pidev oksendamine",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: '"kohvipaksu" värvi okse',
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "väljaheide musta värvi, halvasti lõhnav, vedel",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "rohke veri väljaheites",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "uriini peetus",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "verejooks kuseteedest",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "rasedus koos kõhuvaluga",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.female,
                minAge: 18,
                maxAge: 50
            },
            {
                contentEst: "vaginaalne verejooks(enam kui 3 sidet tunnis)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.female,
                minAge: 18,
                maxAge: 50
            },
            {
                contentEst: "vaginaalne verejooks koos raseduse võimalusega",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.female,
                minAge: 18,
                maxAge: 50
            },
            {
                contentEst: "sünnitaja aktiivses sünnitusfaasis (tuhud < 5 min vahega)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.female,
                minAge: 18,
                maxAge: null
            },
            {
                contentEst: "hiljutine kõhutrauma (torkehaav, löök, muljumine kõhupiirkonnas)",
                result: EResult.EmergencyRoom,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "pikemat aega kestnud kerge iiveldus",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ebamäärane kõhuvalu",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "pikemat aega kestnud kõhulahtisus",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "krooniline kõhukinnisus",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "krooniline kõhuvalu",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "uriinipidamatuse vaevused",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "valulik urineerimine",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "verekiud väljaheites",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "söögiga seotud korduv valu",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "pidevad kõhugaasid mis ei allu ravile",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "ravimitest tulenev kõhuprobleem",
                result: EResult.FamilyDoctor,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "menturatsioonivalu",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.female,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "vähene kõhuvalu",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },
            {
                contentEst: "igapäevane kõhupuhitus",
                result: EResult.Pharmacy,
                contentEng: null,
                gender: EGender.any,
                minAge: null,
                maxAge: null
            },


        ])
    }

}