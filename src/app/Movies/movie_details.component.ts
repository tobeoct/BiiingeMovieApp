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
  related:any;
  page:any;
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
    this.page=this.route.snapshot.params['page'];
    this.movieService.getMovie( this.route.snapshot.params['id'])
    .subscribe(e=>{
       this.movieDetails={
            id: e.id,
              title: e.data()['title'],
              year: e.data()['year'],
              starring:e.data()['starring'],
              awards: e.data()['awards'],
              director: e.data()['director'],
              plot:e.data()['plot'],
              time: e.data()['time'],
              placeholderScene:e.data()['placeholderScene'],
              video: e.data()['video'],
              rating: e.data()['rating'],
              genres:e.data()['genres'],
              imageUrl: e.data()['imageUrl'],
              isFavourite: e.data()['isFavourite'],
              isPlayingVideo: e.data()['isPlayingVideo'],
              related: e.data()['related']
            
          };
          this.movieService.searchRelated(this.movieDetails.genres[0]).subscribe(data=>{
            
            this.related = data.map(e => {
             
              return {
                id: e.payload.doc.id,
                  title: e.payload.doc.data()['title'],
                  year: e.payload.doc.data()['year'],
                  starring:e.payload.doc.data()['starring'],
                  awards: e.payload.doc.data()['awards'],
                  director: e.payload.doc.data()['director'],
                  plot:e.payload.doc.data()['plot'],
                  time: e.payload.doc.data()['time'],
                  placeholderScene:e.payload.doc.data()['placeholderScene'],
                  video: e.payload.doc.data()['video'],
                  rating: e.payload.doc.data()['rating'],
                  genres:e.payload.doc.data()['genres'],
                  imageUrl: e.payload.doc.data()['imageUrl'],
                  isFavourite: e.payload.doc.data()['isFavourite'],
                  isPlayingVideo: e.payload.doc.data()['isPlayingVideo'],
                  related: e.payload.doc.data()['related']
                
              };
            
            }).filter(movie=>movie.id!=this.movieDetails.id)
           });
           //this.related = this.related.filter(movie=>movie.id!=this.movieDetails.id);
    }
      );
    
  }
  isFavourite=(id:number)=>{
    return this.movieService.isFavourite(id,this.movieDetails.isFavourite);
  }
  addToFavourites = (id) => {
    
   this.movieDetails.isFavourite=!this.movieDetails.isFavourite;
          this.movieService.update_Movie(id,this.movieDetails);
          this.movieService.addToFavourite(id,this.movieDetails.isFavourite,this.movieDetails.title);
    
   
  }
  handleOnLinkClicked(data) {
    alert(data);
  }
  playVideo(id: number) {
    this.movieDetails.isPlayingVideo = !this.movieDetails.isPlayingVideo;
        this.movieService.playVideo(this.movieDetails.isPlayingVideo,this.movieDetails.title);
  }

}
