import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from './../environments/environment';

import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

// Sentry.init({
//   dsn: "https://f8ac7b7447754a9290c9b9928acbed3c@o562250.ingest.sentry.io/5700532",
//   integrations: [
//     new Integrations.BrowserTracing({
//       tracingOrigins: ["localhost", "https://yourserver.io/api"],
//       routingInstrumentation: Sentry.routingInstrumentation,
//     }),
//   ],
//   tracesSampleRate: 1.0,
// });

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
