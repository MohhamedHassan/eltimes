import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachArticleTitle'
})
export class SerachArticleTitlePipe implements PipeTransform {

  
  transform(articles:any,searchValue:string): any {
    if(!searchValue) return articles
    return articles.filter(item => item?.main?.title.includes(searchValue))
 }
}
