import { Component, OnDestroy } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-test-component',
  template:`
    {{title}}
  `,
  // templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnDestroy{

  title:string = "Hello World by Test Component";

  constructor(private loggerService:LoggerService) { 
    this.loggerService.setLog('c','Created');
  }

  ngOnDestroy():void{
    this.loggerService.setLog('r','Removed');    
  }

}

