import { Component, OnInit, TemplateRef , Inject, PLATFORM_ID } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AddvertismentService } from 'src/app/screens/dashboard/services/addvertisment.service';
import { AddQuestionService } from 'src/app/screens/dashboard/services/add-question.service';
import { environment } from 'src/environments/environment';

import { SmallnavbarService } from 'src/app/services/smallnavbar.service';

import { Title } from '@angular/platform-browser';
import { Posts } from 'src/app/models/posts'; 
import { ArtilceService } from 'src/app/screens/dashboard/services/artilce.service';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Navigation,Autoplay]); 
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'] 
})
export class HomePageComponent implements OnInit {
 
  mainnewsLine
  urgent:any[]
  news:Posts
  politics:Posts
  accedint:Posts
  sport:Posts
  art:Posts
  world:Posts
  arabic:Posts
  selected:Posts
  opinion:Posts
  states:Posts
  eco:Posts
  invReports:Posts
  reads:any[]
  famous:Posts
  tv:Posts
  health:Posts
  women:Posts
  albums:Posts
  regligion:Posts 
  education:Posts
  tech:Posts
  Question:{
    title:any,
    answers:any[],
    _id:any
  }
  videos:Posts
  newsSlider = []
  sportsSlider:any[]
  missSlider=[]
  newsSliderIndex:number=0
  sportsSliderIndex:number=0
  loading:boolean=true
  sportsSliderInterval
  constructor(private http:HttpClient,
    private title:Title,
    private toastr:ToastrService,
    public navBarService:SmallnavbarService,
    private artileService:ArtilceService,
    public adsService:AddvertismentService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: BsModalService,
    private questionService:AddQuestionService) {
      this.title.setTitle('التايمز EG')
  }
  // start swiperjs config
  swiperVideosConfig: any = {
    slidesPerView: "2.6",
    spaceBetween: "50",
    pagination: "{ clickable: true ,type: 'fraction'}",
    navigation: "true",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }

  }
  areaone=[]
  areatwo=[]
  areathree=[]
  areafour=[]
  areafive=[]
  areasix=[]
  areaseven=[]
  ngOnInit(): void {
   

    this.adsService.leftAds=[]
    this.adsService.rightAds=[]
    this.adsService.mainAds=[]
    this.adsService.allAds.subscribe(
      (ads:any) => {
 
        if(ads?.length) {
      
            for(let i = 0 ; i < ads.length;i++) {
              if(ads[i].types?.length) {
                    let left = ads[i].types.filter(item => item=='left' || item=='homepage')
                    let right = ads[i].types.filter(item => item=='right' || item=='homepage')
                    if(left?.length==2) this.adsService.leftAds.push(ads[i])
                    if(right?.length==2) this.adsService.rightAds.push(ads[i])
                    for(let j =0;j<ads[i].types?.length;j++) {
                      if(ads[i].types[j]=='homepage' && ads[i]?.seq?.length) {
                        for(let k = 0 ;k<ads[i]?.seq?.length;k++) {
                          if(ads[i]?.seq[k]==1) this.areaone.push(ads[i])
                          if(ads[i]?.seq[k]==2) this.areatwo.push(ads[i])
                          if(ads[i]?.seq[k]==3) this.areathree.push(ads[i])
                          if(ads[i]?.seq[k]==4) this.areafour.push(ads[i])
                          if(ads[i]?.seq[k]==5) this.areafive.push(ads[i])
                          if(ads[i]?.seq[k]==6) this.areasix.push(ads[i])
                          if(ads[i]?.seq[k]==7) this.areaseven.push(ads[i])
                        }
                      }
                    }
                 }              
            }
        }
      
      }
    )
    this.getHomePageData()
    this.getArticlesByParams('homeSlider')
    this.getArticlesByParams('noMissIt')
    this.getArticlesByParams('urgent')
    this.getArticlesByParams('reads')
    this.getArticlesByParams('mainNewsLine')
    this.getQuestions()
  }
  missSliderInterval() {
    if(this.missSlider?.length && isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.missSlider.unshift(this.missSlider[this.missSlider?.length-1])
        this.missSlider.pop()
      },5000)
    }
  }
homePageData:any=[]

