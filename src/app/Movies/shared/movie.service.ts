import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { SessionService } from 'src/app/common/session.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit {
  items =["",""];
  query= new Subject<any>();
  MOVIES:any;
  constructor(private toastr: ToastrService, private session:SessionService,private firestore: AngularFirestore) {
  
  }

  ngOnInit(){
   
  }
 
  read_Movies() {
    return this.firestore.collection('movies').snapshotChanges();
  }
 
  update_Movie(recordID,record){
    this.firestore.doc('movies/' + recordID).update(record);
  }
 
  delete_Movie(record_id) {
    this.firestore.doc('movies/' + record_id).delete();
  }
  setQuery=(q)=>{
    this.query.next(q);
  }
  getMovies = (startAt, endAt) => {
    
    return this.firestore.collection('movies', ref => 
    ref
      .orderBy('title')
      .limit(20)
      .startAt(startAt)
      .endAt(endAt)
  ).snapshotChanges();
  }
  searchMovies = (startAt,endAt) => {
    return this.firestore
    .collection('movies', ref =>
        ref.where('isFavourite', '==', true)
        .orderBy('title')
      .limit(10)
      .startAt(startAt)
      .endAt(endAt)
           )
           .snapshotChanges();
  }

  searchRelated = (genres) => {
    return this.firestore
    .collection('movies', ref =>
        ref.where('genres',"array-contains", genres)
        .orderBy('title')
      .limit(10)
      
           )
           .snapshotChanges();
  }
  getMovie = (id) => {
   return this.firestore.collection('movies').doc(id).get();//..snapshotChanges();
  }
  isFavourite=(id:number,isFavourite)=>{
    const favs= this.session.getSession('favourites');
    if(favs===undefined||favs===null||favs.length===0||favs.filter(fav=>fav===id).length<1)
    {
      return isFavourite;
    }
   let fav = favs.filter(fav=>fav===id);
  
   if(fav.length>0)
   {
     return true;
   }
   return false;
  }
  addToFavourite= (id,isFavourite,title, toast=true) => {
    let favs= this.session.getSession('favourites');
   
    if(isFavourite)
    {
      favs.push(id);
      if(toast)this.toastr.success(title + ' was added to Favourites');
    }
    else{
      
     favs= favs.filter(fav=>(fav!==id));
     if(toast)this.toastr.info(title + ' was removed to Favourites');
    }
  this.session.setSession('favourites',favs);
  }
  ifInFavourite=(id)=>{
    let favs= this.session.getSession('favourites');
    return favs.filter(fav=>(fav==id)).length>0?true:false;
  }
  playVideo = (isPlayingVideo:boolean, title:string) => {

    if (isPlayingVideo) {
      this.toastr.success(title + ' playing');
    }
  }
}
// const MOVIES = [
//   {
//     id: 1,
//     title: 'Blade',
//     year: '2019',
//     starring:
//       'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
//     awards: 'Best Picture, Movie of the Year',
//     director: 'Micheal Bay',
//     plot:
//       'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
//     time: '2hr 30mins',
//     placeholderScene: '../../assets/scenes/5.jpg',
//     video: '../../assets/video/1.mp4',
//     rating: 8.5,
//     genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
//     imageUrl: '../../assets/1.jpg',
//     isFavourite: false,
//     isPlayingVideo: false,
//     related: [
//       {
//         id: 3,
//         imageUrl: '../../assets/3.jpg',
//         title: 'Greta'
//       },
//       {
//         id: 4,
//         imageUrl: '../../assets/4.jpg',
//         title: 'Shining'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/5.jpg',
//         title: 'Dunkirk'
//       },
//       {
//         id: 6,
//         imageUrl: '../../assets/6.jpg',
//         title: 'Us'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/8.jpeg',
//         title: 'Venom'
//       },
//       {
//         id: 2,
//         imageUrl: '../../assets/2.jpg',
//         title: 'Moonlight'
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Moonlight',
//     year: '2019',
//     starring:
//       'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
//     awards: 'Best Picture, Movie of the Year',
//     director: 'Micheal Bay',
//     plot:
//       'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
//     time: '2hr 30mins',
//     placeholderScene: '../../assets/scenes/4.jpg',
//     video: '../../assets/video/1.mp4',
//     rating: 8.0,
//     genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
//     imageUrl: '../../assets/2.jpg',
//     isFavourite: false,
//     isPlayingVideo: false,
//     related: [
//       {
//         id: 3,
//         imageUrl: '../../assets/3.jpg',
//         title: 'Greta'
//       },
//       {
//         id: 4,
//         imageUrl: '../../assets/4.jpg',
//         title: 'Shining'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/5.jpg',
//         title: 'Dunkirk'
//       },
//       {
//         id: 6,
//         imageUrl: '../../assets/6.jpg',
//         title: 'Us'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/8.jpeg',
//         title: 'Venom'
//       },
//       {
//         id: 2,
//         imageUrl: '../../assets/2.jpg',
//         title: 'Moonlight'
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'Greta',
//     rating: 7.5,
//     year: '2019',
//     starring:
//       'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
//     awards: 'Best Picture, Movie of the Year',
//     director: 'Micheal Bay',
//     plot:
//       'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
//     time: '2hr 30mins',
//     placeholderScene: '../../assets/scenes/9.jpg',
//     video: '../../assets/video/1.mp4',
//     genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
//     imageUrl: '../../assets/3.jpg',
//     isFavourite: false,
//     isPlayingVideo: false,
//     related: [
//       {
//         id: 3,
//         imageUrl: '../../assets/3.jpg',
//         title: 'Greta'
//       },
//       {
//         id: 4,
//         imageUrl: '../../assets/4.jpg',
//         title: 'Shining'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/5.jpg',
//         title: 'Dunkirk'
//       },
//       {
//         id: 6,
//         imageUrl: '../../assets/6.jpg',
//         title: 'Us'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/8.jpeg',
//         title: 'Venom'
//       },
//       {
//         id: 2,
//         imageUrl: '../../assets/2.jpg',
//         title: 'Moonlight'
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: 'The Shining',
//     rating: 7.9,
//     year: '2019',
//     starring:
//       'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
//     awards: 'Best Picture, Movie of the Year',
//     director: 'Micheal Bay',
//     plot:
//       'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
//     time: '2hr 30mins',
//     placeholderScene: '../../assets/scenes/1.jpg',
//     video: '../../assets/video/1.mp4',
//     genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
//     imageUrl: '../../assets/4.jpg',
//     isFavourite: false,
//     isPlayingVideo: false,
//     related: [
//       {
//         id: 3,
//         imageUrl: '../../assets/3.jpg',
//         title: 'Greta'
//       },
//       {
//         id: 4,
//         imageUrl: '../../assets/4.jpg',
//         title: 'Shining'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/5.jpg',
//         title: 'Dunkirk'
//       },
//       {
//         id: 6,
//         imageUrl: '../../assets/6.jpg',
//         title: 'Us'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/8.jpeg',
//         title: 'Venom'
//       },
//       {
//         id: 2,
//         imageUrl: '../../assets/2.jpg',
//         title: 'Moonlight'
//       }
//     ]
//   },
//   {
//     id: 5,
//     title: 'Dunkirk',
//     year: '2019',
//     starring:
//       'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
//     awards: 'Best Picture, Movie of the Year',
//     director: 'Micheal Bay',
//     plot:
//       'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
//     time: '2hr 30mins',
//     placeholderScene: '../../assets/scenes/2.jpg',
//     video: '../../assets/video/1.mp4',
//     rating: 6.5,
//     genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
//     imageUrl: '../../assets/5.jpg',
//     isFavourite: false,
//     isPlayingVideo: false,
//     related: [
//       {
//         id: 3,
//         imageUrl: '../../assets/3.jpg',
//         title: 'Greta'
//       },
//       {
//         id: 4,
//         imageUrl: '../../assets/4.jpg',
//         title: 'Shining'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/5.jpg',
//         title: 'Dunkirk'
//       },
//       {
//         id: 6,
//         imageUrl: '../../assets/6.jpg',
//         title: 'Us'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/8.jpeg',
//         title: 'Venom'
//       },
//       {
//         id: 2,
//         imageUrl: '../../assets/2.jpg',
//         title: 'Moonlight'
//       }
//     ]
//   },
//   {
//     id: 6,
//     title: 'Us',
//     rating: 9.0,
//     year: '2019',
//     starring:
//       'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
//     awards: 'Best Picture, Movie of the Year',
//     director: 'Micheal Bay',
//     plot:
//       'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
//     time: '2hr 30mins',
//     placeholderScene: '../../assets/scenes/7.jpg',
//     video: '../../assets/video/1.mp4',
//     genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
//     imageUrl: '../../assets/6.jpg',
//     isFavourite: false,
//     isPlayingVideo: false,
//     related: [
//       {
//         id: 3,
//         imageUrl: '../../assets/3.jpg',
//         title: 'Greta'
//       },
//       {
//         id: 4,
//         imageUrl: '../../assets/4.jpg',
//         title: 'Shining'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/5.jpg',
//         title: 'Dunkirk'
//       },
//       {
//         id: 6,
//         imageUrl: '../../assets/6.jpg',
//         title: 'Us'
//       },
//       {
//         id: 5,
//         imageUrl: '../../assets/8.jpeg',
//         title: 'Venom'
//       },
//       {
//         id: 2,
//         imageUrl: '../../assets/2.jpg',
//         title: 'Moonlight'
//       }
//     ]
//   }
// ];
