import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IntakePage } from '../intake/intake';
import { ProfilePage } from '../profile/profile';
import { AccountPage } from '../account/account';
import { UploadPage } from '../upload/upload';
import {VehiclePage} from "../vehicles/vehicle";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  intakePage: any;
  profilePage: any;
  accountPage: any;
  registerPage: any;
  uploadPage: any;

  constructor(public navCtrl: NavController) {

    this.intakePage = IntakePage;
    this.profilePage = ProfilePage;
    this.accountPage = AccountPage;
    this.registerPage = VehiclePage;
    this.uploadPage= UploadPage;

  }

}
