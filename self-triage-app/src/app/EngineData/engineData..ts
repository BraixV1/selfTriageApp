import { BaseEngine } from "@/engine/BaseEngine";
import ProblemService from "@/Service/ProblemService";
import { EGender } from "@/types/HelperEnums/EGender";
import IQuestion from "@/types/IQuestion";

const sheetNames: string[] = ["RindKere/Chest"];

export const setupEngines = async (): Promise<BaseEngine[]> => {
  const result: BaseEngine[] = [];
  for (const sheetName of sheetNames) {
    const response = await new ProblemService<IQuestion>(sheetName).getAll();

    if (response.data) {
      console.log(sheetName);
      result.push(
        new BaseEngine(sheetName.split("/")[0], EGender.any, -1, response.data),
      );
    }
  }
  return result;
};
