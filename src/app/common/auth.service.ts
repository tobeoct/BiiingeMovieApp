import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthService implements OnInit {
  currentUser: any;
  key:string = 'current-user';
  constructor(private http: HttpClient, private session: SessionService, private router:Router) {}
  ngOnInit()
  {}
  loginUser = (userName: string, password: string) => {
    const loginInfo = { username: userName, password: password };
  
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.currentUser = {
      id: 1,
      firstName: 'Tobe',
      lastName: 'Onyema',
      username: userName,
      imageUrl:"../../assets/profile.jpg"
    };
    this.setCurrentUser(
      {
        id: 1,
        firstName: 'Tobe',
        lastName: 'Onyema',
        username: userName,
        imageUrl:"../../assets/profile.jpg"
      });
      this.session.setSession('session-time',new Date());
  }
  isAuthenticated = () => {
    return !!this.getCurrentUser();
  }
  getCurrentUser=()=>{
    return JSON.parse( localStorage.getItem(this.key));
  }
  setCurrentUser=(user)=>{
    if (window.localStorage) {
      // localStorage supported
    if(!!user) {this.session.setSession(this.key,user); this.currentUser=user;}
    else{this.session.removeSession(this.key); this.currentUser=undefined;}
    }
    this.currentUser = user;
  }
  updateCurrentUser = (firstName: string, lastName: string) => {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
  registerUser = (userName: string, password: string) => {
    this.currentUser = {
      id: 1,
      firstName: 'Tobe',
      lastName: 'Onyema',
      username: userName,
      imageUrl:"../../assets/profile.jpg"
    };
    
    this.setCurrentUser({
      id: 1,
      firstName: 'Tobe',
      lastName: 'Onyema',
      username: userName,
      imageUrl:"../../assets/profile.jpg"
    });
  }
  logOut=()=>{
    this.setCurrentUser(undefined);
    this.session.resetSession();
    this.router.navigate(["/login"]);
  }
}
