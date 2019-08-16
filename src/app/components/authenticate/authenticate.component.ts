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
import { CreditCardValidator } from 'angular-cc-library';
import { FormsModule, ReactiveFormsModule , FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './authenticate.component.html',
  styleUrls: ['../../app.component.css']
})
export class AuthenticateComponent implements OnInit {
  authForm: FormGroup;
  submitted: boolean = false;
  status = '';
  api = '';
  invalidMessage = '';
  value = window.history.state.data;

  constructor(private _fb: FormBuilder, private router: Router) {}

  ngOnInit() {

    this.authForm = new FormGroup({
      paymentID: new FormControl({value: '12345', disabled: true}),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    })
  }

  onSubmit(form) {
    this.submitted = true;
      if (this.authForm.value.firstName == 'Brandon' && this.authForm.value.lastName == 'Castagna'
        && this.authForm.value.email == 'bc@bofa.com' && this.authForm.value.phone == '123-456-7890')
          this.router.navigate(['/home'], {state: {}});
      else
        this.invalidMessage = "Invalid Info. Please Check Again!"
    //console.log(this.api);
  }
}
