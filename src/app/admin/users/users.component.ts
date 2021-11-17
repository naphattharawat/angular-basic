import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list = [];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  async getList() {
    try {
      const rs: any = await this.usersService.getUser();
      if (rs.ok) {
        this.list = rs.rows;
      } else {
        console.log(rs.error);

      }
    } catch (error) {
      console.log(error);

    }
  }


}
