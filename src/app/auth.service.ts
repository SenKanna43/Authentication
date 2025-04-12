import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from './LoginInteface';

interface LoginPayload {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login'; 

  constructor(private http: HttpClient) {}

  login(credentials: LoginPayload) {
    return this.http.post<ILogin>(this.apiUrl, credentials);
  }
}
