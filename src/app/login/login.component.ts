import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    error: any;

    constructor() { }

  // onSubmit(formData) {
  //   if(formData.valid) {
  //     console.log(formData.value);
  //     this.afAuth.signInWithEmailAndPassword({
  //       email: formData.value.email,
  //       password: formData.value.password
  //     }
  //   },
  // }

  ngOnInit() {
  }

}
