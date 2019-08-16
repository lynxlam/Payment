import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['../../app.component.css']
})
export class ConfirmComponent implements OnInit {
  balance = window.history.state.value;
  account = window.history.state.account;
  constructor() { }

  ngOnInit() {
    //console.log(this.balance);
    //console.log(this.account);
  }

}
