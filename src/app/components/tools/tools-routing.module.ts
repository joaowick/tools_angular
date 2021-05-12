import { IconAnimationComponent } from './icon-animation/icon-animation.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'iconAnimation', component: IconAnimationComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
