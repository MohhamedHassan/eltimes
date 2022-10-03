import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ArtilceService } from '../../services/artilce.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  loading:boolean=true
  articles
  AllParams:any={}
  categoryName:string
  searchValue:string
  totalCount
  maxSize=5
  page
  constructor(private articleService:ArtilceService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.categoryName=params.name
        if(params.sub=='true') this.AllParams.subcategories=params?.id
        else if (params.sub=='false')  this.AllParams.categories=params?.id
        this.AllParams.status=false
        this.AllParams.page=1
        this.AllParams.sort='createdAt:-1'
        console.log(params)
        this.getArticles(this.AllParams)
      }
    )
  }
  getArticles(AllParams) {
    this.loading=true
    this.articleService.getArticles(AllParams).subscribe(
      (res:any) => {
        this.loading=false
        this.articles=res?.data
        this.totalCount=res?.totalCount
      } , err => {
        this.loading=false
      }
    )
  }
  getByStatus(value) {
    this.AllParams.status=value
    this.AllParams.page = 1
    this.getArticles(this.AllParams)
  }
  pageChanged(event: PageChangedEvent): void {
    this.AllParams.page = event.page;
    this.getArticles(this.AllParams)
  }
}
