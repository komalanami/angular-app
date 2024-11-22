import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

export const routeGuard = () => {
  const hardcodedAuthenticationService = inject(HardcodedAuthenticationService);
  const router = inject(Router);

  if (hardcodedAuthenticationService.isUserLoggedIn()) {
    return true;
  }

  router.navigate(['login']);
  return false;
};
