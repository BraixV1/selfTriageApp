import { stringToGender } from "@/Helpers/Converter";
import { IResultObject } from "../types/IResultObject";
import { BaseService } from "./BaseService";
import Papa from 'papaparse';

export abstract class BaseEntityService<TEntity> extends BaseService {
  private params: Record<string, string> = {};

  constructor(baseUrl: string, token?: string) {
    super(baseUrl, token);
  }

  async getAll(
    queryKey?: string,
    queryParams?: string,
  ): Promise<IResultObject<TEntity[]>> {
    const params = { ...this.params };
    if (queryParams && queryKey) {
      params[queryKey] = queryParams;
    }

    try {
      const response = await this.httpClient.get("", { params });
      if (response.status < 300) {
        const csvData: string = response.data;
        // Parse CSV with headers
        const parsed = Papa.parse<TEntity>(csvData, {
          header: true,
          skipEmptyLines: true,
          transform: (value, field) => {
            if (field === "minAge") {
              return parseInt(value, 10);
            }
            if (field === "maxAge") {
              return parseInt(value, 10);
            }
            if (field === "gender") {
              return stringToGender(value);
            }
            return value;
          },
        });

        // Type assertion to ensure proper typing after conversion
        const convertedData = parsed.data as unknown as TEntity[];
        console.log(convertedData);
        return { data: convertedData };
      }
      return { errors: [this.handleError(response)] };
    } catch (error) {
      return { errors: [this.handleError(error)] };
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(error: any): string {
    if (error.response) {
      return `${error.response.data.title}`;
    } else {
      return `An error occurred: ${error.message}`;
    }
  }
}
