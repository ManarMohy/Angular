import { Component, OnInit } from '@angular/core';
import { CreateService } from '../create.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,private cs: CreateService, private tostr: ToastrService) { }

  ngOnInit() {
  }

  LogOut() {

    this.afAuth.signOut().then(d=>{
      this.router.navigateByUrl('')
    })
  }

  onSubmit(createForm) {
    if (createForm.value.$key == null)
      this.cs.insertCars(createForm.value);
    else
      console.log('Error')
    this.tostr.success('Submitted Succcessfully', 'Car Register');
  }
}
