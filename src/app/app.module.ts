import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';

import { RegistroComponent } from './registro/registro.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { CrudUserComponent } from './crud-user/crud-user.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Guard
import { AuthGuard } from './core/auth.guard'

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Core module
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component'



const appRoutes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'photos', component: PhotosListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: CrudUserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    RegistroComponent,
    PhotosListComponent,
    CrudUserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule,
    MatProgressBarModule,
    FileUploadModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC_qhrPKJ54tIQYcqbU-cVP1c2i7jnpcmw",
      authDomain: "angular-a0354.firebaseapp.com",
      databaseURL: "https://angular-a0354.firebaseio.com",
      projectId: "angular-a0354",
      storageBucket: "angular-a0354.appspot.com",
      messagingSenderId: "645395988906"
    }),
    AngularFireStorageModule,
    MatSortModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule,
    MatSnackBarModule,
    CoreModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
