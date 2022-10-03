import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddvertismentService } from '../../services/addvertisment.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  loading:boolean=true
  deleteAdLoading:boolean=false
  ads
  modalRef?: BsModalRef;
  constructor(private adsService:AddvertismentService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAllAds()
  }
  

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getAllAds() {
    this.loading=true
    this.adsService.getAds().subscribe(
      (res:any) => {
        this.loading=false
        this.ads=res?.data
        console.log(res)
      } , err => {
        this.loading=false
      }
    )
  }
  deleteAD(id) {
    this.deleteAdLoading=true
    this.adsService.deleteAd(id).subscribe(
      res => {
        this.deleteAdLoading=false
        this.modalRef.hide()
        this.getAllAds()
      } , err => {
        this.deleteAdLoading=false
      }
    )
  }
}
