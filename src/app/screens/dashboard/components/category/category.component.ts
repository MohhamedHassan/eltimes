import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories
  loading:boolean=true
  deleteLoading:boolean=false
  searchValue:string
  constructor(private categoriesService:CategoriesService,
    public authService:AuthService,
    private modalService: BsModalService,
    private toasterservice:ToastrService) { }
  modalRef?: BsModalRef;
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getCategoriesName()
  }
  getCategoriesName() {
    this.loading=true
    this.categoriesService.getCategories().subscribe(
      (categoriesNames:any) => {
        this.categories=categoriesNames.data
        console.log(categoriesNames)
        this.loading=false
      },
      err => {
        this.loading=false
      }
    )
  }
  deleteCategory(id) {
    this.deleteLoading=true
    this.categoriesService.deleteCategory(id).subscribe(
      res => {
        this.deleteLoading=false
        this.getCategoriesName()
        this.modalRef.hide()
        this.toasterservice.success("تم الحذف بنجاح")
      } , err => {
        this.deleteLoading=false
      }
    )
  }
  deleteSubCAt(id) {
    this.deleteLoading=true
    this.categoriesService.deleteSubCategory(id).subscribe(
      res => {
        this.deleteLoading=false
        this.getCategoriesName()
        this.modalRef.hide()
        this.toasterservice.success("تم  بنجاح")
      } , err => {
        this.deleteLoading=false
      }
    )
  }
  
 

}
