import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie_card.component.html',
  styles: [
    `
      #movie-list {
        padding: 0px 2.5% 20px 0.5%;
        overflow: auto !important;
        width: 100%;
        height: 100vh;
      }
      .image {
        height: 250px;
        border-radius: 30px;
        width: 100%;
        background-size: cover;
        background-position: top left;
      }
      .movie-card {
        min-height: 100px;
        font-size: 18px;
        margin-top: 30px;
      }
      .title {
        width: 85%;
      }
      .year {
        width: 15%;
        color: #ffffff50;
        text-align: right;
      }
      .genre {
        color: #ffffff50;
        font-size: 0.8em;
      }
      .genre span {
        display: inline;
      }
    `
  ]
})
export class MovieCardComponent {
  @Input() movie: any;
  @Output() onWatch: EventEmitter<any>;
  constructor() {
    this.onWatch = new EventEmitter<any>();
    // this.movie = new Object();
  }
  ngOnChanges() {
    // console.log(this.movie == null ? 'null' : this.movie.genres);
  }
  handleOnWatch(data) {
    this.onWatch.emit(data + ' added to favourites');
  }
}
