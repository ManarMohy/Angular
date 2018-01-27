import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule, MatToolbarModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule, MatToolbarModule, MatGridListModule],
  exports: [MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule, MatToolbarModule, MatGridListModule],
})
export class MaterialModule { }