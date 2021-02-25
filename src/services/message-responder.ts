import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import { HttpClient } from "./http-client";
import { User } from "../types/user";

@injectable()
export class MessageResponder {

  private httpClient: HttpClient;

  constructor(
    @inject(TYPES.HttpClient) client: HttpClient
  ) {
    this.httpClient = client;
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

    if(message.content.startsWith("!user") && message.author.id === '182150558638014464'){
      //await this.userModule.handle(message)
      let userId = message.content.substring(6, message.content.length)
      const response : User = await this.httpClient.singleSelectionCall('user','basic',userId);
        return message.channel.send(response.name);
    }

    return Promise.reject();
  }
}