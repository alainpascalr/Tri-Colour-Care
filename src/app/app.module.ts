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
import {DietPage} from "../pages/diet/diet";
import {MedicalHistoryPage} from "../pages/medical-history/medical-history";
import {MedicationGivenPage} from "../pages/medication-given/medication-given";
import {ReasonForVisitPage} from "../pages/reason-for-visit/reason-for-visit";
import {TestPerformedPage} from "../pages/test-performed/test-performed";

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
    PatientProfilePage,
    DietPage,
    MedicalHistoryPage,
    MedicationGivenPage,
    ReasonForVisitPage,
    TestPerformedPage
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
    PatientProfilePage,
    DietPage,
    MedicalHistoryPage,
    MedicationGivenPage,
    ReasonForVisitPage,
    TestPerformedPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
