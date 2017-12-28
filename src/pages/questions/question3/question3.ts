import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Question4Page} from "../question4/question4";


@Component({
  selector: 'question3-profile',
  templateUrl: 'question3.html',
})

export class Question3Page {

  question4Page: any;

  constructor(public navCtrl: NavController) {
  this.question4Page = Question4Page;
  }

}
