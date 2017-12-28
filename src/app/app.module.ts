import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/notifications/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VehiclePage } from '../pages/vehicles/vehicle';
import { ProfilePage } from '../pages/profile/profile';
import { AccountPage } from '../pages/account/account';
import { RegisterPage } from '../pages/register/register';
import { UploadPage } from '../pages/upload/upload';
import { IntakePage } from '../pages/intake/intake';
import { YesPage } from '../pages/yes/yes';
import { Question1Page } from '../pages/questions/question1/question1';
import { Question2Page } from '../pages/questions/question2/question2';
import { Question3Page } from '../pages/questions/question3/question3';
import { Question4Page } from '../pages/questions/question4/question4';
import { CardPage } from '../pages/payments/stripe/stripe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Stripe } from '@ionic-native/stripe';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VehiclePage,
    ProfilePage,
    AccountPage,
    RegisterPage,
    UploadPage,
    IntakePage,
    YesPage,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,
    CardPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VehiclePage,
    ProfilePage,
    AccountPage,
    RegisterPage,
    UploadPage,
    IntakePage,
    YesPage,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
