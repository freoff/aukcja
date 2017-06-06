import { PutObrazek } from '../interface/RequestAjaxObject'
import { Config } from './../config/config';
import { PozycjaSprzedazy} from './../model/aukcja'
import * as mongodb from 'mongodb';
export class AukcjaRepo {
  constructor(private db: mongodb.MongoClient ) {
    this.db = Config.db;
   }

  addImage(obj: PutObrazek){
    
    //TODO implement it
  }
}