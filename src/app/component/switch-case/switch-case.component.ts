import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent {
  color: string = 'color';

  setColor(val:string){
    if(val === 'red'){
      this.color = "red";
    }
    else if(val === 'green'){
      this.color = "green";
    }
    else if(val === 'blue'){
      this.color = "blue";
    }
    else{
      console.log ("error!!!");
    }
  }
}
