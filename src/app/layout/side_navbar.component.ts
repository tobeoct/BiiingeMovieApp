import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-navbar',
  templateUrl: './side_navbar.component.html',
  styles: [
    `
      #side-navbar {
        height: 95vh;
        top: 50px;
        position: fixed;
        color: #ffffff40;
        padding: 0;
        padding-top: 1%;
      }
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
  @Input() navLinks: any;
  @Output() onLinkClick = new EventEmitter();
  handleOnClick = () => {
    // alert('clicked');
    this.onLinkClick.emit();
  }
}
