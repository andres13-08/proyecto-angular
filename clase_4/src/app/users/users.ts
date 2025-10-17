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
    { id: 1, nombre: 'jose', apellido: 'becerra', email: 'jose.becerra13@hotmail.com' },
    { id: 2, nombre: 'ivan', apellido: 'becerra', email: 'ivan.becerra13@hotmail.com' },
    { id: 3, nombre: 'maría', apellido: 'becerra', email: 'maria.becerra13@hotmail.com' },
    { id: 4, nombre: 'andrea', apellido: 'becerra', email: 'andrea.becerra13@hotmail.com' },
    { id: 5, nombre: 'turbin', apellido: 'becerra', email: 'turbin.becerra13@hotmail.com' },
    { id: 6, nombre: 'felipe', apellido: 'becerra', email: 'felipe.becerra13@hotmail.com' },
    { id: 7, nombre: 'daniel', apellido: 'becerra', email: 'daniel.becerra13@hotmail.com' },
    { id: 8, nombre: 'laura', apellido: 'becerra', email: 'laura.becerra13@hotmail.com' },
    { id: 9, nombre: 'cristian', apellido: 'becerra', email: 'cristian.becerra13@hotmail.com' },
    { id: 10, nombre: 'felipe', apellido: 'becerra', email: 'felipe4.becerra13@hotmail.com' },
    { id: 11, nombre: 'miguel', apellido: 'pérez', email: 'miguel.perez13@hotmail.com' },
  ];

  onAddUser(user: User) {
    console.log(user);
    this.usersList.push({
      ...user,
      id: this.usersList[this.usersList.length - 1].id + 1,
    });
  }
}