import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  //Route to Sign-up page
  public createAccount() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
