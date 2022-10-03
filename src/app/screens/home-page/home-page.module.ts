import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SwiperModule } from 'swiper/angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SwiperModule,
    NgxSkeletonLoaderModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),

  ]
})
export class HomePageModule { }
