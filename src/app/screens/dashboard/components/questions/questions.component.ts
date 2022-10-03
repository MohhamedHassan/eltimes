import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AddQuestionService } from '../../services/add-question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  loading:boolean=true
  questions
  deleteLoading:boolean=false
  constructor(private questionsService:AddQuestionService,
    private toastrService:ToastrService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getQuestions()
  }

modalRef?: BsModalRef;

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
  getQuestions() {
    this.questionsService.getQuestions().subscribe(
      (res:any) =>  {
        this.loading=false
        this.questions=res?.data
        console.log(res)
      } ,  err =>  {
        this.loading=false
      }
    )
  }
  deleteQuestionMethod(id) {
    this.deleteLoading=true
    this.questionsService.deleteQuestion(id).subscribe(
      res =>  {
        this.deleteLoading=false
        this.toastrService.success("تم الحذف بنجاح")
        this.modalRef.hide()
        this.getQuestions()
      } , err =>  {
        this.deleteLoading=false
      }
    )
  }
}
