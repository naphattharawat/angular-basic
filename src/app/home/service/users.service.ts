import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getUser() {
    const url = 'http://localhost:3000/users';
    return await this.httpClient.get(url).toPromise()
  }
}
