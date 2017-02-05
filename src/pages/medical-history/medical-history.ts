import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";
import {AuthService} from "../../providers/auth-service";

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
  private api: ApiService, private authService: AuthService) {}
  personData=this.navParams.get('personData');
  documents: any[];
  doctors: any [];

    getDocuments(){
      let id = this.authService.getUser().id;
      return this.api.get(`document/${id}/`)
        .then ((datas) => {
        this.documents = [datas];
        });
    }
    getDoctors(){
      let id = this.authService.getUser().id;
      return this.api.get(`doctor/${id}/`)
        .then ((datas) => {
        this.doctors = [datas];
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalHistoryPage');
    this.getDocuments();
    this.getDoctors();
  }

}
