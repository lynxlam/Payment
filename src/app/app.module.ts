import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { AchComponent } from './components/ach/ach.component';
import { CardsComponent } from './components/cards/cards.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { RtpComponent } from './components/rtp/rtp.component';
import { UpiComponent } from './components/upi/upi.component';
import { ZelleComponent } from './components/zelle/zelle.component';
@NgModule({
  declarations: [
    AppComponent,
    AchComponent,
    CardsComponent,
    ConfirmComponent,
    HomepageComponent,
    PaypalComponent,
    RtpComponent,
    UpiComponent,
    ZelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
