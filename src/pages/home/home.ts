import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  doctor = [];
  medication = [];
  symptom = [];
  user = [];
  constructor(public navCtrl: NavController) {
    //doctor segment
    this.doctor = [
      {
        'name': 'Dr. Tod',
      }
      ];
    //medication segment
    this.medication = [
      {
      'name': 'Advil',
      },
      {
        'name': 'Tylenol',
      }
    ];
    //symptom segment
    this.symptom = [
      {
      'name': 'Chest pain',
      },
      {
        'name': 'Headache',
      }
    ];
    //user segment
    this.user = [
      {
        'full_name' : 'Jennifer Aniston',
        'age' : '23',
        'condition' : 'critical',
        'profile_pic' : 'http://kingofwallpapers.com/jennifer-aniston/jennifer-aniston-007.jpg'
      }
    ]
  }

}
