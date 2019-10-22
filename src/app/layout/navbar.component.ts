import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../common/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {MovieService} from '../Movies/shared/movie.service';
import { SessionService } from '../common/session.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit{
  isAuthenticated:boolean;
  user:any;
  movies:any;
  startAt:any="";//= new Subject();
  endAt:any="\uf8ff";//= new Subject();
  lastKeypress: number = 0;
constructor(private authService:AuthService, private session: SessionService ,private router: Router, private movieService: MovieService)
{

}
ngOnInit()
{
  this.isAuthenticated=this.authService.isAuthenticated();
  this.user=this.authService.getCurrentUser();
  this.user.username = this.session.titleCase( this.user.username);
 this.movieService.setQuery([this.startAt,this.endAt]);
 
}
// ngOnChanges(){
//   this.isAuthenticated=this.authService.isAuthenticated();
//   this.user=this.authService.getCurrentUser();
 
// }
search($event) {
  if ($event.timeStamp - this.lastKeypress > 200) {
  let q = $event.target.value;
  if(q===undefined)q="";
  this.startAt = q;
  this.endAt= q+"\uf8ff";
 const query =[this.startAt,this.endAt];
  this.movieService.setQuery(query);
 
  }
}
  handleLinkClicked(data) {
   
   //this.showEvent.emit("FOO FOO");
  
  }

}
