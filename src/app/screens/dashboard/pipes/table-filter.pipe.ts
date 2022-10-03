import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(users:any[],value:any,searchValue:string): any {
      if(!searchValue && value == -1) return users
      if(searchValue) return users.filter(item =>  item.name.toLowerCase().includes(searchValue.toLowerCase())) 
      else {
        if (value=="-1") return users
        else  return users.filter(item =>  item?.role.type==value) 
      }
  }
}
