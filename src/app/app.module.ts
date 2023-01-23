import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonenumberComponent } from './components/phonenumber/phonenumber.component';
import { CodeComponent } from './components/code/code.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { NgOtpInputModule } from  'ng-otp-input';
import { LoginpageComponent } from './components/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonenumberComponent,
    CodeComponent,
    DashboardComponent,
    LoginpageComponent
  ],
  imports: [
   
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

