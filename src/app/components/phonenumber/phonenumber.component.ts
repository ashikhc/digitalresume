import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


var config = {
  apiKey: "AIzaSyBGBuHbfJgSBu-QPODFXMaVUIqEm8RceVo",
  authDomain: "ashik-digitalresume.firebaseapp.com",
  projectId: "ashik-digitalresume",
  storageBucket: "ashik-digitalresume.appspot.com",
  messagingSenderId: "569614714475",
  appId: "1:569614714475:web:226f11638c7c299476132e",
}

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.scss']
})
export class PhonenumberComponent implements OnInit {

  phonenumber: any;
  reCaptchaVerifier: any;
  //username: any;
  constructor(private router:Router) { }

  ngOnInit() {
   firebase.initializeApp(config);
  }


  getotp()
{
  this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {size:'invisible'});


 firebase.auth().signInWithPhoneNumber(this.phonenumber, this.reCaptchaVerifier).
 then((confirmationResult)=> {
      localStorage.setItem('verificationId', JSON.stringify(confirmationResult.verificationId) )
    this.router.navigate(['/phone'])  }).catch((error) =>
    {
      alert(error.message)
      setTimeout(()=>

      
      {
        window.location.reload() 
      },50000)
      });
            
}
}
