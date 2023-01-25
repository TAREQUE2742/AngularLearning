import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { CounterComponent } from './component/counter/counter.component';
import { FourOfourComponent } from './component/four-ofour/four-ofour.component';
import { HomeComponent } from './component/home/home.component';
import { IfElseComponent } from './component/if-else/if-else.component';
import { NgForLoopComponent } from './component/ng-for-loop/ng-for-loop.component';
import { SwitchCaseComponent } from './component/switch-case/switch-case.component';

const routes: Routes = [{
  component: AboutComponent,
  path: "about"
},
{
  component: HomeComponent,
  path:""
},
{
  component: CounterComponent,
  path:"counter"
},
{
  component: IfElseComponent,
  path: "if-else"
},
{
  component: SwitchCaseComponent,
  path: "switch-case"
},
{
  component: NgForLoopComponent,
  path: "ng-for-loop"
},
{
  component: FourOfourComponent,
  path: "**"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
