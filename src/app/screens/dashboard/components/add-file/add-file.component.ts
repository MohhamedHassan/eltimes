import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss']
})
export class AddFileComponent implements OnInit {
  loading=false
  addFileForm:FormGroup
  image
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.addFileForm=this.fb.group({
      title:['',[Validators.required,emptyContent]],
      image:['',Validators.required]
    })
  }
  selectImage(event) {
    this.image=event.target.files[0]
  }
  addFile(value) {

    if(this.addFileForm.valid) {
      this.loading=true
      let formdata = new FormData()
      formdata.append('title',value.title)
      formdata.append('file',this.image)
      this.http.post(`${environment.apiUrl}file`,formdata).subscribe(
        res=> {
          console.log(res)
          this.toastr.success("تم")
          this.addFileForm.reset()
          this.loading=false
        }, err => {
          console.log(err)
        }
      )
    }
  }
}
