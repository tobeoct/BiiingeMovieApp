import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MovieStreamingAppComponent } from './movie_streaming_app.component';
import { NavBarComponent } from './layout/navbar.component';
import { TitleBarComponent } from './layout/title_bar.component';
import {MovieListComponent} from './Movies/movie_list.component';
import { SideNavBarComponent } from './layout/side_navbar.component';
import {MovieCardComponent} from './Movies/movie_card.component';
import {MovieDetailsComponent} from './Movies/movie_details.component';
@NgModule({
  declarations: [MovieStreamingAppComponent, NavBarComponent,SideNavBarComponent, MovieListComponent,TitleBarComponent,MovieCardComponent,MovieDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [MovieStreamingAppComponent, NavBarComponent,SideNavBarComponent,MovieListComponent,TitleBarComponent,MovieCardComponent,MovieDetailsComponent]
})
export class AppModule {}
