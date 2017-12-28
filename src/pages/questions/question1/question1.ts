import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Question2Page } from '../question2/question2';

@Component({
  selector: 'question1-profile',
  templateUrl: 'question1.html',
})
export class Question1Page {

  question2Page: any;

  constructor(public navCtrl: NavController) {
  this.question2Page = Question2Page;
  }

}
