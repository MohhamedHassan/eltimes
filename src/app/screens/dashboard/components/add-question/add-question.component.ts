import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddQuestionService } from '../../services/add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
 
  loading:boolean=false
  title
  answers=[]
  error
  constructor(
    private toastrService:ToastrService,
    private router:Router,
    private questionService:AddQuestionService) { }

  ngOnInit(): void {
   
  }
  addAnswer(input) {
    if(input.value && input.value?.trim().length>0) {
      let obj = {
        title:input.value,value:input.value
      }
      this.answers.push(obj)
      input.value=''
      }
      
    }
    deleteAnswer(index) {
      this.answers.splice(index,1)
    }
  addQuestion() {
    if(this.title && this.title?.trim().length>0 && this.answers.length) {
      let value = {
        title:this.title,
        answers:this.answers
    }
      this.loading=true
      this.questionService.addQuestion(value).subscribe(
        res => {
          this.loading=false
          this.error=''
          this.toastrService.success("تم اضافة استطلاع الراي")
          this.router.navigate(['/dashboard-page/main/question'])
        } , err => {
          this.loading=false
          this.error=err?.error?.message
        }
      )
    }
  }
}
