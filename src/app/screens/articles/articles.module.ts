import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NgxSkeletonLoaderModule,
    PaginationModule.forRoot()
  ]
})
export class ArticlesModule { }
