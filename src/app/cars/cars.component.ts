import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CreateService]
})
export class CarsComponent implements OnInit {
	
  constructor(private createServise: CreateService) { }

  ngOnInit() {
  }

}
