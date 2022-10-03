import { Component, OnInit,Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { LiveService } from '../../services/live.service';
import { emptyContent } from '../../validators/emptyInput';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { FacebookService,InitParams } from 'ngx-facebook';
declare var twttr: any;
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  loading:boolean=true
  addLiveLoading:boolean=false
  AddLiveForm:FormGroup
  htmlContainer=""
  liveID
  deleteLoading:boolean=false
  liveType
  constructor(private fb:FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private toastr:ToastrService,
    private sanitizer: DomSanitizer,
    private fbb: FacebookService,
    private liveService:LiveService) { }

  ngOnInit(): void {
    this.AddLiveForm = this.fb.group({
      url:['',[Validators.required,emptyContent]]
    })
    this.getLive()
  }
  
  getLive() {
    this.loading=true
    this.liveService.getLive().subscribe(
      (res:any) => {
        this.loading=false
        console.log(res)
         if(res?.data?.length) {
          if (isPlatformBrowser(this.platformId)) {
            this.htmlContainer=res?.data[0]?.url.trim()
            if(this.htmlContainer?.length<20) this.liveType=0
            else if (this.htmlContainer.includes('<blockquote')) this.liveType=1
            else this.liveType=2
            this.liveID=res?.data[0]?._id
            let initParams: InitParams = {
              xfbml: true,
              version: 'v2.8'
              };
              setTimeout((()=>
              this.fbb.init(initParams)),200);
              setTimeout((()=> twttr.widgets.load()),200);
              
          }
        } else {
          this.htmlContainer=''
        }
      } , err => {
        this.loading=false
      }
    )
  }
  addLive(formValue) {
    if(this.AddLiveForm.valid) {
      this.addLiveLoading=true
      let formData = new FormData()
      formData.append("url",formValue.url.trim())
      this.liveService.addLive(formData).subscribe(
        res => {
          this.addLiveLoading=false
          this.toastr.success("تم")
          this.AddLiveForm.reset()
          this.getLive()
        } , err => {
        }
      )
    }
  }
  deleteLive() {
    this.deleteLoading=true
    this.liveService.deleteLive(this.liveID).subscribe(
      res => {
        this.deleteLoading=false
        this.toastr.success("تم")
        this.getLive()
      } , err => {
        this.deleteLoading=false
      }
    )
  }
  bypassSecurityTrustHtml(object):any {
    if (object) {
      return this.sanitizer.bypassSecurityTrustHtml(object)
    }
  } 
}
