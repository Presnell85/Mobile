import { Component } from '@angular/core';

import { VehiclePage } from '../vehicles/vehicle';
import { ContactPage } from '../notifications/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VehiclePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
