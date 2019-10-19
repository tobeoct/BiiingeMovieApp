import { Injectable } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
@Injectable()
export class MovieService {
  constructor(private toastr: ToastrService) {}
  getMovies = () => {
    return MOVIES;
  }
  getMovie = (id: number) => {
    const movie = MOVIES.filter(movie => movie.id == id)[0];
    console.log('GOTTEN MOVIE');
    console.log(movie);
    return movie;
  }
  addToFavourite = (id: number) => {
    MOVIES.map(movie => {
      if (movie.id === id) {
        movie.isFavourite = !movie.isFavourite;
        if (movie.isFavourite) {
          this.toastr.success(
            movie.title + ' has been added to your Favourites'
          );
        } else {
          this.toastr.info(
            movie.title + ' has been removed from your Favourites'
          );
        }
      }
      return movie;
    });
  }
  playVideo = (id: number) => {
    MOVIES.map(movie => {
      if (movie.id === id) {
        movie.isPlayingVideo = !movie.isPlayingVideo;
        if (movie.isPlayingVideo) {
          this.toastr.success(movie.title + ' playing');
        }
      }
      return movie;
    });
  }
}
const MOVIES = [
  {
    id: 1,
    title: 'Blade',
    year: '2019',
    starring:
      'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
    awards: 'Best Picture, Movie of the Year',
    director: 'Micheal Bay',
    plot:
      'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
    time: '2hr 30mins',
    placeholderScene: '../../assets/scenes/5.jpg',
    video: '../../assets/video/1.mp4',
    rating: 8.5,
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/1.jpg',
    isFavourite: true,
    isPlayingVideo: false,
    related: [
      {
        id: 3,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 4,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 5,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 6,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 5,
        imageUrl: '../../assets/8.jpeg',
        title: 'Venom'
      },
      {
        id: 2,
        imageUrl: '../../assets/2.jpg',
        title: 'Moonlight'
      }
    ]
  },
  {
    id: 2,
    title: 'Moonlight',
    year: '2019',
    starring:
      'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
    awards: 'Best Picture, Movie of the Year',
    director: 'Micheal Bay',
    plot:
      'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
    time: '2hr 30mins',
    placeholderScene: '../../assets/scenes/4.jpg',
    video: '../../assets/video/1.mp4',
    rating: 8.0,
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/2.jpg',
    isFavourite: false,
    isPlayingVideo: false,
    related: [
      {
        id: 3,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 4,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 5,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 6,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 5,
        imageUrl: '../../assets/8.jpeg',
        title: 'Venom'
      },
      {
        id: 2,
        imageUrl: '../../assets/2.jpg',
        title: 'Moonlight'
      }
    ]
  },
  {
    id: 3,
    title: 'Greta',
    rating: 7.5,
    year: '2019',
    starring:
      'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
    awards: 'Best Picture, Movie of the Year',
    director: 'Micheal Bay',
    plot:
      'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
    time: '2hr 30mins',
    placeholderScene: '../../assets/scenes/9.jpg',
    video: '../../assets/video/1.mp4',
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/3.jpg',
    isFavourite: false,
    isPlayingVideo: false,
    related: [
      {
        id: 3,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 4,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 5,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 6,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 5,
        imageUrl: '../../assets/8.jpeg',
        title: 'Venom'
      },
      {
        id: 2,
        imageUrl: '../../assets/2.jpg',
        title: 'Moonlight'
      }
    ]
  },
  {
    id: 4,
    title: 'The Shining',
    rating: 7.9,
    year: '2019',
    starring:
      'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
    awards: 'Best Picture, Movie of the Year',
    director: 'Micheal Bay',
    plot:
      'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
    time: '2hr 30mins',
    placeholderScene: '../../assets/scenes/1.jpg',
    video: '../../assets/video/1.mp4',
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/4.jpg',
    isFavourite: false,
    isPlayingVideo: false,
    related: [
      {
        id: 3,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 4,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 5,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 6,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 5,
        imageUrl: '../../assets/8.jpeg',
        title: 'Venom'
      },
      {
        id: 2,
        imageUrl: '../../assets/2.jpg',
        title: 'Moonlight'
      }
    ]
  },
  {
    id: 5,
    title: 'Dunkirk',
    year: '2019',
    starring:
      'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
    awards: 'Best Picture, Movie of the Year',
    director: 'Micheal Bay',
    plot:
      'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
    time: '2hr 30mins',
    placeholderScene: '../../assets/scenes/2.jpg',
    video: '../../assets/video/1.mp4',
    rating: 6.5,
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/5.jpg',
    isFavourite: false,
    isPlayingVideo: false,
    related: [
      {
        id: 3,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 4,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 5,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 6,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 5,
        imageUrl: '../../assets/8.jpeg',
        title: 'Venom'
      },
      {
        id: 2,
        imageUrl: '../../assets/2.jpg',
        title: 'Moonlight'
      }
    ]
  },
  {
    id: 6,
    title: 'Us',
    rating: 9.0,
    year: '2019',
    starring:
      'Leonardo Di Caprio, Beyonce, Anthonio Banderas, Carnito Supri, Genevieve Nnaji, Nkem Owoh, Elozam',
    awards: 'Best Picture, Movie of the Year',
    director: 'Micheal Bay',
    plot:
      'Current implementation: Financial date, Agent phone number, Agent name Agent account number Association ID Association Name, and member ID Proposed Implementation: Transaction date, Date initiated Aggregator, Association name. Association ID, Member ID, Agent name, Agent Account number.',
    time: '2hr 30mins',
    placeholderScene: '../../assets/scenes/7.jpg',
    video: '../../assets/video/1.mp4',
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/6.jpg',
    isFavourite: true,
    isPlayingVideo: false,
    related: [
      {
        id: 3,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 4,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 5,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 6,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 5,
        imageUrl: '../../assets/8.jpeg',
        title: 'Venom'
      },
      {
        id: 2,
        imageUrl: '../../assets/2.jpg',
        title: 'Moonlight'
      }
    ]
  }
];
