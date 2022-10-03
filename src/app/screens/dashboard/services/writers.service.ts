import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor(private http:HttpClient) { }
  addWriter(body) {
    return this.http.post(`${environment.apiUrl}writer`,body)
  }
  editWriter(body,id) {
    return this.http.put(`${environment.apiUrl}writer/${id}`,body)
  }
  getAllWriters() {
    return this.http.get(`${environment.apiUrl}writer?limit=10000`)
  }
  deleteWriter(id) {
    return this.http.delete(`${environment.apiUrl}writer/${id}`)
  }
}
