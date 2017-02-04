import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SigninPage} from "../pages/account/signin/signin";
import {SignupPage} from "../pages/account/signup/signup";
import {SearchPage} from "../pages/search/search";
import {ProfilePage} from "../pages/profile/profile";
import {NotificationPage} from "../pages/notification/notification";
import {PatientProfilePage} from "../pages/patient-profile/patient-profile";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    SearchPage,
    ProfilePage,
    NotificationPage,
    PatientProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    NotificationPage,
    PatientProfilePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
