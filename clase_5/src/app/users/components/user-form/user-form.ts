import { Component, Output, EventEmitter, output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interface/User'

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})

export class UserForm {
  public userForm: FormGroup;
  @Output() sendUser = new EventEmitter<User>();
  @Output() sendEditUser = new EventEmitter<User>();  
  @Input() usertoEdit: User | null = null;
  constructor(private fb: FormBuilder) {
  this.userForm = this.fb.group({
    nombre: [this.usertoEdit?.nombre || '', [Validators.required, Validators.minLength(3), Validators.max(50)]],
    apellido: [this.usertoEdit?.apellido || '', [Validators.required, Validators.minLength(3), Validators.max(50)]],
    email: [this.usertoEdit?.email || '', [Validators.email]],
  });
}

onSubmit() {
  if(this.userForm.invalid){
    alert("Los campos deben ser validos");
    return;
  }

  if (this.usertoEdit) {
    this.sendEditUser.emit(this.userForm.value); 
  } else {
    this.sendUser.emit(this.userForm.value);
  }
  this.userForm.reset();
}

  get isNombreInvalid() {
    return this.userForm.controls['nombre'].dirty && this.userForm.controls['nombre'].invalid;
  }

  get isApellidoInvalid() {
    return this.userForm.controls['apellido'].dirty && this.userForm.controls['apellido'].invalid;
  }

  get isEmailInvalid() {
    return this.userForm.controls['email'].dirty && this.userForm.controls['email'].invalid;
  }
}

