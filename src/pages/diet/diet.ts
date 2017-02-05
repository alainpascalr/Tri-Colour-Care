import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";
import {AuthService} from "../../providers/auth-service";

/*
  Generated class for the Diet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diet',
  templateUrl: 'diet.html'
})
export class DietPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private api: ApiService, private authService: AuthService) {}
  personData=this.navParams.get('personData');
  dietRestriction: any[];

  getDietRestrictions(){
    let id = this.authService.getUser().id;
    return this.api.get(`dietrestriction/${id}/`)
      .then ((datas) => {
      this.dietRestriction = [datas];
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DietPage');
    this.getDietRestrictions();
  }

}
