
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardPage } from './stripe';

@NgModule({
  declarations: [
    CardPage,
  ],
  imports: [
    IonicPageModule.forChild(CardPage),
  ],
  exports: [
    CardPage
  ]
})
export class CardModule {}
