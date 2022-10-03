import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories } from 'src/app/models/categories.model';
import { categoriesParams } from 'src/app/models/categoriesParams.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { ArtilceService } from 'src/app/screens/dashboard/services/artilce.service';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Navigation,Autoplay]); 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit,OnDestroy {
  articlesLoading:boolean=true
  articless:any[]
  totalPages:number=0
  pageTitle:string
  AllParams:any={}
  categoryId
  suborcategory
  ads=[]
  constructor(public navBarService:SmallnavbarService,
    private activatedRoute:ActivatedRoute,
    private title:Title,
    private meta:Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    private artileService:ArtilceService,
    public adsService:AddvertismentService) { }

  ngOnInit(): void {
    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.activatedRoute.params.subscribe(
      params => {
        this.AllParams={}
        this.pageTitle=params?.name
        if(params.sub=='true') this.AllParams.subcategories=params?.id
        else if (params.sub=='false')  this.AllParams.categories=params?.id
        this.AllParams.status=true
        this.AllParams.page=1
        this.AllParams.limit=9
        this.AllParams.sort='createdAt:-1'
        this.suborcategory=params.sub
        this.getArticles(this.AllParams,this.suborcategory)
      }
    )
  }
  getArticles(AllParams,subOrCat) {
    this.articlesLoading=true
    this.artileService.getArticles(AllParams).subscribe(
      (categories:any) => {
        this.articlesLoading=false
        this.articless=categories?.data
        if(this.articless?.length) {
          this.adsService.allAds.subscribe(
            ads =>  {
              if(ads?.length) {
                for(let i = 0 ; i < ads.length;i++) {
                  if(ads[i].categories?.length) {
                    for(let j =0;j<ads[i].categories?.length;j++) {
                      if(ads[i].categories[j]._id==this.articless[0]?.categories[0]?._id) {
                       
                        if(ads[i]?.seq?.length) {
                          for(let k = 0;k<ads[i].seq?.length;k++) {
                            if(ads[i].seq[k]==1) {
                              this.ads.push(ads[i])
                              break
                            }
                            else if(ads[i].seq[k]==2) {
                              this.ads.push(ads[i])
                              break
                            }
                            else if(ads[i].seq[k]==3) {
                              this.ads.push(ads[i])
                              break
                            }
                            else if(ads[i].seq[k]==4) {
                              this.ads.push(ads[i])
                              break
                            }
                            else if(ads[i].seq[k]==5) {
                              this.ads.push(ads[i])
                              break
                            }
                            else if(ads[i].seq[k]==6) {
                              this.ads.push(ads[i])
                              break
                            }
                            else if(ads[i].seq[k]==7) {
                              this.ads.push(ads[i])
                              break
                            }
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
         if(subOrCat=='false') {
          this.title.setTitle(this.articless[0]?.categories[0].metaData?.title)
          this.meta.updateTag(  
            { name: 'keywords', content: this.articless[0]?.categories[0]?.keywords }
          ) 
          this.meta.updateTag(  
            { name: 'description', content: this.articless[0]?.categories[0]?.desc}
          ) 
         }  else {
          this.title.setTitle(this.articless[0]?.subcategories[0].metaData?.title)
          this.meta.updateTag(  
            { name: 'keywords', content: this.articless[0]?.subcategories[0]?.keywords }
          ) 
          this.meta.updateTag(  
            { name: 'description', content: this.articless[0]?.subcategories[0]?.desc}
          ) 
         } 
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



  pageChanged(event) {
    this.AllParams.page = event.page;
    this.getArticles(this.AllParams,this.suborcategory)
  }
  ngOnDestroy(): void {
  }
}
