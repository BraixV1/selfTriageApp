import { EResult } from "./EResult";

export default interface IQuestion {
    contentEst: string,
    result: EResult,
    contentEng: string | undefined
}