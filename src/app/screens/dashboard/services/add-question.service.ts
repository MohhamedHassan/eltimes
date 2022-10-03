import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  constructor(private http:HttpClient) { }
  addQuestion(value) {
    return this.http.post(`${environment.apiUrl}question`,value)
  }
  addAnswer(value) {
    return this.http.post(`${environment.apiUrl}review`,value)
  }
  getResultOfQuestion(id) {
    return this.http.get(`${environment.apiUrl}apis/Answers`,{params:{id}})
  }
  getQuestions() {
    return this.http.get(`${environment.apiUrl}question?limit=10000`)
  }
  deleteQuestion(id) {
    return this.http.delete(`${environment.apiUrl}question/${id}`)
  }
}
