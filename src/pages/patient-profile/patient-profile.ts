import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
/*
  Generated class for the PatientProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-patient-profile',
  templateUrl: 'patient-profile.html'
})
export class PatientProfilePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
     public platform: Platform,
  public actionsheetCtrl: ActionSheetController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientProfilePage');
  }
  openMenu() {
      let actionSheet = this.actionsheetCtrl.create({
        title: 'Add to Profile',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Join Team',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'person-add' : null,
            handler: () => {
              console.log('Join Team clicked');
            }
          },
          {
            text: 'Upload Document',
            icon: !this.platform.is('ios') ? 'cloud-upload' : null,
            handler: () => {
              console.log('Upload Document clicked');
            }
          },
          {
            text: 'Add Comment',
            icon: !this.platform.is('ios') ? 'add-circle' : null,
            handler: () => {
              console.log('Add Comment clicked');
            }
          },
          {
            text: 'Add Medication',
            icon: !this.platform.is('ios') ? 'medkit' : null,
            handler: () => {
              console.log('Add Medication clicked');
            }
          },
          {
            text: 'Refer Doctor',
            icon: !this.platform.is('ios') ? 'ios-people' : null,
            handler: () => {
              console.log('Refer Doctor clicked');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
  }


}
