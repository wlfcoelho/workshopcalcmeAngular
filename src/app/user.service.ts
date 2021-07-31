import { Injectable } from '@angular/core';
import {User} from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL : string = 'http://localhost:8080/users'

  constructor(
    private http: HttpClient
  ) { }

  salvar (user: User) : Observable<User> {
    return this.http.post<User>(this.apiURL, user)
  }
}
