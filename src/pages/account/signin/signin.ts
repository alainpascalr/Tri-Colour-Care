import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";
import {TabsPage} from "../../tabs/tabs";
import {ApiService} from "../../../providers/api-service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {AuthService} from "../auth-service";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController, private _authService: AuthService, private _fb: FormBuilder) {
    this.navCtrl = navCtrl;
    this.myForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.required]
    });
  }

  //Route to Sign-up page
  public createAccount() {
    this.navCtrl.push(SignupPage);
  }

  onLogin() {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this._authService.signin(email, password).then(() => {
      this.navCtrl.push(TabsPage);
      this.navCtrl.setRoot(TabsPage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
