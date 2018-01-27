import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatButtonModule, MatDatepickerModule, MatCardModule, MatToolbarModule, MatGridListModule,MatSelectModule} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatDatepickerModule, MatCardModule, MatToolbarModule, MatGridListModule,MatSelectModule],
  exports: [MatInputModule, MatButtonModule, MatDatepickerModule, MatCardModule, MatToolbarModule, MatGridListModule,MatSelectModule],
})
export class MaterialModule { }