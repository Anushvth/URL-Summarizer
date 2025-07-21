import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';

import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(FormsModule, HttpClientModule),
    provideHttpClient(),
    // provideAnimations()
  ]
}).catch(err => console.error(err));
