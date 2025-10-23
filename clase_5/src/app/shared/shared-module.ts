import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize/capitalize-pipe';
import { Resaltado } from './directives/resaltado/resaltado';



@NgModule({
  declarations: [CapitalizePipe, Resaltado],
  imports: [CommonModule],
  exports: [CapitalizePipe, Resaltado],
})
export class SharedModule { }
