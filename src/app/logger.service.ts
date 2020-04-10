import { Injectable } from '@angular/core';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private log:Log = new Log(null, null);
  constructor() { }
  setLog(lt:string, msg:string){
    this.log.logType = lt;
    this.log.message = msg;
  }

  getLog(){
    return this.log;
  }
  

}
