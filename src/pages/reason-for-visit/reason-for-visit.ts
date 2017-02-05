import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-reason-for-visit',
  templateUrl: 'reason-for-visit.html'
})
export class ReasonForVisitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  personData = this.navParams.get('personData');

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReasonForVisitPage');
  }

}
