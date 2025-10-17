import { Component } from '@angular/core';
import { User } from './interface/User';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  nombre: string = ""; //Acá puedo poner un nmbre directamwnte o solo dejarlo vacío. Al estar vacío, deja que el usuario visualice lo que va escribiendo
  apellido: string = "";
  edad: number = 33;
  
  usersList: User[] = [
    { id: 1, nombre: 'Jose', apellido: 'Becerra', email: 'jose.becerra13@hotmail.com' },
    { id: 2, nombre: 'Ivan', apellido: 'Becerra', email: 'ivan.becerra13@hotmail.com' },
    { id: 3, nombre: 'María', apellido: 'Becerra', email: 'maria.becerra13@hotmail.com' },
    { id: 4, nombre: 'Andrea', apellido: 'Becerra', email: 'andrea.becerra13@hotmail.com' },
    { id: 5, nombre: 'Turbin', apellido: 'Becerra', email: 'turbin.becerra13@hotmail.com' },
    { id: 6, nombre: 'Felipe', apellido: 'Becerra', email: 'felipe.becerra13@hotmail.com' },
    { id: 7, nombre: 'Daniel', apellido: 'Becerra', email: 'daniel.becerra13@hotmail.com' },
    { id: 8, nombre: 'Laura', apellido: 'Becerra', email: 'laura.becerra13@hotmail.com' },
    { id: 9, nombre: 'Cristian', apellido: 'Becerra', email: 'cristian.becerra13@hotmail.com' },
    { id: 10, nombre: 'Felipe', apellido: 'Becerra', email: 'felipe4.becerra13@hotmail.com' },
    { id: 11, nombre: 'Miguel', apellido: 'Pérez', email: 'miguel.perez13@hotmail.com' },
  ];

  onAddUser(user: User) {
    this.usersList.push(user);
  }

}