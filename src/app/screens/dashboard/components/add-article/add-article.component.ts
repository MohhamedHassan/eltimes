import { Component, ElementRef, OnInit, TemplateRef, ViewChild, Inject, PLATFORM_ID, ChangeDetectorRef  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories.service';
import { ArtilceService } from '../../services/artilce.service';
import { AuthService } from '../../services/auth.service';
import { WritersService } from '../../services/writers.service';
import { emptyContent } from '../../validators/emptyInput';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { FacebookService,InitParams } from 'ngx-facebook';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
declare namespace instgrm {
  namespace Embeds {
    function process(): void;
  }
}
declare var twttr: any;
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
 update:boolean=false
 addArticleLoading=false
 currentContetnt='text'
 articleContent=[]
 articleList=[]
 updateListItem:number=-1
 updateMainContentItemIndex=-1
 table=[]
 allImages=[]
 tableForm:FormGroup
 linkExample='<a target="_blank" href="URL HERE" >TITLE HERE</a>'
 @ViewChild("articleTitleInput") articleTitleInput:ElementRef
 @ViewChild("articleContentInput") articleContentInput:ElementRef 
 @ViewChild("articleTitleInputForList") articleTitleInputForList:ElementRef
 @ViewChild("youtubeInput") youtubeInput:ElementRef
 @ViewChild("fbVideoInput") fbVideoInput:ElementRef
 @ViewChild("fbImageInput") fbImageInput:ElementRef
 @ViewChild("twitterInput") twitterInput:ElementRef
 @ViewChild("imageTitleInput") imageTitleInput:ElementRef
 tooles=[
   {
    title:' أضافة نص',
    icon:'fas fa-file-alt',
    status:'text'
   },
   {
    title:'أضافة جدول',
    icon:'fas fa-table',
    status:'table'
   },
   {
    title:' أضافة قائمة',
    icon:'fas fa-list-ul',
    status:'ul'
   },
   {
    title:'أضافة صورة',
    icon:'fas fa-image',
    status:'image'
   },
   {
    title:'أضافة فيديو',
    icon:'fas fa-video',
    status:'video'
   },
   {
    title:'أضافة فيديو من يوتيوب',
    icon:'fab fa-youtube',
    status:'youtube'
   },
   {
    title:'أضافة فيديو من فيسبوك',
    icon:'fab fa-facebook-square',
    status:'fbvideo'
   },
   {
    title:'أضافة نص او صورة من فيسبوك',
    icon:'fab fa-facebook-square',
    status:'fbimage'
   },
   {
    title:'  أضافة محتوي من تويتر او انستجرام',
    icon:'fab fa-twitter',
    status:'twitter'
   },
   {
    title:'أضافة ألبوم',
    icon:'fas fa-images',
    status:'album'
   },
  //  {
  //   title:' أضافة اعلان جوجل',
  //   icon:'fab fa-google'
  //  },
]
page?: number;
maxSize=5
totalCount=0
imagesLoading=true
contentImageID
contentImageUrl
contentVideoID
contentVideoUrl
album=[]
mainForm:FormGroup
articleKeyWords=[]
mainArticleImage=''
mainArticleImageBigSize=''
writers
categoriesSelectBox=[]
subCategoriesSelectBox=[]
modalRef?: BsModalRef;
mainBigImage={
  id:"",
  url:''
}
mainSmallImage={
  id:"",
  url:''
}
totalCountVideos
allvideos
videosLoading
videosPage
error
articleId
getArticleByIdLoading=true
  constructor(private categoriesSerrvice:CategoriesService,
    private fb:FormBuilder,
    private modalService: BsModalService,
    private toastr:ToastrService,
    private router:Router,
    private sanitizer: DomSanitizer,
    public authService:AuthService,
    private fbb: FacebookService,
    private http:HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private writersService:WritersService,
    private activatedRoute:ActivatedRoute,
    private articleservice:ArtilceService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.returnMainForm()
    this.tableForm = this.createTableForm('init')
    this.addRow()
    this.addColumn(0)
   this.getWriters()
    this.activatedRoute.queryParams.subscribe(params =>  {
      if (this.activatedRoute.snapshot.queryParams['id']) {
        console.log(params?.id)
        this.articleId=params?.id
        this.mainForm.get('catId').clearValidators()
        this.mainForm.get('catId').updateValueAndValidity();
        this.articleservice.articleById(this.articleId).subscribe((res:any) =>  {
          console.log(res)
          this.articleContent=res?.content
          for (let i = 0 ; i < this.articleContent?.length;i++) {
            if(this.articleContent[i]?.image?.image?.file?.src) {
              let obj:any =  {
                image:{ 
                  title:this.articleContent[i]?.image?.title,
                  image: this.articleContent[i]?.image?.image?._id, 
                  url: this.articleContent[i]?.image?.image?.file?.src
                }
              }
              this.articleContent[i]=obj
            } 
            if(this.articleContent[i]?.videoFromHisDevice?.file?.src) {
              let obj =  {
                videoFromHisDevice:  this.articleContent[i]?.videoFromHisDevice?._id, 
                url: this.articleContent[i]?.videoFromHisDevice?.file?.src
               }
               this.articleContent[i]=obj
            } 
            if(this.articleContent[i]?.facebookVideoLink ||
              this.articleContent[i]?.facebookImageLink ) {
              if (isPlatformBrowser(this.platformId)) {
                let initParams: InitParams = {
                  xfbml: true,
                  version: 'v2.8'
                  };
                  setTimeout((()=>
                  this.fbb.init(initParams)),200);
              }
            } 
            if(this.articleContent[i]?.twitterOrInstagramHtml) {
              if (isPlatformBrowser(this.platformId)) {
                setTimeout(() => {
                  twttr.widgets.load();
                  this.processEmbeddedInstagramPosts()
                }, 200);
            
            
              }
            }
            if(this.articleContent[i]?.album?.length) {
              for(let j =0; j < this.articleContent[i]?.album?.length;j++) {
                let obj = {
                  id:this.articleContent[i]?.album[j]?._id,
                  url:this.articleContent[i]?.album[j]?.file?.src
                }
                this.album.push(obj)
              }
              this.articleContent[i].album=this.album
            }
          }
          console.log(this.articleContent)
          this.articleKeyWords=res?.keywords
          this.mainSmallImage.url=res?.main?.image?.image?.file?.src
          this.mainSmallImage.id=res?.main?.image?.image?._id
          this.mainBigImage.url=res?.main?.image?.imageBigSize?.file?.src
          this.mainBigImage.id=res?.main?.image?.imageBigSize?._id
          this.mainForm.patchValue({
            mainArticleTitle:res?.main?.title,
            writerName:res?.writer?._id,
            metaTitle:res?.metaData?.title,
            metaDesc:res?.metaData?.desc,
            metaKey:res?.metaData?.keywords,
            mainImageTitle:res?.main?.image?.title
          })
          if(res?.categories?.length) {
            this.mainForm.patchValue({
              catId:res?.categories[0]._id
            })
          }
          if(res?.subcategories?.length) {
            this.mainForm.patchValue({
              subId:res?.subcategories[0]._id
            })
          }
          if(res?.positions?.length) {
            for(let i = 0 ; i < res?.positions?.length;i++) {
              if(res?.positions[i]=='urgent') {
                this.mainForm.patchValue({
                  urgent:'true'
                })
              } else if(res?.positions[i]=='homeSlider') {
                this.mainForm.patchValue({
                  homeSlider:'true'
                })
              } else if(res?.positions[i]=='noMissIt') {
                this.mainForm.patchValue({
                  miss:'true'
                })
              } else if(res?.positions[i]=='categorySlider') {
                this.mainForm.patchValue({
                  catSlider:'true'
                })
              } 
            }
          }
          this.getArticleByIdLoading=false
        })
     
      } else  {
        this.getArticleByIdLoading=false
        this.articleId=''
        this.mainForm.get('catId').setValidators([Validators.required]); 
        this.mainForm.get('catId').updateValueAndValidity();
        this.categoriesSerrvice.getCategories().subscribe(
          (res:any) => {
           this.categoriesSelectBox=res?.data
          }
        )
      }
    })
   

  }
  getImagesOnChange(status) {
    if(status=='image' || status=='album') this.getImages(1)
    else if(status=='video') this.getVideos(1)
  }
  selectMainImageBigSize(src,id) {
    this.mainBigImage.id=id
    this.mainBigImage.url=src
    this.modalService.hide()
  }
  selectMainImageSmallSize(src,id) {
    this.mainSmallImage.id=id
    this.mainSmallImage.url=src
    this.modalService.hide()
  }
  fillSubSelectBox(catSelectBox) {
    let item = this.categoriesSelectBox.filter(
      arrayItem => arrayItem._id==catSelectBox.value
    )
    this.subCategoriesSelectBox = item[0].subcategories
  }
  getImages(page) {
    this.imagesLoading=true
    this.http.get(`${environment.apiUrl}file?page=${page}&type=image&sort=createdAt:-1`).subscribe(
      (res:any) => {
        console.log(res)
        this.allImages=res?.data
        this.totalCount=res?.totalCount
        this.imagesLoading=false
      }
    )
   
  }
  getPageOneOnBlur(value) {
   if(value.length==0) {
    this.getImages(1)
   }
  }
  getVideoOneOnBlur(value) {
    if(value.length==0) {
     this.getVideos(1)
    }
   }
  searchImages(input) {
    if(input.value && input.value.trim().length>0) {
      this.imagesLoading=true
    this.http.get(`${environment.apiUrl}file?limit=10000&type=image&keyword=${input.value}`).subscribe(
      (res:any) => {
        console.log(res)
        this.allImages=res?.data
        this.totalCount=0
        this.imagesLoading=false
      }
    )
    }
   
  }
getWriters() {
  this.writersService.getAllWriters().subscribe(
    (res:any) => {
      this.writers=res?.data
    }
  )
}
 getVideos(page) {
   this.videosLoading=true
  this.http.get(`${environment.apiUrl}file?page=${page}&type=video&sort=createdAt:-1`).subscribe(
    (res:any) => {
      console.log(res)
      this.allvideos=res?.data
      this.totalCountVideos=res?.totalCount
      this.videosLoading=false
    }
  )
 }
 searchVideo(videoTitleInput){
  if(videoTitleInput.value && videoTitleInput.value.trim().length>0) {
    this.videosLoading=true
  this.http.get(`${environment.apiUrl}file?limit=10000&type=video&keyword=${videoTitleInput.value}`).subscribe(
    (res:any) => {
      console.log(res)
      this.allvideos=res?.data
      this.totalCountVideos=0
      this.videosLoading=false
    }
  )
  }
 }
  pageChanged(event: PageChangedEvent,el): void {
    this.page = event.page;
    this.getImages(this.page)
  }
  videoPageChanged(event: PageChangedEvent,el): void {
    this.videosPage = event.page;
    this.getVideos(this.videosPage)
  }
pragraphContent(title,content) {
  if((content.value && content.value.trim().length>0) || (title.value && title.value.trim().length>0)) {
    let obj = {
      title:title.value,
      desc:content.value
    }
    if(this.updateMainContentItemIndex==-1) this.articleContent.push(obj)
    else this.articleContent[this.updateMainContentItemIndex]=obj
    title.value=''
    content.value=''
    this.updateMainContentItemIndex=-1
    console.log(this.articleContent)
  }
}
pragraphList(articleList) {
  if(articleList.value && articleList.value.trim().length>0) {
    if(this.updateListItem==-1) this.articleList.push(articleList.value)
    else this.articleList[this.updateListItem]=articleList.value
    articleList.value=''
  }
}
addlistToContent(contentTitle) {
 if(this.articleList?.length) {
  let obj = {
    ul:this.articleList,
    title:contentTitle.value
  }
  if(this.updateMainContentItemIndex==-1)  this.articleContent.push(obj) 
  else this.articleContent[this.updateMainContentItemIndex] = obj 
  this.articleList=[]
  contentTitle.value=''
  this.updateListItem=-1
  this.updateMainContentItemIndex=-1
 }
}
deleteListItem(i) {
  this.articleList.splice(i,1)
}
editListItem(i,articleListInput) {
  this.updateListItem=i
  articleListInput.value=this.articleList[i]
}
addYoutubeVideo(youtubeLink) {
  if (this.updateMainContentItemIndex==-1) this.articleContent.push({youtubeLink:youtubeLink.value}) 
  else this.articleContent[this.updateMainContentItemIndex]={youtubeLink:youtubeLink.value}
  this.updateMainContentItemIndex=-1
  youtubeLink.value=''
}
addFacebookVideo(fbVideoInput) {
  if (this.updateMainContentItemIndex==-1) this.articleContent.push({facebookVideoLink:fbVideoInput.value}) 
  else this.articleContent[this.updateMainContentItemIndex]={facebookVideoLink:fbVideoInput.value}
  this.updateMainContentItemIndex=-1
  fbVideoInput.value=''
  if (isPlatformBrowser(this.platformId)) {
    let initParams: InitParams = {
      xfbml: true,
      version: 'v2.8'
      };
      setTimeout((()=>
      this.fbb.init(initParams)),200);
  }
}
addFacebookImage(fbImageInput) {
  if (this.updateMainContentItemIndex==-1) this.articleContent.push({facebookImageLink:fbImageInput.value}) 
  else this.articleContent[this.updateMainContentItemIndex]={facebookImageLink:fbImageInput.value}
  this.updateMainContentItemIndex=-1
  fbImageInput.value=''
  if (isPlatformBrowser(this.platformId)) {
    let initParams: InitParams = {
      xfbml: true,
      version: 'v2.8'
      };
      setTimeout((()=>
      this.fbb.init(initParams)),200);
  }
}
addtwitter(twitterInput) {
  if (this.updateMainContentItemIndex==-1) this.articleContent.push({twitterOrInstagramHtml:twitterInput.value}) 
  else this.articleContent[this.updateMainContentItemIndex]={twitterOrInstagramHtml:twitterInput.value}
  this.updateMainContentItemIndex=-1
  twitterInput.value=''
  if (isPlatformBrowser(this.platformId)) {
    setTimeout(() => {
      twttr.widgets.load();
      this.processEmbeddedInstagramPosts()
    }, 200);


  }
}
getRows() {
  return this.tableForm.get("rows") as FormArray
}
addRow() {
  this.getRows().push(this.createTableForm('row'))
}
deleteRow(i) {
  if(this.getRows().controls.length>1) {
    this.getRows().removeAt(i)
  } else {
    this.toastr.error("صف واحد علي الاقل")
  }
}
getColumns(i) {
  return this.getRows().at(i).get("row") as FormArray
}
addColumn(i) {
  this.getColumns(i).push(this.createTableForm('column'))
}
deleteColumn(tableIndex,i) {
 if(this.getColumns(tableIndex).controls.length>1) {
  this.getColumns(tableIndex).removeAt(i)
 }
}
submitTable(value) {
  if(this.tableForm.valid) {
    
    let arr = []
    for (let i = 0 ; i < value.rows.length;i++) {
      arr.push(value.rows[i].row)
    }
    console.log(value)
    if(this.updateMainContentItemIndex==-1) this.articleContent.push({table:arr})
    else this.articleContent[this.updateMainContentItemIndex] =  {table:arr}
    this.getRows().clear()
    this.addRow()
    this.addColumn(0)
  }
}
createTableForm(itemType: string): FormGroup {
  let formItem = this.fb.group({})
  switch (itemType) {
    case "init":
      formItem = this.fb.group({
        rows: this.fb.array([]),
      });
      break;
    case 'row':
      formItem = this.fb.group({
        row: this.fb.array([]),
      });
      break;
    case 'column':
      formItem = this.fb.group({
        column: ["",[ Validators.required,emptyContent]],
      })
      break;
  }
  return formItem
}

selectImage(imageUrl,imageId) {
  this.contentImageUrl=imageUrl
  this.contentImageID=imageId
  this.toastr.success('تم اختيار الصورة')
}
selectVideo(videoUrl,videoId) {
  this.contentVideoUrl=videoUrl
  this.contentVideoID=videoId
  if( this.contentVideoID&&this.contentVideoUrl) {
    let obj =  {
     videoFromHisDevice:  this.contentVideoID, 
        url: this.contentVideoUrl
    }
   if(this.updateMainContentItemIndex==-1) this.articleContent.push(obj)
   else this.articleContent[this.updateMainContentItemIndex]=obj
    this.contentVideoID='' 
    this.contentVideoUrl=''
   }
  this.toastr.success('تم اختيار الفيديو')
}
addImgaeToArtcleContent(imageTitleInput) {
 
 if( this.contentImageID&&this.contentImageUrl) {
  let obj =  {
    image:{
      title: imageTitleInput.value, 
      image:  this.contentImageID, 
      url: this.contentImageUrl
    }
  }
 if(this.updateMainContentItemIndex==-1) this.articleContent.push(obj)
 else this.articleContent[this.updateMainContentItemIndex]=obj
  imageTitleInput.value=''
  this.contentImageID='' 
  this.contentImageUrl=''
 }
}

selectAlbumImage(url,id) {
  let obj = {
    id,
    url
  }
  this.album.push(obj)
  this.toastr.success("تم اختيار الصورة")
}
deleteSelectedAlbumImage(i) {
  this.album.splice(i,1)
}
doneAlbum() {
if(this.album?.length) {
  let obj = {
    album:Array.from(this.album)
  }
  if(this.updateMainContentItemIndex==-1) this.articleContent.push(obj)
  else this.articleContent[this.updateMainContentItemIndex]=obj
  this.album=[]
  console.log(this.articleContent)
}
}
deleteMainContentItem(i) {
  this.articleContent.splice(i,1)
}
editMainContentItem(i,el) {
  el.scrollIntoView();
  this.updateMainContentItemIndex=i
  if(this.articleContent[i]?.desc) {
    this.currentContetnt='text'
    this.cd.detectChanges()
    this.articleContentInput.nativeElement.value=this.articleContent[i]?.desc
    this.articleTitleInput.nativeElement.value=this.articleContent[i]?.title
  } else if(this.articleContent[i]?.ul?.length) {
    this.currentContetnt='ul'
    this.cd.detectChanges()
    this.articleList=this.articleContent[i]?.ul
    this.articleTitleInputForList.nativeElement.value=this.articleContent[i]?.title
  } else if (this.articleContent[i]?.youtubeLink) {
    this.currentContetnt='youtube'
    this.cd.detectChanges()
    this.youtubeInput.nativeElement.value=this.articleContent[i]?.youtubeLink
  }else if (this.articleContent[i]?.facebookVideoLink) {
    this.currentContetnt='fbvideo'
    this.cd.detectChanges()
    this.fbVideoInput.nativeElement.value=this.articleContent[i]?.facebookVideoLink
  }else if (this.articleContent[i]?.facebookImageLink) {
    this.currentContetnt='fbimage'
    this.cd.detectChanges()
    this.fbImageInput.nativeElement.value=this.articleContent[i]?.facebookImageLink
  }else if (this.articleContent[i]?.twitterOrInstagramHtml) {
    this.currentContetnt='twitter'
    this.cd.detectChanges()
    this.twitterInput.nativeElement.value=this.articleContent[i]?.twitterOrInstagramHtml
  }else if (this.articleContent[i]?.image?.image) {
    this.getImages(1)
    this.currentContetnt='image'
    this.cd.detectChanges()
    this.contentImageID=this.articleContent[i]?.image?.image
    this.contentImageUrl=this.articleContent[i]?.image?.url
    this.imageTitleInput.nativeElement.value=this.articleContent[i]?.image?.title
  }else if (this.articleContent[i]?.videoFromHisDevice) {
    this.getVideos(1)
    this.currentContetnt='video'
    this.cd.detectChanges()
    this.contentVideoID=this.articleContent[i]?.videoFromHisDevice
    this.contentVideoUrl=this.articleContent[i]?.url
  }
  else if (this.articleContent[i]?.album?.length) {
    this.getImages(1)
    this.currentContetnt='album'
    this.cd.detectChanges()
    this.album=Array.from(this.articleContent[i]?.album)
  }
  else if (this.articleContent[i]?.table?.length) {
    this.currentContetnt='table'
    this.cd.detectChanges()
    this.table=this.articleContent[i]?.table
    let frm = {
      rows:[]
    }
    for(let j = 0 ; j < this.articleContent[i]?.table.length;j++) {
      let obj = {row:[]}
      obj.row=this.articleContent[i]?.table[j]
      frm.rows.push(obj)
    }
    console.log(frm)
    this.getRows().clear()
    this.createTableForm('init')
    for(let i = 0 ; i < frm.rows.length;i++) {
      this.addRow()
      for (let j = 0 ; j < frm.rows[i].row.length;j++) this.addColumn(i)
    }
    this.tableForm.patchValue(frm)
  }
}
public processEmbeddedInstagramPosts(): void {
  if (isPlatformBrowser(this.platformId)) {
    console.log("any")
    if (window['instgrm']) {
      instgrm.Embeds.process()
    }
}

}
returnMainForm() {
  return this.mainForm = this.fb.group({
    catId:[''],
    subId:[''],
    urgent:[''],
    homeSlider:[''],
    miss:[''],
    catSlider:[''],
    mainArticleTitle:['',[Validators.required,emptyContent]],
    writerName:['',Validators.required],
    mainImageTitle:[''],
    metaTitle:['',[Validators.required,emptyContent]],
    metaDesc:['',[Validators.required,emptyContent]],
    metaKey:['',[Validators.required,emptyContent]],
  })
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
deletekeyWordtem(i) {
  this.articleKeyWords.splice(i,1)
}
addarticlekeys(articlekeysInput) {
  if(articlekeysInput.value && articlekeysInput.value.trim().length>0) {
    this.articleKeyWords.push(articlekeysInput.value.trim())
    articlekeysInput.value=''
  }
}
submitMainForm(value) {
 
  if(this.mainForm.valid && this.mainSmallImage.url && this.mainBigImage.url  && this.articleContent?.length) {
    this.addArticleLoading=true
    for(let i = 0 ; i < this.articleContent.length;i++) {
      if(this.articleContent[i]?.image?.image) {
        delete this.articleContent[i]?.image?.url
      } else if (this.articleContent[i]?.videoFromHisDevice) {
        delete this.articleContent[i]?.url
      } else if(this.articleContent[i]?.album?.length) {
        for(let j = 0 ; j < this.articleContent[i]?.album?.length;j++) {
          this.articleContent[i].album[j]=this.articleContent[i]?.album[j].id
        }
      }
    }
    let positions = []
    if(value.urgent) positions.push('urgent')
    if (value.homeSlider) positions.push('homeSlider')
    if(value.miss) positions.push('noMissIt')
    if(value.catSlider) positions.push('categorySlider')
    let body:any = {
      main: {
        title: value.mainArticleTitle,
       image:{
         title: value.mainImageTitle, 
       },
      },
      content:this.articleContent,
      writer:value.writerName,
      metaData:{
        title: value.metaTitle,
        desc: value.metaDesc,
        keywords: value.metaKey
    },
    positions:positions    
    }
    if(this.mainSmallImage.id) body.main.image.image=this.mainSmallImage.id
    if(this.mainBigImage.id) body.main.image.imageBigSize=this.mainBigImage.id
    if(value.catId) body.categories= [value.catId]
    if(value.subId) body.subcategories= [value.subId]
    if(this.mainBigImage?.id )body.main.image.imgaeBigSize=this.mainBigImage?.id 
    if(this.articleKeyWords?.length) body.keywords=this.articleKeyWords
    console.log(body)
    if(this.articleId) {
      this.articleservice.editArticle(this.articleId,body).subscribe(
        res =>  {
          console.log(res)
          this.addArticleLoading=false
          this.toastr.success('تم التعديل بنجاح')
          this.router.navigate(["/dashboard-page/main/categories"])
        } , err => {
          this.error=err?.error?.message
          this.addArticleLoading=false
        }
      )
    } else {
      this.articleservice.addArticle(body).subscribe(
        res =>  {
          console.log(res)
          this.addArticleLoading=false
          this.toastr.success('تم الاضافة بنجاح')
          this.router.navigate(["/dashboard-page/main/categories"])
        } , err => {
          this.error=err?.error?.message
          this.addArticleLoading=false
        }
      )
    }
   
  }
}
 }
