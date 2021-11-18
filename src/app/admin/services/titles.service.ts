import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  constructor(
    private httpClient: HttpClient
  ) { }


  async getTitleName() {
    const url = `http://localhost:3000/titles`;
    return await this.httpClient.get(url).toPromise();
  }
}
