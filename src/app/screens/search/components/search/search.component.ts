import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  loading:boolean=true
  searchResult
  constructor(private http:HttpClient,
    private title:Title,
    private adsService:AddvertismentService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.title.setTitle('search')
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
        this.activatedRoute.params.subscribe(
      param => {
        this.http.get(`${environment.apiUrl}post?keywords=${param.id}&limit=10000&status=true&sort=createdAt:-1`).subscribe(
          (res:any)=> {
            this.loading=false
            this.searchResult=res?.data
          } , err => {
            this.loading=false
          }
        )
      }
    )
  }

}
