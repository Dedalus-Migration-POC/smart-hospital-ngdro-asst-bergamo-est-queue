import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { API_BASE_HREF } from 'src/constants';
import { provideDesignAngularKit } from 'design-angular-kit';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(),
    provideDesignAngularKit(),
    { provide: API_BASE_HREF, useValue: window.location.origin },
    { provide: APP_BASE_HREF, useValue: window.location.origin + '/ui/' },]
};
