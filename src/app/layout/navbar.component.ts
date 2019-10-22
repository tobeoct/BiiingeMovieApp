import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../common/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  showSearch:boolean;
constructor(private authService:AuthService, private session: SessionService ,private route:ActivatedRoute,private router: Router, private movieService: MovieService)
{
  
 router.events.subscribe(data=>{
  const id = router.url.split('/')[3];
  const url = router.url;
 if(id===undefined)
 {
   this.showSearch=true;
 }
 else{
   this.showSearch=false;
 }
 if(url==='/login'||url==='/logout')
 {
   this.showSearch=false;
 }
//  if(id!==null || id!==undefined)
//  {
//    this.showSearch=false;
//  }

 

 });
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
