import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RssRoutingModule } from './rss-routing.module';
import { RssComponent } from './components/rss/rss.component';


@NgModule({
  declarations: [
    RssComponent
  ],
  imports: [
    CommonModule,
    RssRoutingModule
  ]
})
export class RssModule { }
