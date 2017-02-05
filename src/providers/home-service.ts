import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth-service";
import {ApiService} from "./api-service";
import {NavController, NavParams} from "ionic-angular";

@Injectable()
export class HomeService {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private api: ApiService,
              private authService: AuthService) {}

  getPatients(): Promise<any[]>{
    let id = this.authService.getUser().id;
    return this.api.get(`patient/${id}`)
  }

  getSymptoms(): Promise<any[]>{
    let id = this.authService.getUser().id;
    return this.api.get(`symptom/${id}`)
  }


  getMeds(): Promise<any[]>{
    let id = this.authService.getUser().id;
    return this.api.get(`medication/${id}`)
  }

  getDocs(): Promise<any[]>{
    let id = this.authService.getUser().id;
    return this.api.get(`doctor/${id}`)
  }

}
