import { EGender } from "@/types/HelperEnums/EGender";
import HeadacheEngine from "./HeadacheEngine";
import { BaseEngine } from "./BaseEngine";
import NeurologyEngine from "./NeurologoyEngine";
import EyeEngine from "./EyeEngine";
import NoseEngine from "./NoseEngine";
import ThroatEngine from "./ThroatEngine";
import BackEngine from "./BackEngine";
import AllergyAndBugBiteEngine from "./AllergyAndBugBiteEngine";
import BreathingEngine from "./BreathingEngine";
import ChestEngine from "./ChestEngine";
import EarEngine from "./EarEngine";
import FeverEngine from "./FeverEngine";
import LimbEngine from "./LimbEngine";
import PsycheEngine from "./PsycheEngine";
import StomachEngine from "./StomachEngine";
import InflammationEngine from "./InflammationEngine";
import TraumaEngine from "./TraumaEngine";
import PoisoningEngine from "./PoisoningEnngine";

export class Engines {
  public engines: BaseEngine[] = [
    new NeurologyEngine(EGender.any, -1),
    new HeadacheEngine(EGender.any, -1),
    new EyeEngine(EGender.any, -1),
    new ThroatEngine(EGender.any, -1),
    new NoseEngine(EGender.any, -1),
    new EarEngine(EGender.any, -1),
    new BreathingEngine(EGender.any, -1),
    new ChestEngine(EGender.any, -1),
    new StomachEngine(EGender.any, -1),
    new BackEngine(EGender.any, -1),
    new LimbEngine(EGender.any, -1),
    new FeverEngine(EGender.any, -1),
    new InflammationEngine(EGender.any, -1),
    new AllergyAndBugBiteEngine(EGender.any, -1),
    new PsycheEngine(EGender.any, -1),
    new TraumaEngine(EGender.any, -1),
    new PoisoningEngine(EGender.any, -1),
  ];
}
