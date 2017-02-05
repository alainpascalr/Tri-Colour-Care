import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {User} from "../pages/account/user.interface";
import {ApiService} from "./api-service";

@Injectable()
export class AuthService {
  constructor (private api: ApiService) {}

  signin(id: string): Promise<void> {
    return this.api.get(`patient/${id}/`)
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
