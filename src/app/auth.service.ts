import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LoginPayload {
  username: string;
  password: string;
}

export interface ILogin {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
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
