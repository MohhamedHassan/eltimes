import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtComponent } from './components/art/art.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SwiperModule } from 'swiper/angular';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    ArtComponent
  ],
  imports: [
    CommonModule,
    ArtRoutingModule,
    NgxSkeletonLoaderModule,
    SwiperModule,
    PaginationModule.forRoot()
  ]
})
export class ArtModule { }
