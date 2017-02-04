import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController,AlertController } from 'ionic-angular';
import {ReasonForVisitPage} from "../reason-for-visit/reason-for-visit";
import {MedicationGivenPage} from "../medication-given/medication-given";
import {DietPage} from "../diet/diet";
import {MedicalHistoryPage} from "../medical-history/medical-history";
import {TestPerformedPage} from "../test-performed/test-performed";
import {NutritionGuidePage} from "../nutrition-guide/nutrition-guide";


@Component({
  selector: 'page-patient-profile',
  templateUrl: 'patient-profile.html'
})
export class PatientProfilePage {

  reasonForVisit(){
    this.navCtrl.push(ReasonForVisitPage);
  }
  medicalHistory(){
    this.navCtrl.push(MedicalHistoryPage);
  }
  dietRestriction(){
    this.navCtrl.push(DietPage);
  }

  nutritionGuide(){
    this.navCtrl.push(NutritionGuidePage);
  }

  medicationGiven(){
    this.navCtrl.push(MedicationGivenPage)
  }

  testPerformed(){
    this.navCtrl.push(TestPerformedPage)
  }
  constructor(public navCtrl: NavController,
              public platform: Platform,
              public actionsheetCtrl: ActionSheetController,
              private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientProfilePage');
  }

addComment(){
  let alert = this.alertCtrl.create({
  title: 'Add Comment',
    inputs: [
      {name: 'Comment', placeholder: 'Add a comment'},
    ],
    buttons: [{text: 'Cancel',role: 'cancel',
    handler: data => {
      console.log('Cancel clicked');}
    },
    {text: 'Save', handler: data => {}}]});
    alert.present();
}

referDoctor(){
  let alert = this.alertCtrl.create({
  title: 'Refer Doctor',
    inputs: [
      {name: 'Doctor', placeholder: 'Refer a doctor to the patient'},
    ],
    buttons: [{text: 'Cancel',role: 'cancel',
    handler: data => {
      console.log('Cancel clicked');}
    },
    {text: 'Save', handler: data => {}}]});
    alert.present();
}


addMedicine(){
  let alert = this.alertCtrl.create({
  title: 'Add Medication',
    inputs: [
      {name: 'Medication', placeholder: 'Add medication'},
      {name: 'Dosage', placeholder: 'Enter the dosage'}
    ],
    buttons: [{text: 'Cancel',role: 'cancel',
    handler: data => {
      console.log('Cancel clicked');}
    },

    {text: 'Save', handler: data => {}}]});
    alert.present();
}

addDietRestriction(){
  let alert = this.alertCtrl.create({
  title: 'Add Diet Restriction',
    inputs: [
      {name: 'Food', placeholder: 'Add food type or name'},
      {name: 'Description', placeholder: 'Enter a description'}
    ],
    buttons: [{text: 'Cancel',role: 'cancel',
    handler: data => {
      console.log('Cancel clicked');}
    },

    {text: 'Save', handler: data => {}}]});
    alert.present();
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
              this.addComment();
            }
          },
          {
            text: 'Add Medication',
            icon: !this.platform.is('ios') ? 'medkit' : null,
            handler: () => {
              console.log('Add Medication clicked');
              this.addMedicine();
            }
          },
          {
            text: 'Add New Diet Restriction',
            icon: !this.platform.is('ios') ? 'ios-pizza' : null,
            handler: () => {
              console.log('New Diet Restriction clicked');
              this.addDietRestriction();
            }
          },
          {
            text: 'Refer Doctor',
            icon: !this.platform.is('ios') ? 'ios-people' : null,
            handler: () => {
              console.log('Refer Doctor clicked');
              this.referDoctor();
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
