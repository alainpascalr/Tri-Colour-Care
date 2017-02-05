import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../providers/api-service";
import { Platform, ActionSheetController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-food-diary',
  templateUrl: 'food-diary.html'
})
export class FoodDiaryPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public actionsheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              private api: ApiService) {}
  personData=this.navParams.get('personData');
  foodDiary: any[];

  getFood(){
    return this.api.get('food/')
      .then ((datas) => {
        this.foodDiary = datas;
      });
  }


  addFood(){
    let alert = this.alertCtrl.create({
      title: 'Add a Meal',
      inputs: [
        {name: 'Food', placeholder: 'Type your meals in natural language!'},
      ],
      buttons: [{text: 'Cancel',role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');}
      },
        {text: 'Save', handler: data => {
          this.pushMeal(data,this.personData.id);
        }}]});
    alert.present();
  }

  pushMeal(meal,id){
    return this.api.get('handler/?query='
      + encodeURI(meal.Food) + "&patient="+encodeURI(id))
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Add to Profile',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Add a Meal',
          icon: !this.platform.is('ios') ? 'add-circle' : null,
          handler: () => {
            console.log('Add Comment clicked');
            this.addFood();
          }
        }
      ]
    });
    actionSheet.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDiaryPage');
    this.getFood();
  }

}
