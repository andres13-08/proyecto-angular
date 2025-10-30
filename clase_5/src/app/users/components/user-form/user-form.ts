import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user-service';
import { User } from '../../interface/User';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})

export class UserForm {
  public userForm: FormGroup;
  isEditing: boolean = false;
 
  constructor(private fb: FormBuilder, private userService: UserService) {
  this.userForm = this.fb.group({
    id: [''],
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]], 
    apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]], 
    email: ['', [Validators.email]], 
  });
  
  this.userService.userEdit.subscribe(user => {
    if (user) {
      this.userForm.patchValue({
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email
      });
      this.isEditing = true;
    } else {
      this.isEditing = false;
      this.userForm.reset();
    }
  });
}


ngOnChanges() {}

onSubmit() {
  if(this.userForm.invalid){
    alert("Los campos deben ser validos");
    return;
  }

  if (this.isEditing) {
    this.userService.updateUser(this.userForm.value.id, this.userForm.value);
    this.userService.userEdit.next(null);
    this.isEditing = false;
    this.userForm.reset();
  } else {
    this.userService.addUser(this.userForm.value);

  this.userForm.reset();
  this.isEditing = false;
}
}}