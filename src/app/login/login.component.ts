import { Component, OnInit, HostBinding } from '@angular/core';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    error: any;
    user: any = {};
    constructor(private afAuth: AngularFireAuth, private router: Router) { }

  onSubmit(formData) {

    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.pass).then(d=>{
      this.router.navigateByUrl('/home')
    })
  }

  ngOnInit() {
  }

}