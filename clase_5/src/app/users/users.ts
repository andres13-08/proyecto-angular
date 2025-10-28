import { Component, input, OnInit } from '@angular/core';
import { User } from './interface/User';
import { UserService } from '../services/user';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})

export class Users {
  nombre: string = ""; //Acá puedo poner un nmbre directamwnte o solo dejarlo vacío. Al estar vacío, deja que el usuario visualice lo que va escribiendo
  apellido: string = "";
  edad: number = 33;
  
  h1style = 'font-size: 55px; color: blue;';
  usersList: User[];
  userToEdit: User | undefined;
  constructor(public userService: UserService) {
    this.usersList = this.userService.getUsers();
  }

  onAddUser(user: User) {
    this.userService.addUser(user);
    this.usersList = this.userService.getUsers();
  }

  onEditUser(user: User) {
    this.userToEdit = user;
  } 
}