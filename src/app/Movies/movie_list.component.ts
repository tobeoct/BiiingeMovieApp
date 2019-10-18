import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
 templateUrl: './movie_list.component.html',
styles:[
  `
  #movie-list
  {
    padding:20px 2.5% 200px 0.5%;
    overflow-y:auto !important;
    width:100%;
    height:100vh;
  }
  #main-content
  {
    height:92vh;
    margin-left:17.62% !important;
    
  }
  .movie-card
  {
    min-height:100px;
    font-size: 18px;
    margin-top:30px;
  }
  `
]
  //, styleUrls: ['./movie_streaming_app.component.css']
})
export class MovieListComponent {
  handleOnWatch(data){
    alert(data);
  }
    movies:any = [
     {
       id:1,
       title:"Moonlight",
       year:"2019",
       genres:["ADVENTURE","ACTION","ROMANCE"],
       imageUrl:"../../assets/1.jpg",
       isFavourite:true
     },
     {
       id:1,
      title:"Moonlight",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/2.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"Greta",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/3.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"The Shining",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/4.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"Dunkirk",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/5.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"Us",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/6.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"Black Panther",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/7.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"Joker",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/5.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"DeadPool",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/6.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"Black Panther",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/7.jpg",
      isFavourite:true
    }
    ,
    {
      id:1,
      title:"Joker",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/5.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"DeadPool",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/6.jpg",
      isFavourite:true
    },
    {
      id:1,
      title:"Black Panther",
      year:"2019",
      genres:["ADVENTURE","ACTION","ROMANCE"],
      imageUrl:"../../assets/7.jpg",
      isFavourite:true
    }
    
    
   ]
}
