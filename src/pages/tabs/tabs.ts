import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {ProfilePage} from "../profile/profile";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  homeRoot: any = HomePage;
  profileRoot: any = ProfilePage;
  constructor() {

  }
}
