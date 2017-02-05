import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {PatientProfilePage} from "../patient-profile/patient-profile";
import {ApiService} from "../../providers/api-service";
import {AuthService} from "../../providers/auth-service";
import {User} from "../account/user.interface";
import {HomeService} from "../../providers/home-service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage {

  //Show patient details
  viewDetails(personData){
    this.navCtrl.push(PatientProfilePage,{
      person : personData
    });
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private homeService: HomeService) {}
  patient: any [];
  symptoms: any[];
  medications: any[];
  doctors: any[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPerformedPage');
    this.homeService.getPatients().then((data) => {
      this.patient = [data];
    });
    this.homeService.getSymptoms().then((data) =>{
      this.symptoms = [data];
    });
    this.homeService.getMeds().then((data) =>{
      this.medications = [data];
    });
    this.homeService.getDocs().then((data) =>{
      this.doctors = [data];
    })
  }

}
