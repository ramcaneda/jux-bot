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


    //Quotes Module
    if(message.content.startsWith("!quotes")){
        return message.channel.send('quotes to be here soon');
    }


    // Stocks Module
    if(message.content.startsWith("!stock")){

        return message.channel.send('stocks to be here soon');
    }


    // Profile Module
    if(message.content.startsWith("!user") && message.author.id === '182150558638014464'){
      await this.userModule.createProfileMessage(message)
      return message.delete();
    }


    //Easter eggs

    if(message.author.id === '190986660895260673' && Math.random() < .01){
      let replies = ['Oh yes... Daddy Kuro!', //
       'Kurt!', //
       'How did you like Avatar: the last airbender, the movie?', //
       'Hey'//
      ]
      return message.channel.send(this.randomMessageSelector(replies));
    }

    if(message.member?.roles.cache.some(role => role.name === 'clogs') && Math.random() < .01){
      let replies = ['clogs, lol', //
      'ew Dutch people', //
      'Can I have some cheese', //
      'Hey'
     ]
      return message.channel.send(this.randomMessageSelector(replies));
    }

    if(message.member?.roles.cache.some(role => role.name === 'Step Leaders') && Math.random() < .01){
      let replies = ['What are you doing Step Leader!', //
      'Don\'t be Rhinkey Dink', //
      'Just blame Harley', //
      'Hey'
     ]
      return message.channel.send(this.randomMessageSelector(replies));
    }

    return Promise.reject();
  }

  private randomMessageSelector(messageList : string[]) : string {

    let random = Math.floor(Math.random() * messageList.length - 1);

    return messageList[random]
  }
}