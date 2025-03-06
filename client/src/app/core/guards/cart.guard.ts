import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

export const cartGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService)
  const router = inject(Router)
  const snack = inject(SnackbarService)

  if (cartService.getCartItemNumber() > 0)
  {
    return true
  }
  else {
    snack.error("No items in cart!")
    router.navigateByUrl('/cart')
    return false
  }
};
