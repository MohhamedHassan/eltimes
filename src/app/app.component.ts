import { Component} from '@angular/core';
import { AddvertismentService } from './screens/dashboard/services/addvertisment.service';
import { AuthService } from './screens/dashboard/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'التايمز EG';
  constructor(private authService:AuthService,
    private adsService:AddvertismentService) {
    this.getUSer()
    this.getAds()
  }

  getUSer() {
    if(this.authService.isLogin()) {
          this.authService.userProfile=JSON.parse(localStorage.getItem('userInfo'))
    }
  }
  getAds() {
    this.adsService.getAds().subscribe(
      (res:any) => {
        this.adsService.allAds.next(res?.data)
      },
      err =>{}
    )
  }

}
