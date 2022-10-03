import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdvertismentComponent } from './components/add-advertisment/add-advertisment.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AddSubComponent } from './components/add-sub/add-sub.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddWriterComponent } from './components/add-writer/add-writer.component';
import { AdsComponent } from './components/ads/ads.component';
import { AllFilesComponent } from './components/all-files/all-files.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryComponent } from './components/category/category.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { EditorComponent } from './components/editor/editor.component';
import { LiveComponent } from './components/live/live.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { UnacceptedArticlesComponent } from './components/unaccepted-articles/unaccepted-articles.component';
import { WritersComponent } from './components/writers/writers.component';
import { AdminGuard } from './guard/admin.guard';
import { EditorGuard } from './guard/editor.guard';
import { LoginGuard } from './guard/login.guard';
import { WriterGuard } from './guard/writer.guard';

const routes: Routes = [
  {
    path:'main',
    component:DashboardMainComponent,
    children:[
      {
        path:'add-category',
        canActivate:[AdminGuard],
        component:AddCategoryComponent
      },
      {
        path:'add-sub',
        canActivate:[AdminGuard],
        component:AddSubComponent
      },
      {
        path:'editor',
        canActivate:[AdminGuard],
        component:EditorComponent
      },
      {
        path:'add-article',
        canActivate:[EditorGuard],
        component:AddArticleComponent
      },
      {
        path:'add-file',
        canActivate:[EditorGuard],
        component:AddFileComponent
      },
      {
        path:'categories',
        canActivate:[WriterGuard],
        component:CategoryComponent
      },
      // {
      //   path:'accept-articles',
      //   canActivate:[WriterGuard],
      //   component:UnacceptedArticlesComponent     
      // },
      {
        path:'article-details/:id',
        canActivate:[WriterGuard],
        component:ArticleDetailsComponent
      },
      {
        path:'add-user',
        canActivate:[AdminGuard],
        component:AddUserComponent
      },
      {
        path:'users',
        component:AllUsersComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'advertisment',
        component:AdsComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'add-advertisment',
        component:AddAdvertismentComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'add-writer',
        component:AddWriterComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'writers',
        component:WritersComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'live',
        component:LiveComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'login',
        component:LoginComponent,
        canActivate:[LoginGuard]
      },
      {
        path:'articles/:id/:sub/:name',
        component:CategoryDetailsComponent,
        canActivate:[WriterGuard]
      },
      {
        path:'add-question',
        component:AddQuestionComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'question',
        component:QuestionsComponent,
        canActivate:[AdminGuard]
      }
    ]
  },
  {
    path:'',
    redirectTo:'main/categories'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
