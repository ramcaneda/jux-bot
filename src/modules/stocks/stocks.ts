import { injectable, inject } from "inversify";
import { StocksSandbox } from "./stocks.sandbox";
import { Stock } from "../../types/stock";
import { TYPES } from "../../types";

@injectable()
export class StocksModule {
    private stocksSandbox : StocksSandbox

    constructor(
        @inject(TYPES.StocksSandbox) stocksSandbox: StocksSandbox
      ) {
        this.stocksSandbox = stocksSandbox;
      }


    public activateStockWatcher() {
        
    }

    public deActivateStockWatcher(){

    }

    private async getStocks() : Promise<Stock[]> {
        return await this.stocksSandbox.getStocks();
    }


}