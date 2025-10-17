import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Users } from './users'; // El componente contenedor
import { UserList } from './components/user-list/user-list'; // El componente que falta
import { UserForm } from './components/user-form/user-form'; 




@NgModule({
  declarations: [Users, UserList, UserForm],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [Users], 
})
export class UsersModule { }
