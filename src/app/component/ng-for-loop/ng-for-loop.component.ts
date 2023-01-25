import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-loop',
  templateUrl: './ng-for-loop.component.html',
  styleUrls: ['./ng-for-loop.component.css']
})
export class NgForLoopComponent {
  numbers: number[] = [];
  num: number = 1;
  i: number = 0;
  j: number = 0;
  myLoop(numOfLoop: string){
    this.numbers = [];
    this.j = +numOfLoop;
    for(this.i=1; this.i<=this.j; this.i++){
      this.numbers.push(this.i);
    }
  }
  
}
