import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './components/sports/sports.component';
import { SwiperModule } from 'swiper/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: [
    SportsComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule,
    SwiperModule,
    NgxSkeletonLoaderModule,
    PaginationModule.forRoot(),
    YouTubePlayerModule,
    FacebookModule.forRoot()
  ]
})
export class SportsModule { }
