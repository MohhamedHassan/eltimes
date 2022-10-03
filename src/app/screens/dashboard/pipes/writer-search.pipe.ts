import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'writerSearch'
})
export class WriterSearchPipe implements PipeTransform {
  transform(writers:any,searchValue:string): any {
    if(!searchValue) return writers
    return writers.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
 }

}
