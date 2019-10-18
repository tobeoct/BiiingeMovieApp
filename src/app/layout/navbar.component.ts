import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  @Output() showEvent : EventEmitter<string> = new EventEmitter<string>();
  handleLinkClicked(data) {
     console.log(data);
   //this.showEvent.emit("FOO FOO");
  
  }
}
