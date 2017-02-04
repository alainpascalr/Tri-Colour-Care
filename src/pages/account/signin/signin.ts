import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";
import {TabsPage} from "../../tabs/tabs";

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

  public signin(){
    this.navCtrl.push(SigninPage);
    this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
