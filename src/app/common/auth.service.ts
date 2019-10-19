import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {
  currentUser: any;
  constructor(private http: HttpClient) {}
  loginUser = (userName: string, password: string) => {
    const loginInfo = { username: userName, password: password };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.currentUser = {
      id: 1,
      firstName: 'Tobe',
      lastName: 'Onyema',
      username: userName
    };
  }
  isAuthenticated = () => {
    return !!this.currentUser;
  }
  updateCurrentUser = (firstName: string, lastName: string) => {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
  registerUser = (username: string, password: string) => {
    this.currentUser = {
      id: 1,
      firstName: 'Tobe',
      lastName: 'Onyema',
      username: username
    };
  }
}
