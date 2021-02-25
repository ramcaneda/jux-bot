import { injectable, inject } from "inversify";
import { Stock } from "../../types/stock";
import { TYPES } from "../../types";
import { HttpClient } from "../../services/http-client";

@injectable()
export class StocksSandbox {

    private httpClient: HttpClient;

    constructor(
        @inject(TYPES.HttpClient) client: HttpClient
      ) {
        this.httpClient = client;
      }

    public async getStocks() : Promise<Stock[]> {
        return await this.httpClient.singleSelectionCall('torn', 'stocks', '');
    }
    
}