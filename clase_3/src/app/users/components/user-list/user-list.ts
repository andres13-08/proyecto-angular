import { Component, Input } from '@angular/core';
import { User } from '../../interface/User';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  @Input() User: User[] = [];  
}
