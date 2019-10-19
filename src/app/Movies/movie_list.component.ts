import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Movies/shared/movie.service';
import { ToastrService } from '../common/toastr.service';
import { AuthService } from '../common/auth.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './movie_list.component.html',
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
    `
  ]
  // , styleUrls: ['./movie_streaming_app.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;
  constructor(
    private movieService: MovieService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    // this.movieService = _movieService;
  }
  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    this.movies = this.movieService.getMovies();
  }

  handleOnWatch(data) {
    // alert(data);
    this.toastr.success(data);
  }
}
