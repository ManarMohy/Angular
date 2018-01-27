import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Create } from './create.model';


@Injectable()
export class CreateService {
	carList: AngularFireList<any>;
  selectedCar: Create = new Create();
	constructor(private firebase :AngularFireDatabase ) { }

  getData(){
  	this.carList = this.firebase.list('cars');
  	return this.carList;
  }

  insertCars(car : Create){
  	this.carList.push({
			brand: car.brand,
 			year: car.year,
  		country: car.country
  	});
	}

  updareCars(car:Create){
  	this.carList.update(car.$id,{
  		brand: car.brand,
  		year: car.year,
  		country: car.country
  	});
  }

  deleteCar($id : string){
  	this.carList.remove($id);
  }

}
