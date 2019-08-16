/**
* The Payment Portal implements an application that
* allows user to choose a payment method from the
* following options: PayPal, Cards, Zelle, ACH, RTP, UPI
*
* @author  Linh Lam
* @version 1.0
* @since   2019-08-16
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['../../app.component.css']
})
export class ConfirmComponent implements OnInit {
  balance = window.history.state.value;
  account = window.history.state.account;
  constructor(private router: Router) {}

  ngOnInit() {
    //console.log(this.balance);
    //console.log(this.account);
  }

  cancel(){
    this.router.navigate(['/home'], {state: {value: this.balance}});
  }

}
