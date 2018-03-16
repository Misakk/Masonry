import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from  '../../services/container.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class DesignComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  contents: ContentInfo[] = [];
  design: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.contents = this.containerService.getImg();
  }
  getDesign() {
    for (let i = 0; i < this.contents.length ; i++) {
      if (this.contents[i].type.includes('DESIGN')) {
        this.design[this.a] = this.contents[i];
        this.a++;
      }
    }
  }
  ngOnInit() {
    this.getimages();
    this.getDesign();
  }

}
