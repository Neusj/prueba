import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(
      {
        "projectId":"app-retail-off",
        "appId":"1:731745955821:web:70cb8fffd4f74c276f01e4",
        "storageBucket":"app-retail-off.appspot.com",
        "apiKey":"AIzaSyDSIc9e_oxhCEBK7F-9vzHotzP9VO1NANA",
        "authDomain":"app-retail-off.firebaseapp.com",
        "messagingSenderId":"731745955821"
      })), 
      provideAuth(() => getAuth()),
      provideDatabase(() => getDatabase()),
    ],
  providers: [
    BarcodeScanner,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
