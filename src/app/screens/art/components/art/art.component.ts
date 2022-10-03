import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit  , Inject, PLATFORM_ID} from '@angular/core';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { ActivatedRoute } from '@angular/router';
import { ArtilceService } from 'src/app/screens/dashboard/services/artilce.service';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit,OnDestroy {

  artSliderIndex:number=-1
  lastSlide:boolean=false
  totalPages:number=0
  intervall
  artSlider = []
  articlesLoading:boolean=true
  articless:any[] 
  pageTitle:string
  AllParams:any={} 
  areaone=[]
  areatwo=[]
  constructor(public navBarService:SmallnavbarService,
    private title:Title,
    private meta:Meta,
    private artileService:ArtilceService,
    private activatedRoute:ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    public adsService:AddvertismentService,
    ) { }
  ngOnInit(): void {
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
        this.AllParams={}
        this.AllParams.categories=params?.id
        this.AllParams.status=true
        this.AllParams.page=1
        this.AllParams.limit=9
        this.AllParams.sort='createdAt:-1'
        this.getArticles(this.AllParams)
        this.getCatSlider(params?.id)
      }
    )
  }


  getArticles(AllParams) {
    this.articlesLoading=true
    this.artileService.getArticles(AllParams).subscribe(
      (categories:any) => {
        this.articlesLoading=false
        this.articless=categories?.data
        if(this.articless?.length) {
          this.title.setTitle(this.articless[0]?.categories[0]?.metaData?.title)
          this.meta.updateTag(  
            { name: 'keywords', content: this.articless[0]?.categories[0]?.keywords }
          ) 
          this.meta.updateTag(  
            { name: 'description', content: this.articless[0]?.categories[0]?.desc}
          ) 
         }   
        this.totalPages=categories?.totalCount
        if (isPlatformBrowser(this.platformId)) {
          window.scroll(0,0)
      }
      } , err => {
        this.articlesLoading=false
      }
    )
  }
setIntervall() {
  if (isPlatformBrowser(this.platformId)) {
  this.intervall =setInterval(() => { 
     for (let i = 0;i<this.artSlider?.length;i++) this.artSlider[i].show=false;
     this.artSliderIndex++
     if(this.artSliderIndex==this.artSlider?.length) {
       this.artSliderIndex=0
       this.lastSlide=true
     } else {
       this.lastSlide=false
     }
     this.artSlider[this.artSliderIndex].show=true
 }, 5000);
  }

 }
 sliderLeft() { 
   clearInterval(this.intervall)
    for (let i = 0;i<this.artSlider?.length;i++) this.artSlider[i].show=false;
   if(this.artSliderIndex==0) this.artSliderIndex=this.artSlider?.length-1
   else if(this.lastSlide)  this.artSliderIndex=this.artSlider?.length-2
   else this.artSliderIndex-=1
   this.artSlider[this.artSliderIndex].show=true
   this.setIntervall()
 }
 sliderRight() { 
   clearInterval(this.intervall)
    for (let i = 0;i<this.artSlider?.length;i++) this.artSlider[i].show=false;
    if(this.artSliderIndex==this.artSlider?.length-1)  this.artSliderIndex=0
   else this.artSliderIndex+=1
   this.artSlider[this.artSliderIndex].show=true
   this.setIntervall()
 }
 pageChanged(event) {
  this.AllParams.page = event.page;
  this.getArticles(this.AllParams)
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
      this.artSlider=res?.data
      if(this.artSlider?.length) {
        for(let i = 0 ; i <this.artSlider?.length;i++) {
          this.artSlider[i].show=false
        } 
        this.setIntervall()  
      }
    }
  )
}
ngOnDestroy(): void {
}
}
