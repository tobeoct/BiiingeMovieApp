import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MovieStreamingAppComponent } from './movie_streaming_app.component';
import { NavBarComponent } from './layout/navbar.component';
import { TitleBarComponent } from './layout/title_bar.component';
import { MovieListComponent } from './Movies/movie_list.component';
import { SideNavBarComponent } from './layout/side_navbar.component';
import { MovieCardComponent } from './Movies/movie_card.component';
import { MovieDetailsComponent } from './Movies/movie_details.component';
import { MovieService } from './Movies/shared/movie.service';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    MovieStreamingAppComponent,
    NavBarComponent,
    SideNavBarComponent,
    MovieListComponent,
    TitleBarComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [MovieService, ToastrService],
  bootstrap: [
    MovieStreamingAppComponent,
    NavBarComponent,
    SideNavBarComponent,
    MovieListComponent,
    TitleBarComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ]
})
export class AppModule {}
