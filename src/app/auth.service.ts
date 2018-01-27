import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase,  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Router } from "@angular/router";
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

    emailLogin(email:string, password:string) {
    	debugger
     return this.AngularFireAuthModule.signInWithEmailAndPassword(email, password);
  }

 }