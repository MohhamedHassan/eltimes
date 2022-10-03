import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Inject, PLATFORM_ID} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtilceService } from 'src/app/screens/dashboard/services/artilce.service';
import { emptyContent } from 'src/app/screens/dashboard/validators/emptyInput';
import { SmallnavbarService } from 'src/app/services/smallnavbar.service';
import { environment } from 'src/environments/environment';
import { CommentsService } from '../../services/comments.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { FacebookService,InitParams } from 'ngx-facebook';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Navigation,Autoplay]); 
declare namespace instgrm {
  namespace Embeds {
    function process(): void;
  }
}
declare var twttr: any;
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  addCommentForm:FormGroup
  articleId
  articleDetails:any
  addCommentLoading:boolean=false
  comments
  commonArticles
  mostRead
  content
  loading:boolean=true
 ads=[]
 showinsta=false
  constructor(public navBarService:SmallnavbarService,
    private fb:FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router:Router,
    private http:HttpClient,
    private title:Title,
    private meta:Meta,
    private sanitizer: DomSanitizer,
    private fbb: FacebookService,
    private activatedRoute:ActivatedRoute,
    private articlesService:ArtilceService,
    public adsService:AddvertismentService,
    private commentsService:CommentsService) { }

  ngOnInit(): void {


    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.adsService.allAds.subscribe(
      ads =>  {
        if(ads?.length) {
          for(let i = 0 ; i < ads.length;i++) {
            if(ads[i]?.types?.length) {
              for(let t = 0;t<ads[i].types?.length;t++) {
                if(ads[i].types[t]=='left') {
                  this.adsService.leftAds.push(ads[i])
                }
                if(ads[i].types[t]=='right') {
                  this.adsService.rightAds.push(ads[i])
                }
                if(ads[i].types[t]=='articledetails') {
                  this.ads.push(ads[i])
                }
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
            this.articleDetails=res
            if(this.articleDetails?.content?.length) {
              for(let i = 0;i<this.articleDetails?.content?.length;i++) {
                if(this.articleDetails?.content[i]?.twitterOrInstagramHtml){
                  this.articleDetails.content[i].twitterOrInstagramHtml=this.sanitizer.bypassSecurityTrustHtml(this.articleDetails?.content[i].twitterOrInstagramHtml)
                } 
             }
            }
              if (isPlatformBrowser(this.platformId)) {
                let initParams: InitParams = {
                  xfbml: true,
                  version: 'v2.8'
                  };
                  setTimeout((()=>
                  this.fbb.init(initParams)),200); 
              }
    
        this.title.setTitle(res?.metaData?.title)
        this.meta.updateTag(  
          { name: 'keywords', content: res?.metaData?.keywords }
        ) 
        this.meta.updateTag(  
          { name: 'description', content: res?.metaData?.desc }
        )    
        this.meta.updateTag(  
          { property: 'og:image', content: `${res?.main?.image?.image?.file?.src}` }
        )
        this.meta.updateTag(  
          { property: 'og:locale', content: `ar_Ar` }
        )
        this.meta.updateTag(  
          { property: 'og:type', content: `article` }
        )
            this.meta.updateTag(  
          { property: 'og:url', content: `https://eltimeseg.com/main/details/${param.id}` }
        )
        this.meta.updateTag(  
          { property: 'article:published_time', content: `${this.articleDetails?.updatedAt}` }
        )
            this.meta.updateTag(  
          { property: 'article:modified_time', content: `${this.articleDetails?.updatedAt}` }
        )
        this.meta.updateTag(  
          { property: 'og:updated_time', content: `${this.articleDetails?.updatedAt}` }
        )
        this.meta.addTag(  
          { property: 'og:site_name', content: `التايمز EG` }
        )
        this.meta.updateTag(  
          { property: 'og:title', content: `${res?.main?.title} | التايمز EG` }
        ) 
        this.meta.updateTag(  
          { property: 'og:description', content: `${res?.metaData?.desc}` }
        ) 
        let ogimage = res?.main?.image?.image?.file?.src.split('.')
        this.meta.updateTag(  
          { property: 'og:image:type', content: `image/${ogimage[ogimage.length-1]}`}
        ) 
        this.meta.updateTag(  
          { name: 'twitter:image', content: `${res?.main?.image?.image?.file?.src}` }
        )
        this.meta.updateTag(  
          { name: 'twitter:card', content: `summary_large_image` }
        )
        this.meta.updateTag(  
          { name: 'twitter:title', content: `${res?.main?.title} | التايمز EG` }
        )   

        
          
           
            if (isPlatformBrowser(this.platformId)) {
              setTimeout(() => {
                twttr.widgets.load();
                this.processEmbeddedInstagramPosts()
              }, 2000);
            
          
            }
            if(res?.categories?.length) {
              this.getCommonNews(res?.categories[0]?._id,this.articleId)
            } 
            
            this.getComments(param.id)
            this.loading=false
          } , err => {
            this.loading=false
          } 
        )
      }
    )
    this.getMostREad()
    this.returnAddCommentForm()
  }
  getCommonNews(categoryId,articleid) {
    this.http.get(`${environment.apiUrl}post?categories=${categoryId}&limit=4&sort=createdAt:-1`).subscribe(
      (res:any) => {
        this.commonArticles=res?.data
        if(this.commonArticles?.length) {
          this.commonArticles=this.commonArticles.filter(i=>i?._id!=articleid)
        }
      } , err => {
      }
    )
  }
  getMostREad() {
    this.http.get(`${environment.apiUrl}post?sort=createdAt:-1 views:-1&limit=4&status=true`).subscribe(
      (res:any) => {
        this.mostRead=res?.data
      } , err => {
      }
    )
  }
returnAddCommentForm() {
  this.addCommentForm = this.fb.group({
    name:['',[Validators.required, emptyContent]],
    email:['',[Validators.required,Validators.email]],
    comment:['',[Validators.required,emptyContent]]
  })
}
addComment(value) {
  if(this.addCommentForm.valid) {
    this.addCommentLoading=true
    let obj = {
      post:this.articleId,
      ...value
    }
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
      this.comments=res?.data
    } , err => {
    }
  )
}

 
processEmbeddedInstagramPosts(): void {
  if (isPlatformBrowser(this.platformId)) {
    if (window['instgrm']) {
      instgrm.Embeds.process()
    }
}
}

}
