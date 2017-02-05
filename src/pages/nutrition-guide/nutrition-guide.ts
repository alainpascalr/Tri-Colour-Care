import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";
import {AuthService} from "../../providers/auth-service";

@Component({
  selector: 'page-nutrition-guide',
  templateUrl: 'nutrition-guide.html'
})
export class NutritionGuidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private api: ApiService, private authService: AuthService) {}
  dietGuide: any[];

  getDietGuide(){
    let id = this.authService.getUser().id;
    return this.api.get(`dietsuggestion/${id}`)
      .then ((datas) => {
      this.dietGuide = [datas];
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutritionGuidePage');
    this.getDietGuide();
  }

}
