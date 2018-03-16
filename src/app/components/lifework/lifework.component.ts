import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from  '../../services/container.service';

@Component({
  selector: 'app-lifework',
  templateUrl: './lifework.component.html',
  styleUrls: ['./lifework.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class LifeworkComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  contents: ContentInfo[] = [];
  lifework: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.contents = this.containerService.getImg();
  }
  getLifework() {
    for (let i = 0; i < this.contents.length ; i++) {
      if (this.contents[i].type.includes('LIFE')) {
        this.lifework[this.a] = this.contents[i];
        this.a++;
      }
    }
  }
  ngOnInit() {
    this.getimages();
    this.getLifework();
  }

}
