import 'hammerjs';

import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

// COMMENT to fix issue
import localeIt from '@angular/common/locales/it';
import '@progress/kendo-angular-intl/locales/it/all';
registerLocaleData(localeIt);

import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Core
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'it' },
    provideHttpClient(withInterceptorsFromDi())
  ]
};
