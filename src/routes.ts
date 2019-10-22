import { MovieListComponent } from './app/Movies/movie_list.component';
import { MovieDetailsComponent } from './app/Movies/movie_details.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './app/User/logincomponent';
export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movies/:page', component: MovieListComponent },
  { path: 'movies/:page/:id', component: MovieDetailsComponent },
  { path: 'logout', component: LoginComponent },
 // { path: 'movies', component: MovieListComponent },
  { path: 'movies', redirectTo: '/movies/home', pathMatch: 'full' },
  { path: '', redirectTo: '/movies/home', pathMatch: 'full' }
];
