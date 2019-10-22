import { Component, Input, Output, EventEmitter } from '@angular/core';
import {SessionService} from "../common/session.service";
import { Router, ActivatedRoute } from '@angular/router';
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
        color: #ffffff80;
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
  page:any;
  @Output() onLinkClick: EventEmitter<any>;
  constructor(private session: SessionService, private router: Router, private route: ActivatedRoute) {
    this.onLinkClick = new EventEmitter();
    this.navLinks = [
      { title: 'Home', url: '/home', isActive: true },
      { title: 'Favourites', url: '/favourites' },
      { title: 'Logout', url: '/logout' }
    ];
    this.page= this.route.snapshot.params['page'];
    this.handleOnClick(session.titleCase(this.page));
  }
  handleOnClick = data => {
    let url ="";
    this.navLinks.map(link => {
      link.isActive = false;
      if (link.title === data) {
        this.session.setPage(data);
        url = link.url;
        link.isActive = true;
      }
      return link;
    });
    this.router.navigate(['movies'+url]);

  }
}
