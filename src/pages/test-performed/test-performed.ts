import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";
import {AuthService} from "../../providers/auth-service";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private api: ApiService,
              private authService: AuthService) {}
  data: any[];
  doctor;
  getTest(){
    let id = this.authService.getUser().id;
    return this.api.get(`testing/${id}`)
      .then ((datas) => {
      this.data = [datas];
      });
  }
  getDoctor(){
    let id = this.authService.getUser().id;
    return this.api.get(`doctors/?id='${id}`)
      .then ((datas) => {

      return this.doctor = datas[0].prefix+datas[0].firstname+datas[0].lastname;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPerformedPage');
    this.getTest();
  }

}
