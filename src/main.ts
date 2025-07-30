import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { loadIcons } from './loadIcons';

loadIcons('bootstrap-italia/dist/svg/sprites.svg')

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
