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
    {nombre: 'Jose', apellido: 'Becerra', email: 'jose.becerra13@hotmail.com'},
    {nombre: 'Ivan', apellido: 'Becerra', email: 'ivan.becerra13@hotmail.com'},
    {nombre: 'María', apellido: 'Becerra', email: 'maria.becerra13@hotmail.com'},
  ];

  onAddUser(user: User) {
    this.usersList.push(user);
  }

}