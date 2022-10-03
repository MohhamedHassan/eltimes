import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgxSkeletonLoaderModule,
    SwiperModule,
    PaginationModule.forRoot()
  ]
})
export class CategoryModule { }
