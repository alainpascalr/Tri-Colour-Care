import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {PatientProfilePage} from "../patient-profile/patient-profile";
import {ApiService} from "../../providers/api-service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage {

  //Show patient details
  viewDetails(personData){
    this.navCtrl.push(PatientProfilePage,{
    person:personData
    });
  }

  constructor(public navCtrl: NavController,  public navParams: NavParams, private api: ApiService) {}
  patient: any[];
  symptoms: any[];
  medications: any[];
  doctors: any[];
  getPatients(){
    return this.api.get('patient/')
      .then ((datas) => {
      this.patient = datas;
      });
  }

  getSymptoms(){
    return this.api.get('symptom/')
      .then ((datas) => {
      this.symptoms = datas;
      });
  }


  getMeds(){
      return this.api.get('medication/')
        .then ((datas) => {
        this.medications = datas;
        });
    }

    getDocs(){
        return this.api.get('doctor/')
          .then ((datas) => {
          this.doctors = datas;
          });
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPerformedPage');
    this.getPatients();
    this.getSymptoms();
    this.getMeds();
    this.getDocs();
  }

}