getHomePageData() {
  return this.http.get(`${environment.apiUrl}category/homepage?limit=1000`).subscribe(
    (res:any) => {
      this.homePageData=res?.data
      if(this.homePageData?.length) {
        for(let i = 0 ; i < this.homePageData?.length;i++) {
          if(this.homePageData[i]?.seqHomepage==1) this.news=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==2) this.politics=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==3) this.accedint=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==4) {
            this.sport=this.homePageData[i]
            this.sportsSlider=this.homePageData[i]?.posts
            for(let i = 0 ; i <this.sportsSlider?.length;i++) this.sportsSlider[i].show=false
            if(this.sportsSlider?.length) this.sportsSlider[0].show=true
          }
          if(this.homePageData[i]?.seqHomepage==5) this.art=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==6) this.world=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==7) this.arabic=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==8) this.selected=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==9) this.opinion=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==10) this.videos=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==11) this.states=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==12) this.eco=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==13) this.invReports=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==14) this.famous=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==15) this.tv=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==16) this.health=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==17) this.women=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==18) this.albums=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==19) this.education=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==20) this.regligion=this.homePageData[i]
          if(this.homePageData[i]?.seqHomepage==21) this.tech=this.homePageData[i]
        }
      }
     
      this.loading=false
    
           // start sports/ sliders
      if(this.sportsSlider?.length) {
        if (isPlatformBrowser(this.platformId)) {
                  setInterval(() => { 
          for (let i = 0;i<this.sportsSlider.length;i++) this.sportsSlider[i].show=false;
          this.sportsSlider[this.sportsSliderIndex].show=true
          this.sportsSliderIndex+=1
          if(this.sportsSliderIndex==4||this.sportsSliderIndex==this.sportsSlider.length) this.sportsSliderIndex=0
      }, 5000);
        }

    
      }

    } , err => {
      this.loading=false
    }
  )
}

questionId
answerValue
opinonLoading:boolean=false
chooseAnswer(qID,answerValue) {
  this.questionId=qID
  this.answerValue=answerValue
}
answer() {
   if(this.answerValue&&this.questionId) {
     this.opinonLoading=true
     let body = {
      answers:[
        {
            answer:{
            title: this.answerValue,
            value: this.answerValue
            },
            question:this.questionId}
             ]
     }
     this.questionService.addAnswer(body).subscribe(
       res => {
          this.opinonLoading=false
          this.toastr.success("تم الاجابة بنجاح")
       } , err => {
        this.opinonLoading=false
       }
     )
   }
}
questionsResult
resultLoading:boolean=false
getResultOfQuestion(id,modal) {
  this.resultLoading=true
  this.questionService.getQuestions().subscribe(
    (res:any)=> {
      this.resultLoading=false
      if(res?.data?.length) {
        this.questionsResult=res?.data[0]?.answers
      }
      this.openModal(modal)
    } , err => {
      this.resultLoading=false
    }
  )
}
getQuestions(){
  this.questionService.getQuestions().subscribe(
    (res:any) =>  {
      if(res?.data?.length) {
        this.Question=res?.data[0]
      }
    }
  )
}
modalRef?: BsModalRef;

openModal(template: TemplateRef<any>) {
this.modalRef = this.modalService.show(template);
}

getArticlesByParams(position) {
    let params:any = {
      status:'true',
      limit:10
    }
    if(position=='reads') params.sort='createdAt:-1 views:-1'
    else if(position=='mainNewsLine') {
      params.sort='createdAt:-1',
      params.limit=30
    }
    else {
      params.positions=position
      params.sort='createdAt:-1'
    }
    this.artileService.getArticles(params).subscribe(
      (res:any) => {
       
        if(position=='homeSlider') {
          this.newsSlider=res?.data
          if(this.newsSlider?.length) {
            for(let i = 0 ; i <this.newsSlider?.length;i++) {
              this.newsSlider[i].show=false
            }
            this.newsSlider[0].show=true
            if (isPlatformBrowser(this.platformId)) {
           setInterval(() => { 
              for (let i = 0;i<this.newsSlider.length;i++) this.newsSlider[i].show=false;
              this.newsSlider[this.newsSliderIndex].show=true
              this.newsSliderIndex++
              if(this.newsSliderIndex==4 || this.newsSliderIndex==this.newsSlider.length) this.newsSliderIndex=0
          }, 5000);
            }
     
          }
        } else if(position=='urgent') {
          this.urgent=res?.data
        } else if (position=='noMissIt') {
          this.missSlider=res?.data
          this. missSliderInterval()
        } else if (position=='reads') {
          this.reads=res?.data
        } else if (position=='mainNewsLine') {
          if(res?.data?.length) {
          this.mainnewsLine=res?.data.slice().reverse()
        }
        }

      
      }
    )
}
homeSlideShowOnClick(index) {
  if(this.newsSlider?.length) {
    for(let i = 0 ; i <this.newsSlider?.length;i++) {
      this.newsSlider[i].show=false
    }
    this.newsSlider[index].show=true
    this.newsSliderIndex=index
  }
}
}
