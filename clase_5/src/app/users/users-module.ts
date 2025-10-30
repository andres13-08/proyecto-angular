import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Users } from './users'; // El componente contenedor
import { UserList } from './components/user-list/user-list'; // El componente que falta
import { UserForm } from './components/user-form/user-form'; 
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared-module';
import { UserService } from '../services/user-service';
import { Dialog } from './components/dialog/dialog';

@NgModule({
  declarations: [Users, UserList, UserForm, Dialog],
  providers: [UserService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatFormField, MatLabel, MatAnchor, MatButtonModule, MatInputModule, SharedModule, MatFormFieldModule],
  exports: [Users], 
})
export class UsersModule { }
