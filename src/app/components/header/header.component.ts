import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoriesNames } from 'src/app/models/categoriesNames.model';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { environment } from 'src/environments/environment';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Navigation,Autoplay]);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuAnimation:boolean=false
  categories:any[]
  todayDate = new Date()
  mangersNames:any={}
  constructor(public smallNavbarService:SmallnavbarService,
    private categoriesService:CategoriesService,
    public adsService:AddvertismentService,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.getNames()
   

    this.adsService.headerAds=[]
    this.adsService.allAds.subscribe(
      (ads:any) => {
        
        if(ads?.length) {
      
            for(let i = 0 ; i < ads.length;i++) {
                  if(ads[i].types?.length) {
                    for(let j = 0 ; j < ads[i].types?.length;j++) {
                      if(ads[i].types[j]=='logo') {
                        this.adsService.headerAds.push(ads[i])
                      }
                    }
                  }              
            }
        }
      
      }
    )
     this.getCategoriesName()
  }
  // start show mobile navbar on click
  showSmallNavBArMethod() {
    this.smallNavbarService.showSmallNavBAr=true
    setTimeout(() => {
     this.menuAnimation=true
    }, 50);
 }
   // start close mobile navbar on click
 closeSmallNavBArMethod() {
  this.menuAnimation=false
  setTimeout(() => {
    this.smallNavbarService.showSmallNavBAr=false
  }, 500);
}
// start get nav bar links
getCategoriesName() {
  this.categoriesService.getCategories().subscribe(
    (categoriesNames:any) => {
      this.categories=categoriesNames.data
    },
    err => {}
  )
}
// start show sub category navbar
routeToMainCategory(subCategory,id,Cattype,name) {
  if (subCategory?.length && Cattype!= '1') {
    this.smallNavbarService.containerOfSubCategory = [
      {name,id,Cattype},
      ...subCategory
    ]
    localStorage.setItem("containerOfSubCategory",JSON.stringify(this.smallNavbarService.containerOfSubCategory))
  } else {
    this.smallNavbarService.containerOfSubCategory = []
  }
 // this.checkCategoryType(Cattype,id,name)
}
clearSub() {
  this.smallNavbarService.containerOfSubCategory = []
  localStorage.setItem("containerOfSubCategory",JSON.stringify(this.smallNavbarService.containerOfSubCategory))
}
checkCategoryType(Cattype,id,name) {
  if (Cattype=="5") this.router.navigate([`/main/art/${id}`])
  else if (Cattype=="4") this.router.navigate([`/main/sports/${id}`])
  else if (Cattype=="17") this.router.navigate([`/main/woman/${id}`])
  else if (Cattype=="9") this.router.navigate([`/main/articles/${id}`])
  else this.router.navigate([`/main/category/${id}/${false}/${name}`])
}
routeToSubCategoory() {
  
}
getNames() {
  this.http.get(`${environment.apiUrl}setting`).subscribe(
    (res:any) => {
      this.mangersNames={
        first:res?.chairmanOfBoardOfDirectors,
        second:res?.editor
      }
    } , err => {
    }
  )
}
}
