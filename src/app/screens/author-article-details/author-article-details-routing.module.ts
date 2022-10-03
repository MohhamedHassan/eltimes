import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorArticleDetailsComponent } from './components/author-article-details/author-article-details.component';

const routes: Routes = [
  {
    path:'',
    component:AuthorArticleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorArticleDetailsRoutingModule { }
