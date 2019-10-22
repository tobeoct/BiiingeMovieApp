import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
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
import { LoginComponent } from './User/logincomponent';
import { AuthService } from './common/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './common/session.service';

@NgModule({
  declarations: [
    MovieStreamingAppComponent,
    NavBarComponent,
    SideNavBarComponent,
    MovieListComponent,
    TitleBarComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    LoginComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'biiinge'),
 	AngularFirestoreModule, AngularFireAuthModule, 
   AngularFireStorageModule,AngularFireDatabaseModule],
  providers: [MovieService, ToastrService, AuthService, SessionService],
  bootstrap: [
    MovieStreamingAppComponent,
    NavBarComponent,
    SideNavBarComponent,
    MovieListComponent,
    TitleBarComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    LoginComponent
  ]
})
export class AppModule {}
