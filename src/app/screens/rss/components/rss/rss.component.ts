import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss']
})
export class RssComponent implements OnInit {
  categories
  loading:boolean=true
  constructor(public adsService:AddvertismentService,
    private title:Title,
    private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getCategoriesName()
    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.title.setTitle('rss')
    this.adsService.allAds.subscribe(
      (ads:any) => {
 
        if(ads?.length) {
      
            for(let i = 0 ; i < ads.length;i++) {
              if(ads[i].types?.length) {
                    let left = ads[i].types.filter(item => item=='left' || item=='homepage')
                    let right = ads[i].types.filter(item => item=='right' || item=='homepage')
                    if(left?.length==2) this.adsService.leftAds.push(ads[i])
                    if(right?.length==2) this.adsService.rightAds.push(ads[i])
                 
                 }              
            }
        }
      
      }
    )
  }
  getCategoriesName() {
    this.categoriesService.getCategories().subscribe(
      (categoriesNames:any) => {

        this.categories=categoriesNames.data
        this.loading=false
      },
      err => {
        this.loading=false
      }
    )
  }
}
