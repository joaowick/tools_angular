import { PaifilhoComponent } from './paifilho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';

const routes: Routes = [
  { path: "paifilho", component: PaifilhoComponent },
  { path: "pai", component: PaiComponent },
  { path: "filho", component: FilhoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PaifilhoRoutingModule { }
