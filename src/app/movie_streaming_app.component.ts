import { Component } from '@angular/core';

@Component({
  selector: 'movie-streaming-app-root',
  templateUrl: './movie_streaming_app.component.html'

  // , styleUrls: ['./movie_streaming_app.component.css']
})
export class MovieStreamingAppComponent {
  title = 'biiinge';

  handleOnLinkClicked(data) {
    alert(data);
  }
}
