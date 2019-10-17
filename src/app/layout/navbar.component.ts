import { Component } from '@angular/core';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  // title = 'biiinge';
  navLinks1 = [
    { title: 'For You', url: '/for-you', isActive: true },
    { title: 'New Releases', url: '/new-releases' },
    { title: 'Trending', url: '/trending' },
    { title: 'Favourites', url: '/favourites' },
    { title: 'Coming Soon', url: '/coming-soon' }
  ];
  handleLinkClicked() {
    // console.log(data);
    alert('clicked');
  }
}
