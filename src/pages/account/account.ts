/**
 * Created by jordanpresnell on 12/19/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../payments/stripe/stripe';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  cardPage: any;
  constructor(public navCtrl: NavController) {
  this.cardPage = CardPage;
  }

}
