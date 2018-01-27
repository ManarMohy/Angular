import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import { CreateService } from './create.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CreateService]
})
export class CarsComponent implements OnInit {
    constructor(private afAuth: AngularFireAuth, private router: Router) { }

  LogOut() {

    this.afAuth.auth.signOut().then(d=>{
      this.router.navigateByUrl('')
    })
  }

  Create(){
  	this.router.navigateByUrl('/cars/add')
  }

  ngOnInit() {
  }

}

