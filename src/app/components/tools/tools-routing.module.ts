import { StepprogressbarComponent } from './stepprogressbar/stepprogressbar.component';
import { DarkmodeswitchComponent } from './darkmodeswitch/darkmodeswitch.component';
import { IconAnimationComponent } from './icon-animation/icon-animation.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'iconAnimation', component: IconAnimationComponent },
  { path: 'darkmodeswitch', component: DarkmodeswitchComponent },
  { path: 'stepprogressbar', component: StepprogressbarComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
