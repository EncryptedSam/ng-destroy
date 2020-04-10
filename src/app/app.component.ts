import { Component } from '@angular/core';
import { Log } from './log';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  template:`
    <h2>Parent Component</h2>
    <button (click)="onToggleTestComp()">Toggle - Test Component</button>
    <button (click)="onToggleCounter()">Toggle - Counter Component</button>
    
    <br>
      <h3 class="inline-block">Test Component</h3> - 
      <span *ngIf="log">
        <span *ngIf="log.logType == 'c'" class="created">{{log.message}}</span>
        <span *ngIf="log.logType == 'r'" class="removed">{{log.message}}</span>
      </span>
      <br>
      
      <div *ngIf="isTestCompCreated" class="container">
      <app-test-component></app-test-component>
      </div>
      
      <br>
      <h3 class="inline-block">Counter Component</h3> 
      <span *ngIf="showCounterWarning">- {{counterWarningMsg}}</span>
    <br>
    <div *ngIf="isCounterCreated" class="container">
      <app-counter (warn)="getCounterWarning($event)"></app-counter>
    </div>

  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  log:Log;
  isTestCompCreated:boolean = true;
  isCounterCreated:boolean = true;

  counterWarningMsg:string;
  showCounterWarning:boolean = false;


  constructor(private loggerService:LoggerService){ 
    this.log = this.loggerService.getLog();
  }

  onToggleTestComp(){
    this.isTestCompCreated = this.isTestCompCreated?false:true;
  }
  
  onToggleCounter(){
    this.isCounterCreated = this.isCounterCreated?false:true;
    this.showCounterWarning = false; 
  }

  getCounterWarning(arg){
    this.showCounterWarning = true; 
    this.counterWarningMsg = `will be removed in ${arg} secs`;
    if(arg == 0){
      this.onToggleCounter();
      this.showCounterWarning = false; 
    }
  }


}
