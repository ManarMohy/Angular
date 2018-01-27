import { Component, OnInit } from '@angular/core';
import { CreateService } from '../create.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[CreateService]
})
export class CreateComponent implements OnInit {

  constructor(private createServise: CreateService) { }

  ngOnInit() {
  }

}
