import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthinterceptorService } from './service/http/authinterceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    {provide:HTTP_INTERCEPTORS,
      useClass:AuthinterceptorService,
      multi:true}
  ]
};
