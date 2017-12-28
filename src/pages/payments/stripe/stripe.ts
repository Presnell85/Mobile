import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Stripe } from '@ionic-native/stripe';


@IonicPage()
@Component({
  selector: 'page-stripe',
  templateUrl: 'stripe.html',
})
export class CardPage {
  cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public stripe: Stripe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Card');
  }



}
