import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./bot";
import {Client} from "discord.js";
import { MessageResponder } from "./controllers/message-controller";
import { HttpClient } from "./services/http-client";
import { UserSandbox } from "./modules/user-info/user.sandbox";
import { UserModule } from "./modules/user-info/user-info";
import { StocksSandbox } from "./modules/stocks/stocks.sandbox";
import { StocksModule } from "./modules/stocks/stocks";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(<string>process.env.TOKEN);
container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<string>(TYPES.HostApi).toConstantValue(<string>process.env.HOSTAPI);
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient).inSingletonScope();

//User Module
container.bind<UserSandbox>(TYPES.UserSandbox).to(UserSandbox).inSingletonScope();
container.bind<UserModule>(TYPES.UserModule).to(UserModule).inSingletonScope();

//Stocks Module
container.bind<StocksSandbox>(TYPES.StocksSandbox).to(StocksSandbox).inSingletonScope();
container.bind<StocksModule>(TYPES.StocksModule).to(StocksModule).inSingletonScope();

export default container;