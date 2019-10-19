import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side_navbar.component.html',
  styles: [
    `
      .nav-link {
        width: 100%;
        padding: 0;
        margin-top: 15px;
      }
      .nav-content {
        width: 90%;
        padding: 7.5px;
        padding-left: 0;
        margin-left: 10.1%;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        transition: background 0.3 ease-in, color 0.3s ease-in;
      }
      .nav-link:hover .nav-content {
        color: #ffffff60;
        cursor: pointer;
      }
      .nav-active {
        background: #292f3d;
        color: #f30c4e;
        font-weight: bold;
      }
    `
  ]
})
export class SideNavBarComponent {
  navLinks: any;
  @Output() onLinkClick: EventEmitter<any>;
  constructor() {
    this.onLinkClick = new EventEmitter();
    this.navLinks = [
      { title: 'For You', url: '/for-you', isActive: true },
      { title: 'New Releases', url: '/new-releases' },
      { title: 'Trending', url: '/trending' },
      { title: 'Favourites', url: '/favourites' },
      { title: 'Coming Soon', url: '/coming-soon' }
    ];
  }
  handleOnClick = data => {
    this.navLinks.map(link => {
      link.isActive = false;
      if (link.title === data) {
        link.isActive = true;
      }
      return link;
    });
  }
}
