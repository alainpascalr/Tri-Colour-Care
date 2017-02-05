import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {NotificationPage} from "../notification/notification";
import {HomeService} from "../../providers/home-service";


@Component({
  templateUrl: 'tabs.html',
  providers: [HomeService]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  homeRoot: any = HomePage;
  notificationRoot: any = NotificationPage;
  constructor() {

  }
}
