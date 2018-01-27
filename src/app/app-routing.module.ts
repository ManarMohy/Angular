import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CreateComponent } from './cars/create/create.component';
import { DetailsComponent } from './cars/details/details.component';


const routes: Routes = [
	{
		path:'home',
		component:CarsComponent
	},

	{
		path:'cars/add',
		component:CreateComponent
	},
	{
		path:'cars:id',
		component:DetailsComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
