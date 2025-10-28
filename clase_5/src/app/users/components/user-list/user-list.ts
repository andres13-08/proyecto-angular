import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from '../../interface/User';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  @Input() User: User[] = [];  
  @Output() editUser = new EventEmitter<User>();

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  userService: any;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChange() {
    this.updateDataSource();
  }

  updateDataSource(){
    this.dataSource.data = this.userService.getUsers();
  }

  onEditUser(user: User){
    this.editUser.emit(user);
  }

  onDeleteUser(id : number){
    this.userService.deleteUser(id);
    this.updateDataSource();
  }
}

