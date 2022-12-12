import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseServerUrl } from 'src/common/constant';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private client: HttpClient) { }

  isLoggedIn(): boolean {
    const token: string = this.getToken();
    return token != undefined && token != null;
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token;
  }

  getUsername(): string {
    const username = localStorage.getItem('username');
    return username;
  }

  login(username: string, password: string): Observable<string> {
    const url = baseServerUrl + '/login';
    const requestData = { username, password };
    console.log('request data', JSON.stringify(requestData));
    const observable: Observable<string> = this.client.post(url, requestData, {
      responseType: 'text',
    });
    return observable;
  }

  addUser(username: string, password: string): Observable<string> {
    const url = baseServerUrl + "/register";
    const requestData = { username, password };

    console.log("requested Data" + JSON.stringify(requestData));
    const observable: Observable<string> = this.client.post<string>(url, requestData)

    return observable;

  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('Email');
  }

  saveToken(username: string, token: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  }

  setEmail(email: string) {
    localStorage.setItem('Email', email);

  }
  getEmail(): string {
    const email: string = localStorage.getItem('Email');
    return email;

  }
}


