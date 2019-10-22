import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieService } from '../Movies/shared/movie.service';
import { ToastrService } from '../common/toastr.service';
import { AuthService } from '../common/auth.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      #movie-list {
        padding: 20px 2.5% 200px 0.5%;
        overflow-y: auto !important;
        width: 100%;
        height: 100vh;
      }
      #main-content {
        height: 92vh;
        margin-left: 17.62% !important;
        top: 50px;
      }
      .movie-card {
        min-height: 100px;
        font-size: 18px;
        margin-top: 30px;
      }
      #form input
      {
        background: #FFFFFF30 !important;
      }
    `
  ]
  // , styleUrls: ['./movie_streaming_app.component.css']
})
export class LoginComponent implements OnInit {
  movies: any;
  loginForm:FormGroup;
  constructor(
    private movieService: MovieService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    // this.movieService = _movieService;
    
  }
  ngOnInit() {
    if(this.router.url === '/logout')
    {
    this.authService.logOut();
    }
    let username = new FormControl();
    let password = new FormControl();
    this.loginForm = new FormGroup({
      userName:username,
      password:password
    });

  }
login=(formValues)=>{
  this.authService.loginUser(formValues.userName,formValues.password);
  if(this.authService.isAuthenticated())
  {
    //window.location.href='/movies/home';
    this.router.navigate(['/movies/home']);
  }
}
  handleOnWatch(data) {
    // alert(data);
    this.toastr.success(data);
  }
}
