import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users.ts';
import { FormsModule } from '@angular/forms';
import { UserList } from './components/user-list/user-list';
import { UserForm } from './components/user-form/user-form';



@NgModule({
  declarations: [Users, UserList, UserForm],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [Users], 
})
export class UsersModule { }
