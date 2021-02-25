import { injectable, inject } from "inversify";
import { UserSandbox } from "./user.sandbox";
import { Profile } from "../../types/profile";
import { Message } from "discord.js";
import { TYPES } from "../../types";

@injectable()
export class UserModule {


    private userSandbox : UserSandbox

    constructor(
        @inject(TYPES.UserSandbox) userSandbox: UserSandbox
      ) {
        this.userSandbox = userSandbox;
      }

      public async createProfileMessage(message: Message) {
        let userId = message.content.substring(6, message.content.length)
        let response : Profile = await this.getProfile(userId);
        console.log(response);     
        //TODO: create the response type and a nice message to return. 
        message.channel.send("test");
      }

      private async getProfile(userId: string) : Promise<Profile> {
        return await this.userSandbox.getProfile(userId);
    }
}