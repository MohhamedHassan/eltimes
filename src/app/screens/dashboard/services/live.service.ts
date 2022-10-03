import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private http:HttpClient) { }
  addLive(value) {
    return this.http.post(`${environment.apiUrl}live`,value)
  }
  deleteLive(id) {
    return this.http.delete(`${environment.apiUrl}live/${id}`)
  }
  getLive() {
    return this.http.get(`${environment.apiUrl}live`)
  }
}
