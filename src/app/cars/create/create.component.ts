import { Component, OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Create } from '../create.model';
import { AngularFireDatabaseModule } from 'angularfire2/database';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
car :any;
country:any;
constructor(private afAuth: AngularFireAuth, private router: Router, db: AngularFireDatabaseModule) { 

	country : this.db.list('/country', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
        });
    })
	}
  ngOnInit() {
  }
  
  LogOut() {

    this.afAuth.auth.signOut().then(d=>{
      this.router.navigateByUrl('')
    })
  }

  onSubmit(createForm) {
    if (createForm.value.$id == null)
      this.db.collection("cars").doc("car").set({
      	brand : this.car.brand,
      	year : this.car.year,
      	country: this.car.country,
      	img: this.car.img
      });
    else
      console.log('Error')
  }
}

// export class LoginComponent implements OnInit {
//     error: any;
//     user: any = {};
//     constructor(private afAuth: AngularFireAuth, private router: Router) { }

//   onSubmit(formData) {

//     this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.pass).then(d=>{
//       this.router.navigateByUrl('/home')
//     })
//   }

//   ngOnInit() {
//   }

// }