import { MongoClient } from 'mongodb';
import * as event from 'events';
import { Config } from './../config/config';
export let mongo;


export class Mongo extends event.EventEmitter {
  constructor(private _app?: Express.Application, private _url?: string) {
    super();
    this._url = Config.MONGO_URL;
  }
  public getConnection(cb: Function, app?: Express.Application): void {
    MongoClient.connect(this._url, (err, db) => {
      if (err) {
        
        console.log(err);
        throw ("Cant connect to db at: " + this._url);

      }
      //process.exit(-1);
      
      cb(err, db);
    });
  }
}