import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";

/*
  Generated class for the TestPerformed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-performed',
  templateUrl: 'test-performed.html',
  providers: [ApiService]
})
export class TestPerformedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiService) {}
  data: any[];
  doctor;
  getTest(){
    return this.api.get('testing/')
      .then ((datas) => {
      this.data = datas;
      });
  }
  getDoctor(id){
    return this.api.get('doctors/?id='+id)
      .then ((datas) => {

      return this.doctor = datas[0].prefix+datas[0].firstname+datas[0].lastname;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPerformedPage');
    this.getTest();
  }

}
