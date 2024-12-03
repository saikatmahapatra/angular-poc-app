import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const matUI = [
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matUI
  ],
  exports: [matUI]
})
export class MaterialModule { }
