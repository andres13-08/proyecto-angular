import { Component } from '@angular/core';
import { User } from './interface/User';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  nombre: string = "";
  apellido: string = "";
  edad: number = 33;
  
  users: User[] = [
    {nombre: 'Jose', apellido: 'Becerra'},
    {nombre: 'Ivan', apellido: 'Becerra'},
    {nombre: 'María', apellido: 'Becerra' },
  ];
}