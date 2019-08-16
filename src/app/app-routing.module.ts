/**
* The Payment Portal implements an application that
* allows user to choose a payment method from the
* following options: PayPal, Cards, Zelle, ACH, RTP, UPI
*
* @author  Linh Lam
* @version 1.0
* @since   2019-08-16
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchComponent } from './components/ach/ach.component';
import { CardsComponent } from './components/cards/cards.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { RtpComponent } from './components/rtp/rtp.component';
import { UpiComponent } from './components/upi/upi.component';
import { ZelleComponent } from './components/zelle/zelle.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';


//import { CallbackComponent } from './components/callback/callback.component';
//import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: '',
    component: AuthenticateComponent
  },
  {
    path: 'ach',
    component: AchComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  },
  {
    path: 'paypal',
    component: PaypalComponent
  },
  {
    path: 'rtp',
    component: RtpComponent
  },
  {
    path: 'upi',
    component: UpiComponent
  },
  {
    path: 'zelle',
    component: ZelleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
