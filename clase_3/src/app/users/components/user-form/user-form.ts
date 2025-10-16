import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})

export class UserForm {
  public userForm: FormGroup;
  constructor(private fb: FormBuilder) {
  this.userForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.max(10)]],
    apellido: ['', [Validators.required, Validators.minLength(3), Validators.max(10)]],
    email: ['', [Validators.email]],
  });
}

onSubmit() {
  console.log();(this.userForm.value);
  console.log();(this.userForm.controls['message'].errores)
  
}
}
