import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories.service';
import { AuthService } from '../../services/auth.service';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
selectboxOptions = [
  {type:"",name:"نوع القسم"},
  {type:"1",name:"أخبار"},
  {type:"2",name:"سياسة"},
  {type:"3",name:"حوادث"},
  {type:"4",name:"رياضة"},
  {type:"5",name:"فن"},
  {type:"6",name:"اخبار العالم"},
  {type:"7",name:"العالم العربي"},
  {type:"8",name:"التايمز EG"},
  {type:"9",name:"مقالات الرأي"},
  {type:"10",name:"فيديو"},
  {type:"11",name:"محافظات"},
  {type:"12",name:"اقتصاد وبورصة"},
  {type:"13",name:"تحقيقات وتقارير"},
  {type:"14",name:"مشاهير العالم"},
  {type:"15",name:"تلفزيون"},
  {type:"16",name:"صحة وطب"},
  {type:"17",name:"مرأة ومنوعات"},
  {type:"18",name:"البومات التايمز"},
  {type:"19",name:"تعليم"},
  {type:"20",name:"دين وفتوي"},
  {type:"21",name:"تكنولوجيا وسيارات"},
  {type:"22",name:"منوعات"},
  {type:"23",name:"اخري"},
]
getDataLoading:boolean=true
addCategoryForm:FormGroup
update:boolean=false
categoryById
categoryId
loading:boolean=false
error
  constructor(private fb:FormBuilder,
    private categoryService:CategoriesService,
    public authService:AuthService,
    private actvatedRout:ActivatedRoute,
    private router:Router,
    private toasterService:ToastrService) { }

  ngOnInit(): void {
    this.createAddCategoryForm()
    this.actvatedRout.queryParamMap.subscribe((params:any) => {
      if (Object.keys(params.params).length) {
        this.update=true
        this.categoryId=params.params.id
        this.categoryService.getCategoryById(params.params.id).subscribe(
          res=> {
            console.log(res)
            this.categoryById=res
            this.addCategoryForm.patchValue({
              name:this.categoryById?.title,
              seqHomepage:this.categoryById?.seqHomepage,
              seq:this.categoryById?.seq,
              title:this.categoryById?.metaData?.title,
              keywords:this.categoryById?.metaData?.keywords,
              desc:this.categoryById?.metaData?.desc
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
  createAddCategoryForm() {
    return this.addCategoryForm=this.fb.group({
      name:['',[Validators.required,emptyContent]],
      title:['',[Validators.required,emptyContent]],
      desc:['',[Validators.required,emptyContent]],
      keywords:['',[Validators.required,emptyContent]],
      seqHomepage :['',[Validators.required]],
      seq:['',[Validators.required]]
    })
  }

  createCategory(value) {
    if(this.addCategoryForm.valid) {
      let categoryValue = {
        title:value.name,
        seq:value.seq,
        seqHomepage :value.seqHomepage ,
        type:'all',
        metaData:{
          title:value.title,
          desc:value.desc,
          keywords:value.keywords,
        }
      }
      this.loading=true
      if(this.update) {
        this.categoryService.updateCategories(categoryValue,this.categoryId).subscribe(
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
        this.categoryService.addCategories(categoryValue).subscribe(
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
