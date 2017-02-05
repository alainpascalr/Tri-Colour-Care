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

  test(){
    return this.api.get('testsgiven/')
      .then ((data) => console.log(data));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPerformedPage');
    this.test();
  }

}
