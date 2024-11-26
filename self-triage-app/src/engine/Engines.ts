import { EGender } from "@/types/HelperEnums/EGender";
import HeadacheEngine from "./HeadacheEngine";
import { BaseEngine } from "./BaseEngine";
import NeurologyEngine from "./NeurologoyEngine";
import EyeEngine from "./EyeEngine";
import NoseEngine from "./NoseEngine";
import ThroatEngine from "./ThroatEngine";

export class Engines {
    


    public engines: BaseEngine[] = [
        new HeadacheEngine(EGender.any, -1),
        new NeurologyEngine(EGender.any, -1),
        new EyeEngine(EGender.any, -1),
        new NoseEngine(EGender.any, -1),
        new ThroatEngine(EGender.any, -1)
        ]


}