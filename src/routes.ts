import { MovieListComponent } from './app/Movies/movie_list.component';
import { MovieDetailsComponent } from './app/Movies/movie_details.component';
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
