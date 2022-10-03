import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WritersService } from '../../services/writers.service';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.scss']
})
export class WritersComponent implements OnInit {
  loading:boolean=true
  searchValue:string
  writers
modalRef?: BsModalRef;
error
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
  constructor(private writersService:WritersService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAllWriters()
  }
  getAllWriters() {
    this.writersService.getAllWriters().subscribe(
      (res:any) => {
        this.loading=false
        this.writers=res?.data
        console.log(res)
      }, err => {
        this.loading=false
      }
    )
  }
  editWriter(obj,id) {
  if(obj.name.trim().length>0) {
    this.loading=true

    this.writersService.editWriter(obj,id).subscribe(
      res => {
        this.modalService.hide()
        this.getAllWriters()
      } ,err => {
        this.loading=false
        this.error=err?.error?.message
      }
    )
  }
  }
  deleteWriter(id) {
    this.loading=true
    this.writersService.deleteWriter(id).subscribe(
      res => {
        this.getAllWriters()
      } ,err => {
        this.loading=false
        this.modalRef.hide()
      }
    )
  }
}
