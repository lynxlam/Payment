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
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../app.component.css']
})
export class HomepageComponent implements OnInit {
  randomBalance = ((Math.floor(Math.random() * 1000000) + 1 + Math.random())
    .toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2}));

  constructor(private router: Router) { }

  ngOnInit() { }

  goToSelectedMethod(page) {
    this.router.navigate(['/', page], {state: {data: this.randomBalance}});
  }

}
