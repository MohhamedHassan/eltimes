import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }
  addComment(value) {
    return this.http.post(`${environment.apiUrl}comment`,value)
  }
  deleteComment(id) {
    return this.http.delete(`${environment.apiUrl}comment/${id}`)
  }
  getComments(post) {
    return this.http.get(`${environment.apiUrl}comment`,{params:{post,limit:'1000'}})
  }
}
