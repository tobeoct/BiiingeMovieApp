import { MovieListComponent } from './app/Movies/movie_list.component';
import { MovieDetailsComponent } from './app/Movies/movie_details.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './app/User/logincomponent';
export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
