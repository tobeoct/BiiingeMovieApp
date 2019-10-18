import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-details',
 templateUrl: './movie_details.component.html',
styles:[`
#movie-details
{
  width:100%;
  height:100vh;
  background: url(../../assets/1.jpg);
  background-size:cover;
}
`]
  //, styleUrls: ['./movie_streaming_app.component.css']
})
export class MovieDetailsComponent {
  title = 'biiinge';
 
  handleOnLinkClicked(data){
    alert(data);
  }
}
