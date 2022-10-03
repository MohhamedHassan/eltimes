import { Component, OnInit } from '@angular/core';
import { ArtilceService } from '../../services/artilce.service';

@Component({
  selector: 'app-unaccepted-articles',
  templateUrl: './unaccepted-articles.component.html',
  styleUrls: ['./unaccepted-articles.component.scss']
})
export class UnacceptedArticlesComponent implements OnInit {
  loading:boolean=true
  unAcceptedArticles
  searchValue:string
  constructor(private articlesService:ArtilceService) { }

  ngOnInit(): void {
    this.getUnacceptedArticles()
  }
  getUnacceptedArticles() {
    // this.articlesService.getUnAcceptedArticles().subscribe(
    //   (res:any) => {
    //     this.unAcceptedArticles=res?.Data
    //     this.loading=false
    //   } , err => {
    //     this.loading=false
    //   }
    // )
  }
}
