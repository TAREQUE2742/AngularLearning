import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { CounterComponent } from './component/counter/counter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IfElseComponent } from './component/if-else/if-else.component';
import { SwitchCaseComponent } from './component/switch-case/switch-case.component';
import { NgForLoopComponent } from './component/ng-for-loop/ng-for-loop.component';
import { FourOfourComponent } from './component/four-ofour/four-ofour.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CounterComponent,
    IfElseComponent,
    SwitchCaseComponent,
    NgForLoopComponent,
    FourOfourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
