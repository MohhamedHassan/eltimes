import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RssComponent } from './components/rss/rss.component';

const routes: Routes = [
  {
    path:'',
    component:RssComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RssRoutingModule { }
