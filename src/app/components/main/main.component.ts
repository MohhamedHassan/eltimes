import { Component, OnInit , Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef, AfterContentChecked, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Navigation,Autoplay]);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,AfterContentChecked {
showupbutton=false
  constructor(public smallNavbarService:SmallnavbarService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    public adsService:AddvertismentService,
    private router:Router) {

  }

  upButton() {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0,0)
  }
    
  }
  routeToSearch(input) {
    if(input.value.trim().length>0) {
      this.router.navigate([`/main/search/${input.value}`])
      input.value=''
    }
  }
  ngOnInit(): void {
  }
  ngAfterContentChecked():any {
    this.cdr.detectChanges();
  }
  @HostListener('window:scroll', ['$event']) 
onScroll(event) {
  if(window.scrollY>700){
    this.showupbutton=true
  }else{this.showupbutton=false}
}
}
