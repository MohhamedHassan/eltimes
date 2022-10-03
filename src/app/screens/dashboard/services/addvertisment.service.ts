import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddvertismentService {
  allAds:BehaviorSubject<any>=new BehaviorSubject([])
  leftAds=[]
  rightAds=[]
  mainAds=[]
  headerAds=[]
  constructor(private http:HttpClient) { }
  addAdvertisment(body) {
    return this.http.post(`${environment.apiUrl}ad`,body)
  }
  editAdvertisment(id,body) {
    return this.http.put(`${environment.apiUrl}ad/${id}`,body)
  }
  getAds() {
    return this.http.get(`${environment.apiUrl}ad?limit=1000&status=active`)
  }
  deleteAd(id) {
    return this.http.delete(`${environment.apiUrl}ad/${id}`)
  }
  getAdById(id) {
    return this.http.get(`${environment.apiUrl}ad/${id}`)
  }
}
