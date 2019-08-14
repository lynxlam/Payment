import { Component, AfterViewChecked } from '@angular/core';

declare let paypal: any;

@Component({
  selector: 'app-root',
  templateUrl: './paypal.component.html',
  styleUrls: ['../../app.component.css']
})
export class PaypalComponent implements AfterViewChecked {

  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 0.1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AR1sG9PlgPXbIj7xiwaHD635AOI-dlolYdK0vmwJqN6RPJ5dON2imV7C77w-Wmi4DkPIpVx6H3qDSKm2',
      production: ''
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    },
    style: {
                color:  'blue',
                shape:  'pill',
                label:  'pay',
                height: 40,
                width: 100
            }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button-container');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}