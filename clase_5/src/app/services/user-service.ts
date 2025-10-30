import { Injectable } from '@angular/core';
import { User } from '../users/interface/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  userEdit = new BehaviorSubject<User | null>(null);
  userEdit$ = this.userEdit.asObservable();
  
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

getUsers() {
  this.usersSubject.next([...this.usersList]);
}

addUser(user: User) {
  console.log('Servicio', user);

  this.usersList.push({
    ...user,
    id: this.usersList[this.usersList.length - 1].id + 1,
  });
  this.usersSubject.next([...this.usersList]);
}

setUpdateUser(id: number) {
  const userFound = this.usersList.find((u) => u.id === id);
  this.userEdit.next(userFound ?? null);
}
updateUser(id: number, data: User) {
  let index = this.usersList.findIndex((u) => u.id === id);

  if (index === -1) {
    return undefined;
  }

this.usersList[index] = {
  ...this.usersList[index],
  ...data,
};
this.usersSubject.next([...this.usersList]);
}

deleteUser(id: number) {
  this.usersList = this.usersList.filter((u) => u.id !== id);
  this.usersSubject.next([...this.usersList]);
}}