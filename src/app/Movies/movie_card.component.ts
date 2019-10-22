import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from './shared/movie.service';
import { AuthService } from '../common/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  page:any;
  isAuthenticated:boolean;
  constructor(private movieService:MovieService, private authService:AuthService, private router: Router, private route:ActivatedRoute) {
    // this.movie = new Object();
    router.events.subscribe((val) => {
      // see also 
       this.page= this.route.snapshot.params['page'];
    });
  }
  ngOnInit()
  {
    this.isAuthenticated=this.authService.isAuthenticated();
    this.page= this.route.snapshot.params['page'];
   if(this.movie.isFavourite&& !this.movieService.ifInFavourite(this.movie.id))
   {
     this.movieService.addToFavourite(this.movie.id,this.movie.isFavourite,this.movie.title,false);
   }
  }

  isFavourite=(id:number)=>{
    return this.movieService.isFavourite(id,this.movie.isFavourite);
  }
  addToFavourites = (id) => {
    
          this.movie.isFavourite=!this.movie.isFavourite;
          this.movieService.update_Movie(id,this.movie);
          this.movieService.addToFavourite(id,this.movie.isFavourite,this.movie.title);
  
   
  }
}
//||(movie != null && movie != undefined) 
