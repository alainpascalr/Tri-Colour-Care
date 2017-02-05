import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";

/*
  Generated class for the MedicalHistory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-medical-history',
  templateUrl: 'medical-history.html'
})
export class MedicalHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private api: ApiService) {}
  personData=this.navParams.get('personData');
  documents: any[];
  doctors: any [];

    getDocuments(){
      return this.api.get('document/')
        .then ((datas) => {
        this.documents = datas;
        });
    }
    getDoctors(){
      return this.api.get('doctor/')
        .then ((datas) => {
        this.doctors = datas;
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalHistoryPage');
    this.getDocuments();
    this.getDoctors();
  }

}
