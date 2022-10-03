import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories.service';
import { AuthService } from '../../services/auth.service';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.scss']
})
export class AddSubComponent implements OnInit {


  getDataLoading:boolean=true
  addSubCategoryForm:FormGroup
  update:boolean=false
  subById
  subId
  loading:boolean=false
  error
  categoriesNames
    constructor(private fb:FormBuilder,
      private categoryService:CategoriesService,
      public authService:AuthService,
      private actvatedRout:ActivatedRoute,
      private router:Router,
      private toasterService:ToastrService) { }
  
    ngOnInit(): void {
      this.getAllCategories()
      this.crreateAddSubForm()
      this.actvatedRout.queryParamMap.subscribe((params:any) => {
        if (Object.keys(params.params).length) {
          this.update=true
          this.subId=params.params.id
          this.categoryService.getSubCategoryById(params.params.id).subscribe(
            res=> {
              console.log(res)
              this.subById=res
              this.addSubCategoryForm.patchValue({
                name:this.subById?.title,
                categories:this.subById?.categories[0]?._id,
                title:this.subById?.metaData?.title,
                keywords:this.subById?.metaData?.keywords,
                desc:this.subById?.metaData?.desc
              })
              this.getDataLoading=false
            } , err => {
            }
          )
        } else {
          this.update=false
          this.getDataLoading=false
        }
      })
    }




    getAllCategories() {
      this.categoryService.getCategories().subscribe(
        (res:any) =>  {
          console.log(res)
          this.categoriesNames=res?.data
          this.getDataLoading=false
        } , err =>  {
          console.log(err)
        }
      )
    }
    crreateAddSubForm() {
      return this.addSubCategoryForm=this.fb.group({
        name:['',[Validators.required,emptyContent]],
        title:['',[Validators.required,emptyContent]],
        desc:['',[Validators.required,emptyContent]],
        keywords:['',[Validators.required,emptyContent]],
        categories:['',Validators.required]
      })
    }
  
    createSubCategory(value) {
      if(this.addSubCategoryForm.valid) {
        let subCategoryValue = {
          title:value.name,
          categories:[value.categories],
          metaData:{
            title:value.title,
            desc:value.desc,
            keywords:value.keywords,
          }
        }
        this.loading=true
        if(this.update) {
          this.categoryService.updateSubCategories(subCategoryValue,this.subId).subscribe(
            res => {
              this.loading=false
              this.toasterService.success("تم التعديل بنجاح")
              this.router.navigate(["/dashboard-page/main/categories"])
            },
            err => {
                this.loading=false
            }
          )
        } else {
          this.categoryService.addSubCategory(subCategoryValue).subscribe(
            res => {
                this.error=''
                 this.loading=false
                 this.toasterService.success("تم الاضافة بنجاح")
                 this.router.navigate(["/dashboard-page/main/categories"])
            },
            err => { 
                 this.loading=false
                 this.error=err?.error?.message
            }
          )
        }
  
      }
    }

}
