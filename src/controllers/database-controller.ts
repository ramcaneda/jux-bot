import { injectable } from "inversify"
import { Client } from "pg"
import * as fs from 'fs';
import * as path from 'path'

@injectable()
export class DatabaseController {

  constructor() {

  }

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

  public async createTables() {
    let testdb;
    try {
      testdb = this.dbConnect();
      const query = fs.readFileSync(path.join(__dirname, '../../sql/create-tables.sql')).toString();
      await testdb.query(query);
      console.log('Table is successfully created');
    } catch (err) {
      console.log(err.stack);
    } finally {
      testdb?.end();
    }
  }
}