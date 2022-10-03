import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit , Inject, PLATFORM_ID, HostListener, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { environment } from 'src/environments/environment';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { LiveService } from 'src/app/screens/dashboard/services/live.service';
import { FacebookService,InitParams } from 'ngx-facebook';
import { ArtilceService } from 'src/app/screens/dashboard/services/artilce.service';
import { ActivatedRoute } from '@angular/router';
SwiperCore.use([Navigation,Autoplay]);
declare var twttr: any;
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit,OnDestroy {
  newsSliderIndex:number=-1
  lastSlide:boolean=false 
  intervall
  newsSlider:any[]
  sportsLoading:boolean=true
  news:Array<any>=[]
  live=""
  IframFixedClass:boolean=false
  hideFixedIframe:boolean=true
  areaone=[]
  areatwo=[]
  areathree=[]
  areafour=[]
  liveType
  constructor(public navBarService:SmallnavbarService,
    private liveService:LiveService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private title:Title,
    private meta:Meta,
    private cd:ChangeDetectorRef,
    private fb: FacebookService,
    private sanitizer: DomSanitizer,
    private activatedRoute:ActivatedRoute,
    private artileService:ArtilceService,
    private categoriesService:CategoriesService,
    public adsService:AddvertismentService,) { }

  ngOnInit(): void {
 

    this.getLive()
    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.activatedRoute.params.subscribe(
      params => {
        this.adsService.allAds.subscribe(
          ads =>  {
            if(ads?.length) {
              for(let i = 0 ; i < ads.length;i++) {
                if(ads[i].categories?.length) {
                  for(let j =0;j<ads[i].categories?.length;j++) {
                    if(ads[i].categories[j]._id==params?.id) {
                      if(ads[i]?.seq?.length) {
                        for(let k = 0;k<ads[i].seq?.length;k++) {
                          if(ads[i].seq[k]==1) this.areaone.push(ads[i])
                          if(ads[i].seq[k]==2) this.areatwo.push(ads[i])
                          if(ads[i].seq[k]==3) this.areathree.push(ads[i])
                          if(ads[i].seq[k]==4) this.areafour.push(ads[i])
                        }
                      }
                      if(ads[i]?.types?.length) {
                        for(let t = 0;t<ads[i].types?.length;t++) {
                          if(ads[i].types[t]=='left') {
                            this.adsService.leftAds.push(ads[i])
                          }
                          if(ads[i].types[t]=='right') {
                            this.adsService.rightAds.push(ads[i])
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        )
        this.getCategoryById(params?.id)
        this.getCatSlider(params?.id)
      }
    )
  }
getCategoryById(id) {
  this.categoriesService.getCategoryById(id).subscribe(
    (res:any)=> {
      this.news=res?.subcategories
      this.news=this.news.filter(i=> i?.posts?.length)
      let metaData = res?.metaData
      this.title.setTitle(metaData.title)
      this.meta.updateTag(  
        { name: 'keywords', content: metaData.keywords }
      ) 
      this.meta.updateTag(  
        { name: 'description', content: metaData.desc}
      ) 
      this.sportsLoading=false
    }
  )
}


setIntervall() {
  if (isPlatformBrowser(this.platformId)) {
 this.intervall =setInterval(() => { 
    for (let i = 0;i<this.newsSlider?.length;i++) this.newsSlider[i].show=false;
    this.newsSliderIndex++
    if(this.newsSliderIndex==this.newsSlider?.length) {
      this.newsSliderIndex=0
      this.lastSlide=true
    } else {
      this.lastSlide=false
    }
    this.newsSlider[this.newsSliderIndex].show=true
}, 5000);
  }
}
sliderLeft() { 
  clearInterval(this.intervall)
   for (let i = 0;i<this.newsSlider?.length;i++) this.newsSlider[i].show=false;
  if(this.newsSliderIndex==0) this.newsSliderIndex=this.newsSlider?.length-1
  else if(this.lastSlide)  this.newsSliderIndex=this.newsSlider?.length-2
  else this.newsSliderIndex-=1
  this.newsSlider[this.newsSliderIndex].show=true
  this.setIntervall()
}
sliderRight() { 
  clearInterval(this.intervall)
   for (let i = 0;i<this.newsSlider?.length;i++) this.newsSlider[i].show=false;
   if(this.newsSliderIndex==this.newsSlider?.length-1)  this.newsSliderIndex=0
  else this.newsSliderIndex+=1
  this.newsSlider[this.newsSliderIndex].show=true
  this.setIntervall()
}

getLive() {
  this.liveService.getLive().subscribe(
    (res:any) => {
      if(res?.data?.length) {
        if (isPlatformBrowser(this.platformId)) {
          this.live=res?.data[0]?.url.trim()
          if(this.live?.length<20) this.liveType=0
          else if (this.live.includes('<blockquote')) this.liveType=1
          else this.liveType=2
          let initParams: InitParams = {
            xfbml: true,
            version: 'v2.8'
            };
            setTimeout((()=>
            this.fb.init(initParams)),200);
            setTimeout((()=> twttr.widgets.load()),200);
        } else {this.live=''}
      }
    } , err => {
    }
  )
}



@HostListener('window:scroll', ['$event']) 
onScroll(event) {
  if (isPlatformBrowser(this.platformId)) {
    if(window.scrollY>700  && this.IframFixedClass==false && this.live ) {
      this.IframFixedClass=true
      let initParams: InitParams = {
        xfbml: true,
        version: 'v2.8'
        };
        setTimeout((()=>
        this.fb.init(initParams)),200);
        setTimeout((()=> twttr.widgets.load()),200);
    }
    if (window.scrollY<700 ){
      this.IframFixedClass=false
      this.hideFixedIframe=true
    }

  }
}

getCatSlider(id) {
  let params = {
    status:'true',
    categories:id,
    positions:'categorySlider',
    sort:'createdAt:-1'
  }
  this.artileService.getArticles(params).subscribe(
    (res:any) => {
  
      this.newsSlider=res?.data
      if(this.newsSlider?.length) {
        for(let i = 0 ; i <this.newsSlider?.length;i++) {
          this.newsSlider[i].show=false
        } 
        this.setIntervall()  
      }
    }
  )
}
ngOnDestroy(): void {
}
}
