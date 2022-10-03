import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  getCategoriesNames() {
    return this.http.get(`${environment.apiUrl}apis/categories`)
  }
  getCategories() {
    return this.http.get(`${environment.apiUrl}category?limit=10000`)
  }
  addCategories(value) {
    return this.http.post(`${environment.apiUrl}category`,value)
  }
  updateCategories(value,id) {
    return this.http.put(`${environment.apiUrl}category/${id}`,value)
  }
  deleteCategory(id) {
    return this.http.delete(`${environment.apiUrl}category/${id}`)
  }
  getCategoryById(id) {
    return this.http.get(`${environment.apiUrl}category/${id}`)
  }
  addSubCategory(value) {
    return this.http.post(`${environment.apiUrl}subcategory`,value)
  }
  deleteSubCategory(id) {
    return this.http.delete(`${environment.apiUrl}subcategory/${id}`)
  }
  getSubCategoryById(id) {
    return this.http.get(`${environment.apiUrl}subcategory/${id}`)
  }
  updateSubCategories(value,id) {
    return this.http.put(`${environment.apiUrl}subcategory/${id}`,value)
  }
}
