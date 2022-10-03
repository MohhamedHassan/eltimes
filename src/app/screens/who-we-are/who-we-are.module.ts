import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { WeAreComponent } from './components/we-are/we-are.component';


@NgModule({
  declarations: [
    WeAreComponent
  ],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule
  ]
})
export class WhoWeAreModule { }
