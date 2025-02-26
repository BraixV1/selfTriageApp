import { EGender } from "@/types/HelperEnums/EGender";

export const convertEngineData = <T extends { gender: string; age: string }>(
  data: T[],
): (Omit<T, "gender" | "age"> & { gender: EGender; age: number })[] => {
  return data.map((item) => {
    const converted = {
      ...item,
      age: parseInt(item.age, 10),
      gender: stringToGender(item.gender),
    };
    return converted;
  });
};

export const stringToGender = (gender: string): EGender => {
  const normalizedGender = gender.toLowerCase().trim();
  switch (normalizedGender) {
    case "male":
      return EGender.male;
    case "female":
      return EGender.female;
    default:
      return EGender.any;
  }
};
