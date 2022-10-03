import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  addEditorForm:FormGroup
  loading:boolean=true
  mangersNames
  constructor(private fb:FormBuilder,
    private toastr:ToastrService,
    private http:HttpClient) { }

  ngOnInit(): void {
 
    this.addEditorForm = this.fb.group({
      chairmanOfBoardOfDirectors:['',[Validators.required,emptyContent]],
      editor:['',[Validators.required,emptyContent]]
    })
   this.getNames()
  }
  addEditor(value) {
    if(this.addEditorForm.valid) {
      this.loading=true
      this.http.put(`${environment.apiUrl}setting`,value).subscribe(
        res => {
          this.loading=false
          console.log(res)
          this.getNames()
          this.toastr.success("تم")
        } , err => {
          this.loading=false
          console.log(err)
        }
      )
    }
  }
getNames() {
  this.http.get(`${environment.apiUrl}setting`).subscribe(
    (res:any) => {
      this.loading=false
      console.log(res)
      this.addEditorForm.patchValue({
        chairmanOfBoardOfDirectors:res?.chairmanOfBoardOfDirectors,
        editor:res?.editor
      })
    } , err => {
      this.loading=false
      console.log(err)
    }
  )
}
}
