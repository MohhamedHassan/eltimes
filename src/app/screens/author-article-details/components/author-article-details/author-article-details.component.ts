import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from 'src/app/screens/article-details/services/comments.service';
import { ArtilceService } from 'src/app/screens/dashboard/services/artilce.service';
import { emptyContent } from 'src/app/screens/dashboard/validators/emptyInput';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { FacebookService,InitParams } from 'ngx-facebook';
declare namespace instgrm {
  namespace Embeds {
    function process(): void;
  }
}
declare var twttr: any;
@Component({
  selector: 'app-author-article-details',
  templateUrl: './author-article-details.component.html',
  styleUrls: ['./author-article-details.component.scss']
})
export class AuthorArticleDetailsComponent implements OnInit {

  addCommentForm:FormGroup
  articleId
  articleDetails
  addCommentLoading:boolean=false
  comments
  commonArticles
  mostRead
  loading:boolean=true
  content
  youtubeIframe:any="false"
  fbvideo:any="false"
  fbimage:any="false"
  constructor(public navBarService:SmallnavbarService,
    private fb:FormBuilder,
    private router:Router,
    private http:HttpClient,
    private fbb: FacebookService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer,
    private title:Title,
    private meta:Meta,
    public adsService:AddvertismentService,
    private activatedRoute:ActivatedRoute,
    private articlesService:ArtilceService,
    private commentsService:CommentsService) { }

  ngOnInit(): void {
    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.adsService.allAds.subscribe(
      (ads:any) => {
 
        if(ads?.length) {
      
            for(let i = 0 ; i < ads.length;i++) {
                  if(ads[i].article) {
                    if(ads[i]?.left) {
                      this.adsService.leftAds.push(ads[i])
                    }
                    if(ads[i]?.right) {
                      this.adsService.rightAds.push(ads[i])
                    }
                    if(ads[i]?.center) {
                      this.adsService.mainAds.push(ads[i])
                    }
                  }              
            }

        }
      
      }
    )
    this.activatedRoute.params.subscribe(
      param => {
        this.articleId=param.id
        this.articlesService.articleById(param.id).subscribe(
          (res:any) => {
         if(res?.SEO?.length) {
          if(res?.SEO[0]!=null) {
            this.title.setTitle(res?.SEO[0]?.title)
            this.meta.updateTag(  
              { name: 'keywords', content: res?.SEO[0]?.keywords }
            ) 
            this.meta.updateTag(  
              { name: 'description', content: res?.SEO[0]?.description }
            )    
        }
         }
            this.articleDetails=res
            this.fbvideo=res?.fbvideo
            this.fbimage=res?.fbimage
            if (isPlatformBrowser(this.platformId)) {
              let initParams: InitParams = {
                xfbml: true,
                version: 'v2.8'
                };
                setTimeout((()=>
                this.fbb.init(initParams)),200);
            }
            this.youtubeIframe=res?.video
            if(res?.content?.length) this.content=res?.content.split(" **_seperate_**,")
            this.loading=false
            if (isPlatformBrowser(this.platformId)) {
              setTimeout(() => {
                twttr.widgets.load();
                this.processEmbeddedInstagramPosts()
              }, 2000);
      
          
            }
            this.getCommonNews(res?.category)
            if(res?.code==406) this.router.navigate(['/error'])
            this.getComments(param.id)
          } , err => {
            this.loading=false
          } 
        )
      }
    )
    this.returnAddCommentForm()
    this.getMostREad()
  }
  getCommonNews(categoryId) {
    this.http.get(`${environment.apiUrl}apis/Common`,{params:{id:categoryId}}).subscribe(
      (res:any) => {
        this.commonArticles=res?.Data
      } , err => {
      }
    )
  }
  getMostREad() {
    this.http.get(`${environment.apiUrl}apis/MostRead`).subscribe(
      (res:any) => {
        this.mostRead=res?.Data
      } , err => {
      }
    )
  }
returnAddCommentForm() {
  this.addCommentForm = this.fb.group({
    name:['',[Validators.required, emptyContent]],
    email:['',[Validators.required,Validators.email]],
    content:['',[Validators.required,emptyContent]]
  })
}
addComment(value) {
  if(this.addCommentForm.valid) {
    let obj = {
      id:this.articleId,
      title:'title',
      ...value
    }
    this.addCommentLoading=true
    this.commentsService.addComment(obj).subscribe(
      res => {
        this.addCommentForm.reset()
        this.addCommentLoading=false
        this.getComments(this.articleId)
      } , err => {
        this.addCommentLoading=false
      }
    )
  }
}
getComments(id) {
  
  this.commentsService.getComments(id).subscribe(
    (res:any) => {
      this.comments=res?.Data
    } , err => {
    }
  )
}
bypassSecurityTrustHtml(object):any {

  if (object.includes("<iframe") || object.includes("facebook")) {
     
     return this.sanitizer.bypassSecurityTrustHtml(object)
    } else if (object.includes("twitter")) {
      return object
    }
    else { 
     return object
    }
 }
 
 public processEmbeddedInstagramPosts(): void {
  if (isPlatformBrowser(this.platformId)) {
    if (window) {
      instgrm.Embeds.process()
    }
}
   
 }
}
