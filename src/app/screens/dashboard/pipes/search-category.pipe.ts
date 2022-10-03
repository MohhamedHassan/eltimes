import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCategory'
})
export class SearchCategoryPipe implements PipeTransform {

  transform(categories:any,searchValue:string): any {
     if(!searchValue) return categories
     return categories.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

}
