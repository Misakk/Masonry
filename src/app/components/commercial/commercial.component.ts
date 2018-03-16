import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from  '../../services/container.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class CommercialComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  contents: ContentInfo[] = [];
  commercial: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.contents = this.containerService.getImg();
  }
  getCommercial() {
    for (let i = 0; i < this.contents.length ; i++) {
      if (this.contents[i].type.includes('COMMERCIAL')) {
        this.commercial[this.a] = this.contents[i];
        this.a++;
      }
    }
  }
  ngOnInit() {
    this.getimages();
    this.getCommercial();
  }

}
