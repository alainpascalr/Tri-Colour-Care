import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";

@Component({
  selector: 'page-nutrition-guide',
  templateUrl: 'nutrition-guide.html'
})
export class NutritionGuidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private api: ApiService) {}
  dietGuide: any[];

  getDietGuide(){
    return this.api.get('dietsuggestion/')
      .then ((datas) => {
      this.dietGuide = datas;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutritionGuidePage');
    this.getDietGuide();
  }

}
