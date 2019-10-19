import { Component, Input } from '@angular/core';
import { MovieService } from '../Movies/shared/movie.service';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {
    // this.movieService = _movieService;
  }
  ngOnInit() {
    this.movieDetails = this.movieService.getMovie(
      this.route.snapshot.params['id']
    );
  }
  handleOnLinkClicked(data) {
    alert(data);
  }
}
