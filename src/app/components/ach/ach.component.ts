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
  templateUrl: './ach.component.html',
  styleUrls: ['../../app.component.css']
})
export class AchComponent implements OnInit {

  paymentForm: FormGroup;
  submitted: boolean = false;
  status = '';
  api = '';
  invalidMessage = '';
  value = window.history.state.data;

  constructor(private _fb: FormBuilder, private router: Router) {}

  ngOnInit() {

    this.paymentForm = new FormGroup({
      rtn: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required)
    })
  }

  onSubmit(form) {
    this.submitted = true;
    if (form.valid){
      this.router.navigate(['/confirm']);
      this.api = JSON.stringify({ "rtn": this.paymentForm.value.rtn, "accountNumber": this.paymentForm.value.accountNumber});
      //console.log(this.api);
      this.router.navigate(['/confirm'], {state: {account: this.paymentForm.value.accountNumber, value: this.value}});
    }
    else
      this.invalidMessage = "Please fill all fields!"
  }

  cancel(){
    this.router.navigate(['/home'], {state: {value: this.value}});
  }

}
