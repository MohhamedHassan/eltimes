import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm:FormGroup
  error:string
  loading:boolean=false
  constructor(private fb:FormBuilder,
    public authservice:AuthService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.returnAddUserForm()
  }
  get FormControls() {
    return this.addUserForm.controls
  }
  returnAddUserForm() {
    return this.addUserForm = this.fb.group({
      name:['',[Validators.required,emptyContent]],
      email:['',[Validators.required ,Validators.email]],
      role:['',Validators.required],
      password:['',[Validators.minLength(8),Validators.required]],
      repassword:[''],
    })
  }
  addUser(value) {
    if (this.addUserForm.valid) {
      this.loading=true
      delete value.repassword
      this.authservice.addUser(value).subscribe(
        (res:any) => {
          this.loading=false
          this.error=""
          this.toastrService.success('تم اضافة مستخدم بنجاح');
           this.router.navigate(["/dashboard-page/main/users"])
          console.log(res)
        } , err =>  {
            this.loading=false
            this.error=err?.error?.message
        }
      )
    }
  }

}
