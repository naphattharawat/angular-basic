import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async login(username: string, password: string) {
    const url = 'http://localhost:3000/login';
    return await this.httpClient.post(url, {
      username: username,
      password: password
    }).toPromise()
  }
}
