import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SigninPage} from "../account/signin/signin";

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  signOut(){
    this.navCtrl.push(SigninPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
