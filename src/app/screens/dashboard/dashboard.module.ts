import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { SearchCategoryPipe } from './pipes/search-category.pipe';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { UnacceptedArticlesComponent } from './components/unaccepted-articles/unaccepted-articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { SerachArticleTitlePipe } from './pipes/serach-article-title.pipe';
import { LoginComponent } from './components/login/login.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AddAdvertismentComponent } from './components/add-advertisment/add-advertisment.component';
import { AddWriterComponent } from './components/add-writer/add-writer.component';
import { WritersComponent } from './components/writers/writers.component';
import { AdsComponent } from './components/ads/ads.component';
import { LiveComponent } from './components/live/live.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FacebookModule } from 'ngx-facebook';
import { EditorComponent } from './components/editor/editor.component';
import { AddSubComponent } from './components/add-sub/add-sub.component';
import { WriterSearchPipe } from './pipes/writer-search.pipe';
import { AddFileComponent } from './components/add-file/add-file.component';
import { AllFilesComponent } from './components/all-files/all-files.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  declarations: [
    DashboardMainComponent,
    AddCategoryComponent,
    CategoryComponent,
    AddUserComponent,
    AllUsersComponent,
    TableFilterPipe,
    SearchCategoryPipe,
    AddArticleComponent,
    UnacceptedArticlesComponent,
    ArticleDetailsComponent,
    CategoryDetailsComponent,
    SerachArticleTitlePipe,
    LoginComponent,
    AddQuestionComponent,
    QuestionsComponent,
    AddAdvertismentComponent,
    AddWriterComponent,
    WritersComponent,
    AdsComponent,
    LiveComponent,
    EditorComponent,
    AddSubComponent,
    WriterSearchPipe,
    AddFileComponent,
    AllFilesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    YouTubePlayerModule,
    FacebookModule.forRoot(),
    PaginationModule.forRoot()
  ]  ,providers: [
    DatePipe
  ],
})
export class DashboardModule { }
