import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private httpClient: HttpClient,
  ) { }

  async getUser() {
    const url = `${this.apiUrl}/users`;
    return await this.httpClient.get(url).toPromise()
  }

}
