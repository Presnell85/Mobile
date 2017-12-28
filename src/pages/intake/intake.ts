import { Component } from '@angular/core';
import {YesPage} from "../yes/yes";
import { Question1Page } from '../questions/question1/question1';



@Component({
  selector: 'page-intake',
  templateUrl: './intake.html'
})
export class IntakePage {

  yesPage: any;
  question1: any;

  constructor() {
    this.yesPage = YesPage;
    this.question1 = Question1Page;
  }
}

