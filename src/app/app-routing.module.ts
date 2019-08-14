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


//import { CallbackComponent } from './components/callback/callback.component';
//import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
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
