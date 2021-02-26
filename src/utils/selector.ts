import { injectable } from "inversify";

@injectable()
export class Selector {
    
    constructor(){
    }

    public randomMessageSelector(inputArray : string[]) : string {

        let random = Math.floor(Math.random() * inputArray.length - 1);

        return inputArray[random]

    }

}