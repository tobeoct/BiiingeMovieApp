import { Injectable } from '@angular/core';
@Injectable()
export class MovieService {
  getMovies = () => {
    return MOVIES;
  }
  getMovie = (id: number) => {
    const movie = MOVIES.filter(movie => movie.id == id)[0];
    console.log('GOTTEN MOVIE');
    console.log(movie);
    return movie;
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
    placeholderScene: '../../assets/9.jpg',
    video: '../../assets/video/1.mp4',
    rating: 8.5,
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/1.jpg',
    isFavourite: true,

    related: [
      {
        id: 1,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 2,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 2,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 2,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 2,
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
    placeholderScene: '../../assets/9.jpg',
    video: '../../assets/video/1.mp4',
    rating: 8.0,
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/2.jpg',
    isFavourite: true,

    related: [
      {
        id: 1,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 2,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 2,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 2,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 2,
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
    placeholderScene: '../../assets/9.jpg',
    video: '../../assets/video/1.mp4',
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/3.jpg',
    isFavourite: true,

    related: [
      {
        id: 1,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 2,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 2,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 2,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 2,
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
    placeholderScene: '../../assets/9.jpg',
    video: '../../assets/video/1.mp4',
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/4.jpg',
    isFavourite: true,

    related: [
      {
        id: 1,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 2,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 2,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 2,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 2,
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
    placeholderScene: '../../assets/9.jpg',
    video: '../../assets/video/1.mp4',
    rating: 6.5,
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/5.jpg',
    isFavourite: true,

    related: [
      {
        id: 1,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 2,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 2,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 2,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 2,
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
    placeholderScene: '../../assets/9.jpg',
    video: '../../assets/video/1.mp4',
    genres: ['ADVENTURE', 'ACTION', 'ROMANCE'],
    imageUrl: '../../assets/6.jpg',
    isFavourite: true,

    related: [
      {
        id: 1,
        imageUrl: '../../assets/3.jpg',
        title: 'Greta'
      },
      {
        id: 2,
        imageUrl: '../../assets/4.jpg',
        title: 'Shining'
      },
      {
        id: 2,
        imageUrl: '../../assets/5.jpg',
        title: 'Dunkirk'
      },
      {
        id: 2,
        imageUrl: '../../assets/6.jpg',
        title: 'Us'
      },
      {
        id: 2,
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
