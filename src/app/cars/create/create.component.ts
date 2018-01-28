import { Component, OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Create } from '../create.model';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})

export class CreateComponent implements OnInit {
car : any = [];
countries:any = [];
constructor(private afAuth: AngularFireAuth, private router: Router,private db: AngularFirestore) {

  this.countries = this.db.collection("countries").valueChanges();
	}
  ngOnInit() {
  }

  LogOut() {

    this.afAuth.auth.signOut().then(d=>{
      this.router.navigateByUrl('')
    })
  }

  onSubmit(createForm) {
      this.db.collection("cars").doc("car").set({...this.car})
  }
}
