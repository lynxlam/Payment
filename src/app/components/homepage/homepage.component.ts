import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../app.component.css']
})
export class HomepageComponent implements OnInit {

  randomBalance = (Math.floor(Math.random() * 1000000) + 1).toLocaleString();

  constructor(private router: Router) { }

  ngOnInit() { }

  goToSelectedMethod(page) {
    this.router.navigate(['/', page], {state: {data: this.randomBalance}});
  }

}
