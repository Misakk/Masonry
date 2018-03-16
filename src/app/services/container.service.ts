import { Injectable } from '@angular/core';
import {ContentInfo} from '../components/contentInfo';

@Injectable()
export class ContainerService {
  imglist: ContentInfo[] = [
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/01/techandall-minimalist-waterbottle-1024x1024.jpg',
      header: 'Bottle of video',
      text: 'Cras bibendum finibus quam nec fermentum. Suspendisse tincidunt odio quam, non blandit tortor\n' +
      'venenatis quis. Morbi quis tincidunt turpis. In eleifend ut nibh eget pellentesque.',
      hoverHeader: 'Bottle of video',
      type: 'COMMERCIAL LIFE & WORK',
      height: 300
    },
    {
      url: 'https://www.w3schools.com/w3css/img_lights.jpg',
      header: 'Half a frame',
      text: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_1_1-1024x753.jpg' +
      ' vehicula porttitor, metus velit elementum ante, ac accumsan augue neque sit amet eros.',
      hoverHeader: 'Half a frame',
      type: 'DESIGN',
      height: 250
    },
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/01/photo-1455612810508-8faae6db6455-1024x576.jpg',
      header: 'Office composition',
      text: 'Mauris tempus, ligula at vehicula porttitor, metus velit elementum ante, ac accumsan augue neque sit amet eros. ' +
      'Curabitur vehicula justo in sapien viverra, eget molestie augue congue. In nec risus congue, lacinia elit a, lacinia sem.',
      hoverHeader: 'Office composition',
      type: 'COMMERCIAL',
      height: 200
    },
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/01/Portfolio_6-1024x569.jpg',
      header: 'Three mock up stack',
      text: 'Donec tristique eleifend neque, eget semper mi ornare ac. Mauris porta aliquam ante, et venenatis diam lobortis ' +
      'ut. Nulla pretium ipsum vitae lectus viverra, a ultrices nisi faucibus.',
      hoverHeader: 'Three mock up stack',
      type: 'LIFE & WORK',
      height: 200
    },
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/01/Portfolio_5_1-1024x685.jpg',
      header: 'Notebook design',
      text: 'Cras bibendum finibus quam nec fermentum. Suspendisse tincidunt odio quam, non blandit tortor venenatis quis.' +
      ' Morbi quis tincidunt turpis. In eleifend ut nibh eget pellentesque.',
      hoverHeader: 'Notebook design',
      type: 'MISC.',
      height: 250
    },
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/02/Paperback-Book-Mockup-vol-2-1024x936.jpg',
      header: 'Books and covers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate' +
      ' posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies,' +
      ' rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...',
      hoverHeader: 'Books and covers',
      type: 'COMMERCIAL LIFE & WORK',
      height: 300
    },
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_6_4-1024x852.jpg',
      header: 'Mock up of the web',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate' +
      ' posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies,' +
      ' rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...',
      hoverHeader: 'Mock up of the web',
      type: 'DESIGN MISC.',
      height: 200
    },
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_3-1024x965.jpg',
      header: 'Brand in the bag',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate' +
      ' posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies,' +
      ' rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...',
      hoverHeader: 'Brand in the bag',
      type: 'DESIGN',
      height: 250
    },
    {
      url: 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_2_2-989x1024.jpg',
      header: 'Stack of bottles',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate' +
      ' posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies,' +
      ' rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...',
      hoverHeader: 'Stack of bottles',
      type: 'DESIGN LIFE & WORK MISC.',
      height: 300
    }
  ];
  constructor() { }
  getImg() {
    return this.imglist;
  }
}
