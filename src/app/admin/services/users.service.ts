import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    // @Inject('API_URL') private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  async getUser() {
    const url = `http://localhost:3000/users`;
    return await this.httpClient.get(url).toPromise();
  }

  async update(id: number, json: any) {
    // const url = 'http://localhost:3000/users/' + id;
    const url = `http://localhost:3000/users/${id}`;
    return await this.httpClient.put(url, json).toPromise();
  }

  async remove(id: number) {
    const url = `http://localhost:3000/users/${id}`;
    return await this.httpClient.delete(url).toPromise();
  }

  async save(json: any) {
    const url = `http://localhost:3000/users`;
    return await this.httpClient.post(url,json).toPromise();
  }

}
