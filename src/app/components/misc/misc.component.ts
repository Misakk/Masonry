import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from  '../../services/container.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class MiscComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  contents: ContentInfo[] = [];
  misc: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.contents = this.containerService.getImg();
  }
  getMisc() {
    for (let i = 0; i < this.contents.length ; i++) {
      if (this.contents[i].type.includes('MISC.')) {
        this.misc[this.a] = this.contents[i];
        this.a++;
      }
    }
  }
  ngOnInit() {
    this.getimages();
    this.getMisc();
  }

}
