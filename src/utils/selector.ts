import { injectable, inject } from "inversify";
import { TYPES } from "../types";

@injectable()
export class Selector {
    
    constructor(){
    }

    public randomMessageSelector(inputArray : string[]) : string {

        let random = Math.floor(Math.random() * inputArray.length - 1);

        return inputArray[random]

    }

}