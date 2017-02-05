import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {User} from "./user.interface";
import {ApiService} from "../../providers/api-service";

@Injectable()
export class AuthService {
  constructor (private api: ApiService) {}

  signin(email: string, password: string): Promise<void> {
    return this.api.post('patient/', { email, password })
      .then((user) => { localStorage.setItem('user', JSON.stringify(user)); })
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') != null;
  }

}
