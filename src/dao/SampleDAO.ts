import MongoDBClient from '../database/MongoDBClient';
import { injectable } from 'tsyringe';

@injectable()
export default class SampleDAO {
    private databaseName: string;
    constructor(private database: MongoDBClient) {
        this.databaseName = process.env.SAMPLE_DATABASE;
    }

    async getData(propertyToFind: string, fieldValue: string ) {
        const sampleDataCollection = await this.getCollection('sample');

        const doc = await sampleDataCollection.findOne({[propertyToFind]: fieldValue});
        return doc;
    }
    
    private async getCollection(name: string) {
        const db = await this.database.getDB(this.databaseName);
        return db.collection(name);
    }
}
