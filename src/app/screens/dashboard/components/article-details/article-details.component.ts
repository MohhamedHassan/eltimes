import {  Component, OnInit, TemplateRef , Inject, PLATFORM_ID} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CommentsService } from 'src/app/screens/article-details/services/comments.service';
import { ArtilceService } from '../../services/artilce.service';
import { AuthService } from '../../services/auth.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { FacebookService,InitParams } from 'ngx-facebook';
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
  loading:boolean=true
  categoryDetails
  articleId
  deleteOrAcceptArticleLoading:boolean=false
  articleContent:any[];
  comments
  youtubeIframe="false"
  fbimage="false"
  fbvideo="false"
  constructor(private articleservice:ArtilceService,
    private modalService: BsModalService,
    private toastrservice:ToastrService,
    private router:Router,
    private fbb: FacebookService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public authService:AuthService,
    private commentsService:CommentsService,
    private activatedRoute:ActivatedRoute,
    private sanitizer: DomSanitizer) { }
  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res:any) => {
        this.articleId=res.id
        this.getArticleDetails(res.id);
      },
      err => {}
    )
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
getArticleDetails(id) {
  this.loading=true
  this.articleservice.articleById(id).subscribe(
    (res:any) => {
      this.loading=false
      this.categoryDetails=res;
      console.log(res)
      if (isPlatformBrowser(this.platformId)) {
        let initParams: InitParams = {
          xfbml: true,
          version: 'v2.8'
          };
          setTimeout((()=>
          this.fbb.init(initParams)),200);
      }
      this.getComments(id)
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          twttr.widgets.load();
          this.processEmbeddedInstagramPosts()
        }, 2000);

    
      }
     
    },
    err => {
      this.loading=false
    }
  )
}

deleteArtice() {
  this.deleteOrAcceptArticleLoading=true
  this.articleservice.deleteArticle(this.articleId).subscribe(
    res => {
      this.deleteOrAcceptArticleLoading=false
        this.toastrservice.success("تم حذف المقالة بنجاح")
        this.router.navigate(["/dashboard-page/main/categories"])
      this.modalRef.hide()
    } , err => {
      this.deleteOrAcceptArticleLoading=false
    }
  )
}
acceptArticlee() {
  this.deleteOrAcceptArticleLoading=true
  this.articleservice.editArticle(this.articleId,{status:true}).subscribe(
    res => {
      this.deleteOrAcceptArticleLoading=false
      this.toastrservice.success("تم قبول المقالة بنجاح")
      this.modalRef.hide()
      this.getArticleDetails(this.articleId)
    }
  )
}



public processEmbeddedInstagramPosts(): void {
  if (isPlatformBrowser(this.platformId)) {
    if (window['instgrm']) {
      instgrm.Embeds.process()
    }
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
loadingDeleteComment:boolean=false
deleteComment(id) {
  this.loading=true
  this.commentsService.deleteComment(id).subscribe(
    (res:any) => {
      this.getComments(this.articleId)
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          twttr.widgets.load();
          this.processEmbeddedInstagramPosts()
        }, 2000);

    
      }
      this.loading=false
    } , err => {
      this.loading=false
    }
  )
}
}

