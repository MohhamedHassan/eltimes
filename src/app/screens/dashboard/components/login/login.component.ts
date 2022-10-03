import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { json } from 'express';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  loading:boolean=false
  error
  constructor(private fb:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.returnLoginForm()
  }
  returnLoginForm() {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,emptyContent]],
      password:['',[Validators.required,emptyContent]]
    })
  }
login(value) {
  this.loading=true
  this.authService.login(value).subscribe(
    (res:any) => {
      this.loading=false
      this.error=''
      localStorage.setItem('timesToken',res?.token)
      localStorage.setItem('userInfo',JSON.stringify(res))
      this.authService.userProfile=res
      this.loginForm.reset()
      this.toastrService.success("تم تسجيل الدخول بنجاح")
      console.log(res)
    } , (err:any) => {
      this.loading=false
      this.error=err?.error?.message
      console.log(err)
    }
  )
}
}
