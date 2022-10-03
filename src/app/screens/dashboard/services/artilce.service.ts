import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtilceService {

  constructor(private http:HttpClient) { }
  addArticle(value) {
    return this.http.post(`${environment.apiUrl}post`,value)
  }

  getArticles(params) {
    return this.http.get(`${environment.apiUrl}post`,{params} )
  }
  articleById(id) {
    return this.http.get(`${environment.apiUrl}post/${id}` )
  }
  deleteArticle(id) {
    return this.http.delete(`${environment.apiUrl}post/${id}`)
  }
  editArticle(id,value) {
    return this.http.put(`${environment.apiUrl}post/${id}`,value)
  }
}
