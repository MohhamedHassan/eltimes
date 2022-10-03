import { Injectable } from '@angular/core';
declare namespace instgrm {
  namespace Embeds {
    function process(): void;
  }
}
@Injectable({
  providedIn: 'root'
})
export class SmallnavbarService {
  showSmallNavBAr:boolean=false
  hasSubCategory:boolean=false
  loadingCount:number[]=[]
  containerOfSubCategory:any[]
  constructor() {
    this.loadingCount.length=9
   }
   public processEmbeddedInstagramPosts(): void {
    if (window['instgrm']) {
      instgrm.Embeds.process()
    }
  }
}
