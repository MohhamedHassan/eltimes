import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailsRoutingModule } from './article-details-routing.module';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FacebookModule } from 'ngx-facebook';
import { SwiperModule } from 'swiper/angular';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';


@NgModule({
  declarations: [
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ArticleDetailsRoutingModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    FacebookModule.forRoot()
  ]
})
export class ArticleDetailsModule { }
