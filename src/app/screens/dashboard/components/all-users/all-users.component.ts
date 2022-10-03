import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users
  loading:boolean=true
  deleteUserLoading:boolean=false
  tableFilterValue:any="-1"
  searchValue:any
  updateUserNameLoading:boolean=false

  constructor(private authservice:AuthService,
    private modalService: BsModalService,
    private toastr:ToastrService) { }

  modalRef?: BsModalRef;
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    this.getAllUsers()
  }
getAllUsers() {
  this.loading=true
  this.authservice.getAllUsers().subscribe(
    (res:any) => {
      console.log(res)
      this.users=res?.data
      this.loading=false
      this.deleteUserLoading=false
      this.updateUserNameLoading=false
    },
    err => {
      this.loading=false
      this.deleteUserLoading=false
      this.updateUserNameLoading=false
    }
  )
}
deleteUserr(id) {
  this.deleteUserLoading=true
  this.authservice.deleteUser(id).subscribe(
    res => {
      this.toastr.success("تم الحذف بنجاح")
      this.getAllUsers()
      this.modalRef.hide()
    },
    err => {
      this.deleteUserLoading=false
    }
  )
}

updateUserPassword(userId,password) {
  if ((password.trim().length>0) ) {
    this.updateUserNameLoading=true
    this.updateUser(userId,{password})
  } else {
    this.toastr.error('أدخل كلمة المرور')
  }
}
updateUser(id,value) {
  this.authservice.updateUser(id,value).subscribe(
    res => {
      this.toastr.success('تم التعديل بنجاح')
      this.updateUserNameLoading=false
     this.modalRef.hide()
    } , err =>{
      this.updateUserNameLoading=false
    }
  )
}
}
