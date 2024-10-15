import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { User } from '../register/models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  visibility: boolean = true;
  users: User[] = [];

  constructor(private fb: FormBuilder, private sharedServices: SharedService, private router: Router) {
    this.setForm();
  }

  ngOnInit(): void {
    this.clearSession();
    this.getUsers();
  }

  clearSession(): void {
    this.sharedServices.finishSessions();
  }

  getUsers(): void {
    this.users = this.sharedServices.getUser();
  }

  login(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      let userLogin = this.users.find(user => user.email === this.email?.value);
      this.validatePassword(userLogin);
    }
  }

  validatePassword(userLogin: User | undefined): void {
    if (userLogin && userLogin.password === this.password?.value) {
      alert('Inicio sesion');
      this.router.navigate(['/projects']);
      localStorage.setItem('validateSession', 'true');
    } else {
      alert('Correo o contraseña invalido');
    }
  }

  setForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email(): AbstractControl | null { return this.loginForm.get('email'); }
  get password(): AbstractControl | null { return this.loginForm.get('password'); }
}
