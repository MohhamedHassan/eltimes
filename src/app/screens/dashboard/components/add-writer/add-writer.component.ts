import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WritersService } from '../../services/writers.service';
import { emptyContent } from '../../validators/emptyInput';

@Component({
  selector: 'app-add-writer',
  templateUrl: './add-writer.component.html',
  styleUrls: ['./add-writer.component.scss']
})
export class AddWriterComponent implements OnInit {
  addWriterForm:FormGroup
  loading:boolean=false
  error
  constructor(private fb:FormBuilder,
    private toastr:ToastrService,
    private writeresService:WritersService) { }

  ngOnInit(): void {
    this.addWriterForm = this.fb.group({
      name:['',[Validators.required,emptyContent]]
    })
  }
  createWriter(value) {
    if (this.addWriterForm.valid) {
      this.loading=true

      this.writeresService.addWriter(value).subscribe(
        res => {
          this.loading=false
          this.error=''
          this.toastr.success("تم الاضافة بنجاح")
          this.addWriterForm.reset()
        },
        err => {
          this.loading=false
          this.error=err?.error?.message
        }
      )
    }
  }
}
