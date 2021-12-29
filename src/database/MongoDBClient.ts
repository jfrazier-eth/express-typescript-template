import chalk from "chalk";
import { MongoClient } from "mongodb";
import { singleton } from "tsyringe";

@singleton()
export default class MongoDBClient {
  private client!: Promise<MongoClient>;

  public constructor() {
    const connectionString = process.env.MONGODB_CONNECTION_STRING;

    this.client = MongoClient.connect(connectionString!);
    this.client
      .then(() => {
        console.log(chalk.green(`Connected to MongoDB`));
      })
      .catch((e) => {
        console.log(chalk.red("Failed to connect to MongoDB"));
        console.error(e);
      });
  }

  public async getDB(db: string) {
    return (await this.client).db(db);
  }
}