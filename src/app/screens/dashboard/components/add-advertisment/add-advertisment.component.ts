import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment';
import { AddvertismentService } from '../../services/addvertisment.service';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-add-advertisment',
  templateUrl: './add-advertisment.component.html',
  styleUrls: ['./add-advertisment.component.scss']
})
export class AddAdvertismentComponent implements OnInit {
  addAdvertismentForm:FormGroup
  imgLoading:boolean=false
  adImageId
  adImageUrl
  createAdLoading:boolean=false
  categories=[]
  chosenCategories=[]
  types=[]
  seq=[]
  all:boolean=false
  loading:boolean=true
  update:boolean=false
  adId
  modalRef?: BsModalRef;
  imagesLoading=false
  allImages
  totalCount
  maxSize=5
  page
  error
  constructor(private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private modalService: BsModalService,
    private datePipe: DatePipe,
    private http:HttpClient,
    private router:Router,
    private toastr:ToastrService,
    private categoriesService:CategoriesService,
    private adService:AddvertismentService) { }

  ngOnInit(): void {
    this.advertismentForm()
   
    this.activatedRoute.queryParams.subscribe(params =>  {
      if (this.activatedRoute.snapshot.queryParams['id']) {
        this.loading=true
        this.adId=params?.id
        this.adService.getAdById(this.adId).subscribe(
          (res:any) => {
          if(res?.categories?.length) {
            for(let i = 0 ; i < res?.categories?.length;i++) {
              this.chosenCategories.push(res?.categories[i]?._id)
            }
          } 
          console.log(this.chosenCategories)
          if(res?.types?.length) {
            for(let i = 0 ; i < res?.types?.length;i++) {
              if(res?.types[i]=='homepage') {
                this.addAdvertismentForm.patchValue({
                  homepage:true
                })
              }
              if(res?.types[i]=='articledetails') {
                this.addAdvertismentForm.patchValue({
                  articleDetails:true
                })
              }
              if(res?.types[i]=='left') {
                this.addAdvertismentForm.patchValue({
                  left:true
                })
              }
              if(res?.types[i]=='right') {
                this.addAdvertismentForm.patchValue({
                  right:true
                })
              }
              if(res?.types[i]=='logo') {
                this.addAdvertismentForm.patchValue({
                  logo:true
                })
              }
            }
          }
          if(res?.seq?.length) {
            
            for(let i = 0 ; i < res?.seq?.length;i++) {
               if(res?.seq[i]==1) {
                this.addAdvertismentForm.patchValue({
                  areaone:true
                })
               }
               if(res?.seq[i]==2) {
                this.addAdvertismentForm.patchValue({
                  areatwo:true
                })
               }
               if(res?.seq[i]==3) {
                this.addAdvertismentForm.patchValue({
                  areathree:true
                })
               }
               if(res?.seq[i]==4) {
                this.addAdvertismentForm.patchValue({
                  areafour:true
                })
               }
               if(res?.seq[i]==5) {
                this.addAdvertismentForm.patchValue({
                  areafive:true
                })
               }
               if(res?.seq[i]==6) {
                this.addAdvertismentForm.patchValue({
                  areasix:true
                })
               }
               if(res?.seq[i]==7) {
                this.addAdvertismentForm.patchValue({
                  areaseven:true
                })
               }
            }
          }
            this.getCategoriesName()
            this.addAdvertismentForm.patchValue({
              link:res?.link,
              start:this.datePipe.transform(res?.start, 'yyy-MM-dd'),
              end:this.datePipe.transform(res?.end, 'yyy-MM-dd'),
            })
            
            this.adImageUrl=res?.image?.file?.src
            this.adImageId=res?.image?._id
            console.log(res)
          } , err =>  {
            console.log(err)
            this.loading=false
          }
        )
      } else {
        this.getCategoriesName()
        this.loading=false
      }
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.getImages(this.page)
  }
  selectAdImeg(imageSrc,imageId) {
    this.adImageId=imageId
    this.adImageUrl=imageSrc
    this.modalRef.hide()
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
  getPageOneOnBlur(value) {
    if(value.length==0) {
     this.getImages(1)
    }
   }
   getCategoriesName() {
    this.categoriesService.getCategories().subscribe(
      (categoriesNames:any) => {
        this.categories=categoriesNames.data
        if(this.categories?.length) {
          for (let i = 0;i<this.categories?.length;i++) {
            if(this.chosenCategories?.length) {
              for (let j = 0;j<this.chosenCategories?.length;j++) {
                if(this.categories[i]?._id==this.chosenCategories[j]) {
                  this.categories[i].checked=true
                  break
                } else {
                  this.categories[i].checked=false
                }
              }
            }
          }
        }
        this.loading=false
        console.log(categoriesNames)
      },
      err => {}
    )
  }
  selectCategory(id,index) {
    let exisit =false
    if(this.chosenCategories?.length) {
      for(let i = 0 ; i  <this.chosenCategories?.length;i++) {
        if(this.chosenCategories[i]==id) {
          exisit=true
          this.chosenCategories.splice(i,1)
          this.categories[index].checked=false
          break
        } 
      }
    } 
    if(!exisit) {
      this.chosenCategories.push(id)
      this.categories[index].checked=true
    }
    console.log(this.chosenCategories)
  }
 advertismentForm() {
   return this.addAdvertismentForm = this.fb.group({
     link:['',[Validators.required,emptyContent]],
     start:['',Validators.required],
     end:['',Validators.required],
     homepage:[''],
     articleDetails:[''],
     left:[''],
     right:[''],
     logo:[''],
     areaone:[''],
     areatwo:[''],
     areathree:[''],
     areafour:[''],
     areafive:[''],
     areasix:[''],
     areaseven:[''],
   }) 
 }
 submitAdvertismentForm(value) {
if(this.addAdvertismentForm.valid&&this.adImageId) {
  this.createAdLoading=true
  if(value.homepage==true) this.types.push('homepage')
  if(value.articleDetails==true) this.types.push('articledetails')
  if(value.left==true) this.types.push('left')
  if(value.right==true) this.types.push('right')
  if(value.logo==true) this.types.push('logo')
  if(value.areaone==true) this.seq.push(1)
  if(value.areatwo==true) this.seq.push(2)
  if(value.areathree==true) this.seq.push(3)
  if(value.areafour==true) this.seq.push(4)
  if(value.areafive==true) this.seq.push(5)
  if(value.areasix==true) this.seq.push(6)
  if(value.areaseven==true) this.seq.push(7)
  let body:any = {
   link: value.link,
   seq: this.seq,
   types: this.types,
   categories:this.chosenCategories,   
   start: value.start,
   end: value.end
  }
  if(this.adImageId)body.image=this.adImageId
  if(this.adId) {
    this.adService.editAdvertisment(this.adId,body).subscribe(
      res =>  {
        console.log(res)
        this.error=''
        this.toastr.success("تم التعديل")
        this.router.navigate(['/dashboard-page/main/advertisment'])
      } , err =>  {  
     this.error=err?.error?.message
     this.createAdLoading=false
      }
    )
  } else {
    this.adService.addAdvertisment(body).subscribe(
      res =>  {
        console.log(res)
        this.error=''
        this.toastr.success("تم الاضافة")
        this.router.navigate(['/dashboard-page/main/advertisment'])
      }, err =>  {
        this.error=err?.error?.message
        this.createAdLoading=false
         }
    )
  }
}
 }
}
