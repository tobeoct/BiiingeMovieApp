import { Component, Input } from '@angular/core';
import { MovieService } from '../Movies/shared/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../common/auth.service';
@Component({
  templateUrl: './movie_details.component.html',
  styles: [
    `
      #movie-details {
        height: 100vh;
        width: 100vw;
        background-size: cover;
        padding: 2%;
      }
      #movie-details #description {
        top: 55%;
        position: absolute;
        width: 98%;
      }
      #related-list {
        padding-top: 20px;
      }

      .related-item {
        display: inline-block;
        margin-right: 20px;
        transition: opacity 0.3s ease-in, transform 0.3s ease-out;
      }
      .related-item {
        opacity: 0.4;
      }
      #related-list:hover .related-item {
        opacity: 0.6;
      }
      .related-item:hover {
        opacity: 0.8 !important;
        cursor: pointer;
        transform: scale(1.05);
      }
      .related-item #image {
        width: 130px;
        height: 150px;
        border-radius: 20px;
        background-size: cover;
      }
      .related-item #title {
        margin-top: 10px;
      }
      #play-button {
        cursor: pointer;
        width: 70px;
        height: 70px;
        background: #ffffff30;
        border-radius: 70px;
        margin: auto;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
  // , styleUrls: ['./movie_streaming_app.component.css']
})
export class MovieDetailsComponent {
  title = 'biiinge';
  // @Input()
  movieDetails: any;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    // this.movieService = _movieService;
  }
  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    this.movieDetails = this.movieService.getMovie(
      this.route.snapshot.params['id']
    );
  }
  addToFavourites(data) {
    // this.onWatch.emit(data + ' added to favourites');
    this.movieService.addToFavourite(data);
  }
  handleOnLinkClicked(data) {
    alert(data);
  }
  playVideo(id: number) {
    this.movieService.playVideo(id);
  }
}
