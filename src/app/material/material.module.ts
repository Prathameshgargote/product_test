import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
