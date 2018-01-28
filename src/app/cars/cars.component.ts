import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
	cars
    constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFirestore) {
      this.cars = this.db.collection('cars').valueChanges()
    }

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

