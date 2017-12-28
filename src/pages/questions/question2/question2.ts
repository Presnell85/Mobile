import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Question3Page} from "../question3/question3";


@Component({
  selector: 'question2-profile',
  templateUrl: 'question2.html',
})

export class Question2Page {

  question3Page: any;

  constructor(public navCtrl: NavController) {

  this.question3Page = Question3Page;

  }

}
