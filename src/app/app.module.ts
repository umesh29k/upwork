import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SignUpComponent } from './sign-up/sign-up.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
}

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ListProjectComponent,
    EditProjectComponent,
    WelcomeComponent,
    ProjectDetailComponent,
    AdminComponent,
    LoginComponent,
    GetStartedComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
