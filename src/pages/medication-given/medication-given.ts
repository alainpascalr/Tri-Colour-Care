import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";

/*
  Generated class for the MedicationGiven page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-medication-given',
  templateUrl: 'medication-given.html'
})
export class MedicationGivenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private api: ApiService) {}
  personData=this.navParams.get('personData');
  medications: any[];

  getMeds(){
    return this.api.get('medication/')
      .then ((datas) => {
      this.medications = datas;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationGivenPage');
    this.getMeds();
  }

}
