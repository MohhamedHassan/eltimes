import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorArticleDetailsRoutingModule } from './author-article-details-routing.module';
import { AuthorArticleDetailsComponent } from './components/author-article-details/author-article-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ArticleDetailsRoutingModule } from '../article-details/article-details-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: [
    AuthorArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthorArticleDetailsRoutingModule,
    ArticleDetailsRoutingModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    FacebookModule.forRoot()
    
  ]
})
export class AuthorArticleDetailsModule { }
