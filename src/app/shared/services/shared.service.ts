import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/register/models/register';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  setUser(user: User) {
    let users = [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUser(): User[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  logout(): void {
    localStorage.removeItem('users');
    localStorage.removeItem('validateSession');
  }
}
