import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit , Inject, PLATFORM_ID} from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { ArtilceService } from 'src/app/screens/dashboard/services/artilce.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/posts';
@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit,OnDestroy {
 womanPageLoading:boolean=true
 mainImage
 subCategories:Posts[]
 mixArticles:any[]
 totalPages:number=0
 categories
 AllParams
 areaone=[]
 areatwo=[]
 areathree=[]
 areafour=[]
  constructor(public navBarService:SmallnavbarService,
    private categoriesService:CategoriesService,
    private artileService:ArtilceService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private title:Title,
    public adsService:AddvertismentService,
    private activatedRoute:ActivatedRoute,
    private meta:Meta,
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
        this.getWomenArticles(params?.id)
        this.getWomenSlider(params?.id)
      })
 this.getCategoriesName()
  }
ngOnDestroy(): void {
  this.navBarService.hasSubCategory=false
}

getCategoriesName() {
  this.categoriesService.getCategories().subscribe(
    (categoriesNames:any) => {
      if(categoriesNames.data?.length) {
        this.categories=categoriesNames?.data.find(i => i?.seqHomepage==22)
        if(this.categories) {
          this.getMix(this.categories?._id)
        }
      }
    },
    err => {}
  )
}
getMix(id) {
this.AllParams = {
  categories:id,
  limit:9,
  page:1,
  status:true,
  sort:'createdAt:-1'
}
    this.artileService.getArticles(this.AllParams).subscribe(
      (articles:any) => {
        this.mixArticles=articles?.data
    
        this.totalPages=articles?.totalCount
        if (isPlatformBrowser(this.platformId)) {
          window.scroll(0,0)
      }
      } , err => {
      }
    )
}
getWomenArticles(id) {
  this.categoriesService.getCategoryById(id).subscribe(
    (res:any)  => {
      this.subCategories=res?.subcategories
      this.subCategories= this.subCategories.filter(i=>i.posts?.length)
      let metaData = res?.metaData
      this.title.setTitle(metaData.title)
      this.meta.updateTag(  
        { name: 'keywords', content: metaData.keywords }
      ) 
      this.meta.updateTag(  
        { name: 'description', content: metaData.desc}
      ) 
      this.womanPageLoading=false
    }
  )
}
getWomenSlider(id) {
  let params = {
    status:'true',
    categories:id,
    positions:'categorySlider',
    sort:'createdAt:-1'
  }
  this.artileService.getArticles(params).subscribe(
    (articles:any) => {
      if(articles?.data?.length) {
        this.mainImage=articles?.data[0]
      }
    } , err => {
    }
  )
}
pageChanged(event) {    
  this.AllParams.page = event.page;
  this.getMix(this.AllParams)
}
}
