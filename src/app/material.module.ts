import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatButtonModule, MatSelectModule,MatDatepickerModule, MatNativeDateModule,MatProgressSpinnerModule,MatCardModule, MatToolbarModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatSelectModule,MatDatepickerModule, MatNativeDateModule,MatProgressSpinnerModule, MatCardModule, MatToolbarModule, MatGridListModule],
  exports: [MatInputModule, MatButtonModule, MatSelectModule,MatDatepickerModule, MatNativeDateModule,MatProgressSpinnerModule, MatCardModule, MatToolbarModule, MatGridListModule],
})
export class MaterialModule { }