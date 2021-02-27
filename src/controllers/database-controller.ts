import { injectable } from "inversify"
import { Client } from "pg"

@injectable()
export class DatabaseController {

  public dbConnect() : Client {
    let connection = process.env.DATABASE_URL || {
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'jux-bot-local',
      port: 5432
    }

    const client = new Client(connection)

    client.connect();

    return client;
  }



}