import { Component, Input, ViewChild } from '@angular/core';
import { User } from '../../interface/User';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  @Input() User: User[] = [];  

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.User;
  }

  constructor () {
    this.dataSource.data = this.User;
  }
}