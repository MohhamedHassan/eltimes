import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import ar from '@angular/common/locales/ar';
import { registerLocaleData } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FacebookModule } from 'ngx-facebook';
// import { YouTubePlayerModule } from '@angular/youtube-player';
// import { FacebookModule } from 'ngx-facebook';
registerLocaleData(ar);
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    YouTubePlayerModule,
    FacebookModule.forRoot()
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
