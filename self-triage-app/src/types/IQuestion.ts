import { EGender } from './HelperEnums/EGender';
import { EResult } from "./HelperEnums/EResult";


/*

Note to yourself: age means that from what age the problem will be shown

*/
export default interface IQuestion {
    contentEst: string,
    result: EResult,
    gender: EGender,
    minAge: number | null,
    maxAge: number | null,
    contentEng: string | null
}