import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import { UserModule } from "../modules/user-info/user-info";

@injectable()
export class MessageResponder {

  private userModule: UserModule

  constructor(
    @inject(TYPES.UserModule) userModule: UserModule
  ) {
    this.userModule = userModule;
  }

  async handle(message: Message): Promise<Message | Message[]> {

    if(message.content.startsWith("!ping")){
        return message.channel.send('eurghhh... pong...');
    }

    if(message.content.startsWith("!quotes")){
        return message.channel.send('quotes to be here soon');
    }

    if(message.content.startsWith("!stock")){

        return message.channel.send('stocks to be here soon');
    }

    if(message.author.id === '190986660895260673' && Math.random() < .3){
      return message.channel.send('Oh yes... Daddy Kuro!');
    }

    if(message.content.startsWith("!user") && message.author.id === '182150558638014464'){
      await this.userModule.createProfileMessage(message)
      return message.delete();
    }

    return Promise.reject();
  }
}