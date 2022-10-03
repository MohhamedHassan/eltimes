import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';

@Component({
  selector: 'app-we-are',
  templateUrl: './we-are.component.html',
  styleUrls: ['./we-are.component.scss']
})
export class WeAreComponent implements OnInit {

  constructor(private adsService:AddvertismentService,
    private title:Title) { }

  ngOnInit(): void {
    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.title.setTitle("من نحن")
    this.adsService.allAds.subscribe(
      (ads:any) => {
 
        if(ads?.length) {
      
            for(let i = 0 ; i < ads.length;i++) {
              if(ads[i].types?.length) {
                console.log(ads[i].types)
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

}
