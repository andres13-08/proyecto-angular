import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: false
})
export class Resaltado {

  constructor(private elemento : ElementRef) { //De acá para abajo es para editar los estilos e las columnas.
  this.elemento.nativeElement.style.backgroundColor = 'gray';
  this.elemento.nativeElement.style.color = 'black';  
  this.elemento.nativeElement.style.padding = '12px';
  }
}
