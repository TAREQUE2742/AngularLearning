import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  backruptMessage: string = "his company is about to bankrupt!!";
  display: boolean = true;
  closeMessage(){
    this.display = !this.display;

  }
}
