import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule, MatTableModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const GlobalVariable = Object.freeze({
  // imageUrl: '../../assets/'
   imageUrl: 'assets/',
   // apiPath:  ' https://testadmin.staykaro.com/WebsiteAPIs/', // test Api
   // imagePath: ' https://testadmin.staykaro.com/Images', // test image
   apiPath:  'http://test.quadbithub.com/JSRAdminPanel/WebsiteAPIs/',  // live Api
   imagePath: 'https://admin.staykaro.com/Images', // live image
   appId: 'AP-7',
   device: '1',
   deviceId: 'website'
 });