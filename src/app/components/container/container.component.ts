import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from  '../../services/container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class ContainerComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  contents: ContentInfo[] = [];
  getimages(): void {
    this.contents = this.containerService.getImg();
  }
  ngOnInit() {
    this.getimages();
  }

}
