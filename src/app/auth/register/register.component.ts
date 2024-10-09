import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  visibility: boolean = true;

  constructor(private fb: FormBuilder, private sharedService: SharedService, private router: Router) {
    this.setForm();
  }

  setForm(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  registerUser(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const user = this.sharedService.getUser().some(user => user.email === this.email?.value);
      if(user) {
        alert('Ya existe un usuario con este correo');
      } else {
        this.sharedService.setUser(this.registerForm.value);
        this.registerForm.reset();
        alert('Se guardó')
        this.router.navigate(['/login']);
      }
    }
  }

  get name(): AbstractControl | null { return this.registerForm.get('name'); }
  get email(): AbstractControl | null { return this.registerForm.get('email'); }
  get password(): AbstractControl | null { return this.registerForm.get('password'); }
}
