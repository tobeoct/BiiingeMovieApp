import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MovieStreamingAppComponent } from './movie_streaming_app.component';
import { NavBarComponent } from './layout/navbar.component';
import { SideNavBarComponent } from './layout/side_navbar.component';
@NgModule({
  declarations: [MovieStreamingAppComponent, NavBarComponent,SideNavBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [MovieStreamingAppComponent, NavBarComponent,SideNavBarComponent]
})
export class AppModule {}
