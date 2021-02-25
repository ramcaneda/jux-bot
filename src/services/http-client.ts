import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import axios from "axios";

@injectable()
export class HttpClient {

    private readonly key: string;

    
    constructor(@inject(TYPES.HostApi) apiKey: string){
        this.key = apiKey;
    }

    public async apiCall(apiClass : string, selection : string | string [], id : string) : Promise<any> {

        let url = `https://api.torn.com/${apiClass}/${id}?selections=${selection.toString()}&key=${this.key}`;

        const response = axios.get(url)
            .then(response => { 
                return response.data
            })
            .catch(error => {
                console.log(error)
            });

        return response;

    }

}