import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'main',
    component:MainComponent,
    children:[
      {
        path:'home',
        loadChildren:() => import('src/app/screens/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path:'rss',
        loadChildren:() => import('src/app/screens/rss/rss.module').then(m => m.RssModule)
      },
      {
        path:'category/:id/:sub/:name',
        loadChildren:() => import('src/app/screens/category/category.module').then(m => m.CategoryModule)
      },
      {
        path:'sports/:id',
        loadChildren:() => import('src/app/screens/sports/sports.module').then(m => m.SportsModule)
      },
      {
        path:'art/:id',
        loadChildren:() => import('src/app/screens/art/art.module').then(m => m.ArtModule)
      },
    
      {
        path:'woman/:id',
        loadChildren:() => import('src/app/screens/woman/woman.module').then(m => m.WomanModule)
      },
      {
        path:'articles/:id',
        loadChildren:() => import('src/app/screens/articles/articles.module').then(m => m.ArticlesModule)
      },
      // {
      //   path:'author-article-details/:id',
      //   loadChildren:() => import('src/app/screens/author-article-details/author-article-details.module').then(m => m.AuthorArticleDetailsModule)
      // },
      {
        path:'details/:id',
        loadChildren:() => import('src/app/screens/article-details/article-details.module').then(m => m.ArticleDetailsModule)
      },
      {
        path:'about-us',
        loadChildren:() => import('src/app/screens/who-we-are/who-we-are.module').then(m => m.WhoWeAreModule)
      },
      {
        path:'privacy',
        loadChildren:() => import('src/app/screens/privacy/privacy.module').then(m => m.PrivacyModule)
      },
      {
        path:'search/:id',
        loadChildren:() => import('src/app/screens/search/search.module').then(m => m.SearchModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/main/home',
    pathMatch:'full'
  },
  {
    path:'dashboard-page',
    loadChildren:() => import('src/app/screens/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'**',
    component:NotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
