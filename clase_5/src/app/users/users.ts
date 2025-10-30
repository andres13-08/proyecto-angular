import { Component, input, OnInit } from '@angular/core';
import { User } from './interface/User';
import { UserService } from '../services/user-service';

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
  userToEdit: User | null = null;
  constructor(public userService: UserService) {
  }

  onAddUser(user: User) {
    this.userService.addUser(user);
  }

  onEditUser(user: User) {
    this.userToEdit = user;
  } 

  onEditRecieved(user: User) {
    let response = this.userService.updateUser(user.id, user);
    
    if (response) {
      this.userToEdit = null;
  }
}
}