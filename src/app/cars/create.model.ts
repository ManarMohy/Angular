import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';


export class Create {

	$id: string;
	brand: string;
	year: number;
	country: string;

}
