import { Pipe, PipeTransform } from '@angular/core';
import { ConfirmationToken } from '@stripe/stripe-js';

@Pipe({
  name: 'payment'
})
export class PaymentPipe implements PipeTransform {

  transform(value?: ConfirmationToken['payment_method_preview']['card'], ...args: unknown[]): unknown {
    if(value?.brand && value?.exp_month && value?.exp_year && value?.last4) {
      return `${value.brand.toUpperCase()} **** **** **** ${value.last4}, Exp: ${value.exp_month}/${value.exp_year}`
    } else {
      return 'Unknown payment details'
    }
  }

}
