import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  {{counter.count}}
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  counter:Counter = new Counter(10,5);
  intervalId:any;
  @Output() warn:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(()=>{
      this.counter.count++;
      if(this.counter.counterSpan >= this.counter.count && this.counter.warnBefore >= (this.counter.counterSpan - this.counter.count)){
        this.emitWarning();
      }
    },1000);
  }

  emitWarning(){
    this.warn.emit(this.counter.counterSpan - this.counter.count);
  }

  ngOnDestroy():void{
    clearInterval(this.intervalId);
  }

}

class Counter{

  count = 0;
  constructor(public counterSpan:number, public warnBefore:number){}
  
  onCount(){
    this.count++;
  }

}
