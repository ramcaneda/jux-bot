import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./bot";
import {Client} from "discord.js";
import { MessageResponder } from "./services/message-responder";
import { HttpClient } from "./services/http-client";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(<string>process.env.TOKEN);
container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<string>(TYPES.HostApi).toConstantValue(<string>process.env.HOSTAPI);
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient).inSingletonScope();

export default container;