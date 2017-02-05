import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SigninPage} from "../pages/account/signin/signin";
import {SignupPage} from "../pages/account/signup/signup";
import {SearchPage} from "../pages/search/search";
import {NotificationPage} from "../pages/notification/notification";
import {PatientProfilePage} from "../pages/patient-profile/patient-profile";
import {DietPage} from "../pages/diet/diet";
import {MedicalHistoryPage} from "../pages/medical-history/medical-history";
import {MedicationGivenPage} from "../pages/medication-given/medication-given";
import {ReasonForVisitPage} from "../pages/reason-for-visit/reason-for-visit";
import {TestPerformedPage} from "../pages/test-performed/test-performed";
import {NutritionGuidePage} from "../pages/nutrition-guide/nutrition-guide";
import {ApiService} from "../providers/api-service";
import {AuthService} from "../providers/auth-service";
import {HomeService} from "../providers/home-service";
import {FoodDiaryPage} from "../pages/food-diary/food-diary";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    SearchPage,
    NotificationPage,
    PatientProfilePage,
    DietPage,
    MedicalHistoryPage,
    MedicationGivenPage,
    ReasonForVisitPage,
    TestPerformedPage,
    NutritionGuidePage,
    FoodDiaryPage
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
    NotificationPage,
    PatientProfilePage,
    DietPage,
    MedicalHistoryPage,
    MedicationGivenPage,
    ReasonForVisitPage,
    TestPerformedPage,
    NutritionGuidePage,
    FoodDiaryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ApiService, AuthService, HomeService]
})
export class AppModule {}
