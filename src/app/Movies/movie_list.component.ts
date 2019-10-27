import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Movies/shared/movie.service';
import { ToastrService } from '../common/toastr.service';
import { AuthService } from '../common/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../common/session.service';
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
      



@media all and (max-width: 600px)
{
  .movie-card
  {
    width:49.5% !important;
    margin-top:30px;
  }
}
@media all and (max-width: 800px)
 {
   #movie-list{
   padding: 20px 3% 100px 3%;
   overflow-y: hidden !important;
   overflow: hidden;
   height:auto  !important;
   margin-top: 18%;
   }
#main-content
{
 width:100% !important;
 margin-left: 3% !important;
 
}

}
    `
  ]
  // , styleUrls: ['./movie_streaming_app.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;
  page:string= this.route.snapshot.params['page'];;
  private query =["","\uf8ff"];
  constructor(
    private movieService: MovieService,
    private toastr: ToastrService,
    private route:ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private session: SessionService
  ) {
    // this.movieService = _movieService;
    
    this.movieService.query.subscribe(data=>{this.query=data;
      this.loadData(this.page)
});
  let favs= this.session.getSession('favourites');
  if(favs==null) favs = [];
  session.setSession('favourites',favs);
  
  this.router.events.subscribe((val) => {
     this.page= this.route.snapshot.params['page'];
this.loadData(this.page);

});
  }
  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    console.log(this.page);
//     this.router.events.subscribe((val) => {
//       this.page= this.route.snapshot.params['page'];
//  this.loadData(this.page);
 
//  });
  }
  loadData=(p)=>{
    switch(p)
    {
      case "logout":
        this.authService.logOut()
      case "favourites":
          this.movieService.searchMovies(this.query[0], this.query[1]).subscribe(data => {
  
            this.movies = data.map(e => {
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
            })
           // console.log(this.movies);
       
          });
      
        break;
        default :
        this.movieService.getMovies(this.query[0], this.query[1])
        .subscribe(movies => {
          this.movies = movies.map(e => {
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
          });
        });
      }
  }

  handleOnWatch(data) {
    // alert(data);
    this.toastr.success(data);
  }
}
