import { Component } from '@angular/core';
import { User } from './interface/User';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  nombre: string = "Andreza";
  apellido: string = "Campbell";
  edad: number = 33;
  
  usersList: User[] = [
    {nombre: 'Jose', apellido: 'Becerra'},
    {nombre: 'Ivan', apellido: 'Becerra'},
    {nombre: 'María', apellido: 'Becerra' },
  ];

  onAddUser(user: User) {
    this.usersList.push(users);
  }

}