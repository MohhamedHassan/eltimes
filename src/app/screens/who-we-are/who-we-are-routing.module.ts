import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeAreComponent } from './components/we-are/we-are.component';

const routes: Routes = [
  {
    path:'',
    component:WeAreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoWeAreRoutingModule { }
