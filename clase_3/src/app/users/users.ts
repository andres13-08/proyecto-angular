import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  nombre: string = "Norka";
  edad: number = 33;
  
  users = [
    {nombre: 'Jose', apellido: 'Becerra'},
    {nombre: 'Ivan', apellido: 'Becerra'},
    {nombre: 'María', apellido: 'Becerra' },
  ];
}