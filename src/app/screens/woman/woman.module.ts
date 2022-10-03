import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomanRoutingModule } from './woman-routing.module';
import { WomanComponent } from './components/woman/woman.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    WomanComponent
  ],
  imports: [
    CommonModule,
    WomanRoutingModule,
    NgxSkeletonLoaderModule,
    PaginationModule.forRoot(),
    SwiperModule
  ]
})
export class WomanModule { }
